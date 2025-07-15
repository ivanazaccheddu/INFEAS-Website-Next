import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'filters[id]': 23,
    populate: '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Categorie-documenti?${new URLSearchParams(
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
      'filters[id]': 23,
      populate: '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Categorie-documenti?${new URLSearchParams(
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
  return normalize(response)
}
