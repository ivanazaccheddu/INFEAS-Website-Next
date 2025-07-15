import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import FilterbyProvince from '../components/filterby-province'
import NewsListingCard from '../components/news-listing-card'
import LoghiSponsor from '../components/loghi-sponsor'
import Footer from '../components/footer'

const ReteNotizieDellaRete = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="rete-notizie-della-rete-container1">
        <Head>
          <title>Rete-Notizie-della-rete - INFEAS Website</title>
          <meta
            property="og:title"
            content="Rete-Notizie-della-rete - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="rete-notizie-della-rete-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="rete-notizie-della-rete-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="rete-notizie-della-rete-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="rete-notizie-della-rete-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="rete-notizie-della-rete-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="rete-notizie-della-rete-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="rete-notizie-della-rete-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="rete-notizie-della-rete-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="rete-notizie-della-rete-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="rete-notizie-della-rete-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="rete-notizie-della-rete-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="rete-notizie-della-rete-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="rete-notizie-della-rete-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name3"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Per i memberi della Rete / Notizie della rete"
          rootClassName="headertipologiatargetroot-class-name9"
          headerTitleName="Notizie della rete"
        ></Headertipologiatarget>
        <div className="padding-container">
          <div className="rete-notizie-della-rete-container2 thq-section-max-width">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="rete-notizie-della-rete-text23">
                    Filtra per
                  </span>
                </Fragment>
              }
            ></FilterbyProvince>
            <DataProvider
              fetchData={(params) =>
                fetch(
                  `/api/rete-notizie-della-rete-resource-rete-notizie-della-rete?${new URLSearchParams(
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
                  <div className="rete-notizie-della-rete-container3">
                    <Repeater
                      items={params}
                      renderItem={(notizie) => (
                        <Fragment>
                          <Link href={`/notizie/${notizie?.slug}`}>
                            <a>
                              <NewsListingCard
                                dateTime={notizie?.data_pubblicazione || '--'}
                                titoloNews={notizie?.nome || '--'}
                                rootClassName="news-listing-cardroot-class-name2"
                                newsDescrizione={
                                  notizie?.descrizione_breve || '--'
                                }
                                className="rete-notizie-della-rete-component3"
                              ></NewsListingCard>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="rete-notizie-della-rete-cms-pagination-node"></div>
                </Fragment>
              )}
              params={{
                'pagination[start]':
                  (parseInt(router.query?.['cPage-rq02dh'] ?? 1) - 1) * 15,
                locale: props?.locale ?? '',
              }}
            />
          </div>
        </div>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name2"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .rete-notizie-della-rete-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .rete-notizie-della-rete-text10 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text11 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text12 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text13 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text14 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text15 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text16 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text17 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text18 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text19 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text20 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text21 {
            display: inline-block;
          }
          .rete-notizie-della-rete-text22 {
            display: inline-block;
          }
          .rete-notizie-della-rete-container2 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .rete-notizie-della-rete-text23 {
            display: inline-block;
          }
          .rete-notizie-della-rete-container3 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-layout-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .rete-notizie-della-rete-component3 {
            text-decoration: none;
          }
          .rete-notizie-della-rete-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
        `}
      </style>
    </>
  )
}

export default ReteNotizieDellaRete
