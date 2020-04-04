import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = event => {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <a href='/' onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
