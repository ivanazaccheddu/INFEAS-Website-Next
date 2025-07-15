import React, { Fragment } from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Tematiche from './tematiche'
import Obiettivi from './obiettivi'
import Offertaformativa from './offertaformativa'

const ParagrafoDettaglioCeas = (props) => {
  return (
    <>
      <div className="paragrafo-dettaglio-ceas-paragrafo-dettaglio-ceas">
        <Tematiche></Tematiche>
        <Obiettivi></Obiettivi>
        <Offertaformativa></Offertaformativa>
        <div className="paragrafo-dettaglio-ceas-container">
          <span className="paragraph_xl">
            {props.text9 ?? (
              <Fragment>
                <span className="paragrafo-dettaglio-ceas-text5">
                  Ultimo aggiornamento:
                </span>
              </Fragment>
            )}
          </span>
          <span>
            <DateTimePrimitive
              format="MMM D, YYYY hh:mm"
              date={props.dateTime}
            ></DateTimePrimitive>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .paragrafo-dettaglio-ceas-paragrafo-dettaglio-ceas {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .paragrafo-dettaglio-ceas-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .paragrafo-dettaglio-ceas-text2 {
            display: inline-block;
          }
          .paragrafo-dettaglio-ceas-text3 {
            display: inline-block;
          }
          .paragrafo-dettaglio-ceas-text4 {
            display: inline-block;
          }
          .paragrafo-dettaglio-ceas-text5 {
            display: inline-block;
          }
          .paragrafo-dettaglio-ceas-text6 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ParagrafoDettaglioCeas.defaultProps = {
  text3: undefined,
  text5: undefined,
  text6: undefined,
  dateTime:
    'Wed Jun 04 2025 15:54:03 GMT+0200 (Ora legale dell’Europa centrale)',
  text9: undefined,
  text4: undefined,
}

ParagrafoDettaglioCeas.propTypes = {
  text3: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  dateTime: PropTypes.string,
  text9: PropTypes.element,
  text4: PropTypes.element,
}

export default ParagrafoDettaglioCeas
