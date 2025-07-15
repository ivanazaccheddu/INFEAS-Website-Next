import React, { Fragment } from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CMSMixedType,
} from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Filelisting from '../components/filelisting'
import Tag from '../components/tag'
import LinkUtilicomponent from '../components/link-utilicomponent'
import EmptyContainer from '../components/empty-container'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteInfoELineeGuida = (props) => {
  return (
    <>
      <div className="rete-info-e-linee-guida-container10">
        <Head>
          <title>Rete-Info-e-Linee-guida - INFEAS Website</title>
          <meta
            property="og:title"
            content="Rete-Info-e-Linee-guida - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-info-e-linee-guida-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-info-e-linee-guida-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-info-e-linee-guida-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-info-e-linee-guida-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-info-e-linee-guida-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-info-e-linee-guida-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-info-e-linee-guida-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-info-e-linee-guida-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-info-e-linee-guida-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-info-e-linee-guida-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-info-e-linee-guida-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-info-e-linee-guida-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-info-e-linee-guida-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name5"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i membri della Rete / Info e Linee guida"
          rootClassName="headertipologiatargetroot-class-name12"
          headerTitleName="Info e Linee guida"
        ></Headertipologiatarget>
        <section
          id="documenti-per-categoria"
          className="rete-info-e-linee-guida-container11 padding-container"
        >
          <div className="rete-info-e-linee-guida-container12 thq-section-max-width">
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/categorie-documenti1-resource-categorie-documenti1?${new URLSearchParams(
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
              renderSuccess={(info_regionali) => (
                <Fragment>
                  <div className="rete-info-e-linee-guida-container13">
                    <div
                      data-thq="accordion"
                      className="rete-info-e-linee-guida-accordiondocs1"
                    >
                      <details
                        data-thq="accordion-trigger"
                        className="rete-info-e-linee-guida-trigger1"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="rete-info-e-linee-guida-summary1"
                        >
                          <span className="rete-info-e-linee-guida-text23 heading4">
                            {info_regionali?.nome}
                          </span>
                          <div
                            data-thq="accordion-icon"
                            className="rete-info-e-linee-guida-icon-container1"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              className="rete-info-e-linee-guida-icon1"
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
                        <div className="rete-info-e-linee-guida-container14">
                          <div className="rete-info-e-linee-guida-container15">
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/rete-info-e-linee-guida-resource-rete-info-e-linee-guida?${new URLSearchParams(
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
                                  <div className="rete-info-e-linee-guida-container16">
                                    <Repeater
                                      items={params}
                                      renderItem={(context_d3as2) => (
                                        <Fragment>
                                          <Filelisting
                                            fileName={context_d3as2?.nome}
                                            rootClassName="filelistingroot-class-name18"
                                            fileListingUrl={
                                              context_d3as2?.file?.url
                                            }
                                          ></Filelisting>
                                        </Fragment>
                                      )}
                                    />
                                  </div>
                                </Fragment>
                              )}
                              params={{
                                'info_regionali?.id': info_regionali?.id,
                                locale: props?.locale ?? '',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div data-thq="accordion-content">
                        <div className="rete-info-e-linee-guida-container17">
                          <div className="rete-info-e-linee-guida-container18">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image1"
                            />
                            <span className="paragraph_xl">
                              Locandina INFEAS 2024
                            </span>
                          </div>
                          <div className="rete-info-e-linee-guida-container19">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image2"
                            />
                            <span className="paragraph_xl">
                              Locandina Ceas Aperti
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              params={{
                locale: props?.locale ?? '',
              }}
            />
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/categorie-documenti2-resource-categorie-documenti2?${new URLSearchParams(
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
              renderSuccess={(info_nazionali) => (
                <Fragment>
                  <div className="rete-info-e-linee-guida-container20">
                    <div
                      data-thq="accordion"
                      className="rete-info-e-linee-guida-accordiondocs2"
                    >
                      <details
                        data-thq="accordion-trigger"
                        className="rete-info-e-linee-guida-trigger2"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="rete-info-e-linee-guida-summary2"
                        >
                          <span className="rete-info-e-linee-guida-text26 heading4">
                            {info_nazionali?.nome}
                          </span>
                          <div
                            data-thq="accordion-icon"
                            className="rete-info-e-linee-guida-icon-container2"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              className="rete-info-e-linee-guida-icon3"
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
                        <div className="rete-info-e-linee-guida-container21">
                          <div className="rete-info-e-linee-guida-container22">
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/rete-info-e-linee-guida1-resource-rete-info-e-linee-guida1?${new URLSearchParams(
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
                                  <div className="rete-info-e-linee-guida-container23">
                                    <Repeater
                                      items={params}
                                      renderItem={(context_d3as2) => (
                                        <Fragment>
                                          <Filelisting
                                            fileName={context_d3as2?.nome}
                                            rootClassName="filelistingroot-class-name19"
                                            fileListingUrl={
                                              context_d3as2?.file?.url
                                            }
                                          ></Filelisting>
                                        </Fragment>
                                      )}
                                    />
                                  </div>
                                </Fragment>
                              )}
                              params={{
                                'info_nazionali?.id': info_nazionali?.id,
                                locale: props?.locale ?? '',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div data-thq="accordion-content">
                        <div className="rete-info-e-linee-guida-container24">
                          <div className="rete-info-e-linee-guida-container25">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image3"
                            />
                            <span className="paragraph_xl">
                              Locandina INFEAS 2024
                            </span>
                          </div>
                          <div className="rete-info-e-linee-guida-container26">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image4"
                            />
                            <span className="paragraph_xl">
                              Locandina Ceas Aperti
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              params={{
                locale: props?.locale ?? '',
              }}
            />
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/categorie-documenti3-resource-categorie-documenti3?${new URLSearchParams(
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
              renderSuccess={(altri_documenti) => (
                <Fragment>
                  <div className="rete-info-e-linee-guida-container27">
                    <div
                      data-thq="accordion"
                      className="rete-info-e-linee-guida-accordiondocs3"
                    >
                      <details
                        data-thq="accordion-trigger"
                        className="rete-info-e-linee-guida-trigger3"
                      >
                        <summary
                          data-thq="accordion-summary"
                          className="rete-info-e-linee-guida-summary3"
                        >
                          <span className="rete-info-e-linee-guida-text29 heading4">
                            {altri_documenti?.nome}
                          </span>
                          <div
                            data-thq="accordion-icon"
                            className="rete-info-e-linee-guida-icon-container3"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              className="rete-info-e-linee-guida-icon5"
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
                        <div className="rete-info-e-linee-guida-container28">
                          <div className="rete-info-e-linee-guida-container29">
                            <DataProvider
                              fetchData={(params) =>
                                fetch(
                                  `/api/rete-info-e-linee-guida2-resource-rete-info-e-linee-guida2?${new URLSearchParams(
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
                                  <div className="rete-info-e-linee-guida-container30">
                                    <Repeater
                                      items={params}
                                      renderItem={(elenco_altri_documenti) => (
                                        <Fragment>
                                          <Filelisting
                                            fileName={
                                              elenco_altri_documenti?.nome
                                            }
                                            rootClassName="filelistingroot-class-name20"
                                            fileListingUrl={
                                              elenco_altri_documenti?.file?.url
                                            }
                                          ></Filelisting>
                                        </Fragment>
                                      )}
                                    />
                                  </div>
                                </Fragment>
                              )}
                              params={{
                                'altri_documenti?.id': altri_documenti?.id,
                                locale: props?.locale ?? '',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div data-thq="accordion-content">
                        <div className="rete-info-e-linee-guida-container31">
                          <div className="rete-info-e-linee-guida-container32">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image5"
                            />
                            <span className="paragraph_xl">
                              Locandina INFEAS 2024
                            </span>
                          </div>
                          <div className="rete-info-e-linee-guida-container33">
                            <img
                              alt="image"
                              src="/icondownload.svg"
                              className="rete-info-e-linee-guida-image6"
                            />
                            <span className="paragraph_xl">
                              Locandina Ceas Aperti
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              params={{
                locale: props?.locale ?? '',
              }}
            />
          </div>
        </section>
        <section
          id="link-utili"
          className="rete-info-e-linee-guida-container34 padding-container"
        >
          <div className="rete-info-e-linee-guida-container35 thq-section-max-width">
            <div className="rete-info-e-linee-guida-container36">
              <h1 className="heading4">LINK UTILI</h1>
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/componenti-pagine1-resource-componenti-pagine1?${new URLSearchParams(
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
                renderSuccess={(info_linee_guida) => (
                  <Fragment>
                    <Repeater
                      items={info_linee_guida?.componenti || []}
                      renderItem={(componenti_pagine) => (
                        <Fragment>
                          <CMSMixedType
                            itemData={info_linee_guida?.componenti}
                            mappingConfiguration={{
                              'layout.logo': (cms_mixed_type) => <Tag></Tag>,
                              'componenti-di-inserimento.link-utili': (
                                cms_mixed_type
                              ) => (
                                <LinkUtilicomponent
                                  nomeLink="44"
                                  usefulLink="44"
                                ></LinkUtilicomponent>
                              ),
                            }}
                            renderDefault={(cms_mixed_type) => (
                              <EmptyContainer></EmptyContainer>
                            )}
                            renderError={(cms_mixed_type) => (
                              <div>
                                Error Component. Something wrong happend and you
                                did not provide an error component.
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
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name4"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .rete-info-e-linee-guida-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-text10 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text11 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text12 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text13 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text14 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text15 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text16 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text17 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text18 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text19 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text20 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text21 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-text22 {
            display: inline-block;
          }
          .rete-info-e-linee-guida-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .rete-info-e-linee-guida-container12 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-container13 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .rete-info-e-linee-guida-accordiondocs1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-trigger1 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .rete-info-e-linee-guida-summary1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .rete-info-e-linee-guida-text23 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .rete-info-e-linee-guida-icon-container1 {
            transition: transform 0.3s ease-in-out;
          }
          .rete-info-e-linee-guida-icon1 {
            fill: #ffffff;
          }
          .rete-info-e-linee-guida-container14 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-container16 {
            display: flex;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-container17 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image1 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container19 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image2 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container20 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .rete-info-e-linee-guida-accordiondocs2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-trigger2 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .rete-info-e-linee-guida-summary2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .rete-info-e-linee-guida-text26 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .rete-info-e-linee-guida-icon-container2 {
            transition: transform 0.3s ease-in-out;
          }
          .rete-info-e-linee-guida-icon3 {
            fill: #ffffff;
          }
          .rete-info-e-linee-guida-container21 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-container23 {
            display: flex;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-container24 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container25 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image3 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container26 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image4 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container27 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .rete-info-e-linee-guida-accordiondocs3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: 14px;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-trigger3 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 14px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-twounits);
            background-color: #eeeded;
          }
          .rete-info-e-linee-guida-summary3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .rete-info-e-linee-guida-text29 {
            fill: #464957;
            color: rgb(70, 73, 87);
          }
          .rete-info-e-linee-guida-icon-container3 {
            transition: transform 0.3s ease-in-out;
          }
          .rete-info-e-linee-guida-icon5 {
            fill: #ffffff;
          }
          .rete-info-e-linee-guida-container28 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container29 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-container30 {
            display: flex;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-container31 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .rete-info-e-linee-guida-container32 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image5 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container33 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .rete-info-e-linee-guida-image6 {
            width: 3vh;
            object-fit: cover;
          }
          .rete-info-e-linee-guida-container34 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .rete-info-e-linee-guida-container35 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .rete-info-e-linee-guida-container36 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .rete-info-e-linee-guida-container14 {
              width: auto;
            }
            .rete-info-e-linee-guida-container15 {
              flex-direction: row;
            }
            .rete-info-e-linee-guida-container21 {
              width: auto;
            }
            .rete-info-e-linee-guida-container22 {
              flex-direction: row;
            }
            .rete-info-e-linee-guida-container28 {
              width: auto;
            }
            .rete-info-e-linee-guida-container29 {
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .rete-info-e-linee-guida-container14 {
              width: auto;
              flex-direction: column;
            }
            .rete-info-e-linee-guida-container15 {
              flex-direction: row;
            }
            .rete-info-e-linee-guida-container21 {
              width: auto;
              flex-direction: column;
            }
            .rete-info-e-linee-guida-container22 {
              flex-direction: row;
            }
            .rete-info-e-linee-guida-container28 {
              width: auto;
              flex-direction: column;
            }
            .rete-info-e-linee-guida-container29 {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

export default ReteInfoELineeGuida
