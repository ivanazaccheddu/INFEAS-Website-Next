import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Accordiondocs from '../components/accordiondocs'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const PressKit = (props) => {
  return (
    <>
      <div className="press-kit-container1">
        <Head>
          <title>PressKit - INFEAS Website</title>
          <meta property="og:title" content="PressKit - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="press-kit-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="press-kit-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="press-kit-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="press-kit-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="press-kit-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="press-kit-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="press-kit-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="press-kit-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="press-kit-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="press-kit-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="press-kit-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="press-kit-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="press-kit-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name8"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Press Kit"
          rootClassName="headertipologiatargetroot-class-name4"
          headerTitleName="Press Kit"
        ></Headertipologiatarget>
        <section className="press-kit-container2 padding-container">
          <div className="press-kit-container3 thq-section-max-width">
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/categorie-documenti-resource-categorie-documenti?${new URLSearchParams(
                    params
                  )}`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((data) => data?.data?.[0])
              }
              renderSuccess={(categoria) => (
                <Fragment>
                  <DataProvider
                    fetchData={(params) =>
                      fetch(
                        `/api/press-kit-resource-press-kit?${new URLSearchParams(
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
                        <div className="press-kit-container4">
                          <Repeater
                            items={params}
                            renderItem={(documenti) => (
                              <Fragment>
                                <Accordiondocs
                                  fileCategory={documenti?.tipologia?.name}
                                  rootClassName="accordiondocsroot-class-name5"
                                ></Accordiondocs>
                              </Fragment>
                            )}
                          />
                        </div>
                      </Fragment>
                    )}
                    params={{
                      'categoria?.id': categoria?.id,
                      locale: props?.locale ?? '',
                    }}
                  />
                </Fragment>
              )}
              params={{
                locale: props?.locale ?? '',
              }}
            />
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name7"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name8"></Footer>
      </div>
      <style jsx>
        {`
          .press-kit-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .press-kit-text10 {
            display: inline-block;
          }
          .press-kit-text11 {
            display: inline-block;
          }
          .press-kit-text12 {
            display: inline-block;
          }
          .press-kit-text13 {
            display: inline-block;
          }
          .press-kit-text14 {
            display: inline-block;
          }
          .press-kit-text15 {
            display: inline-block;
          }
          .press-kit-text16 {
            display: inline-block;
          }
          .press-kit-text17 {
            display: inline-block;
          }
          .press-kit-text18 {
            display: inline-block;
          }
          .press-kit-text19 {
            display: inline-block;
          }
          .press-kit-text20 {
            display: inline-block;
          }
          .press-kit-text21 {
            display: inline-block;
          }
          .press-kit-text22 {
            display: inline-block;
          }
          .press-kit-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .press-kit-container3 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .press-kit-container4 {
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 479px) {
            .press-kit-container3 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default PressKit
