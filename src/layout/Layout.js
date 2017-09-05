import React from 'react';
import Navbar from './Navbar';
import './Layout.css';

class Layout extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
