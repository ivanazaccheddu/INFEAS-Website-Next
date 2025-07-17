import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  let urlParams = {
    'sort[0]': 'nome:asc',
    'pagination[limit]': 1000,
    ...(params['start'] && {
      'pagination[start]': params['start'],
    }),
    'filters[id][$ne]': '62',
    'populate[logo][populate]': '*',
    'populate[provincia][populate]': '*',
    'populate[admin_user][populate]': '*',
    'populate[link_dinamici][populate][id][populate]': '*',
    'populate[link_dinamici][populate][type][populate]': '*',
    'populate[link_dinamici][populate][link_url][populate]': '*',
    'populate[link_dinamici][populate][createdAt][populate]': '*',
    'populate[link_dinamici][populate][updatedAt][populate]': '*',
    'populate[contatti_dinamici][populate][id][populate]': '*',
    'populate[contatti_dinamici][populate][nome][populate]': '*',
    'populate[contatti_dinamici][populate][email][populate]': '*',
    'populate[contatti_dinamici][populate][telefono][populate]': '*',
    'populate[contatti_dinamici][populate][createdAt][populate]': '*',
    'populate[contatti_dinamici][populate][referente][populate]': '*',
    'populate[contatti_dinamici][populate][updatedAt][populate]': '*',
    'populate[contatti_dinamici][populate][tipologia_contatto][populate]': '*',
  }
  let data = await fetch(
    `${process.env.CMS_URL}/api/Organizzazioni?${new URLSearchParams(
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
      'sort[0]': 'nome:asc',
      'pagination[limit]': 1000,
      ...(params['start'] && {
        'pagination[start]': params['start'],
      }),
      'filters[id][$ne]': '62',
      'populate[logo][populate]': '*',
      'populate[provincia][populate]': '*',
      'populate[admin_user][populate]': '*',
      'populate[link_dinamici][populate][id][populate]': '*',
      'populate[link_dinamici][populate][type][populate]': '*',
      'populate[link_dinamici][populate][link_url][populate]': '*',
      'populate[link_dinamici][populate][createdAt][populate]': '*',
      'populate[link_dinamici][populate][updatedAt][populate]': '*',
      'populate[contatti_dinamici][populate][id][populate]': '*',
      'populate[contatti_dinamici][populate][nome][populate]': '*',
      'populate[contatti_dinamici][populate][email][populate]': '*',
      'populate[contatti_dinamici][populate][telefono][populate]': '*',
      'populate[contatti_dinamici][populate][createdAt][populate]': '*',
      'populate[contatti_dinamici][populate][referente][populate]': '*',
      'populate[contatti_dinamici][populate][updatedAt][populate]': '*',
      'populate[contatti_dinamici][populate][tipologia_contatto][populate]':
        '*',
    }
    data = await fetch(
      `${process.env.CMS_URL}/api/Organizzazioni?${new URLSearchParams(
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
