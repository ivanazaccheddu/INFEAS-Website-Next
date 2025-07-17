import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import paginePageInitialPropsTqCFResource from '../../resources/pagine-page-initial-props-tq_c-f'
import paginePageInitialPathsTq5xResource from '../../resources/pagine-page-initial-paths-tq_5x'

const Pagine = (props) => {
  return (
    <>
      <div className="pagine-container">
        <Head>
          <title>Pagine - INFEAS Website</title>
          <meta property="og:title" content="Pagine - INFEAS Website" />
        </Head>
        <DataProvider
          renderSuccess={(PagineEntity) => <Fragment></Fragment>}
          initialData={props.pagineEntity}
          persistDataDuringLoading={true}
          key={props?.pagineEntity?.slug}
        />
      </div>
      <style jsx>
        {`
          .pagine-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Pagine.defaultProps = {
  pagineEntity: [],
}

Pagine.propTypes = {
  pagineEntity: PropTypes.array,
}

export default Pagine

export async function getStaticProps(context) {
  try {
    const response = await paginePageInitialPropsTqCFResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        pagineEntity: response?.data?.[0],
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
    const response = await paginePageInitialPathsTq5xResource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.attributes?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
