import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyProvince from '../components/filterby-province'
import Filelisting from '../components/filelisting'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ScuoleMaterialiDidattici = (props) => {
  return (
    <>
      <main
        id="pagina-materiali-didattici"
        className="scuole-materiali-didattici-container1"
      >
        <Head>
          <title>ScuoleMateriali-didattici - INFEAS Website</title>
          <meta
            property="og:title"
            content="ScuoleMateriali-didattici - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-materiali-didattici-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-materiali-didattici-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-materiali-didattici-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-materiali-didattici-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-materiali-didattici-text14">
                Mappa CEAS
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-materiali-didattici-text15">
                Press Kit
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-materiali-didattici-text16">
                Seguici su
              </span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-materiali-didattici-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-materiali-didattici-text18">
                Seguici su
              </span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-materiali-didattici-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="scuole-materiali-didattici-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-materiali-didattici-text21">
                Register
              </span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-materiali-didattici-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-materiali-didattici-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name11"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home /  Per le scuole e università / Materiali Didattici"
          rootClassName="headertipologiatargetroot-class-name1"
          headerTitleName="Materiali didattici"
        ></Headertipologiatarget>
        <section id="elenco-materiali-didattici" className="padding-container">
          <div className="scuole-materiali-didattici-container3 thq-section-max-width">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="scuole-materiali-didattici-text24">
                    Filtra per
                  </span>
                </Fragment>
              }
              rootClassName="filterby-provinceroot-class-name1"
            ></FilterbyProvince>
            <div className="scuole-materiali-didattici-container4">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/scuole-materiali-didattici-resource-scuole-materiali-didattici?${new URLSearchParams(
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
                    <div className="scuole-materiali-didattici-container5">
                      <Repeater
                        items={params}
                        renderItem={(documenti) => (
                          <Fragment>
                            <article
                              id="materiali-didattici-provincia"
                              tabindex="0"
                              aria-labelledby="Elenco dei materiali didattici per la provicia"
                              className="scuole-materiali-didattici-container6"
                            >
                              <h4
                                id="nome-provincia"
                                data-province={
                                  documenti?.organizzazione?.provincia?.nome
                                }
                                className="province_name heading4"
                              >
                                Text
                              </h4>
                              <div className="scuole-materiali-didattici-container7">
                                <span
                                  id="nome_ceas"
                                  data-ceas={documenti?.organizzazione?.nome}
                                  className="scuole-materiali-didattici-text26 nome_ceas heading4"
                                >
                                  Seremida – Sini
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                              </div>
                              <article
                                id="materiali-didattici-ceas"
                                tabindex="0"
                                aria-labelledby="Materiali didattici di un CEAS"
                                className="scuole-materiali-didattici-cardprovincia"
                              >
                                <div className="scuole-materiali-didattici-container8">
                                  <span className="scuole-materiali-didattici-text27 paragraph_xl">
                                    Documenti utili
                                  </span>
                                  <Filelisting
                                    rootClassName="filelistingroot-class-name22"
                                    fileListingUrl={documenti?.file?.url}
                                    className="scuole-materiali-didattici-component4"
                                  ></Filelisting>
                                </div>
                              </article>
                            </article>
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
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name10"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name11"></Footer>
      </main>
      <style jsx>
        {`
          .scuole-materiali-didattici-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-materiali-didattici-text10 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text11 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text12 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text13 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text14 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text15 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text16 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text17 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text18 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text19 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text20 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text21 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text22 {
            display: inline-block;
          }
          .scuole-materiali-didattici-text23 {
            display: inline-block;
          }
          .scuole-materiali-didattici-container3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-text24 {
            display: inline-block;
          }
          .scuole-materiali-didattici-container4 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-container5 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .scuole-materiali-didattici-container6 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-container7 {
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
          }
          .scuole-materiali-didattici-text26 {
            display: flex;
          }
          .scuole-materiali-didattici-cardprovincia {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            background-color: #ffffff;
          }
          .scuole-materiali-didattici-container8 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scuole-materiali-didattici-text27 {
            font-style: normal;
            font-weight: 700;
          }
          .scuole-materiali-didattici-component4 {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .scuole-materiali-didattici-container7 {
              display: flex;
            }
            .scuole-materiali-didattici-container8 {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 991px) {
            .scuole-materiali-didattici-cardprovincia {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .scuole-materiali-didattici-cardprovincia {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .scuole-materiali-didattici-container7 {
              width: auto;
            }
            .scuole-materiali-didattici-cardprovincia {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .scuole-materiali-didattici-container8 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default ScuoleMaterialiDidattici
