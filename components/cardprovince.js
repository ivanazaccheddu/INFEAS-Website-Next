import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Cardprovince = (props) => {
  return (
    <>
      <article
        id="ceas-nome-provincia"
        tabindex="0"
        className={`cardprovince-province-filter ${props.rootClassName} `}
      >
        <span className="cardprovince-text1 heading4">{props.nomeCeas}</span>
        {props.provincia !== '--' && (
          <div className="cardprovince-container">
            <span className="cardprovince-text2 paragraph_xl">
              Provincia:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span
              data-province={props.provincia}
              className="cardprovince-text3 paragraph_xl"
            >
              Sini
            </span>
          </div>
        )}
      </article>
      <style jsx>
        {`
          .cardprovince-province-filter {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cardprovince-province-filter:hover {
            border-radius: var(--dl-layout-radius-radius4);
            background-color: #d9d9d9;
          }
          .cardprovince-text1 {
            font-weight: bold;
          }
          .cardprovince-container {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .cardprovince-text2 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: flex-start;
            text-align: left;
          }
          .cardprovince-text3 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: flex-start;
            text-align: left;
          }

          .cardprovinceroot-class-name3 {
            height: 100%;
          }
          .cardprovinceroot-class-name4 {
            height: 100%;
          }
          .cardprovinceroot-class-name5 {
            height: 100%;
          }
          .cardprovinceroot-class-name6 {
            height: 100%;
          }
          .cardprovinceroot-class-name7 {
            height: 100%;
          }
          .cardprovinceroot-class-name8 {
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

Cardprovince.defaultProps = {
  provincia: 'Sini',
  rootClassName: '',
  nomeCeas: 'Seremida - Sini',
}

Cardprovince.propTypes = {
  provincia: PropTypes.string,
  rootClassName: PropTypes.string,
  nomeCeas: PropTypes.string,
}

export default Cardprovince
