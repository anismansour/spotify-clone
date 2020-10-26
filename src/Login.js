import React, { Component } from 'react';
import './Login.css';
import { loginUrl } from './spotify';

export class Login extends Component {
  render() {
    return (
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
          alt="logo"
        />
        <a href={loginUrl}>Login with Spotify</a>
      </div>
    );
  }
}

export default Login;
