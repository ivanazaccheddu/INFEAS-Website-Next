import React from 'react'

import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Offertaformativa = (props) => {
  return (
    <>
      <article
        id="offerta-formativa"
        tabindex="0"
        aria-labelledby="Offerta formativa di CEAS, attività rivolte al pubblico"
        className={`offertaformativa-container1 ${props.rootClassName} `}
      >
        {props.offertaFormativa !== '--' && (
          <div className="offertaformativa-container2">
            <h2 className="heading2">OFFERTA FORMATIVA</h2>
            <h4 className="heading4">
              Le attività didattiche rivolte al pubblico
            </h4>
            <div className="offertaformativa-container3"></div>
            <div className="paragraph_xl">
              <Markdown>{props?.offertaFormativa}</Markdown>
            </div>
          </div>
        )}
      </article>
      <style jsx>
        {`
          .offertaformativa-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .offertaformativa-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .offertaformativa-container3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: #b0b0c2;
          }
          .offertaformativaroot-class-name {
            margin-top: var(--dl-layout-space-threeunits);
          }
        `}
      </style>
    </>
  )
}

Offertaformativa.defaultProps = {
  offertaFormativa: 'descrizioneOfferta',
  rootClassName: '',
}

Offertaformativa.propTypes = {
  offertaFormativa: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Offertaformativa
