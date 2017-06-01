import pt from './pt';
import en from './en';

const messages = (locale) => {
  switch (locale) {
    case 'pt':
      return { ...pt };
    case 'en':
      return { ...en };
    default:
      return { ...en };
  }
};

export default messages;
