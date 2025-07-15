import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyEventi from '../components/filterby-eventi'
import CardEvento from '../components/card-evento'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const CittadiniTuttiEventi = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="cittadini-tutti-eventi-container1">
        <Head>
          <title>CittadiniTutti-eventi - INFEAS Website</title>
          <meta
            property="og:title"
            content="CittadiniTutti-eventi - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="cittadini-tutti-eventi-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="cittadini-tutti-eventi-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cittadini-tutti-eventi-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cittadini-tutti-eventi-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cittadini-tutti-eventi-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cittadini-tutti-eventi-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cittadini-tutti-eventi-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="cittadini-tutti-eventi-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="cittadini-tutti-eventi-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="cittadini-tutti-eventi-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="cittadini-tutti-eventi-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="cittadini-tutti-eventi-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="cittadini-tutti-eventi-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name26"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per tutti i cittadini / Eventi"
          rootClassName="headertipologiatargetroot-class-name20"
          headerTitleName="Eventi"
        ></Headertipologiatarget>
        <section
          id="sezione-filtri-eventi-cittadini"
          className="cittadini-tutti-eventi-sezione-filtri-cittadini padding-container"
        >
          <FilterbyEventi
            text={
              <Fragment>
                <span className="cittadini-tutti-eventi-text23">
                  Dedicato a
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="cittadini-tutti-eventi-text24">Tipologia</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="cittadini-tutti-eventi-text25">Durata</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="cittadini-tutti-eventi-text26">Luogo</span>
              </Fragment>
            }
            rootClassName="filterby-eventiroot-class-name2"
          ></FilterbyEventi>
        </section>
        <section
          id="elenco-eventi-per-cittadini"
          className="cittadini-tutti-eventi-eventi-cittadini padding-container"
        >
          <div className="thq-section-max-width">
            <div className="cittadini-tutti-eventi-container3">
              <span className="cittadini-tutti-eventi-text27 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="cittadini-tutti-eventi-container4">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/cittadini-tutti-eventi-resource-cittadini-tutti-eventi?${new URLSearchParams(
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
                      <div className="grid-3">
                        <Repeater
                          items={params}
                          renderItem={(eventi) => (
                            <Fragment>
                              <Link href={`/eventi/${eventi?.slug}`}>
                                <a>
                                  <CardEvento
                                    luogo={eventi?.luogo || '--'}
                                    logoAlt={eventi?.immagine?.alt || '--'}
                                    logoORG={
                                      eventi?.organizzazione?.logo?.url ||
                                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6870e192-5a0c-4ce0-92db-78cbb3e943f6/82d7ddad-37a0-4cbe-b3a1-b517a202640e?org_if_sml=1&force_format=original'
                                    }
                                    idEvento={eventi?.nome || '--'}
                                    oraInizio={eventi?.data_inizio || '--'}
                                    dataEvento={eventi?.data_inizio || '--'}
                                    fotoEvento={eventi?.immagine?.url || '--'}
                                    nomeEvento={eventi?.nome || '--'}
                                    fotoEventoAlt={
                                      eventi?.immagine?.alt || '--'
                                    }
                                    rootClassName="card-eventoroot-class-name37"
                                    categoriaString={
                                      eventi?.categoria_eventi?.nome || '--'
                                    }
                                    className="cittadini-tutti-eventi-component3"
                                  ></CardEvento>
                                </a>
                              </Link>
                            </Fragment>
                          )}
                        />
                      </div>
                      <div className="cittadini-tutti-eventi-cms-pagination-node"></div>
                    </Fragment>
                  )}
                  params={{
                    'pagination[start]':
                      (parseInt(router.query?.['cPage-ur2vkt'] ?? 1) - 1) * 3,
                    locale: props?.locale ?? '',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name17"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name23"></Footer>
      </div>
      <style jsx>
        {`
          .cittadini-tutti-eventi-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cittadini-tutti-eventi-text10 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text11 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text12 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text13 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text14 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text15 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text16 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text17 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text18 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text19 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text20 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text21 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text22 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-sezione-filtri-cittadini {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .cittadini-tutti-eventi-text23 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text24 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text25 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-text26 {
            display: inline-block;
          }
          .cittadini-tutti-eventi-eventi-cittadini {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
            background-color: #dbeae3;
          }
          .cittadini-tutti-eventi-container3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cittadini-tutti-eventi-text27 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .cittadini-tutti-eventi-container4 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            flex-direction: column;
          }
          .cittadini-tutti-eventi-component3 {
            text-decoration: none;
          }
          .cittadini-tutti-eventi-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .cittadini-tutti-eventi-container3 {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .cittadini-tutti-eventi-container4 {
              display: grid;
            }
          }
          @media (max-width: 991px) {
            .cittadini-tutti-eventi-eventi-cittadini {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .cittadini-tutti-eventi-container3 {
              align-self: center;
            }
            .cittadini-tutti-eventi-container4 {
              width: auto;
              height: auto;
              display: flex;
              align-self: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .cittadini-tutti-eventi-sezione-filtri-cittadini {
              background-color: #efeeeb;
            }
            .cittadini-tutti-eventi-eventi-cittadini {
              width: 100%;
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .cittadini-tutti-eventi-container3 {
              width: auto;
            }
            .cittadini-tutti-eventi-container4 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default CittadiniTuttiEventi
