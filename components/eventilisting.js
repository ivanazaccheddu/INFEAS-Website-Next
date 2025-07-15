import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Filterlabeldropdown from './filterlabeldropdown'
import Filtercomponent from './filtercomponent'
import CardEvento from './card-evento'

const Eventilisting = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="eventilisting-container1">
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/eventilisting-resource-eventilisting?${new URLSearchParams(
                params
              )}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
              .then((res) => res.json())
              .then((data) => data)
          }
          renderSuccess={(params) => (
            <Fragment>
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/eventilisting1-resource-eventilisting1?${new URLSearchParams(
                      params
                    )}`,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => data)
                }
                renderSuccess={(params) => (
                  <Fragment>
                    <div className="eventilisting-container2">
                      <Repeater
                        items={params}
                        renderItem={(categ_eventi) => <Fragment></Fragment>}
                      />
                    </div>
                    <Filterlabeldropdown rootClassName="filterlabeldropdownroot-class-name"></Filterlabeldropdown>
                    <Filtercomponent></Filtercomponent>
                  </Fragment>
                )}
                params={{
                  locale: props?.locale ?? '',
                }}
              />
              <section
                id="sezione-filtri-eventi-scuole"
                className="eventilisting-sezione-filtri-scuole padding-container"
              >
                <div className="eventilisting-filterby-eventi">
                  <div className="eventilisting-filtra-per"></div>
                </div>
              </section>
              <div className="grid-3">
                <Repeater
                  items={params}
                  renderItem={(listing_eventi_scuole) => (
                    <Fragment>
                      <Link href={`/eventi/${listing_eventi_scuole?.slug}`}>
                        <a>
                          <CardEvento
                            luogo={listing_eventi_scuole?.luogo || '--'}
                            logoAlt="logo-infeas"
                            logoORG={
                              listing_eventi_scuole?.organizzazione?.logo?.url
                            }
                            idEvento={listing_eventi_scuole?.slug}
                            oraInizio={
                              listing_eventi_scuole?.data_inizio || '--'
                            }
                            dataEvento={
                              listing_eventi_scuole?.data_inizio || '--'
                            }
                            fotoEvento={listing_eventi_scuole?.immagine?.url}
                            nomeEvento={listing_eventi_scuole?.nome || '--'}
                            fotoEventoAlt={listing_eventi_scuole?.immagine?.alt}
                            rootClassName="card-eventoroot-class-name42"
                            categoriaString={
                              listing_eventi_scuole?.categoria_eventi?.nome ||
                              '--'
                            }
                            className="eventilisting-component3"
                          ></CardEvento>
                        </a>
                      </Link>
                    </Fragment>
                  )}
                />
              </div>
              <div className="eventilisting-cms-pagination-node"></div>
            </Fragment>
          )}
          params={{
            'pagination[start]':
              (parseInt(router.query?.['cPage-s3gy0c'] ?? 1) - 1) * 15,
            categFilter: props.categFilter,
            locale: props?.locale ?? '',
          }}
        />
      </div>
      <style jsx>
        {`
          .eventilisting-container1 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .eventilisting-container2 {
            display: flex;
            flex-direction: column;
          }
          .eventilisting-sezione-filtri-scuole {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .eventilisting-filterby-eventi {
            width: 100%;
            display: block;
            position: relative;
          }
          .eventilisting-filtra-per {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .eventilisting-component3 {
            text-decoration: none;
          }
          .eventilisting-cms-pagination-node {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          @media (max-width: 767px) {
            .eventilisting-filterby-eventi {
              flex-wrap: wrap;
            }
            .eventilisting-filtra-per {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .eventilisting-sezione-filtri-scuole {
              background-color: #efeeeb;
            }
          }
        `}
      </style>
    </>
  )
}

Eventilisting.defaultProps = {
  categFilter: 'false',
}

Eventilisting.propTypes = {
  categFilter: PropTypes.string,
}

export default Eventilisting
