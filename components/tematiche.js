import React from 'react'

import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Tematiche = (props) => {
  return (
    <>
      <section
        id="tematiche-ceas"
        tabindex="0"
        aria-labelledby="Tematiche e attività"
        className={`tematiche-container1 ${props.rootClassName} `}
      >
        {props.descrizioneTematiche !== '--' && (
          <div className="tematiche-container2">
            <h2 id="tematiche" className="tematiche-text1 heading2">
              TEMATICHE
            </h2>
            <article
              id="descrizione-tematiche-attivita"
              className="tematiche-attivit"
            >
              <h4 id="le-attivita-principali" className="heading4">
                Le attività principali del CEAS
              </h4>
              <div className="tematiche-container3"></div>
              <div className="tematiche-container4">
                <div className="paragraph_xl">
                  <Markdown>{props?.descrizioneTematiche}</Markdown>
                </div>
              </div>
            </article>
          </div>
        )}
      </section>
      <style jsx>
        {`
          .tematiche-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .tematiche-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tematiche-text1 {
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .tematiche-attivit {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tematiche-container3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 15px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #b0b0c2;
          }
          .tematiche-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }

          @media (max-width: 1200px) {
            .tematicheroot-class-name {
              margin-bottom: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .tematicheroot-class-name {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Tematiche.defaultProps = {
  rootClassName: '',
  descrizioneTematiche: 'tematiche',
}

Tematiche.propTypes = {
  rootClassName: PropTypes.string,
  descrizioneTematiche: PropTypes.string,
}

export default Tematiche
