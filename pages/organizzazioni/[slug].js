import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import HeaderDetailsceas from '../../components/header-detailsceas'
import Contatticeas from '../../components/contatticeas'
import Contattidinamici from '../../components/contattidinamici'
import Logoceasdettaglio from '../../components/logoceasdettaglio'
import Filelisting from '../../components/filelisting'
import Ultimoaggiornamento from '../../components/ultimoaggiornamento'
import Footer from '../../components/footer'
import organizzazioniPageInitialPropsTq73Resource from '../../resources/organizzazioni-page-initial-props-tq_73'
import organizzazioniPageInitialPathsTqGpResource from '../../resources/organizzazioni-page-initial-paths-tq_gp'

const Organizzazioni = (props) => {
  return (
    <>
      <main className="organizzazioni-container10">
        <Head>
          <title>Organizzazioni - INFEAS Website</title>
          <meta property="og:title" content="Organizzazioni - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="organizzazioni-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="organizzazioni-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="organizzazioni-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="organizzazioni-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="organizzazioni-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="organizzazioni-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="organizzazioni-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="organizzazioni-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="organizzazioni-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="organizzazioni-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="organizzazioni-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="organizzazioni-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="organizzazioni-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name21"
        ></NavbarInteractive>
        <DataProvider
          renderSuccess={(OrganizzazioniEntity) => (
            <Fragment>
              <HeaderDetailsceas
                nomeCeas={OrganizzazioniEntity?.nome}
                breadcrumbs="Home / Mappa CEAS /  Dettaglio CEAS"
                rootClassName="header-detailsceasroot-class-name"
              ></HeaderDetailsceas>
              <section className="organizzazioni-container11 padding-container">
                <div className="organizzazioni-container12 thq-section-max-width">
                  <div className="organizzazioni-container13">
                    <div className="organizzazioni-container14">
                      <Contatticeas
                        sitoOrg={OrganizzazioniEntity?.sito || '--'}
                        sitoWeb={OrganizzazioniEntity?.sito || '--'}
                        indirizzo={OrganizzazioniEntity?.indirizzo || '--'}
                        provincia={
                          OrganizzazioniEntity?.provincia?.nome || '--'
                        }
                        telProvincia={OrganizzazioniEntity?.telefono || '--'}
                        emailProvincia={OrganizzazioniEntity?.email || '--'}
                      ></Contatticeas>
                      <div className="organizzazioni-container15">
                        <Repeater
                          items={OrganizzazioniEntity?.contatti_dinamici || []}
                          renderItem={(contatti_dinamici) => (
                            <Fragment>
                              <Contattidinamici
                                nomeOrg={contatti_dinamici?.nome || '--'}
                                emailOrg={contatti_dinamici?.email || '--'}
                                telefonoOrg={
                                  contatti_dinamici?.telefono || '--'
                                }
                                nomeReferente={
                                  contatti_dinamici?.referente || '--'
                                }
                                rootClassName="contattidinamiciroot-class-name"
                                tipologiaContatt={
                                  contatti_dinamici?.tipologia_contatto || '--'
                                }
                              ></Contattidinamici>
                            </Fragment>
                          )}
                        />
                      </div>
                    </div>
                    <div className="organizzazioni-dettaglio-dx">
                      <Logoceasdettaglio
                        imageAlt={OrganizzazioniEntity?.logo?.alt}
                        logoCEAS={OrganizzazioniEntity?.logo?.url || '--'}
                      ></Logoceasdettaglio>
                      <div className="organizzazioni-documenti-utili">
                        <div
                          data-thq="accordion"
                          className="organizzazioni-accordion"
                        >
                          <details
                            open
                            data-thq="accordion-trigger"
                            className="organizzazioni-trigger"
                          >
                            <summary
                              data-thq="accordion-summary"
                              className="organizzazioni-summary"
                            >
                              <span className="organizzazioni-text23 heading4">
                                Documenti Utili
                              </span>
                              <div
                                data-thq="accordion-icon"
                                className="organizzazioni-icon-container"
                              >
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  className="organizzazioni-icon1"
                                >
                                  <path
                                    d="m12 14l-4-4h8z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </summary>
                          </details>
                          <div data-thq="accordion-content">
                            <div className="organizzazioni-container16">
                              <DataProvider
                                fetchData={(params) =>
                                  fetch(
                                    `/api/organizzazioni-resource-organizzazioni?${new URLSearchParams(
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
                                    <div className="organizzazioni-container17">
                                      <Repeater
                                        items={params}
                                        renderItem={(documenti_org) => (
                                          <Fragment>
                                            <a
                                              href={
                                                documenti_org?.file?.url || '--'
                                              }
                                              target="_blank"
                                              rel="noreferrer noopener"
                                            >
                                              <Filelisting
                                                fileName={
                                                  documenti_org?.nome || '--'
                                                }
                                                rootClassName="filelistingroot-class-name9"
                                              ></Filelisting>
                                            </a>
                                          </Fragment>
                                        )}
                                        renderEmpty={() => (
                                          <Fragment>
                                            <div className="organizzazioni-container18">
                                              <span className="organizzazioni-text24">
                                                Nessun documento caricato
                                              </span>
                                            </div>
                                          </Fragment>
                                        )}
                                      />
                                    </div>
                                  </Fragment>
                                )}
                                params={{
                                  'OrganizzazioniEntity?.id':
                                    OrganizzazioniEntity?.id,
                                  locale: props?.locale ?? '',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="organizzazioni-container19"></section>
                  <Ultimoaggiornamento
                    dateTime={OrganizzazioniEntity?.updatedAt}
                    rootClassName="ultimoaggiornamentoroot-class-name"
                  ></Ultimoaggiornamento>
                </div>
              </section>
            </Fragment>
          )}
          initialData={props.organizzazioniEntity}
          persistDataDuringLoading={true}
          key={props?.organizzazioniEntity?.slug}
        />
        <Footer rootClassName="footerroot-class-name19"></Footer>
      </main>
      <style jsx>
        {`
          .organizzazioni-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni-text10 {
            display: inline-block;
          }
          .organizzazioni-text11 {
            display: inline-block;
          }
          .organizzazioni-text12 {
            display: inline-block;
          }
          .organizzazioni-text13 {
            display: inline-block;
          }
          .organizzazioni-text14 {
            display: inline-block;
          }
          .organizzazioni-text15 {
            display: inline-block;
          }
          .organizzazioni-text16 {
            display: inline-block;
          }
          .organizzazioni-text17 {
            display: inline-block;
          }
          .organizzazioni-text18 {
            display: inline-block;
          }
          .organizzazioni-text19 {
            display: inline-block;
          }
          .organizzazioni-text20 {
            display: inline-block;
          }
          .organizzazioni-text21 {
            display: inline-block;
          }
          .organizzazioni-text22 {
            display: inline-block;
          }
          .organizzazioni-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .organizzazioni-container13 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni-container14 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .organizzazioni-container15 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .organizzazioni-dettaglio-dx {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni-documenti-utili {
            gap: 0;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .organizzazioni-accordion {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .organizzazioni-trigger {
            cursor: pointer;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            background-color: var(--dl-color-theme-secondary1);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .organizzazioni-summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .organizzazioni-text23 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .organizzazioni-icon-container {
            transition: transform 0.3s ease-in-out;
          }
          .organizzazioni-icon1 {
            color: var(--dl-color-theme-neutral-light);
          }
          .organizzazioni-container16 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #f1f0f0;
          }
          .organizzazioni-container17 {
            display: flex;
            flex-direction: column;
          }
          .organizzazioni-container18 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni-text24 {
            padding-top: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .organizzazioni-container19 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .organizzazioni-container13 {
              flex-direction: column;
            }
            .organizzazioni-container14 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .organizzazioni-container13 {
              flex-direction: column;
            }
            .organizzazioni-trigger {
              background-color: var(--dl-color-theme-secondary1);
            }
            .organizzazioni-text23 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
          }
          @media (max-width: 479px) {
            .organizzazioni-dettaglio-dx {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Organizzazioni.defaultProps = {
  organizzazioniEntity: [],
}

Organizzazioni.propTypes = {
  organizzazioniEntity: PropTypes.array,
}

export default Organizzazioni

export async function getStaticProps(context) {
  try {
    const response = await organizzazioniPageInitialPropsTq73Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        organizzazioniEntity: response?.data?.[0],
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
    const response = await organizzazioniPageInitialPathsTqGpResource({})
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
