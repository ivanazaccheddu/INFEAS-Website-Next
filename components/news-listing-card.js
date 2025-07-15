import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NewsListingCard = (props) => {
  return (
    <>
      <article
        id="notizie-card"
        href="href"
        tabindex="0"
        className={`news-listing-card-news-simple ${props.rootClassName} `}
      >
        <hr className="news-listing-card-separator"></hr>
        {props.dateTime !== '--' && (
          <span>
            <DateTimePrimitive
              format="DD/MM/YYYY"
              date={props.dateTime}
            ></DateTimePrimitive>
          </span>
        )}
        <span className="news-listing-card-text1 heading4">
          {props.titoloNews}
        </span>
        <span className="news-listing-card-text2 paragraph_xl">
          {props.newsDescrizione}
        </span>
        <div className="news-listing-card-container">
          <svg width="48" height="30" viewBox="0 0 48 48">
            <path
              d="M42 24H6m24-12l12 12l-12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </article>
      <style jsx>
        {`
          .news-listing-card-news-simple {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            max-width: 450px;
            align-self: stretch;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            border-color: #595959;
            border-width: 0px;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 1px;
          }
          .news-listing-card-news-simple:hover {
            transform: translateY(-10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .news-listing-card-separator {
            width: 100%;
            height: 1px;
            display: none;
            background-color: #595959;
          }
          .news-listing-card-text1 {
            align-self: flex-start;
            text-align: left;
            font-weight: bold;
          }
          .news-listing-card-text2 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .news-listing-card-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .news-listing-cardroot-class-name {
            flex: 0 0 auto;
          }

          .news-listing-cardroot-class-name2 {
            max-width: 450px;
          }

          @media (max-width: 991px) {
            .news-listing-card-news-simple {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

NewsListingCard.defaultProps = {
  titoloNews:
    'Aggiornamento del Registro Regionale dei CEAS (RERC) – sez. A “CEAS non accreditati”',
  newsDescrizione:
    'A seguito dell’iscrizione del CEAS istituito presso il Comune di Narbolia, denominato “Sinis Montiferru”, è stato aggiornato il Registro Regionale dei Centri di educazione all’ambiente e alla sostenibilità (RERC) – sez. A “CEAS non accreditati”.',
  dateTime:
    'Fri May 30 2025 15:45:45 GMT+0200 (Ora legale dell’Europa centrale)',
  rootClassName: '',
}

NewsListingCard.propTypes = {
  titoloNews: PropTypes.string,
  newsDescrizione: PropTypes.string,
  dateTime: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NewsListingCard
