import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/router'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Cardprovince from './cardprovince'

const CeasList = (props) => {
  const router = useRouter()
  const [provinceFilter, setProvinceFilter] = useState('*')
  return (
    <>
      <div className={`ceas-list-container1 ${props.rootClassName} `}>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/ceas-list-resource-ceas-list?${new URLSearchParams(
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
              <div className="ceas-list-container2">
                <Repeater
                  items={params}
                  renderItem={(province) => (
                    <Fragment>
                      <span onClick={() => setProvinceFilter(province?.id)}>
                        {province?.nome}
                      </span>
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
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/ceas-list1-resource-ceas-list1?${new URLSearchParams(
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
              <div className="ceas-list-container3">
                <Repeater
                  items={params}
                  renderItem={(organizzazioni) => (
                    <Fragment>
                      <Cardprovince
                        nomeCeas={organizzazioni?.nome}
                        provincia={organizzazioni?.provincia?.nome}
                        rootClassName="cardprovinceroot-class-name2"
                      ></Cardprovince>
                    </Fragment>
                  )}
                />
              </div>
              <div className="ceas-list-cms-pagination-node"></div>
            </Fragment>
          )}
          params={{
            'pagination[start]':
              (parseInt(router.query?.['cPage-1iwdie'] ?? 1) - 1) * 100,
            provinceFilter: provinceFilter,
            locale: props?.locale ?? '',
          }}
        />
      </div>
      <style jsx>
        {`
          .ceas-list-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .ceas-list-container2 {
            display: flex;
            flex-direction: column;
          }
          .ceas-list-container3 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: grid;
            padding-top: var(--dl-layout-space-unit);
            place-items: start;
            margin-bottom: var(--dl-layout-space-sixunits);
            padding-bottom: var(--dl-layout-space-unit);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .ceas-list-cms-pagination-node {
            display: flex;
          }

          .ceas-listroot-class-name2 {
            flex: 1;
            overflow: visible;
            margin-top: 0px;
            margin-bottom: 0px;
          }
        `}
      </style>
    </>
  )
}

CeasList.defaultProps = {
  rootClassName: '',
}

CeasList.propTypes = {
  rootClassName: PropTypes.string,
}

export default CeasList
