import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractive from '../components/navbar-interactive'
import Headertipologiatarget from '../components/headertipologiatarget'
import Footer from '../components/footer'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container1">
        <Head>
          <title>Privacy-Policy - INFEAS Website</title>
          <meta property="og:title" content="Privacy-Policy - INFEAS Website" />
        </Head>
        <NavbarInteractive
          text={
            <Fragment>
              <span className="privacy-policy-text10">
                Per scuole e Università
              </span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="privacy-policy-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="privacy-policy-text12">
                Per tutti i cittadini
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="privacy-policy-text13">
                Per i membri della Rete
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="privacy-policy-text14">Mappa CEAS</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="privacy-policy-text15">Press Kit</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="privacy-policy-text16">Seguici su</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="privacy-policy-text17">Cerca</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="privacy-policy-text18">Seguici su</span>
            </Fragment>
          }
          text122={
            <Fragment>
              <span className="privacy-policy-text19">Materiali didattici</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="privacy-policy-text20">Register</span>
            </Fragment>
          }
          text1121={
            <Fragment>
              <span className="privacy-policy-text21">
                A proposito di INFEAS
              </span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="privacy-policy-text22">Cerca</span>
            </Fragment>
          }
          rootClassName="navbar-interactiveroot-class-name33"
        ></NavbarInteractive>
        <Headertipologiatarget
          breadcrumb="Home / Informativa Privacy"
          rootClassName="headertipologiatargetroot-class-name26"
          headerTitleName="Informativa Privacy"
        ></Headertipologiatarget>
        <section
          id="privacypolicy"
          tabindex="0"
          className="privacy-policy-container2 padding-container"
        >
          <div className="privacy-policy-container3 thq-section-max-width">
            <span className="paragraph_xl privacy-policy-text23">
              <span>
                I contenuti all’interno del sito, siano essi testi, suoni,
                fotografie, filmati, grafica e software, sono protetti ai sensi
                delle normative sul diritto d’autore, sui brevetti e su quelle
                relative alla proprietà
              </span>
              <br></br>
              <br></br>
              <span>
                intellettuale e possono essere rilasciati in modalità Copyright,
                ovvero con tutti i diritti riservati, o in modalità Creative
                Commons, ovvero con alcuni diritti riservati.
              </span>
              <br></br>
              <br></br>
              <span>
                Laddove non diversamente specificato, la presenza dei simboli
                Copyright o Creative Commons identificano in quale delle
                modalità i contenuti contestuali sono rilasciati.
              </span>
              <br></br>
              <br></br>
              <span>
                I marchi, le denominazioni e le ditte menzionati all’interno di
                questo sito appartengono ai rispettivi proprietari o titolari e
                possono essere protetti da brevetti e/o copyright concessi o
                registrati dalle autorità preposte. Possono quindi essere
                scaricati o utilizzati solo nelle modalità previste dai diritti
                stessi, e comunque per uso non commerciale: pertanto nulla,
                neppure in parte, potrà essere riprodotto, modificato o
                rivenduto per trarne profitto.
              </span>
              <br></br>
              <br></br>
              <br className="privacy-policy-text36"></br>
              <span className="privacy-policy-text37">Utilizzo del sito</span>
              <br></br>
              <br></br>
              <span>
                In nessun caso la Citta Metropolitana di Cagliari potrà essere
                ritenuta responsabile dei danni di qualsiasi natura causati
                direttamente o indirettamente dall’accesso al sito,
                dall’utilizzo degli strumenti interattivi, dall’incapacità o
                impossibilità di accedervi, dall’utilizzo delle notizie in esso
                contenute. Sono consentite citazioni a titolo di cronaca o
                recensione se accompagnate dall’indicazione della fonte “Citta
                Metropolitana di Cagliari” e dalla sua Url.
              </span>
              <br></br>
              <br></br>
              <span>
                La Citta Metropolitana di Cagliari si riserva il diritto di
                riprodurre i testi in altre pubblicazioni.
              </span>
              <br></br>
              <br></br>
              <span>
                La Citta Metropolitana di Cagliari si riserva il diritto di
                modificare i contenuti del sito e delle note legali in qualsiasi
                momento e senza alcun preavviso.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="privacy-policy-text50">Segnalazione errori</span>
              <br></br>
              <br></br>
              <span>
                Qualora dovessero essere rilevati errori, inesattezze o
                malfunzionamenti, potranno essere inviate delle segnalazioni al
                seguente indirizzo di posta elettronica: 
              </span>
              <span>info@sardegnainfeas.it</span>
              <br></br>
              <br></br>
              <span>
                La Citta Metropolitana di Cagliari provvederà a correggerli nel
                più breve tempo possibile.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="privacy-policy-text61">
                Accesso a siti esterni collegati
              </span>
              <br></br>
              <br></br>
              <span>
                Citta Metropolitana di Cagliari non ha alcuna responsabilità per
                quanto riguarda i siti ai quali è possibile accedere tramite i
                collegamenti posti all’interno del sito stesso.
              </span>
              <br></br>
              <br></br>
              <span>
                Citta Metropolitana di Cagliari non è responsabile delle
                informazioni ottenute dall’utente tramite l’accesso ai siti
                raggiungibili tramite collegamento ipertestuale. Pertanto della
                completezza e precisione delle informazioni sono da ritenersi
                responsabili i soggetti titolari dei siti ai quali si accede
                alle condizioni dagli stessi previste.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="privacy-policy-text71">Privacy Policy</span>
              <br></br>
              <br></br>
              <span>
                Citta Metropolitana di Cagliari garantisce che il trattamento
                dei dati personali che dovessero pervenire via posta elettronica
                o moduli elettronici, anche in sede di registrazione, è conforme
                a quanto previsto dalla vigente normativa sulla privacy (d.lgs.
                30 giugno 2003, n.196, in vigore dal 1 gennaio 2004).
              </span>
              <br></br>
              <br></br>
              <span>
                In particolare essi non saranno ceduti a terzi, il loro utilizzo
                servirà esclusivamente per comunicazioni relative al sito e ai
                suoi contenuti e per l’eventuale invio di informazioni su
                argomenti attinenti ai contenuti del sito.
              </span>
              <br></br>
              <br></br>
              <span>
                I dati personali verranno trattati esclusivamente per lo
                svolgimento delle attività di cui all’articolo 24 del codice
                sulla privacy, per le quali non è richiesto il consenso
                dell’interessato.
              </span>
              <br></br>
              <br></br>
              <span>
                I diritti dell’interessato sono quelli espressamente indicati
                all’articolo 7 del codice sulla privacy e possono essere
                esercitati con richiesta rivolta senza formalità, anche mediante
                lettera raccomandata, telefax o posta elettronica (art.9 del
                d.lgs. 30 giugno 2003, n.196) al titolare o al responsabile.
                Titolare del trattamento è la Citta Metropolitana di Cagliari
                con sede in viale F.Ciusa 21 – 09131 Cagliari, responsabili del
                trattamento sono i Dirigenti delle strutture competenti per
                materia ai quali l’interessato si può rivolgere per richiedere
                informazioni relative esclusivamente ai dati personali.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="privacy-policy-text87">Download</span>
              <br></br>
              <br></br>
              <span>
                Ogni oggetto presente su questo sito per lo scaricamento
                (download) come ad esempio documentazione tecnica, normativa,
                modulistica e software ecc., salvo diversa indicazione, è
                liberamente e gratuitamente disponibile a condizione che non
                venga utilizzato per trarne profitto o per il raggiungimento di
                fini illeciti.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="privacy-policy-text94">Virus informatici</span>
              <br></br>
              <br></br>
              <span>
                Citta Metropolitana di Cagliari non garantisce che il sito sia
                privo di errori o virus. La Regione Sardegna, i suoi fornitori
                ed i suoi collaboratori non sono responsabili per i danni subiti
                dall’utente a causa di tali elementi di carattere distruttivo.
              </span>
            </span>
          </div>
        </section>
        <Footer rootClassName="footerroot-class-name31"></Footer>
      </div>
      <style jsx>
        {`
          .privacy-policy-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-text10 {
            display: inline-block;
          }
          .privacy-policy-text11 {
            display: inline-block;
          }
          .privacy-policy-text12 {
            display: inline-block;
          }
          .privacy-policy-text13 {
            display: inline-block;
          }
          .privacy-policy-text14 {
            display: inline-block;
          }
          .privacy-policy-text15 {
            display: inline-block;
          }
          .privacy-policy-text16 {
            display: inline-block;
          }
          .privacy-policy-text17 {
            display: inline-block;
          }
          .privacy-policy-text18 {
            display: inline-block;
          }
          .privacy-policy-text19 {
            display: inline-block;
          }
          .privacy-policy-text20 {
            display: inline-block;
          }
          .privacy-policy-text21 {
            display: inline-block;
          }
          .privacy-policy-text22 {
            display: inline-block;
          }
          .privacy-policy-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .privacy-policy-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .privacy-policy-text36 {
            font-weight: 700;
          }
          .privacy-policy-text37 {
            font-weight: 700;
          }
          .privacy-policy-text50 {
            font-weight: 700;
          }
          .privacy-policy-text61 {
            font-weight: 700;
          }
          .privacy-policy-text71 {
            font-weight: 700;
          }
          .privacy-policy-text87 {
            font-weight: 700;
          }
          .privacy-policy-text94 {
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .privacy-policy-text23 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default PrivacyPolicy
