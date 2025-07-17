import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    ...(params['slug'] && {
      'filters[slug][$eq]': params['slug'],
    }),
    'populate[loghi][populate][id][populate]': '*',
    'populate[loghi][populate][link][populate]': '*',
    'populate[loghi][populate][immagine][populate]': '*',
    'populate[loghi][populate][createdAt][populate]': '*',
    'populate[loghi][populate][updatedAt][populate]': '*',
    'populate[componenti_dinamici][populate][id][populate]': '*',
    'populate[componenti_dinamici][populate][lista][populate]': '*',
    'populate[componenti_dinamici][populate][lista]': '*',
    'populate[componenti_dinamici][populate][titolo][populate]': '*',
    'populate[componenti_dinamici][populate][createdAt][populate]': '*',
    'populate[componenti_dinamici][populate][updatedAt][populate]': '*',
    'populate[componenti_dinamici][populate][link_bottone][populate]': '*',
    'populate[componenti_dinamici][populate][testo_bottone][populate]': '*',
    'populate[componenti_dinamici][populate][statistiche][populate]': '*',
    'populate[componenti_dinamici][populate][statistiche]': '*',
    'populate[componenti_dinamici][populate][colore_sfondo][populate]': '*',
    'populate[componenti_dinamici][populate][immagine_sfondo][populate]': '*',
    'populate[componenti_dinamici][populate][descrizione_breve][populate]': '*',
    'populate[componenti_dinamici][populate][testo][populate]': '*',
    'populate[componenti_dinamici][populate][immagine][populate]': '*',
    'populate[componenti_dinamici][populate][ornamento][populate]': '*',
    'populate[componenti_dinamici][populate][descrizione][populate]': '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Pagine?${new URLSearchParams(urlParams)}`,
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
      'populate[loghi][populate][id][populate]': '*',
      'populate[loghi][populate][link][populate]': '*',
      'populate[loghi][populate][immagine][populate]': '*',
      'populate[loghi][populate][createdAt][populate]': '*',
      'populate[loghi][populate][updatedAt][populate]': '*',
      'populate[componenti_dinamici][populate][id][populate]': '*',
      'populate[componenti_dinamici][populate][lista][populate]': '*',
      'populate[componenti_dinamici][populate][lista]': '*',
      'populate[componenti_dinamici][populate][titolo][populate]': '*',
      'populate[componenti_dinamici][populate][createdAt][populate]': '*',
      'populate[componenti_dinamici][populate][updatedAt][populate]': '*',
      'populate[componenti_dinamici][populate][link_bottone][populate]': '*',
      'populate[componenti_dinamici][populate][testo_bottone][populate]': '*',
      'populate[componenti_dinamici][populate][statistiche][populate]': '*',
      'populate[componenti_dinamici][populate][statistiche]': '*',
      'populate[componenti_dinamici][populate][colore_sfondo][populate]': '*',
      'populate[componenti_dinamici][populate][immagine_sfondo][populate]': '*',
      'populate[componenti_dinamici][populate][descrizione_breve][populate]':
        '*',
      'populate[componenti_dinamici][populate][testo][populate]': '*',
      'populate[componenti_dinamici][populate][immagine][populate]': '*',
      'populate[componenti_dinamici][populate][ornamento][populate]': '*',
      'populate[componenti_dinamici][populate][descrizione][populate]': '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Pagine?${new URLSearchParams(urlParams)}`,
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
