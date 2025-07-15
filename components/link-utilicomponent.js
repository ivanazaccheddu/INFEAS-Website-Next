import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const LinkUtilicomponent = (props) => {
  return (
    <>
      <div className={`link-utilicomponent-container1 ${props.rootClassName} `}>
        <div className="link-utilicomponent-container2">
          <a
            href={props.usefulLink}
            target="_blank"
            rel="noreferrer noopener"
            className="link-utilicomponent-link"
          >
            <div className="link-utilicomponent-container3">
              <img
                alt="image"
                src="/icon-linkutili.svg"
                className="link-utilicomponent-image"
              />
              <span>{props.nomeLink}</span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .link-utilicomponent-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .link-utilicomponent-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .link-utilicomponent-link {
            display: contents;
          }
          .link-utilicomponent-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            text-decoration: none;
          }
          .link-utilicomponent-image {
            width: auto;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

LinkUtilicomponent.defaultProps = {
  rootClassName: '',
  nomeLink: 'Nome link',
  usefulLink: 'https://www.teleporthq.io',
}

LinkUtilicomponent.propTypes = {
  rootClassName: PropTypes.string,
  nomeLink: PropTypes.string,
  usefulLink: PropTypes.string,
}

export default LinkUtilicomponent
