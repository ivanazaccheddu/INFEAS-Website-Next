import React, { Fragment } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Tag from './tag'

const Filtercomponent = (props) => {
  return (
    <>
      <div className="filtercomponent-filtercomponent">
        <span>{props.labelCategoria}</span>
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
              <div className="filtercomponent-container">
                <Repeater
                  items={params}
                  renderItem={(context_c0t43) => (
                    <Fragment>
                      <Tag
                        idTag={context_c0t43?.id}
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

Filtercomponent.defaultProps = {
  labelCategoria: 'Categoria',
}

Filtercomponent.propTypes = {
  labelCategoria: PropTypes.string,
}

export default Filtercomponent
