import React from 'react'

import { useTranslations } from 'next-intl'

const EmptyContainer = (props) => {
  return (
    <>
      <div className="empty-container-container"></div>
      <style jsx>
        {`
          .empty-container-container {
            width: 100%;
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

export default EmptyContainer
