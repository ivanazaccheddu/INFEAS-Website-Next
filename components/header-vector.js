import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeaderVector = (props) => {
  return (
    <>
      <div
        className={`header-vector-header-detailsceas ${props.rootClassName} `}
      >
        <div className="header-vector-header-detailspage thq-section-max-width">
          <h4 className="header-vector-text1 heading4">{props.breadcrumb}</h4>
          <h1 id={props.idTitleSlug} className="header-vector-text2 heading1">
            {props.titoloHeader}
          </h1>
          <div className="header-vector-container"></div>
        </div>
        <img
          alt="image"
          src="/header-dettaglioceas.svg"
          className="header-vector-image"
        />
      </div>
      <style jsx>
        {`
          .header-vector-header-detailsceas {
            flex: 0 0 auto;
            width: 100%;
            height: 45vh;
            display: block;
            position: relative;
            align-self: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .header-vector-header-detailspage {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #464957;
          }
          .header-vector-text1 {
            color: rgb(255, 255, 255);
            z-index: 1;
            font-style: normal;
            font-weight: 400;
          }
          .header-vector-text2 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .header-vector-container {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .header-vector-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .header-vector-image {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 991px) {
            .header-vector-image {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .header-vector-header-detailsceas {
              padding-left: var(--dl-layout-space-fiveunits);
            }
            .header-vector-image {
              top: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .header-vector-header-detailspage {
              width: 100%;
              height: 100%;
              padding: var(--dl-layout-space-twounits);
            }
            .header-vector-image {
              top: 0px;
              right: 0px;
              padding-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

HeaderVector.defaultProps = {
  breadcrumb: 'Home / Notizie',
  rootClassName: '',
  titoloHeader: 'Notizie',
  idTitleSlug: 'slug',
}

HeaderVector.propTypes = {
  breadcrumb: PropTypes.string,
  rootClassName: PropTypes.string,
  titoloHeader: PropTypes.string,
  idTitleSlug: PropTypes.string,
}

export default HeaderVector
