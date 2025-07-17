import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import Cardwithphoto from '../../../components/cardwithphoto'
import Footer from '../../../components/footer'
import progettiPageInitialPropsTqIhResource from '../../../resources/progetti-page-initial-props-tq_ih'
import progettiPageInitialPathsTqQEResource from '../../../resources/progetti-page-initial-paths-tq_q-e'

const Progetti1 = (props) => {
  return (
    <>
      <main className="progetti1-container1">
        <Head>
          <title>Progetti - INFEAS Website</title>
          <meta property="og:title" content="Progetti - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="progetti1-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="progetti1-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="progetti1-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="progetti1-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="progetti1-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="progetti1-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="progetti1-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="progetti1-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="progetti1-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="progetti1-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="progetti1-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="progetti1-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="progetti1-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name23"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Progetti"
          rootClassName="headertipologiatargetroot-class-name18"
          headerTitleName="Progetti"
        ></Headertipologiatarget>
        <section
          id="elenco-progetti"
          className="progetti1-container2 padding-container"
        >
          <div className="progetti1-container3 thq-section-max-width">
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="progetti1-container4">
                    <Repeater
                      items={params}
                      renderItem={(ProgettiEntities) => (
                        <Fragment>
                          <Link href={`/progetti/${ProgettiEntities?.slug}`}>
                            <a>
                              <Cardwithphoto
                                fotoAlt={
                                  ProgettiEntities?.immagine?.alt || '--'
                                }
                                fotoCard={
                                  ProgettiEntities?.immagine?.url || '--'
                                }
                                nomeProgetto={ProgettiEntities?.nome}
                                rootClassName="cardwithphotoroot-class-name"
                                className="progetti1-component3"
                              ></Cardwithphoto>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              initialData={props.progettiEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name21"></Footer>
      </main>
      <style jsx>
        {`
          .progetti1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .progetti1-text10 {
            display: inline-block;
          }
          .progetti1-text11 {
            display: inline-block;
          }
          .progetti1-text12 {
            display: inline-block;
          }
          .progetti1-text13 {
            display: inline-block;
          }
          .progetti1-text14 {
            display: inline-block;
          }
          .progetti1-text15 {
            display: inline-block;
          }
          .progetti1-text16 {
            display: inline-block;
          }
          .progetti1-text17 {
            display: inline-block;
          }
          .progetti1-text18 {
            display: inline-block;
          }
          .progetti1-text19 {
            display: inline-block;
          }
          .progetti1-text20 {
            display: inline-block;
          }
          .progetti1-text21 {
            display: inline-block;
          }
          .progetti1-text22 {
            display: inline-block;
          }
          .progetti1-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetti1-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .progetti1-container4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .progetti1-component3 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Progetti1.defaultProps = {
  progettiEntities: [],
}

Progetti1.propTypes = {
  progettiEntities: PropTypes.array,
}

export default Progetti1

export async function getStaticProps(context) {
  try {
    const response = await progettiPageInitialPropsTqIhResource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        progettiEntities: response,
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
    const response = await progettiPageInitialPathsTqQEResource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
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
