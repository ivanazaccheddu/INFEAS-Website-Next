import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Function = (props) => {
  return (
    <>
      <div className={`function-container ${props.rootClassName} `}></div>
      <style jsx>
        {`
          .function-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Function.defaultProps = {
  rootClassName: '',
}

Function.propTypes = {
  rootClassName: PropTypes.string,
}

export default Function
