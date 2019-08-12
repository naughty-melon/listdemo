import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.css';
import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import Background from '../assets/background.jpg';
import img from '../assets/bsylogo.png';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        window.localStorage.username = 'qaz';
        window.localStorage.password = 'qaz';

        const name = window.localStorage.getItem("username");
        const pass = window.localStorage.getItem("password");
        
        if(values.username === name && values.password === pass){
          // return <Link to="/users"></Link>;
          this.props.history.push("/users");
        }else{
          alert("密码错误");
        } 
      }else {
        console.log('error', err, values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item>
              <a href="https://www.baishan.com"><img src={img} alt=""/></a>           
            </Menu.Item>         
            <Menu.Item className={styles.sjfc}>
              <a href="https://www.baishan.com/tech/orchsym/">数聚蜂巢</a>
              </Menu.Item>
            <Button className={styles.button1}>
                <Link to="/">退出登录</Link>
            </Button>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px'}}>
          <Breadcrumb style={{ margin: '16px 16px' }}>
            <Breadcrumb.Item style={{ fontSize:'16px' }}>登录表单</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: 'rgba(0,12,26)', 
                        padding: 24, 
                        minHeight: 472,
                        backgroundImage:`url(${Background})`,
                        // backgroundAttachment:'fixed', 
                        backgroundRepeat:'no-Repeat',
                        backgroundSize:'auto 100%', 
                        backgroundPosition:'left',  
                        position:'relative',                
                      }}
          >
            <Form onSubmit={this.handleSubmit}
                  className={styles.form}                  
                  style={{ border:'1px solid rgba(0,0,0,.15)',
                          borderRadius: 8, 
                          padding:30,
                          backgroundColor:'#fff'                        
                        }}
             >
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>记住密码</Checkbox>)}
                <a className={styles.forgot} href="">
                  忘记密码
                </a>
                <Button type="primary" htmlType="submit" className={styles.button2}>
                  登录
                </Button>
                <a href="">注册</a>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>赋能老系统，创新新应用</Footer>
      </Layout> 
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect()(WrappedNormalLoginForm);