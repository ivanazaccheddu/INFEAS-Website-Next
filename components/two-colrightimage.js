import React, { Fragment } from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TwoColrightimage = (props) => {
  return (
    <>
      <div
        className={`two-colrightimage-two-colrightimage ${props.rootClassName} `}
      >
        <div className="two-colrightimage-container1">
          <div className="two-colrightimage-chips tag_category">
            <span className="two-colrightimage-text1 Paragraph_very_small">
              {props.text3 ?? (
                <Fragment>
                  <span className="two-colrightimage-text6">CULTURA</span>
                </Fragment>
              )}
            </span>
          </div>
          <h4 className="two-colrightimage-text2 heading4">
            {props.text ?? (
              <Fragment>
                <span className="two-colrightimage-text5">
                  Aggiornamento del Registro Regionale dei CEAS (RERC) – sez. A
                  “CEAS non accreditati”
                </span>
              </Fragment>
            )}
          </h4>
          <p className="two-colrightimage-text3 paragraph_xl">
            {props.text1 ?? (
              <Fragment>
                <span className="two-colrightimage-text4">
                  A seguito dell’iscrizione del CEAS istituito presso il Comune
                  di Narbolia, denominato “Sinis Montiferru”, è stato aggiornato
                  il Registro Regionale dei Centri di educazione all’ambiente e
                  alla sostenibilità (RERC) – sez. A “CEAS non accreditati”.
                </span>
              </Fragment>
            )}
          </p>
          <span>
            <DateTimePrimitive
              format="D MMMM YYYY"
              date={props.dateTime}
            ></DateTimePrimitive>
          </span>
        </div>
        <div className="two-colrightimage-container2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="two-colrightimage-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .two-colrightimage-two-colrightimage {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #f3f1e1;
          }
          .two-colrightimage-container1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 48px;
            justify-content: center;
          }
          .two-colrightimage-chips {
            gap: 10px;
            height: 26px;
            display: flex;
            padding: 10px;
            align-self: flex-start;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: rgba(76, 79, 92, 1);
          }
          .two-colrightimage-text1 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 170.00000476837158%;
          }
          .two-colrightimage-text2 {
            font-weight: bold;
          }
          .two-colrightimage-text3 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .two-colrightimage-container2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .two-colrightimage-image {
            width: 100%;
            object-fit: cover;
          }
          .two-colrightimage-text4 {
            display: inline-block;
          }
          .two-colrightimage-text5 {
            display: inline-block;
          }
          .two-colrightimage-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .two-colrightimage-two-colrightimage {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .two-colrightimage-two-colrightimage {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

TwoColrightimage.defaultProps = {
  text1: undefined,
  dateTime:
    'Wed Jun 04 2025 15:54:03 GMT+0200 (Ora legale dell’Europa centrale)',
  imageAlt: 'image',
  imageSrc: '/aggiornamentoregistro.jpg',
  rootClassName: '',
  text: undefined,
  text3: undefined,
}

TwoColrightimage.propTypes = {
  text1: PropTypes.element,
  dateTime: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  text3: PropTypes.element,
}

export default TwoColrightimage
