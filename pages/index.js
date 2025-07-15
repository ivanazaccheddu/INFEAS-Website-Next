import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CMSMixedType,
} from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import ButtonComponent from '../components/button-component'
import Cardwithicon from '../components/cardwithicon'
import CardAlignCenter from '../components/card-align-center'
import Cardwithphoto from '../components/cardwithphoto'
import CardEvento from '../components/card-evento'
import NewsSimple from '../components/news-simple'
import Gallery from '../components/gallery'
import Statsannualsection from '../components/statsannualsection'
import TitoloBottoneLista from '../components/titolo-bottone-lista'
import EmptyContainer from '../components/empty-container'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <main className="home-container10">
        <Head>
          <title>INFEAS Website</title>
          <meta property="og:title" content="INFEAS Website" />
        </Head>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/pagine-resource-pagine?${new URLSearchParams(params)}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
              .then((res) => res.json())
              .then((data) => data?.data?.[0])
          }
          renderSuccess={(pagina_home) => (
            <Fragment>
              <NavbarInteractive
                text={
                  <Fragment>
                    <span className="home-text10">Per scuole e Università</span>
                  </Fragment>
                }
                login={
                  <Fragment>
                    <span className="home-text11">Login</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="home-text12">Per tutti i cittadini</span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="home-text13">Per i membri della Rete</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="home-text14">Mappa CEAS</span>
                  </Fragment>
                }
                text4={
                  <Fragment>
                    <span className="home-text15">Press Kit</span>
                  </Fragment>
                }
                text5={
                  <Fragment>
                    <span className="home-text16">Seguici su</span>
                  </Fragment>
                }
                login1={
                  <Fragment>
                    <span className="home-text17">Cerca</span>
                  </Fragment>
                }
                text51={
                  <Fragment>
                    <span className="home-text18">Seguici su</span>
                  </Fragment>
                }
                logoAlt="logo_Infeas"
                text122={
                  <Fragment>
                    <span className="home-text19">Materiali didattici</span>
                  </Fragment>
                }
                text142={
                  <Fragment>
                    <span className="home-text20">Notizie</span>
                  </Fragment>
                }
                register={
                  <Fragment>
                    <span className="home-text21">Register</span>
                  </Fragment>
                }
                text1121={
                  <Fragment>
                    <span className="home-text22">A proposito di INFEAS</span>
                  </Fragment>
                }
                register1={
                  <Fragment>
                    <span className="home-text23">Cerca</span>
                  </Fragment>
                }
                rootClassName="navbar-interactiveroot-class-name1"
              ></NavbarInteractive>
              <header
                id="header-home"
                aria-labelledby="Header del sito Infeas"
                className="home-header padding-container"
              >
                <div className="home-container11 thq-section-max-width">
                  <h1 className="home-text24 heading1">
                    Bentornati su INFEAS Sardegna
                  </h1>
                  <h4 className="home-text25 heading4">
                    Impariamo dalla natura, diffondiamo conoscenza, costruiamo
                    sostenibilità per la nostra comunità.
                  </h4>
                  <div className="home-bottoni">
                    <a
                      href="https://#cose-infeas"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link10"
                    >
                      <ButtonComponent
                        button="CHI SIAMO"
                        greyColor="newProp"
                        buttonName="Chi siamo"
                        className="home-chi-siamo"
                      ></ButtonComponent>
                    </a>
                    <Link href="/eventi">
                      <a className="home-link11">
                        <ButtonComponent
                          button="SCOPRI LE ATTIVITA'"
                          greyColor="newProp"
                          className="home-attivita"
                        ></ButtonComponent>
                      </a>
                    </Link>
                  </div>
                </div>
              </header>
              <section
                id="illustrazione-infeas-attivita"
                className="home-illustrazione padding-container"
              >
                <div className="home-container12 thq-section-max-width">
                  <div className="home-container13">
                    <img
                      id="immagine-principale-home"
                      alt="immagine della natura con borgo, fiume, spiaggiam cascata"
                      src="/hero-header-img.png"
                      aria-labelledby="Immagine principale, natura, bosco con fiume, cascata, spiaggia"
                      className="home-image1"
                    />
                    <article
                      id="attivita-infeas-competenze"
                      tabindex="0"
                      aria-labelledby="Attivita - formiamo competenze"
                      className="home-card-attivita1 info-card"
                    >
                      <span className="home-text26 paragraph_md">
                        Formiamo competenze
                      </span>
                      <p className="home-text27 paragraph_sm">
                        Supporto e crescita per operatori e comunità
                      </p>
                    </article>
                    <article
                      id="attivita-infeas-collaborazione-innovazione"
                      tabindex="0"
                      aria-labelledby="Facilitiamo collaborazione e innovazione"
                      className="home-card-attivita2 info-card"
                    >
                      <span className="home-text28 paragraph_md">
                        Facilitiamo collabotazione e innovazione
                      </span>
                      <p className="home-text29 paragraph_sm">
                        Idee e soluzioni condivise per un territorie sostenibile
                      </p>
                    </article>
                    <article
                      id="attivita-infeas-educhiamo-sensibilizziamo"
                      tabindex="0"
                      aria-labelledby="Educhiamo e sensibilizziamo"
                      className="home-card-attivita3 info-card"
                    >
                      <span className="home-text30 paragraph_md">
                        Educhiamo e sensibilizziamo
                      </span>
                      <p className="home-text31 paragraph_sm">
                        Percorsi e attività per diffondere la cultua della
                        sostenibiltà
                      </p>
                    </article>
                    <article
                      id="attivita-infeas-stimoliamo-partecipazione"
                      tabindex="0"
                      aria-labelledby="Stimoliamo la partecipazione"
                      className="home-card-attivita4 info-card"
                    >
                      <span className="home-text32 paragraph_md">
                        Stimoliamo la partecipazione
                      </span>
                      <p className="home-text33 paragraph_sm">
                        Coinvolgere cittadini e scuole nei progetti
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section
                id="cose-infeas"
                role="menu"
                aria-label="Cos'è Infeas"
                className="home-coseinfeas padding-container"
              >
                <div className="home-container14 thq-section-max-width">
                  <div className="home-container15">
                    <h2 className="heading2">Cos&apos;è INFEAS?</h2>
                    <p className="paragraph_xl">
                      INFEAS è il sistema regionale della Sardegna dedicato
                      all&apos;educazione ambientale e alla sostenibilità.
                      Coordina e supporta i Centri di Educazione Ambientale e
                      alla Sostenibilità (CEAS), promuove buone pratiche,
                      progetta percorsi educativi e favorisce la collaborazione
                      tra enti, comunità e istituzioni per costruire un futuro
                      sostenibile.
                    </p>
                  </div>
                  <div className="home-container16">
                    <div className="home-container17">
                      <Link href="/notizie">
                        <a>
                          <Cardwithicon
                            idCard="home-ultime-notizie"
                            imageAlt="icona conversazione"
                            rootClassName="cardwithiconroot-class-name16"
                            cardDescription="Scopri le ultime notizie"
                            className="home-component11"
                          ></Cardwithicon>
                        </a>
                      </Link>
                      <Link href="/mappa-ceas">
                        <a>
                          <Cardwithicon
                            iconCard="/Icone/icon-vedimappa.svg"
                            rootClassName="cardwithiconroot-class-name17"
                            cardDescription="Vai alla mappa dei Ceas"
                            className="home-component12"
                          ></Cardwithicon>
                        </a>
                      </Link>
                      <Cardwithicon
                        iconCard="/Icone/icon-esplora.svg"
                        rootClassName="cardwithiconroot-class-name18"
                        cardDescription="Esplora tutti i Multimedia"
                      ></Cardwithicon>
                      <Link href="/scuole-universita-eventi">
                        <a>
                          <Cardwithicon
                            iconCard="/Icone/icon-scopriattivit%C3%A3%C2%A0.svg"
                            rootClassName="cardwithiconroot-class-name19"
                            cardDescription="Scopri le attività dedicate a Scuole e Università"
                            className="home-component14"
                          ></Cardwithicon>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="home-container18"></div>
              </section>
              <section
                id="a-chi-si-rivolge-sezione"
                className="home-section-a-chi-rivolge padding-container"
              >
                <div className="home-a-chi-si-rivolge thq-section-max-width">
                  <div className="home-titolo-paragraph">
                    <div className="home-container19">
                      <h2 className="home-text36 heading2">
                        A chi si rivolge?
                      </h2>
                      <p className="home-text37 paragraph_xl">
                        Sviluppando programmi formativi e incoraggiando la
                        cooperazione tra organizzazioni, comunità locali e
                        istituzioni per un domani più verde.
                      </p>
                    </div>
                  </div>
                  <div className="home-container20">
                    <Link href="/rete-dashboard">
                      <a className="home-link15">
                        <CardAlignCenter
                          imageAlt="icon enti e organizzazioni della rete INFEAS"
                          rootClassName="card-align-centerroot-class-name6"
                          className="home-component15"
                        ></CardAlignCenter>
                      </a>
                    </Link>
                    <Link href="/scuole-universita">
                      <a className="home-link16">
                        <CardAlignCenter
                          imageAlt="icona scuole e università"
                          imageSrc="/external/scuoleeuni.svg"
                          rootClassName="card-align-centerroot-class-name"
                          nomeDestinatario="Scuole e  Università"
                          className="home-component16"
                        ></CardAlignCenter>
                      </a>
                    </Link>
                    <Link href="/cittadini">
                      <a className="home-link17">
                        <CardAlignCenter
                          imageAlt="icona cittadini"
                          imageSrc="/Icone/cittadini.svg"
                          rootClassName="card-align-centerroot-class-name1"
                          nomeDestinatario="Cittadini"
                          className="home-component17"
                        ></CardAlignCenter>
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
              <section
                id="progetti-sezione"
                className="home-temi-e-progetti padding-container"
              >
                <div className="home-container21 thq-section-max-width">
                  <div className="home-container22">
                    <h2 className="heading2">
                      Scopri i temi e progetti INFEAS
                    </h2>
                  </div>
                  <div className="home-container23">
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home-resource-home?${new URLSearchParams(
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
                          <div className="home-container24">
                            <Repeater
                              items={params}
                              renderItem={(progetti) => (
                                <Fragment>
                                  <Link href={`/progetti/${progetti?.slug}`}>
                                    <a>
                                      <Cardwithphoto
                                        fotoAlt={
                                          progetti?.immagine?.alt || '--'
                                        }
                                        fotoCard={
                                          progetti?.immagine?.url || '--'
                                        }
                                        nomeProgetto={progetti?.nome || '--'}
                                        rootClassName="cardwithphotoroot-class-name1"
                                        className="home-component18"
                                      ></Cardwithphoto>
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
                  <div className="home-container25">
                    <p className="home-text39 paragraph_xl">
                      I progetti di rete sono iniziative collaborative su temi
                      condivisi, che coinvolgono CEAS, istituzioni e comunità
                      locali per promuovere sostenibilità e innovazione.
                      Attraverso il lavoro coordinato, favoriscono buone
                      pratiche e azioni efficaci sul territorio.
                    </p>
                  </div>
                </div>
                <Link href="/progetti">
                  <a className="home-link19">
                    <ButtonComponent
                      button="Vedi tutti"
                      rootClassName="button-componentroot-class-name13"
                      className="home-progetti"
                    ></ButtonComponent>
                  </a>
                </Link>
              </section>
              <section className="home-eventi1 padding-container">
                <div className="home-container26 thq-section-max-width">
                  <div className="home-container27">
                    <h2 className="home-text40 heading2">
                      I Prossimi Appuntamenti
                    </h2>
                    <p className="home-text41 paragraph_xl">
                      Non perdere i prossimi eventi e iniziative promossi da
                      INFEAS! Scopri date, luoghi e dettagli delle attività
                      dedicate all’educazione alla sostenibilità.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="home-container28">
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home1-resource-home1?${new URLSearchParams(
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
                                          'logo Infeas'
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
                                          eventi?.immagine?.alt || '--'
                                        }
                                        rootClassName="card-eventoroot-class-name6"
                                        categoriaString={
                                          eventi?.categoria_eventi?.nome || '--'
                                        }
                                        className="home-component19"
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
                  <Link href="/eventi">
                    <a className="home-link21">
                      <ButtonComponent
                        rootClassName="button-componentroot-class-name14"
                        className="home-eventi2"
                      ></ButtonComponent>
                    </a>
                  </Link>
                  <div className="home-container30">
                    <div className="home-container31"></div>
                    <div className="home-container32">
                      <img
                        alt="image"
                        src="/arrow-sx.svg"
                        className="home-image2"
                      />
                      <img
                        alt="image"
                        src="/arrow-dx.svg"
                        className="home-image3"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="home-notizie1 padding-container">
                <div className="home-container33 thq-section-max-width">
                  <div className="home-container34">
                    <h2 className="home-text42 heading2">Notizie della rete</h2>
                    <p className="home-text43 paragraph_xl">
                      Esplora le ultime notizie riguardanti la rete Infeas,
                      inclusi bandi, scadenze importanti e presentazioni di
                      progetti innovativi. Rimani aggiornato sulle opportunità e
                      le iniziative .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="home-news3columns">
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home2-resource-home2?${new URLSearchParams(
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
                          <div className="home-container35 grid-3">
                            <Repeater
                              items={params}
                              renderItem={(notizie) => (
                                <Fragment>
                                  <Link href={`/notizie/${notizie?.slug}`}>
                                    <a>
                                      <NewsSimple
                                        border="yes"
                                        tagName={
                                          notizie?.categoria_notizie?.nome ||
                                          '--'
                                        }
                                        dataNews={
                                          notizie?.data_pubblicazione || '--'
                                        }
                                        titoloNews={notizie?.nome || '--'}
                                        rootClassName="news-simpleroot-class-name2"
                                        descrizioneBreve={
                                          notizie?.descrizione_breve || '--'
                                        }
                                        className="home-notizie-card"
                                      ></NewsSimple>
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
                  <Link href="/notizie">
                    <a className="home-link23">
                      <ButtonComponent
                        rootClassName="button-componentroot-class-name15"
                        className="home-notizie2"
                      ></ButtonComponent>
                    </a>
                  </Link>
                </div>
              </section>
              <section
                id="communita"
                className="home-community padding-container"
              >
                <div className="thq-section-max-width">
                  <div className="home-container37">
                    <h2 className="home-text44 heading2">
                      Scopri la community INFEAS
                    </h2>
                    <Gallery rootClassName="galleryroot-class-name1"></Gallery>
                  </div>
                </div>
              </section>
              <section
                id="come-funziona-banner"
                className="home-come-funziona-infeas padding-container"
              >
                <div className="home-container38 thq-section-max-width">
                  <h2 className="home-text45 heading2">
                    Come funziona Infeas?
                  </h2>
                  <Link href="/sistema-regionale-infeas">
                    <a className="home-link24">
                      <ButtonComponent
                        whiteColor="white"
                        rootClassName="button-componentroot-class-name1"
                        className="home-dettagli-infeas-bottone"
                      ></ButtonComponent>
                    </a>
                  </Link>
                </div>
                <img
                  alt="image"
                  src="/cta-comefunziona-img%20(1)-optimized-.png"
                  className="home-image4"
                />
              </section>
              <section id="stats" className="home-statistiche-anno">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/componenti-pagine2-resource-componenti-pagine2?${new URLSearchParams(
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
                        renderItem={(componenti) => (
                          <Fragment>
                            <CMSMixedType
                              itemData={componenti}
                              mappingConfiguration={{
                                'layout.statistiche': (cms_mixed_type) => (
                                  <Statsannualsection
                                    stats={componenti?.statistiche || '--'}
                                    titolo={componenti?.titolo || '--'}
                                    descrizioneBreve={
                                      componenti?.descrizione_breve || '--'
                                    }
                                  ></Statsannualsection>
                                ),
                                'layout.titolo-bottone-lista': (
                                  cms_mixed_type
                                ) => (
                                  <TitoloBottoneLista
                                    buttonUrl={componenti?.link_bottone || '--'}
                                    buttonname={
                                      componenti?.testo_bottone || '--'
                                    }
                                    entriesList={componenti?.lista}
                                    titoloSezione={componenti?.titolo || '--'}
                                  ></TitoloBottoneLista>
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
                    </Fragment>
                  )}
                  params={{
                    locale: props?.locale ?? '',
                  }}
                />
              </section>
              <section id="press-kit" className="home-press-kit">
                <div className="home-container40 heading1">
                  <h2 className="heading2">Press Kit</h2>
                </div>
                <div className="home-container41">
                  <img
                    alt="Gruppo delle persone nel bosco"
                    src="/photo-presskit.png"
                    className="home-image5"
                  />
                  <img
                    alt="image"
                    src="/line%20green.svg"
                    className="home-image6"
                  />
                </div>
                <div className="home-container42">
                  <div className="home-container43">
                    <p className="home-text47 paragraph_xxl">
                      Scopri il nostro Press Kit con materiali e risorse utili
                      per approfondire le attività e i progetti di INFEAS.
                      Visita la sezione dedicata per scaricare documenti,
                      immagini e contenuti grafici che raccontano il nostro
                      impegno per l’educazione alla sostenibilità.
                    </p>
                  </div>
                </div>
                <Link href="/press-kit">
                  <a className="home-link25">
                    <ButtonComponent
                      button="VAI ALLA SEZIONE"
                      greyColor="grey"
                      rootClassName="button-componentroot-class-name"
                      className="home-press-kit-bottone"
                    ></ButtonComponent>
                  </a>
                </Link>
              </section>
              <LoghiSponsor rootClassName="loghi-sponsorroot-class-name"></LoghiSponsor>
              <Footer rootClassName="footerroot-class-name2"></Footer>
            </Fragment>
          )}
          params={{
            locale: props?.locale ?? '',
          }}
        />
      </main>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-header {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 45vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #dbeae3;
          }
          .home-container11 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text24 {
            text-align: center;
          }
          .home-text25 {
            color: #252330;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .home-bottoni {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link10 {
            display: contents;
          }
          .home-chi-siamo {
            text-decoration: none;
          }
          .home-link11 {
            display: contents;
          }
          .home-attivita {
            text-decoration: none;
          }
          .home-illustrazione {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: 0px;
            padding-bottom: var(--dl-layout-space-fiveunits);
            background-color: #dbeae3;
          }
          .home-container12 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-container13 {
            flex: 0 0 auto;
            display: flex;
            z-index: 1;
            position: relative;
            min-height: 100%;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
          }
          .home-image1 {
            max-width: 100%;
          }
          .home-card-attivita1 {
            gap: var(--dl-layout-space-halfunit);
            top: 15%;
            left: -10%;
            max-width: 35%;
          }
          .home-text26 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            font-style: normal;
            font-weight: 500;
          }
          .home-text27 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            line-height: 130%;
          }
          .home-card-attivita2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            left: -20%;
            bottom: 20%;
            display: flex;
            z-index: 2;
            position: absolute;
            max-width: 40%;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: white;
          }
          .home-text28 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            font-style: normal;
            font-weight: 500;
          }
          .home-text29 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            line-height: 130%;
          }
          .home-card-attivita3 {
            gap: var(--dl-layout-space-halfunit);
            top: 8%;
            flex: 0 0 auto;
            right: -5%;
            display: flex;
            z-index: 2;
            position: absolute;
            max-width: 42%;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: white;
          }
          .home-text30 {
            color: var(--dl-color-theme-secondary2);
            font-weight: 500;
          }
          .home-text31 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            line-height: 130%;
          }
          .home-card-attivita4 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            right: -20%;
            bottom: 25%;
            display: flex;
            z-index: 2;
            position: absolute;
            max-width: 42%;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: white;
          }
          .home-text32 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            font-style: normal;
            font-weight: 500;
          }
          .home-text33 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            line-height: 130%;
          }
          .home-coseinfeas {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 700px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-container14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container17 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: grid;
            z-index: 1;
            align-self: stretch;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-component11 {
            text-decoration: none;
          }
          .home-component12 {
            text-decoration: none;
          }
          .home-component14 {
            text-decoration: none;
          }
          .home-container18 {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 45%;
            display: block;
            z-index: 0;
            position: absolute;
            background-color: #75b62d;
          }
          .home-section-a-chi-rivolge {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #36402b;
          }
          .home-a-chi-si-rivolge {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-titolo-paragraph {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container19 {
            gap: var(--dl-layout-space-twounits);
            width: 70%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-self: center;
            align-items: center;
            padding-right: 48px;
            flex-direction: column;
            justify-content: center;
          }
          .home-text36 {
            color: #ffffff;
          }
          .home-text37 {
            color: #ffffff;
            text-align: center;
          }
          .home-container20 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-link15 {
            display: contents;
          }
          .home-component15 {
            text-decoration: none;
          }
          .home-link16 {
            display: contents;
          }
          .home-component16 {
            text-decoration: none;
          }
          .home-link17 {
            display: contents;
          }
          .home-component17 {
            text-decoration: none;
          }
          .home-temi-e-progetti {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container21 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-container22 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-container24 {
            gap: var(--dl-layout-space-unit);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-component18 {
            text-decoration: none;
          }
          .home-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text39 {
            fill: #252330;
            color: rgb(26, 26, 26);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .home-link19 {
            display: contents;
          }
          .home-progetti {
            text-decoration: none;
          }
          .home-eventi1 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
            background-color: #dbeae3;
          }
          .home-container26 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container27 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text40 {
            font-style: normal;
            font-weight: 400;
          }
          .home-text41 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            align-self: center;
            text-align: left;
          }
          .home-container28 {
            width: 100%;
          }
          .home-component19 {
            text-decoration: none;
          }
          .home-link21 {
            display: contents;
          }
          .home-eventi2 {
            text-decoration: none;
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-container31 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container32 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: none;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image2 {
            width: 100%;
            object-fit: cover;
          }
          .home-image3 {
            width: auto;
            object-fit: cover;
          }
          .home-notizie1 {
            background-color: white;
          }
          .home-container33 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-container34 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text42 {
            font-style: normal;
            font-weight: 400;
          }
          .home-text43 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .home-news3columns {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
          }
          .home-container35 {
            gap: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-notizie-card {
            text-decoration: none;
          }
          .home-link23 {
            display: contents;
          }
          .home-notizie2 {
            text-decoration: none;
          }
          .home-community {
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-container37 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-text44 {
            align-self: center;
          }
          .home-come-funziona-infeas {
            width: 100%;
            height: 45vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-color: #36402b;
          }
          .home-container38 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text45 {
            fill: white;
            color: white;
          }
          .home-link24 {
            display: contents;
          }
          .home-dettagli-infeas-bottone {
            text-decoration: none;
          }
          .home-image4 {
            top: 0px;
            right: 0px;
            height: 100%;
            z-index: 1;
            position: absolute;
            object-fit: cover;
          }
          .home-statistiche-anno {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-press-kit {
            gap: var(--dl-layout-space-fourunits);
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
            background-color: #dbeae3;
          }
          .home-container40 {
            padding: 0px;
          }
          .home-container41 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image5 {
            width: 538px;
            height: 538px;
            z-index: 1;
            position: absolute;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
          }
          .home-image6 {
            width: 100%;
            z-index: 0;
            object-fit: cover;
          }
          .home-container42 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container43 {
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
          .home-text47 {
            text-align: center;
          }
          .home-link25 {
            display: contents;
          }
          .home-press-kit-bottone {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .home-image1 {
              max-width: 90%;
            }
            .home-card-attivita1 {
              left: -8%;
              max-width: 33%;
            }
            .home-card-attivita2 {
              left: -17%;
              max-width: 38%;
            }
            .home-card-attivita3 {
              top: 9%;
              max-width: 40%;
            }
            .home-card-attivita4 {
              right: -15%;
              max-width: 40%;
            }
            .home-container18 {
              left: 0px;
              bottom: -4px;
            }
            .home-container19 {
              width: 80%;
            }
            .home-text36 {
              text-align: center;
            }
            .home-container21 {
              padding: 0px;
            }
            .home-container24 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .home-container28 {
              width: auto;
              height: auto;
            }
            .home-image5 {
              width: 381px;
              height: 391px;
            }
          }
          @media (max-width: 991px) {
            .home-illustrazione {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-image1 {
              max-width: 80%;
            }
            .home-card-attivita1 {
              left: -5%;
            }
            .home-card-attivita2 {
              left: -7%;
              max-width: 31%;
              min-width: auto;
            }
            .home-card-attivita3 {
              top: 8%;
              right: 2%;
              max-width: 34%;
            }
            .home-card-attivita4 {
              right: -5%;
              bottom: 20%;
              max-width: 35%;
            }
            .home-container17 {
              flex-direction: row;
            }
            .home-container18 {
              left: 0px;
              bottom: 0px;
            }
            .home-container24 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-eventi1 {
              padding: var(--dl-layout-space-sixunits);
              flex-direction: column;
            }
            .home-container26 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-container27 {
              align-self: center;
            }
            .home-container33 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-image5 {
              width: 336px;
              height: 336px;
            }
          }
          @media (max-width: 767px) {
            .home-bottoni {
              width: 100%;
            }
            .home-image1 {
              max-width: 60%;
            }
            .home-card-attivita1 {
              top: 10%;
              left: 0%;
              max-width: 30%;
            }
            .home-card-attivita2 {
              left: -2%;
              max-width: 33%;
            }
            .home-card-attivita3 {
              top: 6%;
              right: 6%;
              max-width: 32%;
            }
            .home-card-attivita4 {
              right: 3%;
              max-width: 32%;
            }
            .home-coseinfeas {
              height: var(--dl-layout-size-xlarge);
              justify-content: center;
            }
            .home-container17 {
              align-items: center;
              flex-direction: column;
            }
            .home-container18 {
              top: -200px;
              right: 0px;
              height: 968px;
              padding-top: 0px;
              flex-direction: column;
              justify-content: flex-end;
            }
            .home-container19 {
              width: 100%;
            }
            .home-container20 {
              align-items: center;
              flex-direction: column;
            }
            .home-news3columns {
              display: flex;
              flex-direction: column;
            }
            .home-container35 {
              grid-template-columns: 1fr;
            }
            .home-come-funziona-infeas {
              flex-direction: column;
            }
            .home-container38 {
              width: 100%;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              width: 100%;
            }
            .home-text24 {
              text-align: center;
            }
            .home-bottoni {
              width: 100%;
              flex-direction: column;
            }
            .home-container13 {
              max-width: 70%;
            }
            .home-image1 {
              max-width: 100%;
            }
            .home-card-attivita1 {
              gap: var(--dl-layout-space-halfunit);
              top: 0%;
              left: -30%;
              padding: var(--dl-layout-space-halfunit);
              max-width: 50%;
            }
            .home-card-attivita2 {
              gap: var(--dl-layout-space-halfunit);
              left: -30%;
              bottom: 0px;
              padding: var(--dl-layout-space-halfunit);
              max-width: 45%;
            }
            .home-text29 {
              line-height: 130%;
            }
            .home-card-attivita3 {
              gap: var(--dl-layout-space-halfunit);
              top: -10%;
              right: -30%;
              padding: var(--dl-layout-space-halfunit);
              max-width: 60%;
            }
            .home-card-attivita4 {
              gap: var(--dl-layout-space-halfunit);
              right: -15%;
              bottom: 15%;
              padding: var(--dl-layout-space-halfunit);
              max-width: 40%;
              padding-right: 8px;
            }
            .home-coseinfeas {
              height: 100%;
              position: relative;
              align-items: center;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              justify-content: center;
            }
            .home-container16 {
              width: 100%;
            }
            .home-container17 {
              width: 100%;
              flex-direction: column;
            }
            .home-container18 {
              top: -200px;
              left: 0px;
              position: absolute;
            }
            .home-a-chi-si-rivolge {
              padding: var(--dl-layout-space-unit);
            }
            .home-container19 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text37 {
              width: auto;
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-temi-e-progetti {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container21 {
              padding: var(--dl-layout-space-unit);
            }
            .home-eventi1 {
              width: 100%;
              padding: var(--dl-layout-space-threeunits);
            }
            .home-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
            .home-come-funziona-infeas {
              flex-direction: column;
            }
            .home-text45 {
              fill: white;
              color: white;
            }
            .home-image5 {
              width: 228px;
              height: 228px;
            }
            .home-container43 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
