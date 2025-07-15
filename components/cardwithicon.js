import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Cardwithicon = (props) => {
  return (
    <>
      <article
        id={props.idCard}
        tabindex="0"
        className={`cardwithicon-cardwithicon ${props.rootClassName} `}
      >
        <div className="cardwithicon-container">
          <img
            alt={props.imageAlt}
            src={props.iconCard}
            className="cardwithicon-image"
          />
        </div>
        <span className="paragraph_xxl">{props.cardDescription}</span>
      </article>
      <style jsx>
        {`
          .cardwithicon-cardwithicon {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #dfdcdc;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 12px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .cardwithicon-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cardwithicon-image {
            width: auto;
            object-fit: cover;
          }
          .cardwithiconroot-class-name {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name1 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name2 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name3 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name4 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name5 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name6 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name7 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name8 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name9 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name10 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name11 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name12 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name13 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name14 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name15 {
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name16 {
            flex: 0 0 auto;
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name17 {
            flex: 0 0 auto;
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name18 {
            flex: 0 0 auto;
            background-color: #ffffff;
          }
          .cardwithiconroot-class-name19 {
            background-color: #ffffff;
          }
          @media (max-width: 767px) {
            .cardwithicon-cardwithicon {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .cardwithicon-cardwithicon {
              width: 241px;
            }
            .cardwithiconroot-class-name {
              width: 100%;
            }
            .cardwithiconroot-class-name1 {
              width: 100%;
            }
            .cardwithiconroot-class-name2 {
              width: 100%;
            }
            .cardwithiconroot-class-name3 {
              width: 100%;
            }
            .cardwithiconroot-class-name16 {
              width: 100%;
            }
            .cardwithiconroot-class-name17 {
              width: 100%;
            }
            .cardwithiconroot-class-name18 {
              width: 100%;
            }
            .cardwithiconroot-class-name19 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Cardwithicon.defaultProps = {
  iconCard: '/Icone/icon-news.svg',
  imageAlt: 'image',
  idCard: 'idCard',
  cardDescription: 'Scopri le ultime notizie da Infeas',
  rootClassName: '',
}

Cardwithicon.propTypes = {
  iconCard: PropTypes.string,
  imageAlt: PropTypes.string,
  idCard: PropTypes.string,
  cardDescription: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Cardwithicon
