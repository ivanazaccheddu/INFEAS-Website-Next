import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Eventilisting from '../components/eventilisting'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - INFEAS Website</title>
          <meta property="og:title" content="Page - INFEAS Website" />
        </Head>
        <Eventilisting rootClassName="eventilistingroot-class-name"></Eventilisting>
      </div>
      <style jsx>
        {`
          .page-container {
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

export default Page
