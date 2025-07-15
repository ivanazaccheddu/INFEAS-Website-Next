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

const ScuoleScuoleEUniversit = (props) => {
  return (
    <>
      <div className="scuole-scuole-e-universit-container10">
        <Head>
          <title>Scuole-Scuole-e-universit - INFEAS Website</title>
          <meta
            property="og:title"
            content="Scuole-Scuole-e-universit - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-scuole-e-universit-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-scuole-e-universit-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-scuole-e-universit-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-scuole-e-universit-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-scuole-e-universit-text14">
                Mappa CEAS
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-scuole-e-universit-text15">
                Press Kit
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-scuole-e-universit-text16">
                Seguici su
              </span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-scuole-e-universit-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-scuole-e-universit-text18">
                Seguici su
              </span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-scuole-e-universit-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-scuole-e-universit-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-scuole-e-universit-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-scuole-e-universit-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name10"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per le scuole e università"
          rootClassName="headertipologiatargetroot-class-name"
        ></Headertipologiatarget>
        <TargetCategoryInfo
          iconDestinatario="/iconasostenibilit%C3%A3%C2%A0.svg"
          iconDestinatarioAlt="icona-detinata"
        ></TargetCategoryInfo>
        <section
          id="programmi-didattici-sezione"
          tanindex="0"
          aria-labelledby="Programmi didattici sezione"
          className="scuole-scuole-e-universit-programmi-didattici"
        >
          <div className="scuole-scuole-e-universit-container11">
            <img
              alt="immagine materiali didattici"
              src="/programmi-didattici-img.png"
              className="scuole-scuole-e-universit-image1"
            />
            <img
              alt="image"
              src="/blustroke%20(1).svg"
              className="scuole-scuole-e-universit-image2"
            />
          </div>
          <div className="scuole-scuole-e-universit-container12">
            <div className="scuole-scuole-e-universit-container13 heading1">
              <h2 className="heading2">Programmi Didattici</h2>
            </div>
            <div className="scuole-scuole-e-universit-container14">
              <div className="scuole-scuole-e-universit-container15">
                <p className="scuole-scuole-e-universit-text24 paragraph_xxl">
                  Offriamo risorse, programmi e strumenti educativi rivolti a
                  scuole e università per approfondire i temi ambientali e della
                  sostenibilità. I materiali includono guide, attività pratiche,
                  percorsi tematici e programmi strutturati, pensati per
                  supportare docenti e studenti nello sviluppo di conoscenze e
                  competenze per un futuro più sostenibile.
                </p>
              </div>
            </div>
          </div>
          <Link href="/materiali-didattici">
            <a className="scuole-scuole-e-universit-link1">
              <ButtonComponent
                button="VAI ALLA SEZIONE"
                greyColor="grey"
                rootClassName="button-componentroot-class-name6"
                className="scuole-scuole-e-universit-materiali-didattici-bottone"
              ></ButtonComponent>
            </a>
          </Link>
        </section>
        <section
          id="eventi-scuole-sezione"
          aria-labelledby="Elenco delle attività per le scuole e università"
          className="scuole-scuole-e-universit-eventi-scuole-universita padding-container"
        >
          <div className="scuole-scuole-e-universit-container16 thq-section-max-width">
            <div className="scuole-scuole-e-universit-container17">
              <span className="scuole-scuole-e-universit-text25 heading2">
                I Prossimi Appuntamenti
              </span>
              <span className="scuole-scuole-e-universit-text26 paragraph_xl">
                Non perdere i prossimi eventi e iniziative promossi da INFEAS!
                Scopri date, luoghi e dettagli delle attività dedicate
                all’educazione alla sostenibilità.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="scuole-scuole-e-universit-container18">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/scuole-scuole-e-universit1-resource-scuole-scuole-e-universit1?${new URLSearchParams(
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
                                    logoAlt={
                                      eventi?.organizzazione?.logo?.alt ||
                                      'logo-infeas'
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
                                    fotoEventoAlt={
                                      eventi?.immagine?.alt || 'foto-evento'
                                    }
                                    rootClassName="card-eventoroot-class-name39"
                                    categoriaString={
                                      eventi?.categoria_eventi?.nome || '--'
                                    }
                                    className="scuole-scuole-e-universit-component2"
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
              <ButtonComponent
                rootClassName="button-componentroot-class-name8"
                className="scuole-scuole-e-universit-tutt-eventi-bottone"
              ></ButtonComponent>
            </div>
          </div>
        </section>
        <section
          id="notizie-scuole-sezione"
          aria-labelledby="Elenco delle notizie per le scuole e univrsità"
          className="padding-container"
        >
          <div className="scuole-scuole-e-universit-container21 thq-section-max-width">
            <div className="scuole-scuole-e-universit-container22">
              <span className="scuole-scuole-e-universit-text27 heading2">
                Notizie
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="scuole-scuole-e-universit-text28 paragraph_xl">
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
            <div className="scuole-scuole-e-universit-news3columns">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/scuole-scuole-e-universit-resource-scuole-scuole-e-universit?${new URLSearchParams(
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
                        renderItem={(news) => (
                          <Fragment>
                            <Link href={`/notizie/${news?.slug}`}>
                              <a>
                                <NewsSimple
                                  border="yes"
                                  tagName={
                                    news?.categoria_notizie?.nome || '--'
                                  }
                                  dataNews={news?.data_pubblicazione || '--'}
                                  titoloNews={news?.nome || '--'}
                                  rootClassName="news-simpleroot-class-name8"
                                  descrizioneBreve={
                                    news?.descrizione_breve || '--'
                                  }
                                  className="scuole-scuole-e-universit-component3"
                                ></NewsSimple>
                              </a>
                            </Link>
                          </Fragment>
                        )}
                        renderEmpty={() => (
                          <Fragment>
                            <EmptyPlaceholder
                              testo={
                                <Fragment>
                                  <span className="scuole-scuole-e-universit-text32 paragraph_xl">
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
                                  <span className="scuole-scuole-e-universit-text35 paragraph_xl">
                                    <span>
                                      Nessuna notizia disponibile al momento
                                    </span>
                                    <br></br>
                                  </span>
                                </Fragment>
                              }
                              rootClassName="empty-placeholderroot-class-name"
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
            <Link href="/scuole-universita-notizie">
              <a className="scuole-scuole-e-universit-link4">
                <ButtonComponent
                  rootClassName="button-componentroot-class-name9"
                  className="scuole-scuole-e-universit-tutti-notizie-bottone"
                ></ButtonComponent>
              </a>
            </Link>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name9"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name10"></Footer>
      </div>
      <style jsx>
        {`
          .scuole-scuole-e-universit-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-scuole-e-universit-text10 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text11 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text12 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text13 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text14 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text15 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text16 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text17 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text18 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text19 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text20 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text21 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text22 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-programmi-didattici {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .scuole-scuole-e-universit-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scuole-scuole-e-universit-image1 {
            width: 538px;
            height: 538px;
            z-index: 1;
            position: absolute;
            align-self: center;
            object-fit: cover;
          }
          .scuole-scuole-e-universit-image2 {
            width: 100%;
            z-index: 0;
            object-fit: cover;
          }
          .scuole-scuole-e-universit-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scuole-scuole-e-universit-container13 {
            padding: var(--dl-layout-space-threeunits);
          }
          .scuole-scuole-e-universit-container14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scuole-scuole-e-universit-container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .scuole-scuole-e-universit-text24 {
            text-align: center;
          }
          .scuole-scuole-e-universit-link1 {
            display: contents;
          }
          .scuole-scuole-e-universit-materiali-didattici-bottone {
            text-decoration: none;
          }
          .scuole-scuole-e-universit-eventi-scuole-universita {
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
          .scuole-scuole-e-universit-container16 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .scuole-scuole-e-universit-container17 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scuole-scuole-e-universit-text25 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .scuole-scuole-e-universit-text26 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .scuole-scuole-e-universit-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: block;
          }
          .scuole-scuole-e-universit-component2 {
            text-decoration: none;
          }
          .scuole-scuole-e-universit-tutt-eventi-bottone {
            text-decoration: none;
          }
          .scuole-scuole-e-universit-container21 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .scuole-scuole-e-universit-container22 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-scuole-e-universit-text27 {
            font-style: normal;
            font-weight: 400;
          }
          .scuole-scuole-e-universit-text28 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .scuole-scuole-e-universit-news3columns {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
          }
          .scuole-scuole-e-universit-component3 {
            text-decoration: none;
          }
          .scuole-scuole-e-universit-text32 {
            display: inline-block;
          }
          .scuole-scuole-e-universit-text35 {
            display: inline-block;
            font-weight: 600;
          }
          .scuole-scuole-e-universit-link4 {
            display: contents;
          }
          .scuole-scuole-e-universit-tutti-notizie-bottone {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .scuole-scuole-e-universit-image1 {
              width: 381px;
              height: 391px;
            }
            .scuole-scuole-e-universit-container17 {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .scuole-scuole-e-universit-container18 {
              display: flex;
            }
          }
          @media (max-width: 991px) {
            .scuole-scuole-e-universit-image1 {
              width: 336px;
              height: 336px;
            }
            .scuole-scuole-e-universit-eventi-scuole-universita {
              flex-direction: column;
            }
            .scuole-scuole-e-universit-container18 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .scuole-scuole-e-universit-container17 {
              align-self: center;
            }
            .scuole-scuole-e-universit-container18 {
              width: auto;
              height: auto;
              display: flex;
              align-self: center;
              flex-direction: column;
            }
            .scuole-scuole-e-universit-news3columns {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .scuole-scuole-e-universit-image1 {
              width: 228px;
              height: 228px;
            }
            .scuole-scuole-e-universit-container15 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .scuole-scuole-e-universit-eventi-scuole-universita {
              width: 100%;
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .scuole-scuole-e-universit-container17 {
              width: auto;
            }
            .scuole-scuole-e-universit-text25 {
              width: auto;
            }
            .scuole-scuole-e-universit-container18 {
              display: flex;
            }
            .scuole-scuole-e-universit-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default ScuoleScuoleEUniversit
