import React, { Fragment } from 'react'
import Head from 'next/head'

import {
  DataProvider,
  CMSMixedType,
  Repeater,
} from '@teleporthq/react-components'
import Markdown from 'markdown-to-jsx'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Titolodescrizioneaccordiontext from '../components/titolodescrizioneaccordiontext'
import EmptyContainer from '../components/empty-container'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const SistemaRegionaleInfeas = (props) => {
  return (
    <>
      <div className="sistema-regionale-infeas-container1">
        <Head>
          <title>Sistema-regionale-infeas - INFEAS Website</title>
          <meta
            property="og:title"
            content="Sistema-regionale-infeas - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="sistema-regionale-infeas-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="sistema-regionale-infeas-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="sistema-regionale-infeas-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="sistema-regionale-infeas-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="sistema-regionale-infeas-text14">
                Mappa CEAS
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sistema-regionale-infeas-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sistema-regionale-infeas-text16">
                Seguici su
              </span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="sistema-regionale-infeas-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="sistema-regionale-infeas-text18">
                Seguici su
              </span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="sistema-regionale-infeas-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="sistema-regionale-infeas-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="sistema-regionale-infeas-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="sistema-regionale-infeas-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name9"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Il sistema Regionale INFEAS"
          rootClassName="headertipologiatargetroot-class-name3"
          headerTitleName="Il sistema regionale INFEAS"
        ></Headertipologiatarget>
        <section id="sezione-descrizione-infeas" className="padding-container">
          <div className="sistema-regionale-infeas-container2 thq-section-max-width">
            <div className="sistema-regionale-infeas-container3">
              <p className="paragraph_xl">
                Il sistema regionale è un’organizzazione a rete che favorisce il
                perseguimento di obiettivi condivisi di educazione all’ambiente
                e alla sostenibilità, attraverso azioni ed iniziative sviluppate
                in collaborazione con le varie amministrazioni, enti, organismi,
                associazioni operanti nel settore dell’educazione alla
                sostenibilità. 
              </p>
              <div className="sistema-regionale-infeas-container4">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/componenti-pagine-resource-componenti-pagine?${new URLSearchParams(
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
                  renderSuccess={(componenti_pagine) => (
                    <Fragment>
                      <Repeater
                        items={componenti_pagine?.componenti || []}
                        renderItem={(array_componenti) => (
                          <Fragment>
                            <CMSMixedType
                              itemData={array_componenti}
                              mappingConfiguration={{
                                'layout.accordion': (cms_mixed_type) => (
                                  <Titolodescrizioneaccordiontext
                                    titolo={array_componenti?.titolo}
                                  >
                                    <div>
                                      <Markdown>
                                        {array_componenti?.descrizione}
                                      </Markdown>
                                    </div>
                                  </Titolodescrizioneaccordiontext>
                                ),
                              }}
                              renderDefault={(cms_mixed_type) => (
                                <EmptyContainer></EmptyContainer>
                              )}
                              renderError={(cms_mixed_type) => (
                                <div>
                                  Error Component. Something wrong happend and
                                  you did not provide an error component.
                                </div>
                              )}
                            />
                          </Fragment>
                        )}
                      />
                      <div className="sistema-regionale-infeas-container7"></div>
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
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name8"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .sistema-regionale-infeas-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sistema-regionale-infeas-text10 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text11 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text12 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text13 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text14 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text15 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text16 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text17 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text18 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text19 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text20 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text21 {
            display: inline-block;
          }
          .sistema-regionale-infeas-text22 {
            display: inline-block;
          }
          .sistema-regionale-infeas-container2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sistema-regionale-infeas-container3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sistema-regionale-infeas-container4 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sistema-regionale-infeas-container7 {
            gap: var(--dl-layout-space-twounits);
          }
          @media (max-width: 479px) {
            .sistema-regionale-infeas-container2 {
              flex-direction: column;
            }
            .sistema-regionale-infeas-container7 {
              width: 100%;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default SistemaRegionaleInfeas
