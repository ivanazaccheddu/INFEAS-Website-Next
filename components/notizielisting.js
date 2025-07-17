import React from 'react'

import { useTranslations } from 'next-intl'

const Notizielisting = (props) => {
  return (
    <>
      <div className="notizielisting-container"></div>
      <style jsx>
        {`
          .notizielisting-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Notizielisting
