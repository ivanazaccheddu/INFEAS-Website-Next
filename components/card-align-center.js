import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CardAlignCenter = (props) => {
  return (
    <>
      <article
        id="card-target-group"
        tabindex="0"
        className={`card-align-center-card-align-center ${props.rootClassName} `}
      >
        <div className="card-align-center-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="card-align-center-image"
          />
        </div>
        <p className="card-align-center-text paragraph_xxl">
          {props.nomeDestinatario}
        </p>
      </article>
      <style jsx>
        {`
          .card-align-center-card-align-center {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #dfdcdc;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 12px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .card-align-center-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-align-center-image {
            width: 100%;
            object-fit: cover;
          }
          .card-align-center-text {
            text-align: center;
          }
          .card-align-centerroot-class-name {
            flex: 1;
          }

          .card-align-centerroot-class-name6 {
            flex: 1;
          }
          @media (max-width: 767px) {
            .card-align-centerroot-class-name {
              width: 100%;
            }
            .card-align-centerroot-class-name1 {
              width: 100%;
            }
            .card-align-centerroot-class-name2 {
              width: 100%;
            }
            .card-align-centerroot-class-name3 {
              width: 100%;
            }
            .card-align-centerroot-class-name4 {
              width: 100%;
            }
            .card-align-centerroot-class-name5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .card-align-center-card-align-center {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CardAlignCenter.defaultProps = {
  rootClassName: '',
  nomeDestinatario: 'Enti e Organizzazioni della rete INFEAS',
  imageAlt: 'image',
  imageSrc: '/Icone/entieorg.svg',
}

CardAlignCenter.propTypes = {
  rootClassName: PropTypes.string,
  nomeDestinatario: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default CardAlignCenter
