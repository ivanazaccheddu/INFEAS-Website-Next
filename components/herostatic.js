import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Herostatic = (props) => {
  return (
    <>
      <header className={`herostatic-herostatic ${props.rootClassName} `}>
        <div className="herostatic-header">
          <div className="herostatic-container1 thq-section-max-width">
            <h1 className="herostatic-text1 heading1">
              {props.text ?? (
                <Fragment>
                  <span className="herostatic-text4">
                    Bentornati su INFEAS Sardegna
                  </span>
                </Fragment>
              )}
            </h1>
            <h4 className="herostatic-text2 heading4">
              {props.text1 ?? (
                <Fragment>
                  <span className="herostatic-text3">
                    Impariamo dalla natura, diffondiamo conoscenza, costruiamo
                    sostenibilità per la nostra comunità.
                  </span>
                </Fragment>
              )}
            </h4>
            <div className="herostatic-container2"></div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .herostatic-herostatic {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            background-color: #dbeae3;
          }
          .herostatic-header {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 45vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .herostatic-container1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .herostatic-text1 {
            text-align: center;
          }
          .herostatic-text2 {
            color: #252330;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .herostatic-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 70%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .herostatic-text3 {
            display: inline-block;
          }
          .herostatic-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .herostatic-container2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .herostatic-header {
              width: 100%;
            }
            .herostatic-text1 {
              text-align: center;
            }
            .herostatic-container2 {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Herostatic.defaultProps = {
  rootClassName: '',
  text1: undefined,
  text: undefined,
}

Herostatic.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text: PropTypes.element,
}

export default Herostatic
