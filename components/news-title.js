import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NewsTitle = (props) => {
  return (
    <>
      <article
        tabindex="0"
        className={`news-title-comunicati-bandi-notizie ${props.rootClassName} `}
      >
        <span className="news-title-text heading4">{props.titoloNews}</span>
        <span>
          <DateTimePrimitive
            format="DD/MM/YYYY"
            date={props.dataNews}
          ></DateTimePrimitive>
        </span>
      </article>
      <style jsx>
        {`
          .news-title-comunicati-bandi-notizie {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-title-text {
            align-self: flex-start;
            text-align: left;
            font-weight: bold;
            text-decoration: underline;
          }
          .news-titleroot-class-name {
            width: auto;
          }
          .news-titleroot-class-name1 {
            width: auto;
          }
          .news-titleroot-class-name2 {
            width: auto;
          }
          .news-titleroot-class-name3 {
            width: auto;
          }
          .news-titleroot-class-name4 {
            width: auto;
          }
          .news-titleroot-class-name5 {
            width: auto;
          }
        `}
      </style>
    </>
  )
}

NewsTitle.defaultProps = {
  rootClassName: '',
  titoloNews:
    'Aggiornamento del Registro Regionale dei CEAS (RERC) – sez. A “CEAS non accreditati”',
  dataNews:
    'Fri May 30 2025 15:45:45 GMT+0200 (Ora legale dell’Europa centrale)',
}

NewsTitle.propTypes = {
  rootClassName: PropTypes.string,
  titoloNews: PropTypes.string,
  dataNews: PropTypes.string,
}

export default NewsTitle
