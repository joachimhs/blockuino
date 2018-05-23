This is an alpha version of the Blockuino Chrome App which enables Blockuino to upload pre-compiled Arduino .hex files to an Arduino connected via USB. 

This library is built on top of the very awesome Avrgirl project (https://github.com/noopkat/avrgirl).

#Building

The project is build using browserify. Currently using the followng command on the command-line

    browserify main.js -o build/bundle.js

The build directory contains a runnable project in Chrome. 

# Chrome Web Store

Once the project reaches beta-status, it will be published to the Chrome Web Store

# Blockuino

This project is intended used with Blockuino.no.

# License

MIT License