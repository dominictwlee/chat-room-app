import React, { Component } from 'react';
import Username from 'components/Username';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './UserList.module.css';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.renderThumb = ({ style, ...props }) => {
      const thumbStyle = {
        backgroundColor: 'rgba(144, 164, 173, 0.5)',
      };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };
  }
  render() {
    return (
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
    );
  }
}
