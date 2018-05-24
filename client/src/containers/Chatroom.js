import React, { Component, Fragment } from 'react';
import moment from 'moment';
import io from 'socket.io-client';

import TextInput from 'components/TextInput';
import SendButton from 'components/Button';
import Header from 'components/Header';
import Username from 'components/Username';

import styles from './Chatroom.module.css';

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      messages: [],
      newMessage: '',
    };

    this.socket = io('http://localhost:3001');

    this.setNewMessage = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();

      this.socket.emit('chat', {
        name: this.state.name,
        message: this.state.newMessage,
        timestamp: moment().calendar(),
      });

      this.setState({ newMessage: '' });
    };
  }

  componentDidMount() {
    this.socket.on('chat', message => {
      message.key = JSON.stringify(message);
      this.setState(state => {
        return { messages: [...state.messages, message] };
      });
    });
  }

  componentDidUnmount() {
    this.socket.close();
  }

  render() {
    const { newMessage, messages } = this.state;
    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <Header text="Chatroom" />
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.messageContainer}>
            {messages.map(message => (
              <Fragment>
                <Username name={message.name} styleName="chatUser" />
                <p className={styles.timeStamp}>{message.timestamp}</p>
                <p className={styles.message}>{message.message}</p>
              </Fragment>
            ))}
          </div>
        </div>
        <form className={styles.inputContainer} onSubmit={this.handleSubmit}>
          <TextInput
            styleName="messageInput"
            handleInputChange={this.setNewMessage}
            inputValue={newMessage}
            inputName="newMessage"
          />
          <SendButton>Send</SendButton>
        </form>
      </Fragment>
    );
  }
}
