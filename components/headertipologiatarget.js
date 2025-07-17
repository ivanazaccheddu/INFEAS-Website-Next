import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Headertipologiatarget = (props) => {
  return (
    <>
      <header
        id="header-pagina"
        className={`headertipologiatarget-header-scuoleeuniversit ${props.rootClassName} `}
      >
        <div className="headertipologiatarget-header thq-section-max-width">
          <p className="headertipologiatarget-text1 paragraph_md">
            {props.breadcrumb}
          </p>
          <h1
            id="header-title"
            aria-labelledby="page-title"
            className="headertipologiatarget-text2 heading1"
          >
            {props.headerTitleName}
          </h1>
        </div>
        <img
          alt="immagine-background"
          src="/headerimg-texture1-1500w.png"
          className="headertipologiatarget-image"
        />
      </header>
      <style jsx>
        {`
          .headertipologiatarget-header-scuoleeuniversit {
            flex: 0 0 auto;
            width: 100%;
            display: block;
            position: relative;
            align-self: center;
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatarget-header {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-self: center;
            min-height: 450px;
            padding-top: 150px;
            flex-direction: column;
            padding-bottom: 150px;
            justify-content: center;
          }
          .headertipologiatarget-text1 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .headertipologiatarget-text2 {
            color: rgb(255, 255, 255);
            z-index: 1;
          }
          .headertipologiatarget-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .headertipologiatargetroot-class-name {
            background-color: #0f4eb3;
          }
          .headertipologiatargetroot-class-name1 {
            background-color: #0f4eb3;
          }
          .headertipologiatargetroot-class-name2 {
            background-color: #018f3d;
          }
          .headertipologiatargetroot-class-name3 {
            background-color: #464957;
          }
          .headertipologiatargetroot-class-name4 {
            background-color: #464957;
          }
          .headertipologiatargetroot-class-name5 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name6 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name7 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name8 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name9 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name10 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name11 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name12 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name13 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name14 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name15 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name16 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name17 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name18 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name19 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name20 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name21 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name22 {
            background-color: var(--dl-color-theme-accent2);
          }
          .headertipologiatargetroot-class-name23 {
            background-color: #0f4eb3;
          }
          .headertipologiatargetroot-class-name24 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name25 {
            background-color: #0f4eb3;
          }

          .headertipologiatargetroot-class-name27 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name28 {
            background-color: #0f4eb3;
          }
          .headertipologiatargetroot-class-name29 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name30 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name31 {
            background-color: var(--dl-color-theme-secondary1);
          }
          .headertipologiatargetroot-class-name32 {
            background-color: var(--dl-color-theme-secondary1);
          }
          @media (max-width: 767px) {
            .headertipologiatarget-header {
              min-height: 450px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

Headertipologiatarget.defaultProps = {
  rootClassName: '',
  headerTitleName: 'Scuole e Università',
  breadcrumb: 'Home / Per Scuole e Universtità',
}

Headertipologiatarget.propTypes = {
  rootClassName: PropTypes.string,
  headerTitleName: PropTypes.string,
  breadcrumb: PropTypes.string,
}

export default Headertipologiatarget
