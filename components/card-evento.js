import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Tag from './tag'

const CardEvento = (props) => {
  return (
    <>
      <article
        id="card-evento"
        tabindex="0"
        className={`card-evento-card-evento ${props.rootClassName} `}
      >
        <div className="card-evento-image-frame">
          <img
            alt={props.fotoEventoAlt}
            src={props.fotoEvento}
            className="card-evento-foto"
          />
          <img
            id="immagine-abstract"
            alt="Vector155I159"
            src="/external/vector155i159-x5f.svg"
            className="card-evento-vector155"
          />
        </div>
        <div className="card-evento-card-content">
          <div className="card-evento-dettaglievento">
            <div className="card-evento-dataluogoevento">
              {props.luogo !== '--' && (
                <p id="idLuogo" className="card-evento-text1 paragraph_sm">
                  {props.luogo}
                </p>
              )}
              <div className="card-evento-orario">
                <span className="card-evento-date-time1 paragraph_sm">
                  <DateTimePrimitive
                    format="DD/MM/YYYY"
                    date={props.dataEvento}
                  ></DateTimePrimitive>
                </span>
                {props.oraInizio !== '--' && (
                  <div id="ora-evento" className="card-evento-container-ore">
                    <p className="card-evento-text2 paragraph_sm">
                      ORE
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span className="card-evento-date-time2 paragraph_sm">
                      <DateTimePrimitive
                        format="HH:MM"
                        date={props.oraInizio}
                      ></DateTimePrimitive>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p id={props.idEvento} className="card-evento-text3">
              {props.nomeEvento}
            </p>
          </div>
          <div className="card-evento-tagelogo">
            {props.categoriaString !== '--' && (
              <Tag
                idTag={props.categoriaString}
                nomeTag={props.categoriaString}
                rootClassName="tagroot-class-name3"
              ></Tag>
            )}
            <div className="card-evento-logo-container">
              {props.logoORG !== '--' && (
                <img
                  alt={props.logoAlt}
                  src={props.logoORG}
                  className="card-evento-image22"
                />
              )}
            </div>
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .card-evento-card-evento {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 25px;
            overflow: hidden;
            position: relative;
            transition: 0.3s;
            align-items: stretch;
            flex-shrink: 0;
            border-radius: 30px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .card-evento-card-evento:hover {
            cursor: pointer;
          }
          .card-evento-image-frame {
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: stretch;
            aspect-ratio: 7/8;
            flex-direction: column;
            padding-bottom: 25px;
          }
          .card-evento-foto {
            width: 100%;
            height: 100%;
            overflow: hidden;
            max-width: 100%;
            object-fit: cover;
          }
          .card-evento-vector155 {
            top: -10px;
            left: -1px;
            height: 100%;
            z-index: 1;
            position: absolute;
            max-width: 100%;
          }
          .card-evento-card-content {
            gap: var(--dl-layout-space-unit);
            height: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card-evento-dettaglievento {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-evento-dataluogoevento {
            gap: var(--dl-layout-space-unit);
            display: flex;
            min-width: 100%;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card-evento-text1 {
            fill: rgba(111, 103, 128, 1);
            color: rgba(111, 103, 128, 1);
            font-weight: 500;
          }
          .card-evento-orario {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .card-evento-date-time1 {
            fill: rgba(111, 103, 128, 1);
            color: rgba(111, 103, 128, 1);
            font-weight: 500;
          }
          .card-evento-container-ore {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .card-evento-text2 {
            fill: rgba(111, 103, 128, 1);
            color: rgba(111, 103, 128, 1);
            font-weight: 500;
          }
          .card-evento-date-time2 {
            fill: rgba(111, 103, 128, 1);
            color: rgba(111, 103, 128, 1);
          }
          .card-evento-text3 {
            color: rgba(51, 69, 65, 1);
            height: auto;
            font-size: 22px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 94.88182067871094%;
            font-stretch: normal;
            text-decoration: none;
          }
          .card-evento-tagelogo {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-layout-space-unit);
            flex-shrink: 0;
            justify-content: space-between;
          }
          .card-evento-logo-container {
            display: flex;
            padding: 10px 0 10px 10px;
            max-height: 96px;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .card-evento-image22 {
            max-height: 80px;
            object-fit: contain;
          }

          .card-eventoroot-class-name6 {
            width: 100%;
          }

          .card-eventoroot-class-name37 {
            overflow: hidden;
          }

          @media (max-width: 1200px) {
            .card-evento-image-frame {
              width: 100%;
            }
            .card-evento-foto {
              width: 100%;
            }
            .card-evento-card-content {
              width: 100%;
            }
            .card-evento-tagelogo {
              width: 100%;
            }
            .card-evento-image22 {
              overflow: hidden;
            }
            .card-eventoroot-class-name1 {
              width: auto;
            }
            .card-eventoroot-class-name2 {
              width: auto;
            }
            .card-eventoroot-class-name3 {
              width: auto;
            }
            .card-eventoroot-class-name4 {
              width: auto;
            }
            .card-eventoroot-class-name5 {
              width: auto;
            }
            .card-eventoroot-class-name7 {
              width: auto;
            }
            .card-eventoroot-class-name8 {
              width: auto;
            }
            .card-eventoroot-class-name9 {
              width: auto;
            }
            .card-eventoroot-class-name10 {
              width: auto;
            }
            .card-eventoroot-class-name11 {
              width: auto;
            }
            .card-eventoroot-class-name12 {
              width: auto;
            }
            .card-eventoroot-class-name13 {
              width: auto;
            }
            .card-eventoroot-class-name18 {
              width: auto;
            }
            .card-eventoroot-class-name20 {
              width: auto;
            }
            .card-eventoroot-class-name21 {
              width: auto;
            }
            .card-eventoroot-class-name23 {
              width: auto;
            }
            .card-eventoroot-class-name24 {
              width: auto;
            }
            .card-eventoroot-class-name25 {
              width: auto;
            }
            .card-eventoroot-class-name27 {
              width: auto;
            }
            .card-eventoroot-class-name29 {
              width: auto;
            }
            .card-eventoroot-class-name31 {
              width: auto;
            }
            .card-eventoroot-class-name32 {
              width: auto;
            }
            .card-eventoroot-class-name33 {
              width: auto;
            }
            .card-eventoroot-class-name34 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .card-evento-card-evento {
              max-width: 400px;
            }
            .card-eventoroot-class-name {
              width: auto;
            }
            .card-eventoroot-class-name1 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name2 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name3 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name4 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name5 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name7 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name8 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name9 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name10 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name11 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name12 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name13 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name18 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name20 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name21 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name23 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name24 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name25 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name27 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name29 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name31 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name32 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name33 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
            .card-eventoroot-class-name34 {
              width: auto;
              height: 100%;
              overflow: hidden;
            }
          }
          @media (max-width: 479px) {
            .card-evento-tagelogo {
              gap: 0;
              justify-content: space-between;
            }
            .card-eventoroot-class-name26 {
              max-width: 100%;
            }
            .card-eventoroot-class-name28 {
              max-width: 100%;
            }
            .card-eventoroot-class-name30 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CardEvento.defaultProps = {
  fotoEventoAlt: 'foto_evento_Alt',
  logoORG: '/infeaslogo.svg',
  rootClassName: '',
  categoriaString: 'Cultura',
  dataEvento:
    'Tue May 27 2025 16:27:17 GMT+0200 (Central European Summer Time)',
  logoAlt: 'imgAlt',
  fotoEvento: '/external/rectangle2086i159-spog-1500w.png',
  luogo: 'Casa Gioiosa',
  nomeEvento: 'nomeEvento',
  idEvento: '',
  oraInizio: 'Tue May 27 2025 16:27:17 GMT+0200 (Central European Summer Time)',
}

CardEvento.propTypes = {
  fotoEventoAlt: PropTypes.string,
  logoORG: PropTypes.string,
  rootClassName: PropTypes.string,
  categoriaString: PropTypes.string,
  dataEvento: PropTypes.string,
  logoAlt: PropTypes.string,
  fotoEvento: PropTypes.string,
  luogo: PropTypes.string,
  nomeEvento: PropTypes.string,
  idEvento: PropTypes.string,
  oraInizio: PropTypes.string,
}

export default CardEvento
