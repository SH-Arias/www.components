import React from 'react';
import './App.css';

import logo from './logo.png';
import ReCAPTCHA from "react-google-recaptcha";

class App extends React.Component {
  state = {
    disabledLoginBtn: true
  };

  onChange = params => {
    console.log("holis");
    this.setState({
      disabledLoginBtn: false
    });
  };

  render() {
    return(
      <div className="App">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo"/>
              </div>
            </div>

            <div className="d-flex justify-content-center form_container">
              <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="" className="form-control input_user" placeholder="username"></input>
                </div>

                <div className="input-group mb-2">
							    <div className="input-group-append">
								    <span className="input-group-text"><i className="fas fa-key"></i></span>
							    </div>
							      <input type="password" name="" className="form-control input_pass" placeholder="password"></input>
						    </div>

                <ReCAPTCHA
                  sitekey="6LfP99wUAAAAAPHZbEWQ8x6fXjgBkasCd4ztoqL8"
                  onChange={this.onChange}
                />

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn" disabled={this.state.disabledLoginBtn}>Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


/*
function App() {
  componentDidMount() {
    loadReCaptcha();
  }

  return (
    <div className="App">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo"/>
              </div>
            </div>

            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="" className="form-control input_user" placeholder="username"></input>
                </div>

                <div className="input-group mb-2">
							    <div className="input-group-append">
								    <span className="input-group-text"><i className="fas fa-key"></i></span>
							    </div>
							      <input type="password" name="" className="form-control input_pass" placeholder="password"></input>
						    </div>
          

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/

export default App;
