import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Statsrowcard = (props) => {
  return (
    <>
      <figure
        tabindex="0"
        aria-labelledby="Statistiche dell'anno"
        className={`statsrowcard-container1 ${props.rootClassName} `}
      >
        <div className="statsrowcard-container2">
          <div>
            <span className="H2">{props.numeroStats}</span>
          </div>
          <div>
            <span className="paragraph_md">{props.titoloStats}</span>
          </div>
        </div>
      </figure>
      <style jsx>
        {`
          .statsrowcard-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            position: relative;
            align-items: flex-start;
            padding-left: 32px;
            flex-direction: row;
            background-color: #e9f2f5;
          }
          .statsrowcard-container2 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: grid;
            place-items: center start;
            border-radius: var(--dl-layout-radius-inputradius);
            grid-template-columns: 1fr 4fr;
          }

          @media (max-width: 767px) {
            .statsrowcard-container2 {
              gap: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .statsrowcard-container1 {
              padding-left: var(--dl-layout-space-twounits);
            }
            .statsrowcard-container2 {
              gap: var(--dl-layout-space-fourunits);
              flex: 1;
              flex-wrap: wrap;
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

Statsrowcard.defaultProps = {
  numeroStats: '48',
  titoloStats: 'Laboratori',
  rootClassName: '',
}

Statsrowcard.propTypes = {
  numeroStats: PropTypes.string,
  titoloStats: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Statsrowcard
