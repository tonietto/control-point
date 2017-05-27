import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';

import messages from '../../../../../intl';


const mapDispatchToProps = (dispatch) => {
  return {
    changeLocale: (locale) => {
      dispatch(updateIntl({
        locale,
        messages: messages(locale),
      }));
    },
  };
};

const LocaleSelector = ({ changeLocale }) => { // eslint-disable-line react/prop-types
  const handleChange = (event, data) => {
    const locale = data.value;
    changeLocale(locale);
    localStorage.locale = locale;
  };

  const options = [
    { text: 'EN', value: 'en' },
    { text: 'PT', value: 'pt' },
  ];

  return (
    <Dropdown
      onChange={handleChange}
      text={localStorage.locale.toUpperCase()}
      button
      className="inverted"
      options={options}
      size="tiny"
      basic
    />
  );
};

export default connect(null, mapDispatchToProps)(LocaleSelector);
