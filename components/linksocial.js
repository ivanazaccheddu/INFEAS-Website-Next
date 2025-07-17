import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Linksocial = (props) => {
  return (
    <>
      <a
        href={props.linkSocialUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="linksocial-link"
      >
        <div
          className={`linksocial-linksocial ${
            props?.linkType === 'Instagram' ? 'image-ig' : ''
          } ${props?.linkType === 'Linkedin' ? 'image-linkedin' : ''} ${
            props?.linkType === 'youtube' ? 'image-yt' : ''
          } ${props?.linkType === 'Facebook' ? 'image-fb' : ''} ${
            props?.linkType === 'X' ? 'image-x' : ''
          } `}
        >
          <span className="linksocial-text">{props.linkType}</span>
        </div>
      </a>
      <style jsx>
        {`
          .linksocial-link {
            display: contents;
          }
          .linksocial-linksocial {
            width: 35px;
            aspect-ratio: 1/1;
            text-decoration: none;
          }
          .linksocial-text {
            display: none;
          }
        `}
      </style>
    </>
  )
}

Linksocial.defaultProps = {
  linkType: 'Text',
  linkSocialUrl: 'https://www.sardegnainfeas.it/',
}

Linksocial.propTypes = {
  linkType: PropTypes.string,
  linkSocialUrl: PropTypes.string,
}

export default Linksocial
