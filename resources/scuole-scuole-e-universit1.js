import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'sort[0]': 'data_inizio:desc',
    'pagination[limit]': 3,
    'filters[destinatari][slug][$eq]': 'scuole',
    'populate[galleria][populate][id][populate]': '*',
    'populate[galleria][populate][immagini][populate]': '*',
    'populate[galleria][populate][immagini]': '*',
    'populate[galleria][populate][createdAt][populate]': '*',
    'populate[galleria][populate][updatedAt][populate]': '*',
    'populate[immagine][populate]': '*',
    'populate[documenti][populate][id][populate]': '*',
    'populate[documenti][populate][file][populate]': '*',
    'populate[documenti][populate][nome][populate]': '*',
    'populate[documenti][populate][createdAt][populate]': '*',
    'populate[documenti][populate][tipologia][populate]': '*',
    'populate[documenti][populate][updatedAt][populate]': '*',
    'populate[provincia][populate]': '*',
    'populate[destinatari][populate]': '*',
    'populate[organizzazione][populate]': '*',
    'populate[categoria_eventi][populate]': '*',
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
      'sort[0]': 'data_inizio:desc',
      'pagination[limit]': 3,
      'filters[destinatari][slug][$eq]': 'scuole',
      'populate[galleria][populate][id][populate]': '*',
      'populate[galleria][populate][immagini][populate]': '*',
      'populate[galleria][populate][immagini]': '*',
      'populate[galleria][populate][createdAt][populate]': '*',
      'populate[galleria][populate][updatedAt][populate]': '*',
      'populate[immagine][populate]': '*',
      'populate[documenti][populate][id][populate]': '*',
      'populate[documenti][populate][file][populate]': '*',
      'populate[documenti][populate][nome][populate]': '*',
      'populate[documenti][populate][createdAt][populate]': '*',
      'populate[documenti][populate][tipologia][populate]': '*',
      'populate[documenti][populate][updatedAt][populate]': '*',
      'populate[provincia][populate]': '*',
      'populate[destinatari][populate]': '*',
      'populate[organizzazione][populate]': '*',
      'populate[categoria_eventi][populate]': '*',
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
  return normalize(response)
}
