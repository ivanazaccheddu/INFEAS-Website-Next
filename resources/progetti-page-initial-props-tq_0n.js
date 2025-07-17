import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'pagination[limit]': 10,
    'pagination[start]': 0,
    'populate[eventi][populate]': '*',
    'populate[notizie][populate]': '*',
    'populate[immagine][populate]': '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Progetti?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      'pagination[limit]': 10,
      'pagination[start]': 0,
      'populate[eventi][populate]': '*',
      'populate[notizie][populate]': '*',
      'populate[immagine][populate]': '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Progetti?${new URLSearchParams(urlParams)}`,
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
