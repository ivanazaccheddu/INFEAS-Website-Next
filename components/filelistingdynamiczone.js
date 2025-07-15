import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Filelistingdynamiczone = (props) => {
  return (
    <>
      <a
        href={props.fileArray?.['url']}
        target="_blank"
        rel="noreferrer noopener"
        className="filelistingdynamiczone-link"
      >
        <article
          id="nome-file"
          tabindex="0"
          className="filelistingdynamiczone-filelisting"
        >
          <img
            alt="document icon"
            src="/icondocument.svg"
            className="filelistingdynamiczone-image1"
          />
          <div className="filelistingdynamiczone-container">
            <span
              id="nome-file"
              className="paragraph_xl filelistingdynamiczone-text"
            >
              {props.fileName}
            </span>
          </div>
          <img
            alt="download icon"
            src="/icondownload.svg"
            className="filelistingdynamiczone-image2"
          />
        </article>
      </a>
      <style jsx>
        {`
          .filelistingdynamiczone-link {
            display: contents;
          }
          .filelistingdynamiczone-filelisting {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
          }
          .filelistingdynamiczone-image1 {
            max-width: 30px;
            object-fit: cover;
          }
          .filelistingdynamiczone-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .filelistingdynamiczone-image2 {
            width: 3vh;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .filelistingdynamiczone-filelisting {
              width: auto;
            }
            .filelistingdynamiczone-text {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .filelistingdynamiczone-filelisting {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Filelistingdynamiczone.defaultProps = {
  fileArray: {
    ext: '.pdf',
    url: '/uploads/ceas_aperti_brochure_rev6_637dbdd54d.pdf',
    hash: 'ceas_aperti_brochure_rev6_637dbdd54d',
    mime: 'application/pdf',
    name: 'ceas-aperti-brochure-rev6.pdf',
    size: 9091.88,
    provider: 'local',
    createdAt: '2025-05-15T13:10:26.452Z',
    updatedAt: '2025-05-15T13:10:26.452Z',
  },
  rootClassName: '',
  fileName: 'filename',
}

Filelistingdynamiczone.propTypes = {
  fileArray: PropTypes.array,
  rootClassName: PropTypes.string,
  fileName: PropTypes.string,
}

export default Filelistingdynamiczone
