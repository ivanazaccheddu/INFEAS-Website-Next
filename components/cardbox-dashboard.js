import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ButtonComponent from './button-component'

const CardboxDashboard = (props) => {
  return (
    <>
      <article
        id="card-dashboard"
        tabindex="0"
        className={`cardbox-dashboard-cardbox-dashboard ${props.rootClassName} `}
      >
        <img
          id="icona-documento"
          alt="icon-documento"
          src="/box-icon.svg"
          aria-label="Icona documento"
          className="cardbox-dashboard-image"
        />
        <h4 className="cardbox-dashboard-text heading4">{props.titolo}</h4>
        <div className="cardbox-dashboard-container"></div>
        <a
          href="https://www.teleporthq.io"
          target="_blank"
          rel="noreferrer noopener"
          className="cardbox-dashboard-link"
        >
          <ButtonComponent
            whiteColor="white"
            rootClassName="button-componentroot-class-name11"
            className="cardbox-dashboard-component"
          ></ButtonComponent>
        </a>
      </article>
      <style jsx>
        {`
          .cardbox-dashboard-cardbox-dashboard {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            background-color: #464957;
          }
          .cardbox-dashboard-image {
            width: 28px;
            height: 35px;
            object-fit: cover;
          }
          .cardbox-dashboard-text {
            color: rgb(255, 255, 255);
          }
          .cardbox-dashboard-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .cardbox-dashboard-link {
            display: contents;
          }
          .cardbox-dashboard-component {
            text-decoration: none;
          }
          .cardbox-dashboardroot-class-name {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name1 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name2 {
            width: 100%;
            height: 100%;
            background-color: #7685c0;
          }
          .cardbox-dashboardroot-class-name3 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name4 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name5 {
            background-color: #7685c0;
          }
          .cardbox-dashboardroot-class-name6 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name7 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name8 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            background-color: #7685c0;
          }
          .cardbox-dashboardroot-class-name9 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name10 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name11 {
            width: 100%;
            height: 100%;
            background-color: #7685c0;
          }
          .cardbox-dashboardroot-class-name12 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name13 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name14 {
            width: 100%;
            height: 100%;
            background-color: #7685c0;
          }

          .cardbox-dashboardroot-class-name17 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name18 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name19 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            background-color: #7685c0;
          }

          .cardbox-dashboardroot-class-name21 {
            background-color: var(--dl-color-theme-secondary2);
          }
          .cardbox-dashboardroot-class-name22 {
            background-color: #7e8773;
          }
          .cardbox-dashboardroot-class-name23 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            background-color: #7685c0;
          }
          @media (max-width: 767px) {
            .cardbox-dashboardroot-class-name15 {
              width: 100%;
            }
            .cardbox-dashboardroot-class-name16 {
              width: 100%;
            }
            .cardbox-dashboardroot-class-name20 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CardboxDashboard.defaultProps = {
  titolo: 'Documenti',
  rootClassName: '',
}

CardboxDashboard.propTypes = {
  titolo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardboxDashboard
