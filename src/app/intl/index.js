import { loginEnMessages, loginPtMessages } from '../modules/login';
import pt from './pt';
import en from './en';

const messages = (locale) => {
  switch (locale) {
    case 'pt':
      return { ...loginPtMessages, ...pt };
    case 'en':
      return { ...loginEnMessages, ...en };
    default:
      return { ...loginEnMessages, ...en };
  }
};

export default messages;
