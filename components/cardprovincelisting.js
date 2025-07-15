import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Filelisting from './filelisting'

const Cardprovincelisting = (props) => {
  return (
    <>
      <article
        id="materiali-didattici-ceas"
        tabindex="0"
        aria-labelledby="Materiali didattici di un CEAS"
        className={`cardprovincelisting-cardprovincia ${props.rootClassName} `}
      >
        <div className="cardprovincelisting-container1">
          <span className="cardprovincelisting-text1 heading4">
            {props.nomeCeas}
          </span>
        </div>
        <div className="cardprovincelisting-container2">
          <span className="cardprovincelisting-text2 paragraph_xl">
            {props.text1 ?? (
              <Fragment>
                <span className="cardprovincelisting-text4">
                  Documenti utili
                </span>
              </Fragment>
            )}
          </span>
          <a
            href={props.docURL}
            target="_blank"
            rel="noreferrer noopener"
            className="cardprovincelisting-link"
          >
            <Filelisting
              fileName={props.fileListingFileName}
              rootClassName="filelistingroot-class-name10"
              fileListingUrl={props.docURL}
              className="cardprovincelisting-component"
            ></Filelisting>
          </a>
        </div>
      </article>
      <style jsx>
        {`
          .cardprovincelisting-cardprovincia {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            background-color: #ffffff;
            grid-template-columns: 2fr 3fr;
          }
          .cardprovincelisting-container1 {
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .cardprovincelisting-text1 {
            width: auto;
            display: grid;
          }
          .cardprovincelisting-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cardprovincelisting-text2 {
            font-style: normal;
            font-weight: 700;
          }
          .cardprovincelisting-link {
            display: contents;
          }
          .cardprovincelisting-component {
            text-decoration: none;
          }
          .cardprovincelisting-text3 {
            display: inline-block;
          }
          .cardprovincelisting-text4 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .cardprovincelisting-container1 {
              display: flex;
            }
            .cardprovincelisting-container2 {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 991px) {
            .cardprovincelisting-cardprovincia {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .cardprovincelisting-cardprovincia {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .cardprovincelisting-cardprovincia {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .cardprovincelisting-container1 {
              width: auto;
            }
            .cardprovincelisting-text1 {
              width: auto;
            }
            .cardprovincelisting-container2 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Cardprovincelisting.defaultProps = {
  text2: undefined,
  text1: undefined,
  fileListingFileName: 'fileName',
  docURL: 'https://www.teleporthq.io',
  nomeCeas: 'Seremida – Sini ',
  rootClassName: '',
}

Cardprovincelisting.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  fileListingFileName: PropTypes.string,
  docURL: PropTypes.string,
  nomeCeas: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Cardprovincelisting
