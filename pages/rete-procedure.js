import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Filelisting from '../components/filelisting'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteProcedure = (props) => {
  return (
    <>
      <div className="rete-procedure-container1">
        <Head>
          <title>Rete-Procedure - INFEAS Website</title>
          <meta property="og:title" content="Rete-Procedure - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-procedure-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-procedure-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-procedure-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-procedure-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-procedure-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-procedure-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-procedure-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-procedure-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-procedure-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-procedure-text19">Materiali didattici</span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="rete-procedure-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-procedure-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-procedure-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-procedure-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name36"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i membri della Rete / Procedure"
          rootClassName="headertipologiatargetroot-class-name29"
          headerTitleName="Procedure"
        ></Headertipologiatarget>
        <section id="sezione-elenco-documenti" className="padding-container">
          <div className="rete-procedure-container2 thq-section-max-width">
            <div className="rete-procedure-container3">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/rete-procedure-resource-rete-procedure?${new URLSearchParams(
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
                    <div className="rete-procedure-container4">
                      <Repeater
                        items={params}
                        renderItem={(tipologia) => (
                          <Fragment>
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/rete-procedure1-resource-rete-procedure1?${new URLSearchParams(
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
                                  <div className="rete-procedure-container5">
                                    <Repeater
                                      items={params}
                                      renderItem={(documenti) => (
                                        <Fragment>
                                          <article
                                            id="elenco-per-tipologia"
                                            tabindex="0"
                                            className="rete-procedure-container6"
                                          >
                                            <Filelisting
                                              fileName={documenti?.nome || '--'}
                                              rootClassName="filelistingroot-class-name17"
                                              fileListingUrl={
                                                documenti?.file?.url || '--'
                                              }
                                            ></Filelisting>
                                          </article>
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
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name25"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name34"></Footer>
      </div>
      <style jsx>
        {`
          .rete-procedure-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-procedure-text10 {
            display: inline-block;
          }
          .rete-procedure-text11 {
            display: inline-block;
          }
          .rete-procedure-text12 {
            display: inline-block;
          }
          .rete-procedure-text13 {
            display: inline-block;
          }
          .rete-procedure-text14 {
            display: inline-block;
          }
          .rete-procedure-text15 {
            display: inline-block;
          }
          .rete-procedure-text16 {
            display: inline-block;
          }
          .rete-procedure-text17 {
            display: inline-block;
          }
          .rete-procedure-text18 {
            display: inline-block;
          }
          .rete-procedure-text19 {
            display: inline-block;
          }
          .rete-procedure-text20 {
            display: inline-block;
          }
          .rete-procedure-text21 {
            display: inline-block;
          }
          .rete-procedure-text22 {
            display: inline-block;
          }
          .rete-procedure-text23 {
            display: inline-block;
          }
          .rete-procedure-container2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-procedure-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .rete-procedure-container4 {
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
          }
          .rete-procedure-container5 {
            display: flex;
            flex-direction: column-reverse;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-procedure-container6 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .rete-procedure-container2 {
              gap: var(--dl-layout-space-sixunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default ReteProcedure
