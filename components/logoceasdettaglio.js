import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Logoceasdettaglio = (props) => {
  return (
    <>
      <div className="logoceasdettaglio-container">
        {props.logoCEAS !== '--' && (
          <img
            id="logo-ceas"
            alt={props.imageAlt}
            src={props.logoCEAS}
            aria-labelledby="Logo CEAS"
            className="logoceasdettaglio-image"
          />
        )}
      </div>
      <style jsx>
        {`
          .logoceasdettaglio-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .logoceasdettaglio-image {
            max-width: 50%;
            object-fit: cover;
          }
          @media (max-width: 479px) {
            .logoceasdettaglio-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Logoceasdettaglio.defaultProps = {
  imageAlt: 'logoCeas',
  logoCEAS: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Logoceasdettaglio.propTypes = {
  imageAlt: PropTypes.string,
  logoCEAS: PropTypes.string,
}

export default Logoceasdettaglio
