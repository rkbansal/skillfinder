import React from "react";
import { Modal, Button, Checkbox } from 'antd';
import "./index.scss";
export default class ModalComp extends React.Component {
  state = { visible: false }

  onCheckbox = () => {

  }

  render() {
    return (
      <div>
        <Modal
          // title="Sign up or Login into your account"
          visible={this.props.visible}
          centered
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          width={734}
        >
        <div className="modal-body">
          {/* <div className="left">
            <div className="left-text">
            Voice Trumps Every-thing
            </div>
          </div> */}
          <div className="right">
            <div className="header">Sign up or Login into your account</div>
            <div className="body">
              <div className="input">
                <div className="label">
                  <div>E-MAIL</div>
                </div>
                <input className="email-input" placeholder="email id"/>
              </div>
              <div className="input password">
                <div className="label">
                  <div>Password</div>
                </div>
                <input className="password-input" placeholder="password"/>
              </div>
              <div className="buttons">
                <div className="button-flow">
                  <button className="register">
                    REGISTER
                  </button>
                  <button className="login">
                    LOGIN
                  </button>
                </div>
              </div>
              <div className="login-options">
                <Checkbox className="checkbox" onChange={this.onCheckbox}>Remember Me</Checkbox>
                <div className="forgot-password">Forgot Password?</div>
              </div>
              <div className="oauth-login">
                <button className="withAmazon">
                  <span className="primary">CONTINUE LOGIN WITH</span><span className="secondary"> AMAZON</span>
                </button>
              </div>
              <div className="oauth-login">
                <button className="withGoogle">
                  <span className="primary">CONTINUE LOGIN WITH</span><span className="secondary"> GOOGLE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}