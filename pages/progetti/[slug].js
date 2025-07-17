import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import HeaderVector from '../../components/header-vector'
import ProgectDetails from '../../components/progect-details'
import NewsSimple from '../../components/news-simple'
import CardEvento from '../../components/card-evento'
import Footer from '../../components/footer'
import progettoDettaglioPageInitialPropsTqDGResource from '../../resources/progetto-dettaglio-page-initial-props-tq_d-g'
import progettoDettaglioPageInitialPathsTqGmResource from '../../resources/progetto-dettaglio-page-initial-paths-tq_gm'

const ProgettoDettaglio = (props) => {
  return (
    <>
      <main
        id="pagina-dettaglio-progetto"
        className="progetto-dettaglio-container10"
      >
        <Head>
          <title>Progetto-dettaglio - INFEAS Website</title>
          <meta
            property="og:title"
            content="Progetto-dettaglio - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="progetto-dettaglio-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="progetto-dettaglio-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="progetto-dettaglio-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="progetto-dettaglio-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="progetto-dettaglio-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="progetto-dettaglio-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="progetto-dettaglio-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="progetto-dettaglio-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="progetto-dettaglio-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="progetto-dettaglio-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="progetto-dettaglio-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="progetto-dettaglio-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="progetto-dettaglio-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name24"
        ></NavbarInteractive>
        <DataProvider
          renderSuccess={(ProgettiEntity) => (
            <Fragment>
              <HeaderVector
                breadcrumb="Home / Progetti"
                titoloHeader={ProgettiEntity?.nome}
                rootClassName="header-vectorroot-class-name1"
              ></HeaderVector>
              <section className="progetto-dettaglio-container11 padding-container">
                <div className="progetto-dettaglio-container12 thq-section-max-width">
                  <ProgectDetails
                    imageAlt={ProgettiEntity?.immagine?.alt}
                    projectImage={ProgettiEntity?.immagine?.url || '--'}
                    descrizionProgetto={ProgettiEntity?.descrizione}
                  ></ProgectDetails>
                </div>
              </section>
              <section
                id="notizie-progetto"
                className="progetto-dettaglio-container13 padding-container"
              >
                <div className="progetto-dettaglio-container14 thq-section-max-width">
                  <div className="progetto-dettaglio-container15">
                    <h2 className="progetto-dettaglio-text23 heading2">
                      Notizie dal Progetto
                    </h2>
                    <p className="progetto-dettaglio-text24 paragraph_xl">
                      Resta aggiornato con le ultime news che riguardano questo
                      progetto
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="progetto-dettaglio-container16">
                    <Repeater
                      items={ProgettiEntity?.notizie || []}
                      renderItem={(notizie_progetti) => (
                        <Fragment>
                          <NewsSimple
                            border="yes"
                            tagName={
                              notizie_progetti?.categoria_notizie?.nome || '--'
                            }
                            dataNews={notizie_progetti?.data_pubblicazione}
                            titoloNews={notizie_progetti?.nome}
                            rootClassName="news-simpleroot-class-name1"
                            descrizioneBreve={
                              notizie_progetti?.descrizione_breve
                            }
                          ></NewsSimple>
                        </Fragment>
                      )}
                    />
                  </div>
                </div>
              </section>
              <section
                id="eventi-progetto"
                className="progetto-dettaglio-container17 padding-container"
              >
                <div className="progetto-dettaglio-container18 thq-section-max-width">
                  <div className="progetto-dettaglio-container19">
                    <h2 className="progetto-dettaglio-text25 heading2">
                      Eventi del Progetto
                    </h2>
                    <p className="progetto-dettaglio-text26 paragraph_xl">
                      Tutti gli appuntamenti da non perdere dedicati al
                      progetto.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="progetto-dettaglio-container20">
                    <Repeater
                      items={ProgettiEntity?.eventi || []}
                      renderItem={(eventi_progetti) => (
                        <Fragment>
                          <CardEvento
                            luogo={eventi_progetti?.luogo || '--'}
                            logoAlt={eventi_progetti?.organizzazione?.logo?.alt}
                            logoORG={eventi_progetti?.organizzazione?.logo?.url}
                            idEvento={eventi_progetti?.slug}
                            oraInizio={eventi_progetti?.data_inizio || '--'}
                            dataEvento={eventi_progetti?.data_inizio}
                            fotoEvento={eventi_progetti?.immagine?.url}
                            nomeEvento={eventi_progetti?.nome}
                            fotoEventoAlt={eventi_progetti?.immagine?.alt}
                            rootClassName="card-eventoroot-class-name35"
                            categoriaString={
                              eventi_progetti?.categoria_eventi?.nome || '--'
                            }
                          ></CardEvento>
                        </Fragment>
                      )}
                    />
                  </div>
                </div>
              </section>
            </Fragment>
          )}
          initialData={props.progettiEntity}
          persistDataDuringLoading={true}
          key={props?.progettiEntity?.slug}
        />
        <Footer rootClassName="footerroot-class-name22"></Footer>
      </main>
      <style jsx>
        {`
          .progetto-dettaglio-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .progetto-dettaglio-text10 {
            display: inline-block;
          }
          .progetto-dettaglio-text11 {
            display: inline-block;
          }
          .progetto-dettaglio-text12 {
            display: inline-block;
          }
          .progetto-dettaglio-text13 {
            display: inline-block;
          }
          .progetto-dettaglio-text14 {
            display: inline-block;
          }
          .progetto-dettaglio-text15 {
            display: inline-block;
          }
          .progetto-dettaglio-text16 {
            display: inline-block;
          }
          .progetto-dettaglio-text17 {
            display: inline-block;
          }
          .progetto-dettaglio-text18 {
            display: inline-block;
          }
          .progetto-dettaglio-text19 {
            display: inline-block;
          }
          .progetto-dettaglio-text20 {
            display: inline-block;
          }
          .progetto-dettaglio-text21 {
            display: inline-block;
          }
          .progetto-dettaglio-text22 {
            display: inline-block;
          }
          .progetto-dettaglio-container11 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .progetto-dettaglio-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetto-dettaglio-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            background-color: white;
          }
          .progetto-dettaglio-container14 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .progetto-dettaglio-container15 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .progetto-dettaglio-text23 {
            font-style: normal;
            font-weight: 400;
          }
          .progetto-dettaglio-text24 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .progetto-dettaglio-container16 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .progetto-dettaglio-container17 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetto-dettaglio-container18 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .progetto-dettaglio-container19 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .progetto-dettaglio-text25 {
            font-style: normal;
            font-weight: 400;
          }
          .progetto-dettaglio-text26 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .progetto-dettaglio-container20 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .progetto-dettaglio-container14 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .progetto-dettaglio-container18 {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

ProgettoDettaglio.defaultProps = {
  progettiEntity: [],
}

ProgettoDettaglio.propTypes = {
  progettiEntity: PropTypes.array,
}

export default ProgettoDettaglio

export async function getStaticProps(context) {
  try {
    const response = await progettoDettaglioPageInitialPropsTqDGResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        progettiEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await progettoDettaglioPageInitialPathsTqGmResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.attributes?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
