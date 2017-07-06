import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, Icon, Input, Button, Checkbox,Row, Col, Modal } from 'antd';
const FormItem = Form.Item;
import CRMlogo from './image/CRM-logo.png'
import WHlogo from './image/logo.png'
import tip from './image/zi.png'

class NormalLoginForm extends React.Component {
    componentDidMount() {
        if (window.username) {
            this.props.form.setFieldsValue({
              'userName':window.username,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if (!err) {
            console.log('Received values of form: ', values);
        }   else{
                Modal.error({
                    content:window.errorMessage,
                    title:'提示',
                    okText: '确定',
                });
        }
        });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="loginPage">
            <div className="NoneDiv"></div>
            <div className="loginBox">
                <div className="login-title">
                    <img style={{display: 'inline-block', marginTop: 20}} src={CRMlogo}/>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form" method="post" action={window.formAction}>
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [{ required: true,message:' '}],
                      })(
                        <Input name="username" placeholder="请输入用户名" className="login-input" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message:' '}],
                      })(
                        <Input name="password" type="password" placeholder="请输入密码" className="login-input"/>
                      )}
                    </FormItem>
                    {window.captcha ? <FormItem  label="">
                        <Row gutter={8}>
                            <Col span={12}>
                              {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: ' ' }],
                              })(
                                <Input name="captcha" size="large" placeholder="请输入验证码" className="login-input"/>
                              )}
                            </Col>
                            <Col span={8} className="verify">
                              <div><img  src={window.captcha} className="captcha"/></div>
                            </Col>
                            <Col span={4} className="not-clear">
                              <a style={{color:'#2a3f54'}}> 看不清</a>
                            </Col>
                        </Row>
                    </FormItem> : null }
                    <FormItem>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                      })(
                        <Checkbox name="autoLogin" className="auto-login">自动登录</Checkbox>
                    )}
                    </FormItem>
                </form>
            </div>
            <div className="tip">
                <img  src={tip}/>
            </div>
             <span className="wh-logo"><img  src={WHlogo} alt=''/></span>
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));
s
