import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Filterlabeldropdown = (props) => {
  return (
    <>
      <div className={`filterlabeldropdown-container ${props.rootClassName} `}>
        <label className="filterlabeldropdown-text">Dedicato a</label>
        <select name="Filter by" className="filterlabeldropdown-select">
          <Repeater
            items={
              props['arrayMapperEventCat'] || [
                {
                  id: 1,
                  attributes: {
                    nome: 'Lezione',
                    slug: 'lezione',
                    createdAt: '2025-06-06T07:50:27.525Z',
                    updatedAt: '2025-06-06T07:50:29.283Z',
                    publishedAt: '2025-06-06T07:50:29.278Z',
                  },
                },
                {
                  id: 2,
                  attributes: {
                    nome: 'Laboratorio',
                    slug: 'laboratorio',
                    createdAt: '2025-06-06T07:50:46.842Z',
                    updatedAt: '2025-06-06T07:50:47.691Z',
                    publishedAt: '2025-06-06T07:50:47.688Z',
                  },
                },
                {
                  id: 3,
                  attributes: {
                    nome: 'Webinar',
                    slug: 'webinar',
                    createdAt: '2025-06-06T07:51:16.872Z',
                    updatedAt: '2025-06-06T07:51:17.725Z',
                    publishedAt: '2025-06-06T07:51:17.722Z',
                  },
                },
                {
                  id: 4,
                  attributes: {
                    nome: 'Tavola Rotonda',
                    slug: 'tavola-rotonda',
                    createdAt: '2025-06-06T07:51:26.912Z',
                    updatedAt: '2025-06-06T07:51:27.633Z',
                    publishedAt: '2025-06-06T07:51:27.629Z',
                  },
                },
                {
                  id: 5,
                  attributes: {
                    nome: 'CEAS aperti',
                    slug: 'ceas-aperti',
                    createdAt: '2025-06-06T07:52:20.159Z',
                    updatedAt: '2025-06-06T07:52:20.846Z',
                    publishedAt: '2025-06-06T07:52:20.843Z',
                  },
                },
              ]
            }
            renderItem={(context_axzht) => (
              <Fragment>
                <option id={context_axzht?.id} value={context_axzht?.id}>
                  {context_axzht?.attributes?.nome}
                </option>
              </Fragment>
            )}
          />
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <style jsx>
        {`
          .filterlabeldropdown-container {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .filterlabeldropdown-text {
            font-size: 17px;
            font-weight: bold;
          }
          .filterlabeldropdown-select {
            width: 100%;
            height: 100%;
            padding-top: var(--dl-layout-space-unit);
            border-color: #5c6f82;
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          @media (max-width: 479px) {
            .filterlabeldropdown-container {
              gap: var(--dl-layout-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

Filterlabeldropdown.defaultProps = {
  rootClassName: '',
  arrayMapperEventCat: [
    {
      id: 1,
      attributes: {
        nome: 'Lezione',
        slug: 'lezione',
        createdAt: '2025-06-06T07:50:27.525Z',
        updatedAt: '2025-06-06T07:50:29.283Z',
        publishedAt: '2025-06-06T07:50:29.278Z',
      },
    },
    {
      id: 2,
      attributes: {
        nome: 'Laboratorio',
        slug: 'laboratorio',
        createdAt: '2025-06-06T07:50:46.842Z',
        updatedAt: '2025-06-06T07:50:47.691Z',
        publishedAt: '2025-06-06T07:50:47.688Z',
      },
    },
    {
      id: 3,
      attributes: {
        nome: 'Webinar',
        slug: 'webinar',
        createdAt: '2025-06-06T07:51:16.872Z',
        updatedAt: '2025-06-06T07:51:17.725Z',
        publishedAt: '2025-06-06T07:51:17.722Z',
      },
    },
    {
      id: 4,
      attributes: {
        nome: 'Tavola Rotonda',
        slug: 'tavola-rotonda',
        createdAt: '2025-06-06T07:51:26.912Z',
        updatedAt: '2025-06-06T07:51:27.633Z',
        publishedAt: '2025-06-06T07:51:27.629Z',
      },
    },
    {
      id: 5,
      attributes: {
        nome: 'CEAS aperti',
        slug: 'ceas-aperti',
        createdAt: '2025-06-06T07:52:20.159Z',
        updatedAt: '2025-06-06T07:52:20.846Z',
        publishedAt: '2025-06-06T07:52:20.843Z',
      },
    },
  ],
}

Filterlabeldropdown.propTypes = {
  rootClassName: PropTypes.string,
  arrayMapperEventCat: PropTypes.array,
}

export default Filterlabeldropdown
