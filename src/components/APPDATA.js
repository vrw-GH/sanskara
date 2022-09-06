import PKGDATA from '../../package.json';

const appName =
  process.env.REACT_APP_PROJECT_NAME || PKGDATA.name || 'App NAME Not Set';
const appSuffix =
  process.env.REACT_APP_PROJECT_FLIGHT ||
  PKGDATA.suffix ||
  'App FLIGHT Not Set';
const appVer = process.env.REACT_APP_PROJECT_VER || PKGDATA.version || '0.1.0';
const appInfo =
  process.env.REACT_APP_PROJECT_INFO || PKGDATA.info || 'App INFO Not Set';
const appHomepage =
  PKGDATA.homepage || process.env.REACT_APP_FRONTEND || 'App HOMEPAGE Not Set';
const appAuthor =
  process.env.REACT_APP_DEV_NAME || PKGDATA.author || 'Victor Wright';
const appDescription =
  process.env.REACT_APP_DESCRIPTION ||
  PKGDATA.description ||
  ' - to be described -';

export const APPDATA = {
  TITLE: appName,
  NAME: appName
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (chr) => chr.toUpperCase()),
  PROJECT: appName.replace(/-/g, ' ').toUpperCase() + ' ' + appSuffix,
  VER: appVer,
  INFO: appInfo,
  DESCRIPTION: appDescription,
  WEBSITE: appHomepage,
  DEVLEAD: appAuthor,
  //---------------------------------------
  DEVTEAM: process.env.REACT_APP_PROJECT_TEAM || '',
  EMAIL: process.env.REACT_APP_DEV_EMAIL || 'victor.wright@outlook.de',
  PHONE: process.env.REACT_APP_DEV_PHONE || '+49 176 4677 4278',
  ADDRESS: process.env.REACT_APP_DEV_ADDR || '83707, Germany',
  HOMEIMG: process.env.REACT_APP_HOMEIMG || '',
  HEADERIMG: process.env.REACT_APP_HEADERIMG || '',
  FOOTERIMG: process.env.REACT_APP_FOOTERIMG || '',
  FRONTEND:
    process.env.REACT_APP_FRONTEND ||
    (process.env.HOST || 'https://127.0.0.1') +
      ':' +
      (process.env.PORT || '3000'),
  BACKEND: process.env.REACT_APP_BACKEND || 'http://127.0.0.1:5000',
  MODE: process.env.REACT_APP_PROJECT_MODE || process.env.NODE_ENV || 'Dev',
  ROOT: process.env.REACT_APP_PUBLIC_URL || '/',
  HOST: process.env.HOST || appHomepage || 'http://127.0.0.1',
  PORT: process.env.PORT || 5000
};

export default APPDATA;
