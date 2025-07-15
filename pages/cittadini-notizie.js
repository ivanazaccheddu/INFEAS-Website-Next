import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyProvince from '../components/filterby-province'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const CittadiniTuttiNews = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="cittadini-tutti-news-container1">
        <Head>
          <title>CittadiniTutti-news - INFEAS Website</title>
          <meta
            property="og:title"
            content="CittadiniTutti-news - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="cittadini-tutti-news-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="cittadini-tutti-news-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="cittadini-tutti-news-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="cittadini-tutti-news-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="cittadini-tutti-news-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="cittadini-tutti-news-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="cittadini-tutti-news-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="cittadini-tutti-news-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="cittadini-tutti-news-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="cittadini-tutti-news-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          text142={
            <Fragment>
              <span className="cittadini-tutti-news-text20">Notizie</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="cittadini-tutti-news-text21">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="cittadini-tutti-news-text22">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="cittadini-tutti-news-text23">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name27"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per tutti i cittadini / Notizie"
          rootClassName="headertipologiatargetroot-class-name21"
          headerTitleName="Notizie"
        ></Headertipologiatarget>
        <section
          id="filtri-notizie-cittadini"
          className="cittadini-tutti-news-sezione-filtri-notizie padding-container"
        >
          <div className="cittadini-tutti-news-container2 thq-section-max-width">
            <span className="cittadini-tutti-news-text24 paragraph_xl">
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
                l&apos;educazione ambientale e promuovere la sostenibilità nelle
                nuove generazioni.
              </span>
            </span>
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="cittadini-tutti-news-text28">
                    Filtra per
                  </span>
                </Fragment>
              }
              rootClassName="filterby-provinceroot-class-name"
            ></FilterbyProvince>
          </div>
        </section>
        <section id="sezione-elenco-notizie" className="padding-container">
          <div className="cittadini-tutti-news-container3 thq-section-max-width">
            <div className="cittadini-tutti-news-news3columns">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/cittadini-tutti-news-resource-cittadini-tutti-news?${new URLSearchParams(
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
                renderSuccess={(params) => <Fragment></Fragment>}
                params={{
                  'pagination[start]':
                    (parseInt(router.query?.['cPage-wii47f'] ?? 1) - 1) * 12,
                  locale: props?.locale ?? '',
                }}
              />
            </div>
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name18"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name24"></Footer>
      </div>
      <style jsx>
        {`
          .cittadini-tutti-news-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cittadini-tutti-news-text10 {
            display: inline-block;
          }
          .cittadini-tutti-news-text11 {
            display: inline-block;
          }
          .cittadini-tutti-news-text12 {
            display: inline-block;
          }
          .cittadini-tutti-news-text13 {
            display: inline-block;
          }
          .cittadini-tutti-news-text14 {
            display: inline-block;
          }
          .cittadini-tutti-news-text15 {
            display: inline-block;
          }
          .cittadini-tutti-news-text16 {
            display: inline-block;
          }
          .cittadini-tutti-news-text17 {
            display: inline-block;
          }
          .cittadini-tutti-news-text18 {
            display: inline-block;
          }
          .cittadini-tutti-news-text19 {
            display: inline-block;
          }
          .cittadini-tutti-news-text20 {
            display: inline-block;
          }
          .cittadini-tutti-news-text21 {
            display: inline-block;
          }
          .cittadini-tutti-news-text22 {
            display: inline-block;
          }
          .cittadini-tutti-news-text23 {
            display: inline-block;
          }
          .cittadini-tutti-news-sezione-filtri-notizie {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .cittadini-tutti-news-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cittadini-tutti-news-text24 {
            fill: #252330;
            color: rgb(37, 35, 48);
            height: auto;
            text-align: center;
          }
          .cittadini-tutti-news-text28 {
            display: inline-block;
          }
          .cittadini-tutti-news-container3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .cittadini-tutti-news-news3columns {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .cittadini-tutti-news-news3columns {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .cittadini-tutti-news-news3columns {
              gap: var(--dl-layout-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default CittadiniTuttiNews
