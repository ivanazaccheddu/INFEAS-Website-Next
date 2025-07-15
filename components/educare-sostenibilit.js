import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const EducareSostenibilit = (props) => {
  return (
    <>
      <div
        className={`educare-sostenibilit-educare-sostenibilit ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="educare-sostenibilit-image"
        />
        <span className="heading3">
          {props.text ?? (
            <Fragment>
              <span className="educare-sostenibilit-text3">
                Educare alla sostenibilità
              </span>
            </Fragment>
          )}
        </span>
        <span className="paragraph_xl">
          {props.text1 ?? (
            <Fragment>
              <span className="educare-sostenibilit-text4">
                Il Sistema Regionale INFEAS Sardegna promuove attività per
                scuole e università attraverso i Centri di Educazione Ambientale
                e alla Sostenibilità (CEAS). L&apos;obiettivo è sensibilizzare
                le nuove generazioni sui temi ambientali e promuovere la cultura
                della sostenibilità. Le iniziative includono programmi
                educativi, laboratori, eventi e progetti concreti per sviluppare
                conoscenze, competenze e comportamenti responsabili verso
                l&apos;ambiente.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .educare-sostenibilit-educare-sostenibilit {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-sixunits);
            position: relative;
            align-items: flex-start;
            padding-top: 96px;
            flex-direction: column;
            background-color: #dbe6ea;
          }
          .educare-sostenibilit-image {
            width: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .educare-sostenibilit-text3 {
            display: inline-block;
          }
          .educare-sostenibilit-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .educare-sostenibilit-educare-sostenibilit {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

EducareSostenibilit.defaultProps = {
  text: undefined,
  text1: undefined,
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: '/iconasostenibilit%C3%A3%C2%A0.svg',
}

EducareSostenibilit.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default EducareSostenibilit
