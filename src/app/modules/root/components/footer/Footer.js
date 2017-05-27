import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Menu, Icon } from 'semantic-ui-react';


const { Column } = Grid;
const { Item } = Menu;

const Footer = ({ locale }) => ( // eslint-disable-line react/prop-types
  <Column>
    <Container>
      <Menu inverted>
        <Item
          as="a"
          href={`http://${locale}.futurecom.com.br`}
          header
        >
          <Icon name="icon-futurecom" />
          Futurecom
        </Item>
        <Menu borderless inverted floated="right">
          <Item
            as="a"
            href="https://www.facebook.com/futurecom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook" />
          </Item>
          <Item
            as="a"
            href="https://www.linkedin.com/company/futurecomevent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
          </Item>
          <Item
            as="a"
            href="https://www.flickr.com/photos/futurecomevent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="flickr" />
          </Item>
        </Menu>
      </Menu>

    </Container>
  </Column>
);

const mapStateToProps = (state) => {
  return {
    locale: state.intl.locale,
  };
};

export default connect(mapStateToProps)(Footer);
