import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../components/navbar-interactive'
import Headertipologiatarget from '../../components/headertipologiatarget'
import FilterbyProvince from '../../components/filterby-province'
import NewsListingCard from '../../components/news-listing-card'
import LoghiSponsor from '../../components/loghi-sponsor'
import Footer from '../../components/footer'
import notiziePageInitialPropsTqIxResource from '../../resources/notizie-page-initial-props-tq_ix'

const Notizie = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="notizie-container1">
        <Head>
          <title>Notizie - INFEAS Website</title>
          <meta property="og:title" content="Notizie - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="notizie-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="notizie-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="notizie-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="notizie-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="notizie-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="notizie-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="notizie-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="notizie-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="notizie-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="notizie-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="notizie-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="notizie-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="notizie-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name18"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Rete INFEAS /Notizie"
          rootClassName="headertipologiatargetroot-class-name14"
          headerTitleName="Notizie"
        ></Headertipologiatarget>
        <section
          id="elenco-notizie"
          className="notizie-container2 padding-container"
        >
          <div className="notizie-container3 thq-section-max-width">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="notizie-text23">Filtra per</span>
                </Fragment>
              }
            ></FilterbyProvince>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="notizie-container4">
                    <Repeater
                      items={params}
                      renderItem={(NotizieEntities) => (
                        <Fragment>
                          <Link href={`/notizie/${NotizieEntities?.slug}`}>
                            <a>
                              <NewsListingCard
                                dateTime={
                                  NotizieEntities?.data_pubblicazione || '--'
                                }
                                titoloNews={NotizieEntities?.nome || '--'}
                                rootClassName="news-listing-cardroot-class-name"
                                newsDescrizione={
                                  NotizieEntities?.descrizione_breve || '--'
                                }
                                className="notizie-component4"
                              ></NewsListingCard>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="notizie-cms-pagination-node"></div>
                </Fragment>
              )}
              initialData={props.notizieEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <LoghiSponsor rootClassName="loghi-sponsorroot-class-name16"></LoghiSponsor>
        <Footer rootClassName="footerroot-class-name17"></Footer>
      </main>
      <style jsx>
        {`
          .notizie-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .notizie-text10 {
            display: inline-block;
          }
          .notizie-text11 {
            display: inline-block;
          }
          .notizie-text12 {
            display: inline-block;
          }
          .notizie-text13 {
            display: inline-block;
          }
          .notizie-text14 {
            display: inline-block;
          }
          .notizie-text15 {
            display: inline-block;
          }
          .notizie-text16 {
            display: inline-block;
          }
          .notizie-text17 {
            display: inline-block;
          }
          .notizie-text18 {
            display: inline-block;
          }
          .notizie-text19 {
            display: inline-block;
          }
          .notizie-text20 {
            display: inline-block;
          }
          .notizie-text21 {
            display: inline-block;
          }
          .notizie-text22 {
            display: inline-block;
          }
          .notizie-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .notizie-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notizie-text23 {
            display: inline-block;
          }
          .notizie-container4 {
            gap: var(--dl-layout-space-twounits);
            display: grid;
            margin-top: var(--dl-layout-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .notizie-component4 {
            text-decoration: none;
          }
          .notizie-cms-pagination-node {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-self: center;
          }
          @media (max-width: 991px) {
            .notizie-container4 {
              flex-direction: row;
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .notizie-container4 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Notizie.defaultProps = {
  notizieEntities: [],
}

Notizie.propTypes = {
  notizieEntities: PropTypes.array,
}

export default Notizie

export async function getStaticProps(context) {
  try {
    const response = await notiziePageInitialPropsTqIxResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        notizieEntities: response,
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
