import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FilterbyEventi = (props) => {
  return (
    <>
      <div
        className={`filterby-eventi-filterby-eventi ${props.rootClassName} `}
      >
        <div className="filterby-eventi-filtra-per">
          <div className="filterby-eventi-container1">
            <label className="filterby-eventi-text1">
              {props.text ?? (
                <Fragment>
                  <span className="filterby-eventi-text6">Dedicato a</span>
                </Fragment>
              )}
            </label>
            <select name="Filter by" className="filterby-eventi-select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="filterby-eventi-container2">
            <label className="filterby-eventi-text2">
              {props.text1 ?? (
                <Fragment>
                  <span className="filterby-eventi-text5">Tipologia</span>
                </Fragment>
              )}
            </label>
            <select name="Filter by" className="filterby-eventi-select2">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="filterby-eventi-container3">
            <label className="filterby-eventi-text3">
              {props.text2 ?? (
                <Fragment>
                  <span className="filterby-eventi-text7">Durata</span>
                </Fragment>
              )}
            </label>
            <select name="Filter by" className="filterby-eventi-select3">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="filterby-eventi-container4">
            <label className="filterby-eventi-text4">
              {props.text3 ?? (
                <Fragment>
                  <span className="filterby-eventi-text8">Luogo</span>
                </Fragment>
              )}
            </label>
            <select name="Filter by" className="filterby-eventi-select4">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .filterby-eventi-filterby-eventi {
            width: 100%;
            display: block;
            position: relative;
          }
          .filterby-eventi-filtra-per {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .filterby-eventi-container1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterby-eventi-text1 {
            font-size: 17px;
            font-weight: bold;
          }
          .filterby-eventi-select1 {
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .filterby-eventi-container2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterby-eventi-text2 {
            font-size: 17px;
            font-weight: bold;
          }
          .filterby-eventi-select2 {
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .filterby-eventi-container3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterby-eventi-text3 {
            font-size: 17px;
            font-weight: bold;
          }
          .filterby-eventi-select3 {
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .filterby-eventi-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterby-eventi-text4 {
            font-size: 17px;
            font-weight: bold;
          }
          .filterby-eventi-select4 {
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .filterby-eventi-text5 {
            display: inline-block;
          }
          .filterby-eventi-text6 {
            display: inline-block;
          }
          .filterby-eventi-text7 {
            display: inline-block;
          }
          .filterby-eventi-text8 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .filterby-eventi-filterby-eventi {
              flex-wrap: wrap;
            }
            .filterby-eventi-filtra-per {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .filterby-eventi-container1 {
              gap: var(--dl-layout-space-halfunit);
            }
            .filterby-eventi-container2 {
              gap: var(--dl-layout-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

FilterbyEventi.defaultProps = {
  rootClassName: '',
  text1: undefined,
  text: undefined,
  text2: undefined,
  text3: undefined,
}

FilterbyEventi.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
}

export default FilterbyEventi
