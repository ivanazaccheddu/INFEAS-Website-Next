import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Filelisting = (props) => {
  return (
    <>
      <a
        href={props.fileListingUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="filelisting-link"
      >
        <div tabindex="0" className="filelisting-filelisting file-item">
          <img
            alt="document icon"
            src="/icondocument.svg"
            className="filelisting-image1"
          />
          <span className="file-name paragraph_xl filelisting-text">
            {props.fileName}
          </span>
          <img
            alt="download icon"
            src="/icondownload.svg"
            className="filelisting-image2"
          />
        </div>
      </a>
      <style jsx>
        {`
          .filelisting-link {
            display: contents;
          }
          .filelisting-filelisting {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
          }
          .filelisting-image1 {
            max-width: 30px;
            object-fit: cover;
          }
          .filelisting-image2 {
            width: 3vh;
            object-fit: cover;
          }

          .filelistingroot-class-name6 {
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .filelistingroot-class-name7 {
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .filelistingroot-class-name8 {
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .filelistingroot-class-name9 {
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .filelistingroot-class-name10 {
            width: 100%;
          }

          .filelistingroot-class-name14 {
            grid-column: 1;
          }

          .filelistingroot-class-name22 {
            width: 100%;
          }

          @media (max-width: 1200px) {
            .filelisting-filelisting {
              width: auto;
            }
            .filelisting-text {
              width: 100%;
            }
          }

          @media (max-width: 479px) {
            .filelisting-filelisting {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Filelisting.defaultProps = {
  fileName: 'filename',
  fileListingUrl: '#',
  rootClassName: '',
}

Filelisting.propTypes = {
  fileName: PropTypes.string,
  fileListingUrl: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Filelisting
