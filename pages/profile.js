import React, { useEffect } from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import nextCookie from "next-cookies";
import Layout from "../components/layout";
import { withAuthSync } from "../utils/auth";
import getHost from "../utils/get-host";
import { useSnackbar } from "notistack";

const Profile = props => {
  const { fullName, email, userId, userPictureUrl } = props.data;
  const { closeSnackbar } = useSnackbar();

  useEffect(() => {
    closeSnackbar();
  }, []);
  
  return (
    <Layout>
      <img src={userPictureUrl} alt="Avatar" />
      <h1>{fullName}</h1>
      <p className="lead">{email}</p>
      <p>{userId}</p>

      <style jsx>{`
        img {
          max-width: 200px;
          border-radius: 0.5rem;
        }

        h1 {
          margin-bottom: 0;
        }

        .lead {
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: #666;
        }

        p {
          color: #6a737d;
        }
      `}</style>
    </Layout>
  );
};

Profile.getInitialProps = async ctx => {
  const { token, loginName } = nextCookie(ctx);
  const apiUrl = getHost(ctx.req) + "/api/profile";

  const redirectOnError = () =>
    typeof window !== "undefined"
      ? Router.push("/login")
      : ctx.res.writeHead(302, { Location: "/login" }).end();

  try {
    const response = await fetch(apiUrl, {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ loginName })
    });

    if (response.ok) {
      const js = await response.json();
      console.log("js", js);
      return js;
    } else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError();
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError();
  }
};

export default withAuthSync(Profile);
