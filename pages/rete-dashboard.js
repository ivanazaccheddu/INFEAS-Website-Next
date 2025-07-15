import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import CardboxDashboard from '../components/cardbox-dashboard'
import NewsTitle from '../components/news-title'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteDashboardInfeas = (props) => {
  return (
    <>
      <div className="rete-dashboard-infeas-container1">
        <Head>
          <title>Rete-Dashboard-Infeas - INFEAS Website</title>
          <meta
            property="og:title"
            content="Rete-Dashboard-Infeas - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-dashboard-infeas-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-dashboard-infeas-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-dashboard-infeas-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-dashboard-infeas-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-dashboard-infeas-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-dashboard-infeas-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-dashboard-infeas-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-dashboard-infeas-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-dashboard-infeas-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-dashboard-infeas-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="rete-dashboard-infeas-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-dashboard-infeas-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-dashboard-infeas-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-dashboard-infeas-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name4"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i membri della Rete / Dashboard"
          rootClassName="headertipologiatargetroot-class-name11"
          headerTitleName="Dashboard"
        ></Headertipologiatarget>
        <section id="sezione-card-dashboard" className="padding-container">
          <div className="rete-dashboard-infeas-container3 thq-section-max-width">
            <article className="rete-dashboard-infeas-container4">
              <Link href="/rete-info-linee-guida">
                <a>
                  <CardboxDashboard
                    rootClassName="cardbox-dashboardroot-class-name15"
                    className="rete-dashboard-infeas-component3"
                  ></CardboxDashboard>
                </a>
              </Link>
              <Link href="/rete-procedure">
                <a>
                  <CardboxDashboard
                    titolo="Procedura di costituzione di un CEAS"
                    rootClassName="cardbox-dashboardroot-class-name6"
                    className="rete-dashboard-infeas-component4"
                  ></CardboxDashboard>
                </a>
              </Link>
              <Link href="/rete-info-linee-guida">
                <a>
                  <CardboxDashboard
                    titolo="Info e linee guida"
                    rootClassName="cardbox-dashboardroot-class-name7"
                    className="rete-dashboard-infeas-component5"
                  ></CardboxDashboard>
                </a>
              </Link>
              <Link href="/progetto-siquas">
                <a>
                  <CardboxDashboard
                    titolo="SIQUAS"
                    rootClassName="cardbox-dashboardroot-class-name8"
                    className="rete-dashboard-infeas-component6"
                  ></CardboxDashboard>
                </a>
              </Link>
            </article>
            <div className="rete-dashboard-infeas-comunicati-bandi-e-notizie">
              <div className="rete-dashboard-infeas-container5">
                <h3 className="rete-dashboard-infeas-text24 heading3">
                  Comunicati Bandi e notizie
                </h3>
              </div>
              <div className="rete-dashboard-infeas-container6">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/rete-dashboard-infeas-resource-rete-dashboard-infeas?${new URLSearchParams(
                        params
                      )}`,
                      {
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => data)
                  }
                  renderSuccess={(params) => (
                    <Fragment>
                      <div className="rete-dashboard-infeas-container7">
                        <Repeater
                          items={params}
                          renderItem={(notizie) => (
                            <Fragment>
                              <Link href={`/notizie/${notizie?.slug}`}>
                                <a>
                                  <NewsTitle
                                    dataNews={notizie?.data_pubblicazione}
                                    titoloNews={notizie?.nome}
                                    rootClassName="news-titleroot-class-name1"
                                    className="rete-dashboard-infeas-component7"
                                  ></NewsTitle>
                                </a>
                              </Link>
                            </Fragment>
                          )}
                        />
                      </div>
                    </Fragment>
                  )}
                  params={{
                    locale: props?.locale ?? '',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name3"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .rete-dashboard-infeas-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-dashboard-infeas-text10 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text11 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text12 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text13 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text14 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text15 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text16 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text17 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text18 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text19 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text20 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text21 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text22 {
            display: inline-block;
          }
          .rete-dashboard-infeas-text23 {
            display: inline-block;
          }
          .rete-dashboard-infeas-container3 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-dashboard-infeas-container4 {
            gap: var(--dl-layout-space-unit);
            flex: 1.7;
            width: auto;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .rete-dashboard-infeas-component3 {
            text-decoration: none;
          }
          .rete-dashboard-infeas-component4 {
            text-decoration: none;
          }
          .rete-dashboard-infeas-component5 {
            text-decoration: none;
          }
          .rete-dashboard-infeas-component6 {
            text-decoration: none;
          }
          .rete-dashboard-infeas-comunicati-bandi-e-notizie {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .rete-dashboard-infeas-container5 {
            display: block;
            border-color: #71697b;
            padding-bottom: var(--dl-layout-space-twounits);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 5px;
          }
          .rete-dashboard-infeas-text24 {
            font-style: normal;
            font-weight: 400;
          }
          .rete-dashboard-infeas-container6 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .rete-dashboard-infeas-container7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .rete-dashboard-infeas-component7 {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .rete-dashboard-infeas-comunicati-bandi-e-notizie {
              align-self: flex-start;
              justify-content: flex-start;
            }
          }
          @media (max-width: 991px) {
            .rete-dashboard-infeas-container3 {
              gap: var(--dl-layout-space-sixunits);
              flex-direction: column;
            }
            .rete-dashboard-infeas-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .rete-dashboard-infeas-container4 {
              width: 100%;
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .rete-dashboard-infeas-container4 {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default ReteDashboardInfeas
