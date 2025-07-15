import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Filelisting from '../components/filelisting'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteSIQUAS = (props) => {
  return (
    <>
      <div className="rete-siquas-container1">
        <Head>
          <title>Rete-SIQUAS - INFEAS Website</title>
          <meta property="og:title" content="Rete-SIQUAS - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-siquas-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-siquas-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-siquas-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-siquas-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-siquas-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-siquas-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-siquas-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-siquas-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-siquas-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-siquas-text19">Materiali didattici</span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="rete-siquas-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-siquas-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-siquas-text22">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-siquas-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name34"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i membri della Rete / Progetto SIQUAS"
          rootClassName="headertipologiatargetroot-class-name27"
          headerTitleName="Progetto SIQUAS"
        ></Headertipologiatarget>
        <section id="sezione-elenco-documenti" className="padding-container">
          <div className="rete-siquas-container2 thq-section-max-width">
            <div className="rete-siquas-container3">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/rete-siquas-resource-rete-siquas?${new URLSearchParams(
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
                    <div className="rete-siquas-container4">
                      <Repeater
                        items={params}
                        renderItem={(documenti) => (
                          <Fragment>
                            <Filelisting
                              fileName={documenti?.nome}
                              rootClassName="filelistingroot-class-name16"
                              fileListingUrl={documenti?.file?.url}
                            ></Filelisting>
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
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name24"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name32"></Footer>
      </div>
      <style jsx>
        {`
          .rete-siquas-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-siquas-text10 {
            display: inline-block;
          }
          .rete-siquas-text11 {
            display: inline-block;
          }
          .rete-siquas-text12 {
            display: inline-block;
          }
          .rete-siquas-text13 {
            display: inline-block;
          }
          .rete-siquas-text14 {
            display: inline-block;
          }
          .rete-siquas-text15 {
            display: inline-block;
          }
          .rete-siquas-text16 {
            display: inline-block;
          }
          .rete-siquas-text17 {
            display: inline-block;
          }
          .rete-siquas-text18 {
            display: inline-block;
          }
          .rete-siquas-text19 {
            display: inline-block;
          }
          .rete-siquas-text20 {
            display: inline-block;
          }
          .rete-siquas-text21 {
            display: inline-block;
          }
          .rete-siquas-text22 {
            display: inline-block;
          }
          .rete-siquas-text23 {
            display: inline-block;
          }
          .rete-siquas-container2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-siquas-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .rete-siquas-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .rete-siquas-container2 {
              gap: var(--dl-layout-space-sixunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default ReteSIQUAS
