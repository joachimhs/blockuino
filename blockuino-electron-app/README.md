Rebuild serialport:

    ./node_modules/.bin/electron-rebuild -v 1.6.2

Execute commands via curl:

    curl -H "Content-Type: application/json" -X POST -d '{"action":"initialize"}' http://localhost:12344

Build electron web-interface

    browserify index.js -o app/bundle.js
	
Build apps: 

    electron-packager . --overwrite --all --icon=app/icon.png --prune=true --out=release-builds

Build Win Installer

    node installers/windows/createinstaller.js