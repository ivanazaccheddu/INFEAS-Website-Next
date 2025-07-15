import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Filelisting from './filelisting'

const Accordiondocs = (props) => {
  return (
    <>
      <div className={`accordiondocs-container1 ${props.rootClassName} `}>
        <div data-thq="accordion" className="accordiondocs-accordiondocs">
          <details
            open
            data-thq="accordion-trigger"
            className="accordiondocs-trigger"
          >
            <summary
              data-thq="accordion-summary"
              className="accordiondocs-summary"
            >
              <span className="accordiondocs-text1 heading4">
                {props.fileCategory}
              </span>
              <div
                data-thq="accordion-icon"
                className="accordiondocs-icon-container"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="accordiondocs-icon1"
                >
                  <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                </svg>
              </div>
            </summary>
          </details>
          <div data-thq="accordion-content">
            <div className="accordiondocs-container2">
              <div className="accordiondocs-container3">
                <Filelisting
                  fileName={props.fileName}
                  rootClassName="filelistingroot-class-name21"
                  fileListingUrl={props.fileURL}
                ></Filelisting>
              </div>
            </div>
          </div>
          <div data-thq="accordion-content">
            <div className="accordiondocs-container4">
              <div className="accordiondocs-container5">
                <img
                  alt="image"
                  src="/icondownload.svg"
                  className="accordiondocs-image1"
                />
                <span className="paragraph_xl">Locandina INFEAS 2024</span>
              </div>
              <div className="accordiondocs-container6">
                <img
                  alt="image"
                  src="/icondownload.svg"
                  className="accordiondocs-image2"
                />
                <span className="paragraph_xl">Locandina Ceas Aperti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accordiondocs-container1 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .accordiondocs-accordiondocs {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .accordiondocs-trigger {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .accordiondocs-summary {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordiondocs-text1 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .accordiondocs-icon-container {
            transition: transform 0.3s ease-in-out;
          }
          .accordiondocs-icon1 {
            fill: #ffffff;
          }
          .accordiondocs-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .accordiondocs-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .accordiondocs-container4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .accordiondocs-container5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .accordiondocs-image1 {
            width: 3vh;
            object-fit: cover;
          }
          .accordiondocs-container6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .accordiondocs-image2 {
            width: 3vh;
            object-fit: cover;
          }

          @media (max-width: 767px) {
            .accordiondocs-container2 {
              width: auto;
            }
            .accordiondocs-container3 {
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .accordiondocs-container2 {
              width: auto;
              flex-direction: column;
            }
            .accordiondocs-container3 {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

Accordiondocs.defaultProps = {
  fileURL: '',
  fileCategory: 'Locandine',
  fileName: 'fileName',
  rootClassName: '',
}

Accordiondocs.propTypes = {
  fileURL: PropTypes.string,
  fileCategory: PropTypes.string,
  fileName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordiondocs
