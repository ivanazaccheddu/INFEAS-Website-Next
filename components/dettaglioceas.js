import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Filelisting from './filelisting'

const Dettaglioceas = (props) => {
  return (
    <>
      <div className="dettaglioceas-dettaglioceas">
        <div className="dettaglioceas-dettaglio-sx">
          <div className="dettaglioceas-contatticeas">
            <span className="heading4">
              {props.text ?? (
                <Fragment>
                  <span className="dettaglioceas-text24">Contatti</span>
                </Fragment>
              )}
            </span>
            <div className="dettaglioceas-container10">
              <span>Indirizzo:</span>
              <span>{props.indirizzoCeas}</span>
            </div>
            <div className="dettaglioceas-container11">
              <span>Provincia:</span>
              <span>{props.provinciaCeas}</span>
            </div>
            <div className="dettaglioceas-container12">
              <span>Telefono:</span>
              <span>{props.telefonoCeas}</span>
            </div>
            <div className="dettaglioceas-container13">
              <span>E-mail:</span>
              <span>{props.emailCeas}</span>
            </div>
          </div>
          <div className="dettaglioceas-container14"></div>
          <div className="dettaglioceas-contattititolare">
            <Repeater
              items={[
                {
                  id: 49,
                  nome: 'Azienda Speciale Parco di Porto Conte',
                  email: 'segreteria@parcodiportoconte.it',
                  telefono: '079 945005',
                  referente: null,
                  __component: 'componenti-di-inserimento.contatto',
                  tipologia_contatto: 'Soggetto titolare',
                },
                {
                  id: 50,
                  nome: 'Azienda Speciale Parco di Porto Conte',
                  email: 'ceas@parcodiportoconte.it',
                  telefono: '079 945005',
                  referente: 'Antonella Derriu',
                  __component: 'componenti-di-inserimento.contatto',
                  tipologia_contatto: 'Soggetto gestore',
                },
              ]}
              renderItem={(context_contatti) => <Fragment></Fragment>}
            />
          </div>
          <div className="dettaglioceas-container15">
            <div className="dettaglioceas-container16">
              <span>Sito internet:</span>
              <span>{props.sitoCeas}</span>
            </div>
            <div className="dettaglioceas-container17">
              <Repeater
                items={[
                  {
                    id: 49,
                    nome: 'Azienda Speciale Parco di Porto Conte',
                    email: 'segreteria@parcodiportoconte.it',
                    telefono: '079 945005',
                    referente: null,
                    __component: 'componenti-di-inserimento.contatto',
                    tipologia_contatto: 'Soggetto titolare',
                  },
                  {
                    id: 49,
                    nome: 'Azienda Speciale Parco di Porto Conte',
                    email: 'segreteria@parcodiportoconte.it',
                    telefono: '079 945005',
                    referente: null,
                    __component: 'componenti-di-inserimento.contatto',
                    tipologia_contatto: 'Soggetto titolare',
                  },
                ]}
                renderItem={(context_x4o2u) => (
                  <Fragment>
                    <img
                      alt="icon facebook"
                      src="/fb.svg"
                      className="dettaglioceas-image1"
                    />
                    <span>{context_x4o2u?.tipologia_contatto}</span>
                    <img
                      alt="icon instagram"
                      src="/ig.svg"
                      className="dettaglioceas-image2"
                    />
                    <img
                      alt="icon youtube"
                      src="/yt.svg"
                      className="dettaglioceas-image3"
                    />
                  </Fragment>
                )}
              />
            </div>
          </div>
        </div>
        <div className="dettaglioceas-dettaglio-dx">
          <img
            alt="logoCeas"
            src={props.logoCeas}
            className="dettaglioceas-image4"
          />
          <div className="dettaglioceas-documenti-utili">
            <div className="dettaglioceas-container18">
              <span className="dettaglioceas-text22 heading4">
                {props.text5 ?? (
                  <Fragment>
                    <span className="dettaglioceas-text23">
                      Documenti Utili
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="dettaglioceas-container19">
              <div className="dettaglioceas-container20">
                <Filelisting rootClassName="filelistingroot-class-name"></Filelisting>
                <Filelisting rootClassName="filelistingroot-class-name2"></Filelisting>
                <Filelisting rootClassName="filelistingroot-class-name1"></Filelisting>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dettaglioceas-dettaglioceas {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-dettaglio-sx {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dettaglioceas-contatticeas {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglioceas-container10 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-container11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-container12 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-container13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 6px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .dettaglioceas-contattititolare {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglioceas-container15 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglioceas-container16 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglioceas-container17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .dettaglioceas-image1 {
            width: auto;
            object-fit: cover;
          }
          .dettaglioceas-image2 {
            width: auto;
            object-fit: cover;
          }
          .dettaglioceas-image3 {
            width: auto;
            object-fit: cover;
          }
          .dettaglioceas-dettaglio-dx {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dettaglioceas-image4 {
            width: 70%;
            object-fit: cover;
          }
          .dettaglioceas-documenti-utili {
            gap: 0;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglioceas-container18 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: var(--dl-color-theme-secondary1);
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .dettaglioceas-text22 {
            color: #ffffff;
          }
          .dettaglioceas-container19 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: #f1f0f0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 14px;
            border-bottom-right-radius: 14px;
          }
          .dettaglioceas-container20 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglioceas-text23 {
            display: inline-block;
          }
          .dettaglioceas-text24 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .dettaglioceas-dettaglioceas {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 991px) {
            .dettaglioceas-dettaglioceas {
              gap: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .dettaglioceas-dettaglioceas {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 479px) {
            .dettaglioceas-dettaglioceas {
              gap: var(--dl-layout-space-threeunits);
            }
            .dettaglioceas-dettaglio-sx {
              flex-direction: column;
            }
            .dettaglioceas-dettaglio-dx {
              flex-direction: column;
            }
            .dettaglioceas-image4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Dettaglioceas.defaultProps = {
  sitoCeas: 'www.ceaspau.it',
  emailCeas: 'info@lagunadinora.it',
  logoCeas: '/ceas-pau.png',
  telefonoCeas: '070 9209544',
  indirizzoCeas: 'Laguna di Nora, Località Nora – 09010 Pula (CA)',
  provinciaCeas: 'Cagliari',
  text5: undefined,
  text: undefined,
}

Dettaglioceas.propTypes = {
  sitoCeas: PropTypes.string,
  emailCeas: PropTypes.string,
  logoCeas: PropTypes.string,
  telefonoCeas: PropTypes.string,
  indirizzoCeas: PropTypes.string,
  provinciaCeas: PropTypes.string,
  text5: PropTypes.element,
  text: PropTypes.element,
}

export default Dettaglioceas
