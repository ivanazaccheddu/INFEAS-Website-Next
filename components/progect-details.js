import React from 'react'

import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ProgectDetails = (props) => {
  return (
    <>
      <div className="progect-details-container1">
        <div className="progect-details-container2">
          <div>
            <Markdown>{props?.descrizionProgetto}</Markdown>
          </div>
        </div>
        <div className="progect-details-container4">
          <img
            alt={props.imageAlt}
            src={props.projectImage}
            className="progect-details-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .progect-details-container1 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .progect-details-container2 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .progect-details-container4 {
            flex: 1;
            display: flex;
            max-width: 50%;
            justify-content: center;
          }
          .progect-details-image {
            max-width: 100%;
            object-fit: fill;
          }
          @media (max-width: 991px) {
            .progect-details-container1 {
              align-items: center;
              flex-direction: column;
            }
            .progect-details-container4 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ProgectDetails.defaultProps = {
  projectImage: 'https://play.teleporthq.io/static/svg/default-img.svg',
  descrizionProgetto: 'Fallback value',
  imageAlt: 'image',
}

ProgectDetails.propTypes = {
  projectImage: PropTypes.string,
  descrizionProgetto: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ProgectDetails
