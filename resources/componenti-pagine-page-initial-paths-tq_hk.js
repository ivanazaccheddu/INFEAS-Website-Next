export default async function (params = {}) {
  let urlParams = {
    fields: 'id',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Componenti-pagine?${new URLSearchParams(
      urlParams
    )}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      fields: 'id',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Componenti-pagine?${new URLSearchParams(
        urlParams
      )}`,
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
