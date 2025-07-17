import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import FilterbyProvince from '../../../components/filterby-province'
import Cardprovince from '../../../components/cardprovince'
import Footer from '../../../components/footer'
import organizzazioniPageInitialPropsTqFNResource from '../../../resources/organizzazioni-page-initial-props-tq_f-n'
import organizzazioniPageInitialPathsTqS9Resource from '../../../resources/organizzazioni-page-initial-paths-tq_s9'

const Organizzazioni11 = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="organizzazioni11-container1">
        <Head>
          <title>Organizzazioni1 - INFEAS Website</title>
          <meta
            property="og:title"
            content="Organizzazioni1 - INFEAS Website"
          />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="organizzazioni11-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="organizzazioni11-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="organizzazioni11-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="organizzazioni11-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="organizzazioni11-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="organizzazioni11-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="organizzazioni11-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="organizzazioni11-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="organizzazioni11-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="organizzazioni11-text19">
                Materiali didattici
              </span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="organizzazioni11-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="organizzazioni11-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="organizzazioni11-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name22"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Mappa CEAS"
          rootClassName="headertipologiatargetroot-class-name17"
          headerTitleName="Mappa CEAS"
        ></Headertipologiatarget>
        <section
          id="elenco-ceas-mappa"
          className="organizzazioni11-container2 padding-container"
        >
          <div className="organizzazioni11-container3 thq-section-max-width">
            <div className="organizzazioni11-container4">
              <div className="organizzazioni11-container5">
                <div className="organizzazioni11-container6">
                  <React.Fragment>
                    <React.Fragment>
                      <iframe
                        src="https://www.google.com/maps/d/embed?mid=1H9iCa0FfFqi0OffyjrXv-din_ddUFAU"
                        width="100%"
                        height="700px"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                      ></iframe>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <FilterbyProvince
              text={
                <Fragment>
                  <span className="organizzazioni11-text23">Filtra per</span>
                </Fragment>
              }
            ></FilterbyProvince>
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="organizzazioni11-container7">
                    <Repeater
                      items={params}
                      renderItem={(OrganizzazioniEntities) => (
                        <Fragment>
                          <Link
                            href={`/organizzazioni/${OrganizzazioniEntities?.slug}`}
                          >
                            <a>
                              <Cardprovince
                                nomeCeas={OrganizzazioniEntities?.nome}
                                provincia={
                                  OrganizzazioniEntities?.provincia?.nome
                                }
                                rootClassName="cardprovinceroot-class-name"
                                className="organizzazioni11-component4"
                              ></Cardprovince>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="organizzazioni11-cms-pagination-node"></div>
                </Fragment>
              )}
              initialData={props.organizzazioniEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name20"></Footer>
      </main>
      <style jsx>
        {`
          .organizzazioni11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-text10 {
            display: inline-block;
          }
          .organizzazioni11-text11 {
            display: inline-block;
          }
          .organizzazioni11-text12 {
            display: inline-block;
          }
          .organizzazioni11-text13 {
            display: inline-block;
          }
          .organizzazioni11-text14 {
            display: inline-block;
          }
          .organizzazioni11-text15 {
            display: inline-block;
          }
          .organizzazioni11-text16 {
            display: inline-block;
          }
          .organizzazioni11-text17 {
            display: inline-block;
          }
          .organizzazioni11-text18 {
            display: inline-block;
          }
          .organizzazioni11-text19 {
            display: inline-block;
          }
          .organizzazioni11-text20 {
            display: inline-block;
          }
          .organizzazioni11-text21 {
            display: inline-block;
          }
          .organizzazioni11-text22 {
            display: inline-block;
          }
          .organizzazioni11-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .organizzazioni11-container3 {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container4 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .organizzazioni11-container5 {
            width: 100%;
          }
          .organizzazioni11-container6 {
            display: contents;
          }
          .organizzazioni11-text23 {
            display: inline-block;
          }
          .organizzazioni11-container7 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: grid;
            place-items: start;
            padding-bottom: var(--dl-layout-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .organizzazioni11-component4 {
            text-decoration: none;
          }
          .organizzazioni11-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
          }
          @media (max-width: 991px) {
            .organizzazioni11-container7 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .organizzazioni11-container7 {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Organizzazioni11.defaultProps = {
  organizzazioniEntities: [],
}

Organizzazioni11.propTypes = {
  organizzazioniEntities: PropTypes.array,
}

export default Organizzazioni11

export async function getStaticProps(context) {
  try {
    const response = await organizzazioniPageInitialPropsTqFNResource({
      ...context?.params,
      start: (context.params.page - 1) * 20,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        organizzazioniEntities: response,
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
    const response = await organizzazioniPageInitialPathsTqS9Resource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 20)
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
