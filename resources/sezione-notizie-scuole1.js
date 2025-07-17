import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'sort[0]': 'data_pubblicazione:desc',
    'pagination[limit]': 15,
    ...(params['pagination[start]'] && {
      'pagination[start]': params['pagination[start]'],
    }),
    ...(params['categoria'] && {
      'filters[categoria_notizie][id][$eq]': params['categoria'],
    }),
    'filters[destinatari][slug][$eq]': 'scuole',
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
      'sort[0]': 'data_pubblicazione:desc',
      'pagination[limit]': 15,
      ...(params['pagination[start]'] && {
        'pagination[start]': params['pagination[start]'],
      }),
      ...(params['categoria'] && {
        'filters[categoria_notizie][id][$eq]': params['categoria'],
      }),
      'filters[destinatari][slug][$eq]': 'scuole',
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
