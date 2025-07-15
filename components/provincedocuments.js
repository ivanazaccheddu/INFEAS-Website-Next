import React, { Fragment } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Ceasmateriali from './ceasmateriali'
import EmptyPlaceholder from './empty-placeholder'

const Provincedocuments = (props) => {
  return (
    <>
      <article
        id="materiali-didattici-provincia"
        tabindex="0"
        aria-labelledby="Elenco dei materiali didattici per la provicia"
        className="provincedocuments-provincedocuments"
      >
        <h4
          id="nome-provincia"
          className="provincedocuments-text1 province_name heading4"
        >
          {props.provName}
        </h4>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/provincedocuments-resource-provincedocuments?${new URLSearchParams(
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
              <div className="provincedocuments-container">
                <Repeater
                  items={params}
                  renderItem={(context_v2lbzo) => (
                    <Fragment>
                      <Ceasmateriali
                        fileURL={context_v2lbzo?.file?.url}
                        orgName={context_v2lbzo?.organizzazione?.nome}
                        fileListingFileName={context_v2lbzo?.nome || '--'}
                      ></Ceasmateriali>
                    </Fragment>
                  )}
                  renderEmpty={() => (
                    <Fragment>
                      <EmptyPlaceholder
                        testo={
                          <Fragment>
                            <span className="provincedocuments-text2 paragraph_xl">
                              <span>--</span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        titolo={
                          <Fragment>
                            <span className="provincedocuments-text5 paragraph_xl">
                              <span>
                                Nessun documento disponibile per questa
                                provincia
                              </span>
                              <br></br>
                            </span>
                          </Fragment>
                        }
                        rootClassName="empty-placeholderroot-class-name4"
                      ></EmptyPlaceholder>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          params={{
            provId: props.provId,
            locale: props?.locale ?? '',
          }}
        />
      </article>
      <style jsx>
        {`
          .provincedocuments-provincedocuments {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .provincedocuments-text1 {
            text-transform: uppercase;
          }
          .provincedocuments-container {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .provincedocuments-text2 {
            display: inline-block;
          }
          .provincedocuments-text5 {
            display: inline-block;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

Provincedocuments.defaultProps = {
  provId: '1',
  provName: 'Text',
}

Provincedocuments.propTypes = {
  provId: PropTypes.string,
  provName: PropTypes.string,
}

export default Provincedocuments
