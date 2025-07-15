import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Cardprovincelisting from './cardprovincelisting'

const Sezioneprovinciadocumenti = (props) => {
  return (
    <>
      <article
        id="materiali-didattici-provincia"
        tabindex="0"
        aria-labelledby="Elenco dei materiali didattici per la provicia"
        className={`sezioneprovinciadocumenti-container ${props.rootClassName} `}
      >
        <h4
          id="nome-provincia"
          className="sezioneprovinciadocumenti-text1 heading4"
        >
          {props.heading}
        </h4>
        <Cardprovincelisting
          text1={
            <Fragment>
              <span className="sezioneprovinciadocumenti-text2">
                Documenti utili
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="sezioneprovinciadocumenti-text3">
                Brochure attivitá formativa
              </span>
            </Fragment>
          }
          nomeCeas={props.ceasName}
          rootClassName="cardprovincelistingroot-class-name"
          fileListingFileName={props.fileName}
        ></Cardprovincelisting>
      </article>
      <style jsx>
        {`
          .sezioneprovinciadocumenti-container {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .sezioneprovinciadocumenti-text1 {
            align-self: center;
            font-weight: bold;
          }
          .sezioneprovinciadocumenti-text2 {
            display: inline-block;
          }
          .sezioneprovinciadocumenti-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Sezioneprovinciadocumenti.defaultProps = {
  ceasName: '',
  rootClassName: '',
  fileName: '',
  heading: 'Text',
}

Sezioneprovinciadocumenti.propTypes = {
  ceasName: PropTypes.string,
  rootClassName: PropTypes.string,
  fileName: PropTypes.string,
  heading: PropTypes.string,
}

export default Sezioneprovinciadocumenti
