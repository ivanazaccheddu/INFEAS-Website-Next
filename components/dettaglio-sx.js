import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Contattidinamici from './contattidinamici'

const DettaglioSx = (props) => {
  return (
    <>
      <div className={`dettaglio-sx-dettaglio-sx ${props.rootClassName} `}>
        <div className="dettaglio-sx-contatticeas">
          <span className="heading4">Contatti</span>
          <div className="dettaglio-sx-container1">
            <span>Provincia:</span>
            <span>{props.provincia}</span>
          </div>
          <div className="dettaglio-sx-container2">
            <span>Telefono:</span>
            <span>{props.numeroTel}</span>
          </div>
          <div className="dettaglio-sx-container3">
            <span>E-mail:</span>
            <span>{props.email}</span>
          </div>
        </div>
        <div className="dettaglio-sx-container4"></div>
        <div className="dettaglio-sx-contattititolaregestore">
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
            renderItem={(context_org) => (
              <Fragment>
                <Contattidinamici></Contattidinamici>
              </Fragment>
            )}
          />
        </div>
        <div className="dettaglio-sx-container5">
          <div className="dettaglio-sx-container6">
            <span>Sito internet:</span>
            <span>www.ceaspau.it</span>
          </div>
          <div className="dettaglio-sx-container7">
            <Repeater
              items={[
                {
                  id: 57,
                  type: 'Facebook',
                  link_url: 'https://www.facebook.com/ceas.capoterra/',
                  __component: 'componenti-di-inserimento.link',
                },
                {
                  id: 58,
                  type: 'Instagram',
                  link_url:
                    'https://www.instagram.com/explore/locations/824921030952362/ceas-capoterra-laguna-di-santa-gilla/',
                  __component: 'componenti-di-inserimento.link',
                },
              ]}
              renderItem={(context_link) => <Fragment></Fragment>}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dettaglio-sx-dettaglio-sx {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0.6;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .dettaglio-sx-contatticeas {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-sx-container1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-sx-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-sx-container3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-sx-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 6px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .dettaglio-sx-contattititolaregestore {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-sx-container5 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .dettaglio-sx-container6 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .dettaglio-sx-container7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .dettaglio-sx-dettaglio-sx {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

DettaglioSx.defaultProps = {
  fbLink: 'https://www.teleporthq.io',
  email: 'info@lagunadinora.it',
  numeroTel: '070 9209544',
  provincia: 'Cagliari',
  rootClassName: '',
}

DettaglioSx.propTypes = {
  fbLink: PropTypes.string,
  email: PropTypes.string,
  numeroTel: PropTypes.string,
  provincia: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DettaglioSx
