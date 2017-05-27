const getLocaleFromBrowser = (navigator.language || navigator.browserLanguage).substr(0, 2);
let LOCALE = localStorage.locale || getLocaleFromBrowser;
switch (LOCALE) {
  case 'pt' || 'en':
    break;
  default: LOCALE = 'en';
}

const locale = LOCALE;
localStorage.locale = locale;

export default locale;
