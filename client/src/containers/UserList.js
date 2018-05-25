import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import shortid from 'shortid';

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

    this.handleSubmitUsername = event => {
      event.preventDefault();
      console.log('test');
      this.setState(state => {
        return { onlineUsers: [...state.onlineUsers, state.username] };
      });
      this.props.handleUser(this.state.username);
    };
  }
  render() {
    const { onlineUsers, username } = this.state;
    return (
      <Fragment>
        <form className={styles.loginContainer} onSubmit={this.handleSubmitUsername}>
          <TextInput
            styleName="loginInput"
            handleInputChange={this.handleInputChange}
            inputValue={username}
            inputName="username"
          />
          <JoinButton size="small" handleSubmitUsername={this.handleSubmitUsername}>
            Join
          </JoinButton>
        </form>

        <div className={styles.listContainer}>
          <Scrollbars renderThumbVertical={this.renderThumb}>
            {onlineUsers.map(onlineUser => {
              console.log(onlineUser);
              return <Username key={shortid.generate()} name={onlineUser} styleName="listUser" />;
            })}
          </Scrollbars>
        </div>
      </Fragment>
    );
  }
}
