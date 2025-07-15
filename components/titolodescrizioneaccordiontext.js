import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Titolodescrizioneaccordiontext = (props) => {
  return (
    <>
      <article className="titolodescrizioneaccordiontext-container1">
        <div
          data-thq="accordion"
          className="titolodescrizioneaccordiontext-titolodescrizioneaccordion"
        >
          <details
            data-thq="accordion-trigger"
            className="titolodescrizioneaccordiontext-trigger"
          >
            <summary
              data-thq="accordion-summary"
              className="titolodescrizioneaccordiontext-summary"
            >
              <span className="titolodescrizioneaccordiontext-text1 heading4">
                {props.titolo}
              </span>
              <div
                data-thq="accordion-icon"
                className="titolodescrizioneaccordiontext-icon-container"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="titolodescrizioneaccordiontext-icon1"
                >
                  <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                </svg>
              </div>
            </summary>
          </details>
          <div data-thq="accordion-content">
            <div className="titolodescrizioneaccordiontext-container2">
              {props.children}
            </div>
          </div>
          <div data-thq="accordion-content">
            <div className="titolodescrizioneaccordiontext-container3">
              <div className="titolodescrizioneaccordiontext-container4">
                <img
                  alt="image"
                  src="/icondownload.svg"
                  className="titolodescrizioneaccordiontext-image1"
                />
                <span className="paragraph_xl">Locandina INFEAS 2024</span>
              </div>
              <div className="titolodescrizioneaccordiontext-container5">
                <img
                  alt="image"
                  src="/icondownload.svg"
                  className="titolodescrizioneaccordiontext-image2"
                />
                <span className="paragraph_xl">Locandina Ceas Aperti</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .titolodescrizioneaccordiontext-container1 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .titolodescrizioneaccordiontext-titolodescrizioneaccordion {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .titolodescrizioneaccordiontext-trigger {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .titolodescrizioneaccordiontext-summary {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .titolodescrizioneaccordiontext-text1 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .titolodescrizioneaccordiontext-icon-container {
            transition: transform 0.3s ease-in-out;
          }
          .titolodescrizioneaccordiontext-icon1 {
            fill: #ffffff;
          }
          .titolodescrizioneaccordiontext-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
          }
          .titolodescrizioneaccordiontext-container3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .titolodescrizioneaccordiontext-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .titolodescrizioneaccordiontext-image1 {
            width: 3vh;
            object-fit: cover;
          }
          .titolodescrizioneaccordiontext-container5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .titolodescrizioneaccordiontext-image2 {
            width: 3vh;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .titolodescrizioneaccordiontext-container2 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .titolodescrizioneaccordiontext-container2 {
              width: auto;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Titolodescrizioneaccordiontext.defaultProps = {
  titolo: 'titolo',
  rootClassName: '',
}

Titolodescrizioneaccordiontext.propTypes = {
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Titolodescrizioneaccordiontext
