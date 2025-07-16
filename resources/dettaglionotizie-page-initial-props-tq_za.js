import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    ...(params['slug'] && {
      'filters[slug][$eq]': params['slug'],
    }),
    'populate[immagine][populate]': '*',
    'populate[destinatari][populate]': '*',
    'populate[organizzazione][populate]': '*',
    'populate[categoria_notizie][populate]': '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Notizie?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  if (data.status !== 200) {
    urlParams = {
      ...(params['slug'] && {
        'filters[slug][$eq]': params['slug'],
      }),
      'populate[immagine][populate]': '*',
      'populate[destinatari][populate]': '*',
      'populate[organizzazione][populate]': '*',
      'populate[categoria_notizie][populate]': '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Notizie?${new URLSearchParams(urlParams)}`,
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
