import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import FilterbyProvince from '../../../components/filterby-province'
import NewsListingCard from '../../../components/news-listing-card'
import LoghiSponsor from '../../../components/loghi-sponsor'
import Footer from '../../../components/footer'
import notiziePageInitialPropsTqTnResource from '../../../resources/notizie-page-initial-props-tq_tn'
import notiziePageInitialPathsTqNdResource from '../../../resources/notizie-page-initial-paths-tq_nd'

const Notizie1 = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="notizie1-container1">
        <Head>
          <title>Notizie - INFEAS Website</title>
          <meta property="og:title" content="Notizie - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="notizie1-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="notizie1-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="notizie1-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="notizie1-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="notizie1-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="notizie1-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="notizie1-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="notizie1-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="notizie1-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="notizie1-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="notizie1-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="notizie1-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="notizie1-text22">Cerca</span>
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
          className="notizie1-container2 padding-container"
        >
          <div className="notizie1-container3 thq-section-max-width">
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="notizie1-text23">Filtra per</span>
                </Fragment>
              }
            ></FilterbyProvince>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="notizie1-container4">
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
                                className="notizie1-component4"
                              ></NewsListingCard>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="notizie1-cms-pagination-node"></div>
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
          .notizie1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .notizie1-text10 {
            display: inline-block;
          }
          .notizie1-text11 {
            display: inline-block;
          }
          .notizie1-text12 {
            display: inline-block;
          }
          .notizie1-text13 {
            display: inline-block;
          }
          .notizie1-text14 {
            display: inline-block;
          }
          .notizie1-text15 {
            display: inline-block;
          }
          .notizie1-text16 {
            display: inline-block;
          }
          .notizie1-text17 {
            display: inline-block;
          }
          .notizie1-text18 {
            display: inline-block;
          }
          .notizie1-text19 {
            display: inline-block;
          }
          .notizie1-text20 {
            display: inline-block;
          }
          .notizie1-text21 {
            display: inline-block;
          }
          .notizie1-text22 {
            display: inline-block;
          }
          .notizie1-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .notizie1-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notizie1-text23 {
            display: inline-block;
          }
          .notizie1-container4 {
            gap: var(--dl-layout-space-twounits);
            display: grid;
            margin-top: var(--dl-layout-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .notizie1-component4 {
            text-decoration: none;
          }
          .notizie1-cms-pagination-node {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-self: center;
          }
          @media (max-width: 991px) {
            .notizie1-container4 {
              flex-direction: row;
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .notizie1-container4 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Notizie1.defaultProps = {
  notizieEntities: [],
}

Notizie1.propTypes = {
  notizieEntities: PropTypes.array,
}

export default Notizie1

export async function getStaticProps(context) {
  try {
    const response = await notiziePageInitialPropsTqTnResource({
      ...context?.params,
      start: (context.params.page - 1) * 12,
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

export async function getStaticPaths() {
  try {
    const response = await notiziePageInitialPathsTqNdResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 12)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
