import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Tag from './tag'

const NewsSimple = (props) => {
  return (
    <>
      <article
        id="notizie-semplificato"
        tabindex="0"
        className={`news-simple-news-simple ${
          props?.border === 'yes' ? 'news-color' : ''
        } ${props.rootClassName} `}
      >
        <span className="news-simple-text1 heading4">{props.titoloNews}</span>
        <span className="news-simple-text2 paragraph_xl">
          {props.descrizioneBreve}
        </span>
        <span>
          <DateTimePrimitive
            format="DD/MM/YYYY"
            date={props.dataNews}
          ></DateTimePrimitive>
        </span>
        <div className="news-simple-container">
          {props.tagName !== '--' && (
            <Tag
              nomeTag={props.tagName}
              rootClassName="tagroot-class-name2"
            ></Tag>
          )}
        </div>
      </article>
      <style jsx>
        {`
          .news-simple-news-simple {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .news-simple-news-simple:hover {
            cursor: pointer;
            transform: translateY(-10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .news-simple-text1 {
            align-self: flex-start;
            text-align: left;
            font-weight: bold;
          }
          .news-simple-text2 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .news-simple-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }

          .news-simpleroot-class-name7 {
            margin-bottom: var(--dl-layout-space-twounits);
          }
        `}
      </style>
    </>
  )
}

NewsSimple.defaultProps = {
  dataNews:
    'Fri May 30 2025 15:45:45 GMT+0200 (Ora legale dell’Europa centrale)',
  tagName: 'tag',
  rootClassName: '',
  descrizioneBreve:
    'A seguito dell’iscrizione del CEAS istituito presso il Comune di Narbolia, denominato “Sinis Montiferru”, è stato aggiornato il Registro Regionale dei Centri di educazione all’ambiente e alla sostenibilità (RERC) – sez. A “CEAS non accreditati”.',
  titoloNews:
    'Aggiornamento del Registro Regionale dei CEAS (RERC) – sez. A “CEAS non accreditati”',
  border: 'default',
}

NewsSimple.propTypes = {
  dataNews: PropTypes.string,
  tagName: PropTypes.string,
  rootClassName: PropTypes.string,
  descrizioneBreve: PropTypes.string,
  titoloNews: PropTypes.string,
  border: PropTypes.string,
}

export default NewsSimple
