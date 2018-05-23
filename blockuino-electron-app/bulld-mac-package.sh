#!/bin/bash

npm run package-mac

electron-installer-dmg ./release-builds/Blockuino-Electron-darwin-x64/Blockuino-Electron.app blockuino-electron-app --out=release-builds --overwrite --icon=./app/icon.ico