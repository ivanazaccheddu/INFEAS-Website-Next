import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavbarInteractive from '../../../components/navbar-interactive'
import Headertipologiatarget from '../../../components/headertipologiatarget'
import CardEvento from '../../../components/card-evento'
import Footer from '../../../components/footer'
import eventiPageInitialPropsTqOnResource from '../../../resources/eventi-page-initial-props-tq_on'
import eventiPageInitialPathsTqQeResource from '../../../resources/eventi-page-initial-paths-tq_qe'

const Eventi1 = (props) => {
  const router = useRouter()
  return (
    <>
      <main className="eventi1-container1">
        <Head>
          <title>Eventi - INFEAS Website</title>
          <meta property="og:title" content="Eventi - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="eventi1-text10">Per scuole e Università</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="eventi1-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="eventi1-text12">Per tutti i cittadini</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="eventi1-text13">Per i membri della Rete</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="eventi1-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="eventi1-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="eventi1-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="eventi1-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="eventi1-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="eventi1-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="eventi1-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="eventi1-text21">A proposito di INFEAS</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="eventi1-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name19"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Rete INFEAS / Eventi"
          rootClassName="headertipologiatargetroot-class-name15"
          headerTitleName="Eventi"
        ></Headertipologiatarget>
        <section
          id="elenco-eventi"
          className="eventi1-container2 padding-container"
        >
          <div className="eventi1-container3 thq-section-max-width">
            <DataProvider
              renderSuccess={(params) => (
                <Fragment>
                  <div className="grid-3">
                    <Repeater
                      items={params}
                      renderItem={(EventiEntities) => (
                        <Fragment>
                          <Link href={`/eventi/${EventiEntities?.slug}`}>
                            <a>
                              <CardEvento
                                luogo={EventiEntities?.luogo || '--'}
                                logoAlt={EventiEntities?.immagine?.alt}
                                logoORG={
                                  EventiEntities?.organizzazione?.logo?.url ||
                                  'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6870e192-5a0c-4ce0-92db-78cbb3e943f6/9774874c-4a87-4327-b196-4da9decc828b?org_if_sml=1&force_format=original'
                                }
                                idEvento={EventiEntities?.slug || '--'}
                                oraInizio={EventiEntities?.data_inizio || '--'}
                                dataEvento={EventiEntities?.data_inizio || '--'}
                                fotoEvento={
                                  EventiEntities?.immagine?.url ||
                                  'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6870e192-5a0c-4ce0-92db-78cbb3e943f6/dc6fc4e5-45d5-4c52-86f7-d8543582657a?org_if_sml=1&force_format=original'
                                }
                                nomeEvento={EventiEntities?.nome || '--'}
                                fotoEventoAlt={
                                  EventiEntities?.immagine?.alt || '--'
                                }
                                rootClassName="card-eventoroot-class-name22"
                                categoriaString={
                                  EventiEntities?.categoria_eventi?.nome || '--'
                                }
                                className="eventi1-component3"
                              ></CardEvento>
                            </a>
                          </Link>
                        </Fragment>
                      )}
                    />
                  </div>
                  <div className="eventi1-cms-pagination-node"></div>
                </Fragment>
              )}
              initialData={props.eventiEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name28"></Footer>
      </main>
      <style jsx>
        {`
          .eventi1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .eventi1-text10 {
            display: inline-block;
          }
          .eventi1-text11 {
            display: inline-block;
          }
          .eventi1-text12 {
            display: inline-block;
          }
          .eventi1-text13 {
            display: inline-block;
          }
          .eventi1-text14 {
            display: inline-block;
          }
          .eventi1-text15 {
            display: inline-block;
          }
          .eventi1-text16 {
            display: inline-block;
          }
          .eventi1-text17 {
            display: inline-block;
          }
          .eventi1-text18 {
            display: inline-block;
          }
          .eventi1-text19 {
            display: inline-block;
          }
          .eventi1-text20 {
            display: inline-block;
          }
          .eventi1-text21 {
            display: inline-block;
          }
          .eventi1-text22 {
            display: inline-block;
          }
          .eventi1-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            background-color: #dbeae3;
          }
          .eventi1-container3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-direction: column;
          }
          .eventi1-component3 {
            text-decoration: none;
          }
          .eventi1-cms-pagination-node {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

Eventi1.defaultProps = {
  eventiEntities: [],
}

Eventi1.propTypes = {
  eventiEntities: PropTypes.array,
}

export default Eventi1

export async function getStaticProps(context) {
  try {
    const response = await eventiPageInitialPropsTqOnResource({
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
        eventiEntities: response,
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
    const response = await eventiPageInitialPathsTqQeResource({})
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
