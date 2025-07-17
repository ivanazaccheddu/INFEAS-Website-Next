import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import CardEvento from './card-evento'

const Eventilisting = (props) => {
  const router = useRouter()
  const [categoryFilter, setCategoryFilter] = useState('*')
  const [provinceFilter, setProvinceFilter] = useState('*')
  return (
    <>
      <div className={`eventilisting-container1 ${props.rootClassName} `}>
        <div className="eventilisting-container2">
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
                <div className="eventilisting-container3">
                  <Repeater
                    items={params}
                    renderItem={(province) => (
                      <Fragment>
                        <span onClick={() => setProvinceFilter(province?.id)}>
                          {province?.nome}
                        </span>
                      </Fragment>
                    )}
                  />
                </div>
              </Fragment>
            )}
            params={{
              locale: props?.locale ?? '',
            }}
          />
          <DataProvider
            fetchData={(params) =>
              fetch(
                `/api/eventilisting2-resource-eventilisting2?${new URLSearchParams(
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
                <div className="eventilisting-container4">
                  <Repeater
                    items={params}
                    renderItem={(categ_eventi) => (
                      <Fragment>
                        <span
                          onClick={() => setCategoryFilter(categ_eventi?.id)}
                        >
                          {categ_eventi?.nome}
                        </span>
                      </Fragment>
                    )}
                  />
                </div>
              </Fragment>
            )}
            params={{
              locale: props?.locale ?? '',
            }}
          />
          <button
            type="button"
            onClick={() => {
              setCategoryFilter('*')
              setProvinceFilter('*')
            }}
            className="eventilisting-button button"
          >
            {props.button}
          </button>
        </div>
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
                            className="eventilisting-component"
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
            categoryFilter: categoryFilter,
            provinceFilter: provinceFilter,
            locale: props?.locale ?? '',
          }}
        />
      </div>
      <style jsx>
        {`
          .eventilisting-container1 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .eventilisting-container2 {
            flex: 0 0 auto;
            width: var(--dl-layout-size-maxwidth);
            height: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            min-width: var(--dl-layout-size-maxwidth);
            max-height: 100%;
            min-height: 100%;
            align-items: flex-start;
          }
          .eventilisting-container3 {
            width: auto;
            display: flex;
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
          }
          .eventilisting-container4 {
            width: auto;
            display: flex;
            flex-direction: column;
          }
          .eventilisting-button {
            margin-left: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
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
          .eventilisting-component {
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
  button: 'Reset',
  rootClassName: '',
}

Eventilisting.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Eventilisting
