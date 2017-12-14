const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 });

function getInstallerConfig () {
    console.log('creating windows installer: ');
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

	console.log(path.join(rootPath, 'app', 'icon.ico'));
    return Promise.resolve({
       appDirectory: path.join(outPath, 'blockuino-electron-app-win32-ia32/'),
       authors: 'Joachim Haagen Skeie',
       noMsi: false,
       outputDirectory: path.join(outPath, 'windows-installer'),
       exe: 'blockuino-electron-app.exe',
       setupExe: 'BlockuinoElectronInstaller.exe',
       setupIcon: path.join('./', 'app', 'icon.ico')
   })
}