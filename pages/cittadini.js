import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import TargetCategoryInfo from '../components/target-category-info'
import ButtonComponent from '../components/button-component'
import CardEvento from '../components/card-evento'
import NewsSimple from '../components/news-simple'
import EmptyPlaceholder from '../components/empty-placeholder'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const CittadiniPerICittadini = (props) => {
  return (
    <>
      <main
        id="pagina-per-cittadini"
        className="cittadini-per-i-cittadini-container1"
      >
        <Head>
          <title>CittadiniPer-i-cittadini - INFEAS Website</title>
          <meta
            property="og:title"
            content="CittadiniPer-i-cittadini - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text14">
                Mappa CEAS
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text15">
                Press Kit
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text16">
                Seguici su
              </span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text18">
                Seguici su
              </span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="cittadini-per-i-cittadini-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name12"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per tutti i cittadini"
          rootClassName="headertipologiatargetroot-class-name10"
          headerTitleName="Per tutti i cittadini"
        ></Headertipologiatarget>
        <TargetCategoryInfo
          rootClassName="target-category-inforoot-class-name"
          iconDestinatario="/icon_cittadini.svg"
          headingDestinatari="Insieme per un ambiente più sostenibile"
          iconDestinatarioAlt="iconaCittadini"
          descrizioneDestinatari="INFEAS Sardegna promuove iniziative volte a sensibilizzare e coinvolgere i cittadini nella tutela dell'ambiente e nella sostenibilità. Le attività si concentrano su eventi, percorsi informativi e progetti pratici che stimolano la partecipazione attiva della comunità. L’obiettivo è diffondere una cultura della sostenibilità, favorire comportamenti responsabili e creare un impatto positivo sul territorio, contribuendo così alla protezione dell’ambiente per le generazioni future."
        ></TargetCategoryInfo>
        <section
          id="sezione-mappa-ceas"
          className="cittadini-per-i-cittadini-mappa-ceas"
        >
          <img
            alt="image"
            src="/icon_mappa.svg"
            className="cittadini-per-i-cittadini-image"
          />
          <h3 className="cittadini-per-i-cittadini-text23 heading3">
            Mappa Ceas
          </h3>
          <Link href="/mappa-ceas-old">
            <a className="cittadini-per-i-cittadini-link1">
              <ButtonComponent
                button="APRI LA MAPPA"
                buttonName="Apri la mappa"
                whiteColor="white"
                rootClassName="button-componentroot-class-name16"
                className="cittadini-per-i-cittadini-bottone-mappa"
              ></ButtonComponent>
            </a>
          </Link>
        </section>
        <section
          id="sezione-appuntamenti-cittadini"
          className="cittadini-per-i-cittadini-eventi padding-container"
        >
          <div className="cittadini-per-i-cittadini-container2 thq-section-max-width">
            <div className="cittadini-per-i-cittadini-container3">
              <span className="cittadini-per-i-cittadini-text24 heading2">
                I Prossimi Appuntamenti
              </span>
              <span className="cittadini-per-i-cittadini-text25 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="cittadini-per-i-cittadini-container4">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/cittadini-per-i-cittadini1-resource-cittadini-per-i-cittadini1?${new URLSearchParams(
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
                      <div className="grid-3 cittadini-per-i-cittadini-container5">
                        <Repeater
                          items={params}
                          renderItem={(eventi) => (
                            <Fragment>
                              <Link href={`/eventi/${eventi?.slug}`}>
                                <a>
                                  <CardEvento
                                    logoAlt={
                                      eventi?.organizzazione?.logo?.alt || '--'
                                    }
                                    logoORG={
                                      eventi?.organizzazione?.logo?.url ||
                                      'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6870e192-5a0c-4ce0-92db-78cbb3e943f6/82d7ddad-37a0-4cbe-b3a1-b517a202640e?org_if_sml=1&force_format=original'
                                    }
                                    idEvento={eventi?.slug || '--'}
                                    oraInizio={eventi?.data_inizio || '--'}
                                    dataEvento={eventi?.data_inizio || '--'}
                                    fotoEvento={eventi?.immagine?.url}
                                    nomeEvento={eventi?.nome || '--'}
                                    fotoEventoAlt={eventi?.immagine?.alt}
                                    rootClassName="card-eventoroot-class-name36"
                                    categoriaString={
                                      eventi?.categoria_eventi?.nome || '--'
                                    }
                                    className="cittadini-per-i-cittadini-component3"
                                  ></CardEvento>
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
              <Link href="/cittadini-eventi">
                <a className="cittadini-per-i-cittadini-link3">
                  <ButtonComponent
                    buttonName="Mostra di più"
                    rootClassName="button-componentroot-class-name4"
                    className="cittadini-per-i-cittadini-tutti-eventi-bottone"
                  ></ButtonComponent>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="sezione-notizie-cittadini" className="padding-container">
          <div className="cittadini-per-i-cittadini-container6 thq-section-max-width">
            <div className="cittadini-per-i-cittadini-container7">
              <span className="cittadini-per-i-cittadini-text26 heading2">
                Notizie
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="cittadini-per-i-cittadini-text27 paragraph_xl">
                <span>
                  Rimani aggiornato su eventi, programmi e iniziative dedicati a
                  scuole e università.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Scopri le ultime attività e opportunità per approfondire
                  l&apos;educazione ambientale e promuovere la sostenibilità
                  nelle nuove generazioni.
                </span>
              </span>
            </div>
            <div className="cittadini-per-i-cittadini-news3columns">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/cittadini-per-i-cittadini-resource-cittadini-per-i-cittadini?${new URLSearchParams(
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
                    <div className="grid-3 cittadini-per-i-cittadini-container8">
                      <Repeater
                        items={params}
                        renderItem={(notizie) => (
                          <Fragment>
                            <NewsSimple
                              border="yes"
                              tagName={notizie?.categoria_notizie?.nome || '--'}
                              dataNews={notizie?.data_pubblicazione}
                              titoloNews={notizie?.nome || '--'}
                              rootClassName="news-simpleroot-class-name5"
                              descrizioneBreve={
                                notizie?.descrizione_breve || '--'
                              }
                            ></NewsSimple>
                          </Fragment>
                        )}
                        renderEmpty={() => (
                          <Fragment>
                            <EmptyPlaceholder
                              testo={
                                <Fragment>
                                  <span className="cittadini-per-i-cittadini-text31 paragraph_xl">
                                    <span>
                                      Torna a trovarci presto per restare
                                      aggiornato con le ultime novità e
                                      aggiornamenti.
                                    </span>
                                    <br></br>
                                  </span>
                                </Fragment>
                              }
                              titolo={
                                <Fragment>
                                  <span className="cittadini-per-i-cittadini-text34 paragraph_xl">
                                    <span>
                                      Nessuna notizia disponibile al momento
                                    </span>
                                    <br></br>
                                  </span>
                                </Fragment>
                              }
                            ></EmptyPlaceholder>
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
            <Link href="/cittadini-notizie">
              <a className="cittadini-per-i-cittadini-link4">
                <ButtonComponent
                  buttonName="Mostra di più"
                  rootClassName="button-componentroot-class-name5"
                  className="cittadini-per-i-cittadini-tutte-notizie-bottone"
                ></ButtonComponent>
              </a>
            </Link>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name11"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name12"></Footer>
      </main>
      <style jsx>
        {`
          .cittadini-per-i-cittadini-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cittadini-per-i-cittadini-text10 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text11 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text12 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text13 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text14 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text15 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text16 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text17 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text18 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text19 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text20 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text21 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text22 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-mappa-ceas {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 60vh;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('/cta-comefunziona-optimized.jpg');
          }
          .cittadini-per-i-cittadini-image {
            width: var(--dl-layout-size-large);
            object-fit: cover;
          }
          .cittadini-per-i-cittadini-text23 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .cittadini-per-i-cittadini-link1 {
            display: contents;
          }
          .cittadini-per-i-cittadini-bottone-mappa {
            text-decoration: none;
          }
          .cittadini-per-i-cittadini-eventi {
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
          .cittadini-per-i-cittadini-container2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .cittadini-per-i-cittadini-container3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cittadini-per-i-cittadini-text24 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .cittadini-per-i-cittadini-text25 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .cittadini-per-i-cittadini-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: block;
          }
          .cittadini-per-i-cittadini-component3 {
            text-decoration: none;
          }
          .cittadini-per-i-cittadini-link3 {
            display: contents;
          }
          .cittadini-per-i-cittadini-tutti-eventi-bottone {
            text-decoration: none;
          }
          .cittadini-per-i-cittadini-container6 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .cittadini-per-i-cittadini-container7 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cittadini-per-i-cittadini-text26 {
            font-style: normal;
            font-weight: 400;
          }
          .cittadini-per-i-cittadini-text27 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .cittadini-per-i-cittadini-news3columns {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
          }
          .cittadini-per-i-cittadini-text31 {
            display: inline-block;
          }
          .cittadini-per-i-cittadini-text34 {
            display: inline-block;
            font-weight: 600;
          }
          .cittadini-per-i-cittadini-link4 {
            display: contents;
          }
          .cittadini-per-i-cittadini-tutte-notizie-bottone {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .cittadini-per-i-cittadini-container3 {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .cittadini-per-i-cittadini-container4 {
              display: block;
            }
            .cittadini-per-i-cittadini-container5 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 991px) {
            .cittadini-per-i-cittadini-eventi {
              flex-direction: column;
            }
            .cittadini-per-i-cittadini-container4 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .cittadini-per-i-cittadini-container3 {
              align-self: center;
            }
            .cittadini-per-i-cittadini-container4 {
              width: auto;
              height: auto;
              display: block;
              align-self: center;
            }
            .cittadini-per-i-cittadini-container5 {
              grid-template-columns: 1fr;
            }
            .cittadini-per-i-cittadini-news3columns {
              display: flex;
              flex-direction: column;
            }
            .cittadini-per-i-cittadini-container8 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .cittadini-per-i-cittadini-eventi {
              width: 100%;
              padding: 48px 0;
            }
            .cittadini-per-i-cittadini-container3 {
              width: auto;
            }
            .cittadini-per-i-cittadini-text24 {
              width: auto;
            }
            .cittadini-per-i-cittadini-container4 {
              display: block;
            }
            .cittadini-per-i-cittadini-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default CittadiniPerICittadini
