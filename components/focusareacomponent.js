import React from 'react'

import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ButtonComponent from './button-component'

const Focusareacomponent = (props) => {
  return (
    <>
      <div className="focusareacomponent-focusareacomponent">
        <div className="focusareacomponent-container1">
          <div className="focusareacomponent-container2">
            <h2>{props.titolo}</h2>
            {props.testo !== '--' && (
              <span className="paragraph_xl">{props.testo}</span>
            )}
            <div className="paragraph_xl">
              <Markdown>{props?.descrizione}</Markdown>
            </div>
          </div>
          {props.buttonComponentButtonName !== '--' && (
            <ButtonComponent
              buttonName={props.buttonComponentButtonName}
              rootClassName="button-componentroot-class-name21"
            ></ButtonComponent>
          )}
        </div>
        {props.imageFocus !== '--' && (
          <div className="focusareacomponent-container3">
            <img
              alt={props.imageAltFocus}
              src={props.imageFocus}
              className="focusareacomponent-image"
            />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .focusareacomponent-focusareacomponent {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column-reverse;
          }
          .focusareacomponent-container1 {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .focusareacomponent-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .focusareacomponent-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .focusareacomponent-image {
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Focusareacomponent.defaultProps = {
  titolo: 'Heading',
  testo: 'Text',
  imageAltFocus: 'image',
  imageFocus: '/photo-presskit.png',
  descrizione: 'Fallback value',
  buttonComponentButtonName: '',
}

Focusareacomponent.propTypes = {
  titolo: PropTypes.string,
  testo: PropTypes.string,
  imageAltFocus: PropTypes.string,
  imageFocus: PropTypes.string,
  descrizione: PropTypes.string,
  buttonComponentButtonName: PropTypes.string,
}

export default Focusareacomponent
