import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  const { loginName, password } = await req.body;
  const url = `https://apim-bm7-dev.azure-api.net/func-identity-dev/SignInByEmail?subscription-key=3036affa50694b0fb6ba6552772007c2`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loginName, password }),
    })

    if (response.ok) {
      const token = await response.text();
      return res.status(200).json({ token })
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
