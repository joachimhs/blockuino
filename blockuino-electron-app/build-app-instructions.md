#Mac

    electron-packager . --overwrite --platform=darwin --arch=x64 --icon=app/icon.png --prune=true --out=release-builds 
	
#Win	
	electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=app/icon.png --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Blockuino Electron App\"