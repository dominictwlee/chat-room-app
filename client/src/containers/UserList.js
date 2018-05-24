import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TextInput from 'components/TextInput';
import JoinButton from 'components/Button';
import Username from 'components/Username';

import styles from './UserList.module.css';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      onlineUsers: [],
    };

    this.renderThumb = ({ style, ...props }) => {
      const thumbStyle = {
        backgroundColor: 'rgba(144, 164, 173, 0.5)',
      };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  render() {
    return (
      <Fragment>
        <div className={styles.loginContainer}>
          <TextInput styleName="loginInput" handleInputChange={this.handleInputChange} username={this.state.username} />
          <JoinButton size="small">Join</JoinButton>
        </div>
        <div className={styles.listContainer}>
          <Scrollbars renderThumbVertical={this.renderThumb}>
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
            <Username name="Tom" styleName="listUser" />
          </Scrollbars>
        </div>
      </Fragment>
    );
  }
}
