import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const EmptyPlaceholder = (props) => {
  return (
    <>
      <div className={`empty-placeholder-container ${props.rootClassName} `}>
        <span className="empty-placeholder-text1 paragraph_xl">
          {props.titolo ?? (
            <Fragment>
              <span className="empty-placeholder-text6 paragraph_xl">
                <span>Nessuna notizia disponibile al momento</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
        <span className="paragraph_xl">
          {props.testo ?? (
            <Fragment>
              <span className="empty-placeholder-text3 paragraph_xl">
                <span>
                  Torna a trovarci presto per restare aggiornato con le ultime
                  novità e aggiornamenti.
                </span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .empty-placeholder-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .empty-placeholder-text1 {
            font-weight: 600;
          }
          .empty-placeholder-text3 {
            display: inline-block;
          }
          .empty-placeholder-text6 {
            display: inline-block;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

EmptyPlaceholder.defaultProps = {
  rootClassName: '',
  testo: undefined,
  titolo: undefined,
}

EmptyPlaceholder.propTypes = {
  rootClassName: PropTypes.string,
  testo: PropTypes.element,
  titolo: PropTypes.element,
}

export default EmptyPlaceholder
