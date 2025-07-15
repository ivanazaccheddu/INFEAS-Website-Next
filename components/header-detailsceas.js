import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeaderDetailsceas = (props) => {
  return (
    <>
      <header
        id="header-pagina-abstract"
        className={`header-detailsceas-header-detailsceas ${props.rootClassName} `}
      >
        <div className="header-detailsceas-header-detailspage thq-section-max-width">
          <h4
            id="breadcrumb-header-pagina"
            className="header-detailsceas-text1 heading4"
          >
            {props.breadcrumbs}
          </h4>
          <h1
            id="titolo-header"
            aria-labelledby="titolo-header"
            className="header-detailsceas-text2 heading1"
          >
            {props.nomeCeas}
          </h1>
          <div className="header-detailsceas-container"></div>
        </div>
        <img
          alt="image"
          src="/header-dettaglioceas.svg"
          className="header-detailsceas-image"
        />
      </header>
      <style jsx>
        {`
          .header-detailsceas-header-detailsceas {
            flex: 0 0 auto;
            width: 100%;
            height: 45vh;
            display: block;
            position: relative;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .header-detailsceas-header-detailspage {
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
          .header-detailsceas-text1 {
            color: rgb(255, 255, 255);
            z-index: 1;
            font-style: normal;
            font-weight: 400;
          }
          .header-detailsceas-text2 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .header-detailsceas-container {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .header-detailsceas-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .header-detailsceas-image {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 991px) {
            .header-detailsceas-image {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .header-detailsceas-header-detailsceas {
              padding-left: var(--dl-layout-space-fiveunits);
            }
            .header-detailsceas-image {
              top: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .header-detailsceas-header-detailspage {
              width: 100%;
              height: 100%;
              padding: var(--dl-layout-space-twounits);
            }
            .header-detailsceas-image {
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

HeaderDetailsceas.defaultProps = {
  rootClassName: '',
  nomeCeas: 'Pau',
  breadcrumbs: 'Home / Notizie',
}

HeaderDetailsceas.propTypes = {
  rootClassName: PropTypes.string,
  nomeCeas: PropTypes.string,
  breadcrumbs: PropTypes.string,
}

export default HeaderDetailsceas
