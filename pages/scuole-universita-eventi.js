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

const ScuoleEventi = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="scuole-eventi-container1">
        <Head>
          <title>Scuole-Eventi - INFEAS Website</title>
          <meta property="og:title" content="Scuole-Eventi - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-eventi-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-eventi-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-eventi-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-eventi-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-eventi-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-eventi-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-eventi-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-eventi-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-eventi-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-eventi-text19">Materiali didattici</span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="scuole-eventi-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-eventi-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-eventi-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-eventi-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name35"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per le scuole e università / Eventi"
          rootClassName="headertipologiatargetroot-class-name28"
          headerTitleName="Eventi"
        ></Headertipologiatarget>
        <section
          id="sezione-filtri-eventi-scuole"
          className="scuole-eventi-sezione-filtri-scuole padding-container"
        >
          <FilterbyEventi
            text={
              <Fragment>
                <span className="scuole-eventi-text24">Dedicato a</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="scuole-eventi-text25">Tipologia</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="scuole-eventi-text26">Durata</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="scuole-eventi-text27">Luogo</span>
              </Fragment>
            }
            rootClassName="filterby-eventiroot-class-name4"
          ></FilterbyEventi>
        </section>
        <section
          id="elenco-eventi-per-cittadini"
          className="scuole-eventi-container2 padding-container"
        >
          <div className="scuole-eventi-container3 thq-section-max-width">
            <div className="scuole-eventi-container4">
              <span className="scuole-eventi-text28 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="scuole-eventi-container5">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/scuole-eventi-resource-scuole-eventi?${new URLSearchParams(
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
                          renderItem={(listing_news_scuole) => (
                            <Fragment>
                              <Link
                                href={`/eventi/${listing_news_scuole?.slug}`}
                              >
                                <a>
                                  <CardEvento
                                    luogo={listing_news_scuole?.luogo || '--'}
                                    logoAlt="logo-infeas"
                                    logoORG={
                                      listing_news_scuole?.organizzazione?.logo
                                        ?.url
                                    }
                                    idEvento={listing_news_scuole?.slug}
                                    oraInizio={
                                      listing_news_scuole?.data_inizio || '--'
                                    }
                                    dataEvento={
                                      listing_news_scuole?.data_inizio || '--'
                                    }
                                    fotoEvento={
                                      listing_news_scuole?.immagine?.url
                                    }
                                    nomeEvento={
                                      listing_news_scuole?.nome || '--'
                                    }
                                    fotoEventoAlt={
                                      listing_news_scuole?.immagine?.alt
                                    }
                                    rootClassName="card-eventoroot-class-name42"
                                    categoriaString={
                                      listing_news_scuole?.categoria_eventi
                                        ?.nome || '--'
                                    }
                                    className="scuole-eventi-component3"
                                  ></CardEvento>
                                </a>
                              </Link>
                            </Fragment>
                          )}
                        />
                      </div>
                      <div className="scuole-eventi-cms-pagination-node"></div>
                    </Fragment>
                  )}
                  params={{
                    'pagination[start]':
                      (parseInt(router.query?.['cPage-s3gy0c'] ?? 1) - 1) * 15,
                    locale: props?.locale ?? '',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name23"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name33"></Footer>
      </main>
      <style jsx>
        {`
          .scuole-eventi-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-eventi-text10 {
            display: inline-block;
          }
          .scuole-eventi-text11 {
            display: inline-block;
          }
          .scuole-eventi-text12 {
            display: inline-block;
          }
          .scuole-eventi-text13 {
            display: inline-block;
          }
          .scuole-eventi-text14 {
            display: inline-block;
          }
          .scuole-eventi-text15 {
            display: inline-block;
          }
          .scuole-eventi-text16 {
            display: inline-block;
          }
          .scuole-eventi-text17 {
            display: inline-block;
          }
          .scuole-eventi-text18 {
            display: inline-block;
          }
          .scuole-eventi-text19 {
            display: inline-block;
          }
          .scuole-eventi-text20 {
            display: inline-block;
          }
          .scuole-eventi-text21 {
            display: inline-block;
          }
          .scuole-eventi-text22 {
            display: inline-block;
          }
          .scuole-eventi-text23 {
            display: inline-block;
          }
          .scuole-eventi-sezione-filtri-scuole {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .scuole-eventi-text24 {
            display: inline-block;
          }
          .scuole-eventi-text25 {
            display: inline-block;
          }
          .scuole-eventi-text26 {
            display: inline-block;
          }
          .scuole-eventi-text27 {
            display: inline-block;
          }
          .scuole-eventi-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            background-color: #dbeae3;
          }
          .scuole-eventi-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .scuole-eventi-container4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-eventi-text28 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .scuole-eventi-container5 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-eventi-component3 {
            text-decoration: none;
          }
          .scuole-eventi-cms-pagination-node {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          @media (max-width: 479px) {
            .scuole-eventi-sezione-filtri-scuole {
              background-color: #efeeeb;
            }
          }
        `}
      </style>
    </>
  )
}

export default ScuoleEventi
