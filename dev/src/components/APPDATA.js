import PKGDATA from '../../package.json';

const appName =
  //* REACT_APP_PROJECT
  process.env.REACT_APP_PROJECT || PKGDATA.name || 'App NAME Not Set';

// ------------------------------
export const APPDATA = {
  //* REACT_APP_PROJECT
  TITLE: appName.replace(/The /g, '').split(' ')[0], // first word without "The" at the start
  NAME: appName
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (chr) => chr.toUpperCase()),

  //* REACT_APP_SUFFIX
  SUFFIX:
    process.env.REACT_APP_SUFFIX || PKGDATA.suffix || 'App SUFFIX Not Set',

  //* REACT_APP_VERSION
  VER: process.env.REACT_APP_VERSION || PKGDATA.version || 'Ver Not Set',

  //* REACT_APP_INFO
  INFO: process.env.REACT_APP_INFO || PKGDATA.info || 'App INFO Not Set',

  //* REACT_APP_DESCRIPTION
  DESCRIPTION:
    process.env.REACT_APP_DESCRIPTION ||
    PKGDATA.description ||
    'App Description Not Set',

  //* REACT_APP_FRONTEND
  WEBSITE:
    process.env.REACT_APP_FRONTEND ||
    PKGDATA.homepage ||
    'App HOMEPAGE Not Set',

  //* REACT_APP_CONTACT
  CONTACT: process.env.REACT_APP_CONTACT || 'App Contact Not Set',

  //---------------------------------------
  //* REACT_APP_DEV_TEAM
  DEVTEAM: process.env.REACT_APP_DEV_TEAM || '',
  TEAMWEB: process.env.REACT_APP_DEV_TEAMWEB || '',

  //* REACT_APP_DEV_LEAD
  DEVLEAD:
    process.env.REACT_APP_DEV_AUTHOR || PKGDATA.author || 'Victor Wright',
  LEADWEB: process.env.REACT_APP_DEV_LEADWEB || 'https://vrw-gh.github.io/vrw-GH',

  //* REACT_APP_DEV_EMAIL
  EMAIL: process.env.REACT_APP_DEV_EMAIL || 'developer@wrightsdesk.com',

  //* REACT_APP_DEV_PHONE
  PHONE: process.env.REACT_APP_DEV_PHONE || '+49 176 4677 4278',

  //* REACT_APP_DEV_ADDR
  ADDRESS: process.env.REACT_APP_DEV_ADDR || '83707, Germany',

  REPO: PKGDATA.repository || 'App REPO Not Set', //* is object!

  HOMEIMG: process.env.REACT_APP_HOMEIMG || '',
  HEADERIMG: process.env.REACT_APP_HEADERIMG || '',
  FOOTERIMG: process.env.REACT_APP_FOOTERIMG || '',

  FRONTEND:
    process.env.REACT_APP_FRONTEND ||
    (process.env.HOST || 'https://127.0.0.1') +
    ':' +
    (process.env.PORT || '3000'),

  BACKEND: process.env.REACT_APP_BACKEND || 'http://127.0.0.1:5000',

  MODE: process.env.REACT_APP_SUFFIX || process.env.NODE_ENV || 'Dev',

  ROOT: process.env.REACT_APP_FRONTEND || window.location.host || '../',

  HOST: process.env.HOST || 'http://127.0.0.1',

  PORT: process.env.PORT || 5000

};

export default APPDATA;
