# Heimdall


## Cosa fa l’applicazione

Il sistema Heimdall nasce per agevolare la gestione del magazzino di jerryamerica.com: e-commerce italiano attraverso cui è possibile acquistare prodotti dolciari e salati provenienti dagli USA. Jerry America ha all’interno della propria offerta merceologica anche delle Box che a seconda della loro grandezza (Small, Medium o Large) e tipologia (Netflix, Snack etc.) contengono quantità variabili di prodotti.
Heimdall è stato progettato per agevolare il lavoro dei dipendenti di Jerry America in una precisa fase di controllo dei prodotti nel magazzino: quando bisogna verificare la disponibilità delle merci da inserire nelle Box.


## Situazione Attuale

Jerryamerica.com è attualmente su Shopify.
I prodotti acquistabili sul sito di Jerry America sono inseriti all’interno della piattaforma direttamente dal pannello di controllo di Shopify. Le Box vendute su jerryamerica.com vengono preparate soltanto dopo aver ricevuto l’ordine di acquisto e dopo aver verificato in magazzino la disponibilità dei prodotti da inserire dentro le confezioni, ma quest’ultima verifica è affidata a una serie di fogli di calcolo Excel che rendono il processo lento e dispersivo. Le difficoltà maggiori si manifestano nel seguente caso: se un prodotto da inserire all’interno delle box dovesse mancare, l’addetto agli ordini ha il compito di sostituire l’articolo terminato con uno dello stesso prezzo e della stessa tipologia attraverso un copia incolla tra i vari fogli di calcolo.


## Dopo l’introduzione del sistema Heimdall

Tramite il sistema Heimdall l’addetto agli ordini non dovrà più barcamenarsi tra i vari fogli di calcolo: il sistema, infatti, permette al personale di controllare in tempo reale, attraverso pochi click, le merci disponibili per ogni Box.
Saranno presenti nel sistema: una sezione per il l’intero catalogo prodotti, un’altra per le Box e, infine, sarà possibile sostituire i prodotti mancanti in pochi istanti direttamente dall’interno della piattaforma Heimdall.


## SHOPIFY

Shopify è una piattaforma e-commerce di origini canadesi e un’ottima soluzione per commercianti che desiderano avere un negozio on-line pronto in pochi click e senza troppe spese: il piano base costa solo 29$ al mese. Ma shopify offre moltissimi altri vantaggi: gestionale integrato nella piattaforma; no configurazioni o manutenzioni dalla parte del Back-End; i server sono stabili e offrono un’ottima velocità; il servizio clienti è disponibile 24 ore su 24; e, infine, ma non meno importante per un commerciante, i layout grafici offerti dalla piattaforma sono pochi, ma studiati per offrire la miglior esperienza utente. Nel caso in cui si desiderasse un layout personalizzato, Shopify ne permette la realizzazione. Un’altra particolarità di Shopify è la possibilità di estendere le funzionalità di un negozio attraverso app che possono essere pubbliche, personalizzate o private: pubbliche, quando messe a disposizione della piattaforma a livello globale; personalizzate, quando studiate per un solo negozio e non disponibili sullo store; private, quando progettate e realizzate al di fuori della piattaforma, dedicate a un solo cliente e in grado di comunicare attraverso API con chiave dedicata. 


## Tecnologie utilizzate

L’intero progetto si basa interamente su JavaScript ES6 ed è stato implementato attraverso l’utilizzo di Express, React.js e Node.js

*	React.js: libreria JavaScript utilizzata per lo sviluppo del frontend;
*	Express: framework utilizzato per lo sviluppo del backend;
*	Node.js: runtime di JavaScript basato su JavaScript V8 di Google Chrome.
*	OAuth Code: library of components to simplify the use of OAuth2's Authorization Code Grant
*	Shopify Api
*	Shopify


## Come avviare il sistema

Il sistema è disponibile come applicazione web. Per eseguire il codice sorgente è necessario digitare -in ordine- i seguenti comandi:

git clone https://github.com/EmanueleGurini/heimdall

npm i     *

npm start

cd ./Frontend

npm i     *

npm start

*Il comando è necessario per il download dei node_modules, solo durante il primo utilizzo del sistema.



### Attenzione
Da terminale digitare __npm start__ all'interno della cartella __Front-End__ e __nodemon server.js__ all'interno della cartella __Back-End__
