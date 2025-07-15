import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Galleriaimmagginislot = (props) => {
  return (
    <>
      <div
        className={`galleriaimmagginislot-galleriaimmagginislot thq-section-max-width ${props.rootClassName} `}
      >
        {props.children}
      </div>
      <style jsx>
        {`
          .galleriaimmagginislot-galleriaimmagginislot {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            position: relative;
            grid-template-columns: 1fr 1fr 1fr;
          }
        `}
      </style>
    </>
  )
}

Galleriaimmagginislot.defaultProps = {
  rootClassName: '',
}

Galleriaimmagginislot.propTypes = {
  rootClassName: PropTypes.string,
}

export default Galleriaimmagginislot
