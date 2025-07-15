import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Imagecontainercomponent = (props) => {
  return (
    <>
      <div
        className={`imagecontainercomponent-imagecontainercomponent ${props.rootClassName} `}
      >
        {props.imageSrc !== '--' && (
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="imagecontainercomponent-image thq-img-ratio-4-3"
          />
        )}
      </div>
      <style jsx>
        {`
          .imagecontainercomponent-imagecontainercomponent {
            flex: 0 0 auto;
            width: 25vw;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .imagecontainercomponent-image {
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Imagecontainercomponent.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  imageAlt: 'image',
}

Imagecontainercomponent.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Imagecontainercomponent
