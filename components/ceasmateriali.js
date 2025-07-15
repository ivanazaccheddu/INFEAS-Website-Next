import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Filelisting from './filelisting'

const Ceasmateriali = (props) => {
  return (
    <>
      <div
        data-ceas-name={props.orgName}
        className={`ceasmateriali-ceasmateriali ${props.rootClassName} `}
      >
        <div className="ceasmateriali-container1">
          <span
            id="nome_ceas"
            className="ceasmateriali-text1 nome_ceas heading4"
          >
            {props.orgName}
          </span>
        </div>
        <div
          id="materiali-didattici-ceas"
          tabindex="0"
          aria-labelledby="Materiali didattici di un CEAS"
          className="ceasmateriali-cardprovincia"
        >
          <div className="ceasmateriali-container2 container-documenti">
            <span className="ceasmateriali-text2 paragraph_xl">
              Documenti utili
            </span>
            <Filelisting
              fileName={props.fileListingFileName}
              rootClassName="filelistingroot-class-name22"
              fileListingUrl={props.fileURL}
            ></Filelisting>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ceasmateriali-ceasmateriali {
            width: 100%;
            display: grid;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            padding-left: var(--dl-layout-space-twounits);
            background-color: whhite;
            grid-template-columns: 4fr 7fr;
          }
          .ceasmateriali-container1 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
          }
          .ceasmateriali-text1 {
            font-weight: 700;
          }
          .ceasmateriali-cardprovincia {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
          }
          .ceasmateriali-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ceasmateriali-text2 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .ceasmateriali-container1 {
              display: flex;
            }
            .ceasmateriali-container2 {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 991px) {
            .ceasmateriali-cardprovincia {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .ceasmateriali-cardprovincia {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .ceasmateriali-container1 {
              width: auto;
            }
            .ceasmateriali-cardprovincia {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .ceasmateriali-container2 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Ceasmateriali.defaultProps = {
  fileURL: 'https://www.sardegnainfeas.it/',
  rootClassName: '',
  orgName: 'nomeOrg',
  fileListingFileName: 'filename',
}

Ceasmateriali.propTypes = {
  fileURL: PropTypes.string,
  rootClassName: PropTypes.string,
  orgName: PropTypes.string,
  fileListingFileName: PropTypes.string,
}

export default Ceasmateriali
