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
      "serialMonitor": "Seriellovervåker"
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
      "download": "Last Ned"
    },
    "divs": {
      "copyCodeDescription": "Her kan du kopiere kildekoden du har kodet til utklippstavlen dersom du ønsker å bruke Arduino IDE eller Arduino Create for å laste opp programmet ditt.",
      "downloadXML": "Her kan du laste ned Blockuino prosjektet ditt som en XML-fil. Denne XML-filen kan du senere laste opp igjen, eller dele med andre ved å sende dem den nedlastede XML filen.",
      "uploadXML": "Her kan du laste opp en XML-fil som du har lagret fra Blockuino tidligere. Du kan også dele Blockuino-prosjekter med andre ved å sende dem den nedlastede XML-filen."
    },
    "helpMenu": {
      "label": "Få hjelp til",
      "introButton": "Hva er dette?",
      "neoPixelLabel": "Hvordan bruke LED Pixels",
      "arduinoCarLabel": "Hvordan bruke motorkontroller",
      "arduinoCarText": "Arduino Bil-prosjektet benytter en helt vanlig L293D motorkontroller. Denne kan styres ved hjelp av fire digitale pinner på Arduinoen. Arduino Bil-klossene hjelper deg på vei ved å gjøre programmeringen mye enklere!",
      "introText": "Hjelpemenyen nederst på skjermen vil alltid vise feilmeldinger, tips og triks basert på de kodeklossene som er i bruk i programmet ditt. Her vil du både finne gode feilmeldinger på koden din, samt tips for hvordan enkelte av klossene fungerer."
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
