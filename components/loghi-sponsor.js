import React, { Fragment } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const LoghiSponsor = (props) => {
  return (
    <>
      <section
        id="loghi"
        tabindex="0"
        aria-label="Loghi sponsor"
        aria-labelledby="Elenco dei loghi sponsor"
        className={`loghi-sponsor-loghi-sponsor padding-container ${props.rootClassName} `}
      >
        <figure className="loghi-sponsor-container1 thq-section-max-width">
          <DataProvider
            fetchData={(params) =>
              fetch(
                `/api/pagine1-resource-pagine1?${new URLSearchParams(params)}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => data?.data?.[0])
            }
            renderSuccess={(context_k16wk) => (
              <Fragment>
                <Repeater
                  items={context_k16wk?.loghi || '--'}
                  renderItem={(context_ydsvd8) => (
                    <Fragment>
                      <div className="loghi-sponsor-container2">
                        <img
                          id="logo-sponsor"
                          alt={context_ydsvd8?.immagine?.alt}
                          src={context_ydsvd8?.immagine?.url || '--'}
                          aria-label="Loghi sponsor"
                          className="loghi-sponsor-image"
                        />
                      </div>
                    </Fragment>
                  )}
                />
              </Fragment>
            )}
            params={{
              locale: props?.locale ?? '',
            }}
          />
        </figure>
      </section>
      <style jsx>
        {`
          .loghi-sponsor-loghi-sponsor {
            background-color: white;
          }
          .loghi-sponsor-container1 {
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .loghi-sponsor-container2 {
            flex: 0 0 auto;
            height: 120px;
            display: flex;
            align-items: flex-start;
          }
          .loghi-sponsor-image {
            height: 100%;
            display: block;
            overflow: hidden;
            object-fit: contain;
          }

          .loghi-sponsorroot-class-name1 {
            padding: var(--dl-layout-space-threeunits);
          }

          .loghi-sponsorroot-class-name3 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name4 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name5 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name6 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name7 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name8 {
            padding: var(--dl-layout-space-threeunits);
          }

          .loghi-sponsorroot-class-name14 {
            padding: var(--dl-layout-space-threeunits);
          }

          .loghi-sponsorroot-class-name19 {
            padding: var(--dl-layout-space-threeunits);
          }

          .loghi-sponsorroot-class-name21 {
            padding: var(--dl-layout-space-threeunits);
          }

          .loghi-sponsorroot-class-name24 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name25 {
            padding: var(--dl-layout-space-threeunits);
          }
          .loghi-sponsorroot-class-name26 {
            padding: var(--dl-layout-space-threeunits);
          }
          @media (max-width: 1200px) {
            .loghi-sponsor-container1 {
              gap: var(--dl-layout-space-unit);
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .loghi-sponsor-container1 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .loghi-sponsorroot-class-name1 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name3 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name4 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name5 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name6 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name7 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name8 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name9 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name10 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name11 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name12 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name13 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name14 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name15 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name17 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name18 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name19 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name20 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name21 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name22 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name24 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name25 {
              padding: var(--dl-layout-space-threeunits);
            }
            .loghi-sponsorroot-class-name26 {
              padding: var(--dl-layout-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

LoghiSponsor.defaultProps = {
  rootClassName: '',
}

LoghiSponsor.propTypes = {
  rootClassName: PropTypes.string,
}

export default LoghiSponsor
