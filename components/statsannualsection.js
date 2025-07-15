import React, { Fragment } from 'react'

import { Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Statsrowcard from './statsrowcard'

const Statsannualsection = (props) => {
  return (
    <>
      <section
        id="statistiche-anno-sezione"
        className={`statsannualsection-numeri-a-nno ${props.rootClassName} `}
      >
        <div className="statsannualsection-container1 thq-section-max-width">
          <section tabindex className="statsannualsection-container2">
            <div className="statsannualsection-container3">
              <h2 className="heading2">{props.titolo}</h2>
            </div>
            <div className="statsannualsection-container4">
              <Repeater
                items={
                  props['stats'] || [
                    { testo: 'progetti', numero: '45' },
                    { testo: 'progetti2', numero: '41' },
                  ]
                }
                renderItem={(context_sk5gsb) => (
                  <Fragment>
                    <Statsrowcard
                      numeroStats={context_sk5gsb?.numero}
                      titoloStats={context_sk5gsb?.testo}
                      rootClassName="statsrowcardroot-class-name"
                    ></Statsrowcard>
                  </Fragment>
                )}
              />
            </div>
            <figure className="statsannualsection-container5">
              <div className="statsannualsection-container6">
                <p className="statsannualsection-text2 Pharagraph_Medium paragraph_md">
                  {props.descrizioneBreve}
                </p>
              </div>
            </figure>
          </section>
        </div>
        <img
          alt="image"
          src={props.imageSfondo}
          className="statsannualsection-image"
        />
      </section>
      <style jsx>
        {`
          .statsannualsection-numeri-a-nno {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #dbe6ea;
          }
          .statsannualsection-container1 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .statsannualsection-container2 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .statsannualsection-container3 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .statsannualsection-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .statsannualsection-container5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .statsannualsection-container6 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .statsannualsection-text2 {
            color: #000000;
            width: 50%;
          }
          .statsannualsection-image {
            top: 0px;
            right: 0px;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .statsannualsection-container6 {
              max-width: 50%;
            }
          }
          @media (max-width: 767px) {
            .statsannualsection-container6 {
              width: 100%;
            }
            .statsannualsection-text2 {
              width: 100%;
            }
            .statsannualsection-image {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .statsannualsection-container2 {
              padding: 48px 0;
            }
            .statsannualsection-container4 {
              width: 100%;
            }
            .statsannualsection-image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Statsannualsection.defaultProps = {
  titolo: 'I Numeri del 2024',
  descrizioneBreve:
    'Un progetto sperimentale che unisce Fondazione di Sardegna e Fondazione Triennale Milano per trasformare l’artigianato artistico e tradizionale in nuove opportunità di sviluppo e innovazione.',
  imageSfondo: '/external/img-numeri-1500w.png',
  stats: [
    {
      testo: 'progetti',
      numero: '45',
    },
    {
      testo: 'progetti2',
      numero: '41',
    },
  ],
  rootClassName: '',
}

Statsannualsection.propTypes = {
  titolo: PropTypes.string,
  descrizioneBreve: PropTypes.string,
  imageSfondo: PropTypes.string,
  stats: PropTypes.array,
  rootClassName: PropTypes.string,
}

export default Statsannualsection
