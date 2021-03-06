export default {
  // "some.translation.key": "Text for some.translation.key",
  //
  // "a": {
  //   "nested": {
  //     "key": "Text for a.nested.key"
  //   }
  // },
  //
  // "key.with.interpolation": "Text with {{anInterpolation}}"

  "common": {
    "norwegian": "Norsk",
    "english": "Engelsk",
    "done": "Ferdig",
    "shopAt": "Kjøp hos Kodegenet",
    "readAt": "Les mer hos Kodegenet",
    "header": {
      "blocks": "Blokker",
      "textCode": "Tekst (C-kode)",
      "new": "Nytt prosjekt",
      "remix": "Remix prosjekt",
      "save": "Lagre prosjekt",
      "upload": "Last opp til Arduino",
      "serialMonitor": "Seriellovervåker",
      "saved": "Lagret",
      "notSaved": "Klarte ikke lagre",
      "name": "Navn"
    },
    "index": {
      "copyToClipboard": "Kopier koden til utklippstavlen",
      "downloadToComputer": "Last ned til datamaskinen",
      "uploadFromComputer": "Last opp fra datamasinen",
      "hideArduinoCode": "Skjul Arduinokode",
      "showArduinoCode": "Vis Arduinokode",
      "visitKodegenet": "Besøk Kodegenet Kodeklubb",
      "visitGithub": "Se kildekoden på GitHub",
      "visitInstagram": "Besøk oss på Instagram",
      "visitTwitter": "Besøk oss på Twitter",
      "visitFacebook": "Besøk oss på Facebook",
      "nameFile": "Gi filen et navn:",
      "typeFileName": "Skriv ditt filnavn her...",
      "download": "Last Ned",
      "home": "Forside",
      "savedProject": "Lagrede Prosjekter",
      "news": "Nyheter",
      "documentation": "Dokumentasjon",
      "logIn": "Logg inn",
      "logOut": "Logg ut",
      "portChoose": "Velg en port...",
      "forWindows": "For Windows: ",
      "forChromebook": "For Chromebook: ",
      "blockuinoElectronWin": "Installer Blockuino-Electron for Windows: ",
      "blockuinoHex": "Installer Blockuino HEX Uploader: ",
      "blockuinoElectronIOS": "Installer Blockuino-Electron for MacOS X",
      "startSerial": "Start Seriell overvåker",
      "serialMonitor": "Seriell overvåker",
      "statusUpload": "Opplastingsstatus: ",
      "usbPort": "Usb port : ",
      "compileLog": "Kompileringslogg",
      "compileStatus": "Kompileringsstatus",
      "startUpload": "Start Opplasting",
      "uploadProject": "Last opp prosjekt",
      "arduinoSelect": "Velg en Arduino: ",
      "saveRemix": "Lagre som Remix",
      "projectName": "Her kan du lagre prosjektet ditt ved å gi prosjektet et navn",
      "openCodeNew": "Åpne Kodebiten i eget vindu",
      "aboutEditor": "Om Kodegenets Editor",
      "editorHow": "Hvordan fungerer Kode editoren",
      "loggedInWith": "Du er inlogget som ",
      "email": "Email Addresse",
      "loginKeySend": "Send innloggingsnøkkel via epost",
      "loginKey": "Innloggingsnøkkel",
      "loginKeyWrite": "Login med innloggingsnøkkel fra epost",
      "date": "Dato",
      "changes": "Endringer",
      "savedProjects": "Lagrede Projekter",
      "projectID": "Prosjekt ID ",
      "created": "Opprettet ",
      "madeBy": "Laget av ",
      "remixedBy": "Remixet av ",
      "videos": "Videoer",
      "sketch": "Sketch"

    },
    "divs": {
      "copyCodeDescription": "Her kan du kopiere kildekoden du har kodet til utklippstavlen dersom du ønsker å bruke Arduino IDE eller Arduino Create for å laste opp programmet ditt.",
      "downloadXML": "Her kan du laste ned Blockuino prosjektet ditt som en XML-fil. Denne XML-filen kan du senere laste opp igjen, eller dele med andre ved å sende dem den nedlastede XML filen.",
      "uploadXML": "Her kan du laste opp en XML-fil som du har lagret fra Blockuino tidligere. Du kan også dele Blockuino-prosjekter med andre ved å sende dem den nedlastede XML-filen.",
      "installProgram": "For å laste opp må du installere et program",
      "installedAddProgram": "Når tilleggsprogrammet er installert og kjører i bakgrunnen, kan Blockuino laste opp programmer direkte til Arduinoen via USB-inngangen på maskinen.",
      "installAddProgram": "For å laste opp fra Blockuino.no direkte til Arduinoen, må du installere et tilleggsprogram. Kodegenet har utviklet programvare for å støtte Chromebook via en Chrome App, samt Windows og Mac via en egenutviklet Electron applikasjon (beta).",
      "accountBlockuino": "Blockuino bruker samme konto som på kodegenet.no. Dersom du ikke har en Kodegenet bruker kan du opprette en på ",
      "loginKeySent": "Kodegenet har sendt en epost med en unik innloggingsnøkkel til din epost addresse. Logg inn ved å fylle den inn nedenfor",
      "docsInfo": "Blockuino er et enkelt blokk-basert verktøy for å generere Arduino kode. Klossene kan kobles sammen, og den ferdige Arduino koden kan leses av i feltet til høyre. Når koden er ferdig kan den kopieres og limes inn i Arduino IDE for å lastes opp til Arduinoen din."
    },
    "helpMenu": {
      "label": "Få hjelp til",
      "introButton": "Hva er dette?",
      "neoPixelLabel": "Hvordan bruke LED Pixels",
      "arduinoCarLabel": "Hvordan bruke motorkontroller",
      "arduinoCarText": "Arduino Bil-prosjektet benytter en helt vanlig L293D motorkontroller. Denne kan styres ved hjelp av fire digitale pinner på Arduinoen. Arduino Bil-klossene hjelper deg på vei ved å gjøre programmeringen mye enklere!",
      "introText": "Hjelpemenyen nederst på skjermen vil alltid vise feilmeldinger, tips og triks basert på de kodeklossene som er i bruk i programmet ditt. Her vil du både finne gode feilmeldinger på koden din, samt tips for hvordan enkelte av klossene fungerer.",

    },
    "errors": {
      "codeHas": "Koden har",
      "error": "feil",
      "header": "Feilmeldinger",
      "structureMissing": "Et gyldig Arduino program inneholder både setup-klossen og loop-klossen",
      "codeDisconnected": "Alle klossene må henge sammen. du har en eller flere klosser som ikke henger sammen",
      "tooManySetup": "Det kan ikke være mer enn 1 setup-kloss",
      "tooManyLoop": "Det kan ikke være mer enn 1 loop-kloss",
      "missingSerialBegin": "For å skrive til Seriell porten, må du ha med Start Seriell kommmunikasjon-klossen i setup",
      "missingSoftwareSerialBegin": "For å skrive til Software Serial, må du ha en Start Software Serial-kloss i setup",
      "missingSoftwareSerialInclude": "For å skrive til Software Serial, må du ha en Inkluder Software Serial-kloss øverst i programmet ditt",
      "variableNamedElement": "Du bør gi variablene dine et beskrivende navn, f.eks. hastighet, lampe, motor1, osv",
      "servoIncludeMissing": "For å bruke en servo motor, må du ha en Inkluder Servo Bibliotek-kloss øverst i programmet ditt",
      "servoAttachMissing": "For å bruke en servo motor, må du fortellet hvilken pin motoren styres fra via en Koble Servo-kloss i setup"
    }
  }
};
