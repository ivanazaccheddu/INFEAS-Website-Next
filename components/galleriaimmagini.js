import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Galleriaimmagini = (props) => {
  return (
    <>
      <div className={`galleriaimmagini-gallery3 ${props.rootClassName} `}>
        <div className="galleriaimmagini-max-width">
          <div className="galleriaimmagini-section-title">
            <h2 className="galleriaimmagini-text heading2">
              Galleria immagini evento
            </h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .galleriaimmagini-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .galleriaimmagini-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .galleriaimmagini-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .galleriaimmagini-text {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Galleriaimmagini.defaultProps = {
  rootClassName: '',
}

Galleriaimmagini.propTypes = {
  rootClassName: PropTypes.string,
}

export default Galleriaimmagini
