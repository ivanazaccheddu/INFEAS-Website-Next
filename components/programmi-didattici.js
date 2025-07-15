import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ProgrammiDidattici = (props) => {
  return (
    <>
      <div
        className={`programmi-didattici-programmi-didattici ${props.rootClassName} `}
      >
        <div className="programmi-didattici-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="programmi-didattici-image1"
          />
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="programmi-didattici-image2"
          />
        </div>
        <div className="programmi-didattici-container2">
          <div className="programmi-didattici-container3 heading1">
            <h2 className="heading2">
              {props.text ?? (
                <Fragment>
                  <span className="programmi-didattici-text4">
                    Programmi Didattici
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="programmi-didattici-container4">
            <div className="programmi-didattici-container5">
              <p className="programmi-didattici-text2 paragraph_xxl">
                {props.text1 ?? (
                  <Fragment>
                    <span className="programmi-didattici-text3">
                      Offriamo risorse, programmi e strumenti educativi rivolti
                      a scuole e università per approfondire i temi ambientali e
                      della sostenibilità. I materiali includono guide, attività
                      pratiche, percorsi tematici e programmi strutturati,
                      pensati per supportare docenti e studenti nello sviluppo
                      di conoscenze e competenze per un futuro più sostenibile.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .programmi-didattici-programmi-didattici {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .programmi-didattici-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .programmi-didattici-image1 {
            width: 538px;
            height: 538px;
            z-index: 1;
            position: absolute;
            align-self: center;
            object-fit: cover;
          }
          .programmi-didattici-image2 {
            width: 100%;
            z-index: 0;
            object-fit: cover;
          }
          .programmi-didattici-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .programmi-didattici-container3 {
            padding: var(--dl-layout-space-threeunits);
          }
          .programmi-didattici-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .programmi-didattici-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .programmi-didattici-text2 {
            text-align: center;
          }
          .programmi-didattici-text3 {
            display: inline-block;
          }
          .programmi-didattici-text4 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .programmi-didattici-image1 {
              width: 381px;
              height: 391px;
            }
          }
          @media (max-width: 991px) {
            .programmi-didattici-image1 {
              width: 336px;
              height: 336px;
            }
          }
          @media (max-width: 479px) {
            .programmi-didattici-image1 {
              width: 228px;
              height: 228px;
            }
            .programmi-didattici-container5 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

ProgrammiDidattici.defaultProps = {
  text1: undefined,
  imageSrc: '/programmi-didattici-img.png',
  imageAlt: 'image',
  imageSrc1: '/blustroke%20(1).svg',
  imageAlt1: 'image',
  rootClassName: '',
  text: undefined,
}

ProgrammiDidattici.propTypes = {
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default ProgrammiDidattici
