import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'filters[id]': 3,
    'populate[pagine][populate]': '*',
    'populate[componenti][populate][id][populate]': '*',
    'populate[componenti][populate][lista][populate]': '*',
    'populate[componenti][populate][lista]': '*',
    'populate[componenti][populate][titolo][populate]': '*',
    'populate[componenti][populate][createdAt][populate]': '*',
    'populate[componenti][populate][updatedAt][populate]': '*',
    'populate[componenti][populate][link_bottone][populate]': '*',
    'populate[componenti][populate][testo_bottone][populate]': '*',
    'populate[componenti][populate][statistiche][populate]': '*',
    'populate[componenti][populate][statistiche]': '*',
    'populate[componenti][populate][colore_sfondo][populate]': '*',
    'populate[componenti][populate][immagine_sfondo][populate]': '*',
    'populate[componenti][populate][descrizione_breve][populate]': '*',
    'populate[componenti][populate][testo][populate]': '*',
    'populate[componenti][populate][immagine][populate]': '*',
    'populate[componenti][populate][ornamento][populate]': '*',
    'populate[componenti][populate][descrizione][populate]': '*',
    'populate[componenti][populate][link][populate]': '*',
    'populate[componenti][populate][name][populate]': '*',
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
      'filters[id]': 3,
      'populate[pagine][populate]': '*',
      'populate[componenti][populate][id][populate]': '*',
      'populate[componenti][populate][lista][populate]': '*',
      'populate[componenti][populate][lista]': '*',
      'populate[componenti][populate][titolo][populate]': '*',
      'populate[componenti][populate][createdAt][populate]': '*',
      'populate[componenti][populate][updatedAt][populate]': '*',
      'populate[componenti][populate][link_bottone][populate]': '*',
      'populate[componenti][populate][testo_bottone][populate]': '*',
      'populate[componenti][populate][statistiche][populate]': '*',
      'populate[componenti][populate][statistiche]': '*',
      'populate[componenti][populate][colore_sfondo][populate]': '*',
      'populate[componenti][populate][immagine_sfondo][populate]': '*',
      'populate[componenti][populate][descrizione_breve][populate]': '*',
      'populate[componenti][populate][testo][populate]': '*',
      'populate[componenti][populate][immagine][populate]': '*',
      'populate[componenti][populate][ornamento][populate]': '*',
      'populate[componenti][populate][descrizione][populate]': '*',
      'populate[componenti][populate][link][populate]': '*',
      'populate[componenti][populate][name][populate]': '*',
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
  return normalize(response)
}
