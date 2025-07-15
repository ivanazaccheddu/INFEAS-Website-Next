import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contattidinamici = (props) => {
  return (
    <>
      <article
        id="informazioni-contatto-ceas"
        tabindex="0"
        className={`contattidinamici-container1 ${props.rootClassName} `}
      >
        <div className="contattidinamici-container2">
          {props.tipologiaContatt !== '--' && (
            <span
              id={props.tipologiaContatt}
              className="contattidinamici-tipologia-contatto heading4"
            >
              {props.tipologiaContatt}
            </span>
          )}
          {props.nomeOrg !== '--' && (
            <div id="nome-organizzazione" className="contattidinamici-nome-org">
              <span id={props.nomeOrg}>{props.nomeOrg}</span>
            </div>
          )}
          {props.nomeReferente !== '--' && (
            <div
              id="nome-referente"
              className="contattidinamici-nome-referente"
            >
              <span>Referente:</span>
              <span id={props.nomeReferente}>{props.nomeReferente}</span>
            </div>
          )}
          {props.telefonoOrg !== '--' && (
            <div
              id="telefono-contatto"
              className="contattidinamici-telefono-contatto"
            >
              <span>Telefono:</span>
              <span id={props.telefonoOrg}>{props.telefonoOrg}</span>
            </div>
          )}
          {props.emailOrg !== '--' && (
            <div
              id="email-contatto"
              className="contattidinamici-email-contatto"
            >
              <span>E-mail:</span>
              <span id={props.emailOrg}>{props.emailOrg}</span>
            </div>
          )}
        </div>
        <div className="contattidinamici-container3"></div>
      </article>
      <style jsx>
        {`
          .contattidinamici-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contattidinamici-container2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contattidinamici-tipologia-contatto {
            fill: #1e3d70;
            color: #1e3d70;
          }
          .contattidinamici-nome-org {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contattidinamici-nome-referente {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contattidinamici-telefono-contatto {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contattidinamici-email-contatto {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contattidinamici-container3 {
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
            .contattidinamici-nome-org {
              flex-direction: row;
            }
            .contattidinamici-nome-referente {
              flex-direction: row;
            }
            .contattidinamici-telefono-contatto {
              flex-direction: row;
            }
            .contattidinamici-email-contatto {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

Contattidinamici.defaultProps = {
  emailOrg: 'text',
  telefonoOrg: 'text',
  nomeReferente: 'text',
  nomeOrg: 'text',
  rootClassName: '',
  tipologiaContatt: 'text',
}

Contattidinamici.propTypes = {
  emailOrg: PropTypes.string,
  telefonoOrg: PropTypes.string,
  nomeReferente: PropTypes.string,
  nomeOrg: PropTypes.string,
  rootClassName: PropTypes.string,
  tipologiaContatt: PropTypes.string,
}

export default Contattidinamici
