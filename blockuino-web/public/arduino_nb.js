goog.provide('Blockly.Msg.nb');

goog.require('Blockly.Msg');

Blockly.Msg.ARDUINO_BLINK_PIN = "Blink LED koblet til Pin: ";
Blockly.Msg.ARDUINO_BLINK_TIMES = "ganger i sekundet";
Blockly.Msg.ARDUINO_BLINK_TOOLTIP = "Denne klossen blinker LED lampen som er koblet til angitt Pin, fra 1 til 10 ganger per sekund.";

Blockly.Msg.ARDUINO_PINMODE_DEFINE = "Definer Pin: ";
Blockly.Msg.ARDUINO_PINMODE_AS = "som: ";
Blockly.Msg.ARDUINO_PINMODE_TOOLTIP = "Bruk denne klossen for å definere en pin som enten INPUT eller OUTPUT.";

Blockly.Msg.ARDUINO_DIGITAL_WRITE_DEFINE = "Sett Pin: ";
Blockly.Msg.ARDUINO_TO = "til: ";
Blockly.Msg.ARDUINO_DIGITAL_WRITE_TOOLTIP = "Bruk denne klossen for å slå av eller på spenneningen til en Pin.";

Blockly.Msg.ARDUINO_DIGITAL_READ_DEFINE = "Les fra Digial Pin: ";
Blockly.Msg.ARDUINO_DIGITAL_READ_TOOLTIP = "Bruk denne klossen for å lese enten HIGH eller LOW fra en digital Pin.";

Blockly.Msg.ARDUINO_ANALOG_READ_DEFINE = "Les fra Analog Pin: ";
Blockly.Msg.ARDUINO_ANALOG_READ_TOOLTIP = "Bruk denne klossen for å lese verdi fra 0 til 1023 fra analog Pin.";

Blockly.Msg.ARDUINO_SETUP_DEFINE = "Setup";
Blockly.Msg.ARDUINO_SETUP_TOOLTIP = "Bruk denne klossen for å forteller Arduinoen hvilke Pinner du ønsker å bruke.";

Blockly.Msg.ARDUINO_ANALOG_WRITE_PIN = "Skriv til Pin (PWM): ";
Blockly.Msg.ARDUINO_ANALOG_WRITE_VALUE = "med verdi: ";
Blockly.Msg.ARDUINO_ANALOG_WRITE_TOOLTIP = "Bruk denne klossen for skrive en pulsbreddemoduleringsverdi (fra 0 til 255) til en av portene markert med tilde (~).";

Blockly.Msg.ARDUINO_LOOP_DEFINE = "loop";
Blockly.Msg.ARDUINO_LOOP_TOOLTIP = "Arduino programmet ditt kjører inne i denne loop-funksjonen. Arduinoen vil gjenta koden så raskt den klarer så lenge den har strøm.";

Blockly.Msg.ARDUINO_DELAY_DEFINE = "Vent i: ";
Blockly.Msg.ARDUINO_DELAY_MS = "millisekunder";
Blockly.Msg.ARDUINO_DELAY_TOOLTIP = "Bruk denne klossen for å få Arduinoen til å vente litt før den fortsetter til neste kodelinje i programmet ditt.";

Blockly.Msg.ARDUINO_DECLARE_VARIABLE_DEFINE = "Lag ny variabel med navn: ";
Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE = "og type: ";
Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TOOLTIP = "Bruk denne klossen for å definere en ny variabel i programmet ditt.";

Blockly.Msg.ARDUINO_SET_VARIABLE_DEFINE = "Gi variabel: ";
Blockly.Msg.ARDUINO_SET_VARIABLE_VALUE = "verdien: ";
Blockly.Msg.ARDUINO_SET_VARIABLE_TOOLTIP = "Bruk denne klossen for å gi en variabel en ny verdi.";

Blockly.Msg.ARDUINO_VARIABLE_DEFINE = "Variabel: ";
Blockly.Msg.ARDUINO_VARIABLE_TOOLTIP = "Bruk denne klossen for å bruke en variabel.";

Blockly.Msg.ARDUINO_DIGITAL_PIN = "Digital Pin: ";
Blockly.Msg.ARDUINO_DIGITAL_PIN_TOOLTIP = "Bruk denne klossen for angi en av de digitale Pinnene.";

Blockly.Msg.ARDUINO_ANALOG_PIN = "Analog Pin: ";
Blockly.Msg.ARDUINO_ANALOG_PIN_TOOLTIP = "Bruk denne klossen for angi en av de analoge Pinnene.";

Blockly.Msg.ARDUINO_VARIABLE_VALUE = "Verdi: ";
Blockly.Msg.ARDUINO_VARIABLE_VALUE_TOOLTIP = "Bruk denne klossen for angi en av de analoge Pinnene.";

Blockly.Msg.ARDUINO_DECLARE_FUNCTION_VALUE = "Ny funksjon: ";
Blockly.Msg.ARDUINO_DECLARE_FUNCTION_RETURNS = "som returnerer: ";
Blockly.Msg.ARDUINO_DECLARE_FUNCTION_TOOLTIP = "Bruk denne klossen lage en ny funksjon.";

Blockly.Msg.ARDUINO_USE_FUNCTION_VALUE = "Funksjon: ";
Blockly.Msg.ARDUINO_USE_FUNCTION_TOOLTIP = "Bruk denne klossen for å kalle en funksjon du har laget.";

Blockly.Msg.ARDUINO_FOR_DECLARE = "Gjenta fra: ";
Blockly.Msg.ARDUINO_FOR_VARIABLE_NAME = "Med variabel: ";

Blockly.Msg.ARDUINO_USE_FUNCTION_TOOLTIP = "Bruk denne klossen for å gjenta et sett med klosser flere ganger.";

Blockly.Msg.ARDUINO_REPEAT_DECLARE = "Gjenta: ";
Blockly.Msg.ARDUINO_REPEAT_TIMES = "ganger";
Blockly.Msg.Blockly.Msg.ARDUINO_VARIABLE_NAME = "ganger";
Blockly.Msg.ARDUINO_REPEAT_TOOLTIP = "Bruk denne klossen for å gjenta et sett med klosser flere ganger.";

Blockly.Msg.ARDUINO_HIGH = "På";
Blockly.Msg.ARDUINO_LOW = "Av";

Blockly.Msg.ARDUINO_HIGH_LOW_TOOLTIP = "Bruk denne klossen for definere en Pin som Av eller På.";

Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE = "Inkluder Pixel biblioteket";
Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE_TOOPTIP = "Bruk denne klossen for å inkludere Pixel biblioteket. Brukes helt øverst i programmet ditt.";

Blockly.Msg.ARDUINO_LED_STRIP_DECLARE = "Definer LED slynge med ";
Blockly.Msg.ARDUINO_LED_STRIP_NUM_PIXELS = "antall pixler:";
Blockly.Msg.ARDUINO_LED_STRIP_PIN = "som er tilkoblet Pin: ";
Blockly.Msg.ARDUINO_LED_STRIP_TYPE = "LED type:";
Blockly.Msg.ARDUINO_LED_STRIP_TOOLTIP = "Bruk denne klossen for å definere en LED Pixel slynge.";

Blockly.Msg.ARDUINO_LED_STRIP_BEGIN = "Setup Pixels";
Blockly.Msg.ARDUINO_LED_STRIP_BEGIN_TOOLTIP = "Bruk denne klossen for å sette opp Pixel slyngen i setup funksjonen.";

Blockly.Msg.ARDUINO_LED_STRIP_SHOW = "Oppdater Pixels";
Blockly.Msg.ARDUINO_LED_STRIP_BEGIN_TOOLTIP = "Bruk denne klossen for å oppdatere slyngen med nye farger.";

Blockly.Msg.ARDUINO_LED_STRIP_COLOR_DECLARE = "Set Pixel Farge for Pixel:";
Blockly.Msg.ARDUINO_LED_STRIP_COLOR_RED = "Rød:";
Blockly.Msg.ARDUINO_LED_STRIP_COLOR_GREEN = "Grønn:";
Blockly.Msg.ARDUINO_LED_STRIP_COLOR_BLUE = "blå:";
Blockly.Msg.ARDUINO_LED_STRIP_COLOR_TOOLTIP = "Bruk denne klossen til å sette fargen ti en av Pixelene i slyngen.";
