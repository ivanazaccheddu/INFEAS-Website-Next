import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import NewsSimple from '../components/news-simple'
import EmptyPlaceholder from '../components/empty-placeholder'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ScuoleNotizie = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="scuole-notizie-container1">
        <Head>
          <title>Scuole-Notizie - INFEAS Website</title>
          <meta property="og:title" content="Scuole-Notizie - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="scuole-notizie-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="scuole-notizie-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scuole-notizie-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scuole-notizie-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scuole-notizie-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scuole-notizie-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scuole-notizie-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="scuole-notizie-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="scuole-notizie-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="scuole-notizie-text19">Materiali didattici</span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="scuole-notizie-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="scuole-notizie-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="scuole-notizie-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="scuole-notizie-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name29"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per le scuole e università / Notizie"
          rootClassName="headertipologiatargetroot-class-name23"
          headerTitleName="Notizie"
        ></Headertipologiatarget>
        <section className="padding-container">
          <div className="scuole-notizie-container2 thq-section-max-width">
            <div className="scuole-notizie-container3">
              <span className="scuole-notizie-text24 paragraph_xl">
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
            <div className="scuole-notizie-news3columns">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/scuole-notizie-resource-scuole-notizie?${new URLSearchParams(
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
                            <NewsSimple
                              border="yes"
                              tagName={news?.categoria_notizie?.nome || '--'}
                              dataNews={news?.data_pubblicazione || '--'}
                              titoloNews={news?.nome || '--'}
                              rootClassName="news-simpleroot-class-name9"
                              descrizioneBreve={news?.descrizione_breve || '--'}
                            ></NewsSimple>
                          </Fragment>
                        )}
                        renderEmpty={() => (
                          <Fragment>
                            <EmptyPlaceholder
                              testo={
                                <Fragment>
                                  <span className="scuole-notizie-text28 paragraph_xl">
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
                                  <span className="scuole-notizie-text31 paragraph_xl">
                                    <span>
                                      Nessuna notizia disponibile al momento
                                    </span>
                                    <br></br>
                                  </span>
                                </Fragment>
                              }
                              rootClassName="empty-placeholderroot-class-name1"
                            ></EmptyPlaceholder>
                          </Fragment>
                        )}
                      />
                    </div>
                    <div className="scuole-notizie-cms-pagination-node"></div>
                  </Fragment>
                )}
                params={{
                  'pagination[start]':
                    (parseInt(router.query?.['cPage-3hdq2'] ?? 1) - 1) * 15,
                  locale: props?.locale ?? '',
                }}
              />
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name20"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name26"></Footer>
      </div>
      <style jsx>
        {`
          .scuole-notizie-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scuole-notizie-text10 {
            display: inline-block;
          }
          .scuole-notizie-text11 {
            display: inline-block;
          }
          .scuole-notizie-text12 {
            display: inline-block;
          }
          .scuole-notizie-text13 {
            display: inline-block;
          }
          .scuole-notizie-text14 {
            display: inline-block;
          }
          .scuole-notizie-text15 {
            display: inline-block;
          }
          .scuole-notizie-text16 {
            display: inline-block;
          }
          .scuole-notizie-text17 {
            display: inline-block;
          }
          .scuole-notizie-text18 {
            display: inline-block;
          }
          .scuole-notizie-text19 {
            display: inline-block;
          }
          .scuole-notizie-text20 {
            display: inline-block;
          }
          .scuole-notizie-text21 {
            display: inline-block;
          }
          .scuole-notizie-text22 {
            display: inline-block;
          }
          .scuole-notizie-text23 {
            display: inline-block;
          }
          .scuole-notizie-container2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-notizie-container3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .scuole-notizie-text24 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .scuole-notizie-news3columns {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
          }
          .scuole-notizie-text28 {
            display: inline-block;
          }
          .scuole-notizie-text31 {
            display: inline-block;
            font-weight: 600;
          }
          .scuole-notizie-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .scuole-notizie-news3columns {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .scuole-notizie-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default ScuoleNotizie
