import React from 'react'

import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Obiettivi = (props) => {
  return (
    <>
      <article
        id="obiettivi-ceas"
        tabindex="0"
        aria-labelledby="Obiettivi di CEAS"
        className={`obiettivi-obiettivi ${props.rootClassName} `}
      >
        {props.descrizioneObiettivi !== '--' && (
          <div className="obiettivi-container1">
            <span className="heading4">Obiettivi  compiti</span>
            <div>
              <Markdown>{props?.descrizioneObiettivi}</Markdown>
            </div>
          </div>
        )}
      </article>
      <style jsx>
        {`
          .obiettivi-obiettivi {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .obiettivi-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Obiettivi.defaultProps = {
  descrizioneObiettivi: 'descrizione',
  rootClassName: '',
}

Obiettivi.propTypes = {
  descrizioneObiettivi: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Obiettivi
