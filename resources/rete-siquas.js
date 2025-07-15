import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'pagination[limit]': 100,
    'filters[categoria_documento][slug][$eq]': 'progetto-siquas',
    'populate[file][populate]': '*',
    'populate[provincia][populate]': '*',
    'populate[tipologia][populate]': '*',
    'populate[organizzazione][populate]': '*',
    'populate[categoria_documento][populate]': '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Documenti?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      'pagination[limit]': 100,
      'filters[categoria_documento][slug][$eq]': 'progetto-siquas',
      'populate[file][populate]': '*',
      'populate[provincia][populate]': '*',
      'populate[tipologia][populate]': '*',
      'populate[organizzazione][populate]': '*',
      'populate[categoria_documento][populate]': '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Documenti?${new URLSearchParams(urlParams)}`,
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
