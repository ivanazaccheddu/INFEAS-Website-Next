import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const EntryItem = (props) => {
  return (
    <>
      <div className="entry-item-entry-item">
        <img
          alt="image"
          src="/external/frame2i923-kumr.svg"
          className="entry-item-image"
        />
        <span className="paragraph_xxl">{props.entryname}</span>
      </div>
      <style jsx>
        {`
          .entry-item-entry-item {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .entry-item-image {
            width: 27px;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .entry-item-entry-item {
              width: 100%;
              flex-wrap: wrap;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

EntryItem.defaultProps = {
  entryname: 'Text',
}

EntryItem.propTypes = {
  entryname: PropTypes.string,
}

export default EntryItem
