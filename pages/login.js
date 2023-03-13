import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { login } from '../utils/auth'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import { SnackbarProvider, useSnackbar } from 'notistack';

function Login() {
  const [userData, setUserData] = useState({ loginName: '', password: '', error: '' })
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const cookiesToken = Cookies.get('token');
  const paramsToken = router.query?.token;
  const paramsEmail = router.query?.email;

  useEffect(() => {
    if (cookiesToken) Router.push('/profile')
  }, []);

  useEffect(() => {
    // Set cookies if params are present
    if (paramsToken && paramsEmail) {
      showSnackbarLogin();
    };
  }, [paramsToken, paramsEmail]);

  const showSnackbarLogin = () => {
    enqueueSnackbar('Logging you in...', {
      variant: 'info',
      autoHideDuration: 5000,
      onClose: () => {
        if(paramsToken && paramsEmail) login({ token: paramsToken, loginName: paramsEmail})
      },
      anchorOrigin: { vertical: 'top', horizontal: 'center'}
    });
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))
    showSnackbarLogin();

    const loginName = userData.loginName
    const password = userData.password
    const url = '/api/login'

    try {
      const response = await fetch(url, {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginName, password }),
      })
      if (response.status === 200) {
        const { token } = await response.json()
        await login({ token, loginName });
        closeSnackbar();
      } else {
        closeSnackbar();
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      )
    }
  }

  return (
    <SnackbarProvider>
      <Layout>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="loginName">Username</label>

            <input
              type="text"
              id="loginName"
              name="loginName"
              value={userData.loginName}
              onChange={event =>
                setUserData(
                  Object.assign({}, userData, { loginName: event.target.value })
                )
              }
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={event =>
                setUserData(
                  Object.assign({}, userData, { password: event.target.value })
                )
              }
            />

            <button type="submit">Login</button>

            {userData.error && <p className="error">Error: {userData.error}</p>}
          </form>
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          form {
            display: flex;
            flex-flow: column;
          }

          label {
            font-weight: 600;
          }

          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .error {
            margin: 0.5rem 0 0;
            color: brown;
          }
        `}</style>
      </Layout>
    </SnackbarProvider>
  )
}

export default Login
