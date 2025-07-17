export default async function (params = {}) {
  let urlParams = {
    'pagination[pageSize]': 1,
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Eventi?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      'pagination[pageSize]': 1,
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Eventi?${new URLSearchParams(urlParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
        },
      }
    )
  }
  const response = await data.json()
  return response
}
