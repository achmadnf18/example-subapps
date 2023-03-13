import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Authorization header missing')
  }

  const Authorization = await req.headers.authorization
  const { loginName } = await req.body;

  try {
    const url = `https://apim-mydashboardbinusmaya-dev.azure-api.net/func-mydashboardbinusmaya-profile-dev/Person`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization,
      },
      body: JSON.stringify({ loginName }),
    })

    if (response.ok) {
      const data = await response.json()
      return res.status(200).json({ data })
    } else {
      // https://github.com/developit/unfetch#caveats
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    const { response } = error
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message })
  }
}
