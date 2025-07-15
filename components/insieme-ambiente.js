import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const InsiemeAmbiente = (props) => {
  return (
    <>
      <div
        className={`insieme-ambiente-insieme-ambiente ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="insieme-ambiente-image"
        />
        <span className="heading3">
          {props.text ?? (
            <Fragment>
              <span className="insieme-ambiente-text3">
                Insieme per un ambiente più sostenibile
              </span>
            </Fragment>
          )}
        </span>
        <span className="paragraph_xl">
          {props.text1 ?? (
            <Fragment>
              <span className="insieme-ambiente-text4">
                INFEAS Sardegna promuove iniziative volte a sensibilizzare e
                coinvolgere i cittadini nella tutela dell&apos;ambiente e nella
                sostenibilità. Le attività si concentrano su eventi, percorsi
                informativi e progetti pratici che stimolano la partecipazione
                attiva della comunità. L’obiettivo è diffondere una cultura
                della sostenibilità, favorire comportamenti responsabili e
                creare un impatto positivo sul territorio, contribuendo così
                alla protezione dell’ambiente per le generazioni future.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .insieme-ambiente-insieme-ambiente {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #efeeeb;
          }
          .insieme-ambiente-image {
            width: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .insieme-ambiente-text3 {
            display: inline-block;
          }
          .insieme-ambiente-text4 {
            display: inline-block;
          }
          .insieme-ambienteroot-class-name {
            padding: 0px;
            padding-top: 0px;
          }

          @media (max-width: 1200px) {
            .insieme-ambienteroot-class-name {
              padding: 0px;
              padding-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .insieme-ambiente-insieme-ambiente {
              width: 100%;
            }
            .insieme-ambienteroot-class-name {
              padding: 0px;
              padding-top: 0px;
            }
          }
          @media (max-width: 767px) {
            .insieme-ambienteroot-class-name {
              padding: 0px;
              padding-top: 0px;
            }
          }
          @media (max-width: 479px) {
            .insieme-ambienteroot-class-name {
              padding: 0px;
              padding-top: 0px;
            }
            .insieme-ambienteroot-class-name1 {
              padding: 0px;
              padding-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

InsiemeAmbiente.defaultProps = {
  rootClassName: '',
  text: undefined,
  text1: undefined,
  imageSrc: '/icon_cittadini.svg',
  imageAlt: 'image',
}

InsiemeAmbiente.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default InsiemeAmbiente
