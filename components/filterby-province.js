import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FilterbyProvince = (props) => {
  return (
    <>
      <div
        className={`filterby-province-filterby-province ${props.rootClassName} `}
      >
        <div className="filterby-province-filtra-per">
          <div className="filterby-province-container1">
            <span className="filterby-province-text1">
              {props.text ?? (
                <Fragment>
                  <span className="filterby-province-text2">Filtra per</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="filterby-province-container2">
          <select
            id="select-provincia"
            name="Filter by"
            tabindex="0"
            className="filterby-province-select"
          >
            <option id="dropdown-item" value="Provincia">
              Provincia
            </option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <style jsx>
        {`
          .filterby-province-filterby-province {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .filterby-province-filtra-per {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .filterby-province-container1 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterby-province-text1 {
            font-size: 17px;
            font-weight: bold;
          }
          .filterby-province-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .filterby-province-select {
            flex: 1;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .filterby-province-text2 {
            display: inline-block;
          }

          .filterby-provinceroot-class-name1 {
            width: auto;
          }
          @media (max-width: 479px) {
            .filterby-province-container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FilterbyProvince.defaultProps = {
  rootClassName: '',
  text: undefined,
}

FilterbyProvince.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default FilterbyProvince
