import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Tag = (props) => {
  return (
    <>
      <div className={`tag_category ${props.rootClassName} `}>
        {props.nomeTag !== '--' && (
          <span id={props.idTag} className="tag-text paragraph_sm">
            {props.nomeTag}
          </span>
        )}
      </div>
      <style jsx>
        {`
          .tag-text {
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tagroot-class-name3 {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

Tag.defaultProps = {
  idTag: 'idTag',
  nomeTag: 'CULTURA',
  rootClassName: '',
}

Tag.propTypes = {
  idTag: PropTypes.string,
  nomeTag: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Tag
