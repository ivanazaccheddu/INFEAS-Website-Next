import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contatticeas = (props) => {
  return (
    <>
      <article
        id="contatti-ceas"
        tabindex="0"
        aria-labelledby="Contatti CEAS"
        className="contatticeas-contatticeas"
      >
        <span className="contatticeas-text1 heading4">Contatti</span>
        <div className="contatticeas-container1">
          {props.indirizzo !== '--' && (
            <figure className="contatticeas-indirizzo">
              <p>Indirizzo:</p>
              <p id="indirizzo-ceas">{props.indirizzo}</p>
            </figure>
          )}
          {props.provincia !== '--' && (
            <div className="contatticeas-provincia">
              <span>Provincia:</span>
              <span id="provincia-ceas">{props.provincia}</span>
            </div>
          )}
          {props.telProvincia !== '--' && (
            <div className="contatticeas-phone">
              <span>Telefono:</span>
              <span id="telefono-ceas">{props.telProvincia}</span>
            </div>
          )}
          {props.emailProvincia !== '--' && (
            <div className="contatticeas-email">
              <span>E-mail:</span>
              <span id="emal-ceas">{props.emailProvincia}</span>
            </div>
          )}
          <div className="contatticeas-web">
            {props.sitoWeb !== '--' && (
              <a
                href={props.sitoOrg}
                id="sito-web-ceas"
                className="contatticeas-link"
              >
                Sito web
              </a>
            )}
          </div>
        </div>
        <div className="contatticeas-container2"></div>
      </article>
      <style jsx>
        {`
          .contatticeas-contatticeas {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contatticeas-text1 {
            fill: #1e3d70;
            color: #1e3d70;
          }
          .contatticeas-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .contatticeas-indirizzo {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contatticeas-provincia {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contatticeas-phone {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contatticeas-email {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contatticeas-web {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contatticeas-link {
            text-decoration: underline;
          }
          .contatticeas-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 6px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          @media (max-width: 991px) {
            .contatticeas-indirizzo {
              flex-direction: row;
            }
            .contatticeas-provincia {
              flex-direction: row;
            }
            .contatticeas-phone {
              flex-direction: row;
            }
            .contatticeas-email {
              flex-direction: row;
            }
            .contatticeas-web {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

Contatticeas.defaultProps = {
  telProvincia: '070 9209544',
  emailProvincia: 'info@lagunadinora.it',
  sitoWeb: 'www',
  sitoOrg: 'www',
  provincia: 'Cagliari',
  indirizzo: 'viaroma1',
}

Contatticeas.propTypes = {
  telProvincia: PropTypes.string,
  emailProvincia: PropTypes.string,
  sitoWeb: PropTypes.string,
  sitoOrg: PropTypes.string,
  provincia: PropTypes.string,
  indirizzo: PropTypes.string,
}

export default Contatticeas
