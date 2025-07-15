import React, { Fragment } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import Tag from './tag'

const Filtercomponent = (props) => {
  return (
    <>
      <div className="filtercomponent-filtercomponent">
        <span>Text</span>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/filtercomponent-resource-filtercomponent?${new URLSearchParams(
                params
              )}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
              .then((res) => res.json())
              .then((data) => data)
          }
          renderSuccess={(params) => (
            <Fragment>
              <select></select>
              <option>Option 1</option>
              <div className="filtercomponent-container">
                <Repeater
                  items={params}
                  renderItem={(context_c0t43) => (
                    <Fragment>
                      <Tag
                        nomeTag={context_c0t43?.nome}
                        rootClassName="tagroot-class-name5"
                      ></Tag>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          params={{
            locale: props?.locale ?? '',
          }}
        />
      </div>
      <style jsx>
        {`
          .filtercomponent-filtercomponent {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .filtercomponent-container {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
    </>
  )
}

export default Filtercomponent
