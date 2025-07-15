import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Ultimoaggiornamento = (props) => {
  return (
    <>
      <article
        id="ultimo-aggiornamento"
        className={`ultimoaggiornamento-container ${props.rootClassName} `}
      >
        <span>Ultimo aggiornamento:</span>
        <span>
          <DateTimePrimitive
            format="DD/MM/YYYY, HH:MM"
            date={props.dateTime}
          ></DateTimePrimitive>
        </span>
      </article>
      <style jsx>
        {`
          .ultimoaggiornamento-container {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .ultimoaggiornamentoroot-class-name {
            margin-top: var(--dl-layout-space-sixunits);
          }
        `}
      </style>
    </>
  )
}

Ultimoaggiornamento.defaultProps = {
  dateTime:
    'Wed Jul 09 2025 17:23:29 GMT+0200 (Ora legale dell’Europa centrale)',
  rootClassName: '',
}

Ultimoaggiornamento.propTypes = {
  dateTime: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Ultimoaggiornamento
