import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ButtonComponent = (props) => {
  return (
    <>
      <div className={`button-component-container ${props.rootClassName} `}>
        <button
          id="bottone"
          name={props.buttonName}
          role="button"
          type="button"
          tabindex="0"
          className={`button-component-button button ${
            props?.greyColor === 'grey' ? 'button-grey' : ''
          } ${props?.greenColor === 'green' ? 'button-green' : ''} ${
            props?.whiteColor === 'white' ? 'button-white' : ''
          } `}
        >
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .button-component-container {
            display: flex;
            position: relative;
            transition: 0.3s;
          }

          .button-component-button {
            transition: 0.3s;
            padding-top: 20px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 20px;
          }
          .button-component-button:hover {
            cursor: pointer;
            border-width: 1px;
          }

          .button-componentroot-class-name14 {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

ButtonComponent.defaultProps = {
  greenColor: 'newProp',
  rootClassName: '',
  buttonName: 'buttonName',
  button: "MOSTRA DI PIU'",
  whiteColor: 'newProp',
  greyColor: 'newProp',
}

ButtonComponent.propTypes = {
  greenColor: PropTypes.string,
  rootClassName: PropTypes.string,
  buttonName: PropTypes.string,
  button: PropTypes.string,
  whiteColor: PropTypes.string,
  greyColor: PropTypes.string,
}

export default ButtonComponent
