import React from 'react';
import { connect } from 'dva';
import style from './IndexPage.css';
import { Link } from 'dva/router';
import { Button } from 'antd';
import img from '../assets/bsylogo.png';
import img2 from '../assets/sjfc.svg';
import { Row, Col } from 'antd';
import Background2 from '../assets/index2.jpg';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function IndexPage() {
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
          <Menu.Item className={style.sjfc}>
            <a href="https://www.baishan.com/tech/orchsym/">数聚蜂巢</a>
            </Menu.Item>
          <Button className={style.button}>
              <Link to="/login">登录</Link>
          </Button>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item style={{ fontSize:'16px' }}>
            <Link to='/excersize'>首页</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: 'rgba(3,12,27)', padding: 24, minHeight: 472,
                    backgroundImage:`url(${Background2})`,
                    // backgroundAttachment:'fixed', 
                    backgroundRepeat:'no-Repeat',
                    backgroundSize:'auto 100%', 
                    backgroundPosition:'right',
                    }}>
        <Row>
          <Col span={10}
              style={{ paddingTop:60,
                        paddingLeft:60,
                        paddingRight:100,
                    // marginTop:30, 
                    // backgroundImage:`url(${Background1})`,
                    // // backgroundAttachment:'fixed', 
                    // backgroundRepeat:'no-Repeat',
                    // backgroundSize:'cover',
                    color:'#fff', 
                  }}
           >
            <img src={img2} alt=''></img>
            <h3 style={{color:'#fff'}}>简洁、高效的流程设计模式</h3>
            <p>
              集成平台基于Web图形界面，通过拖拽、连接、配置完成基于流程的设计；
              支持高度可配置的指示图式数据路由、转换和系统中介逻辑；
              支持从多种数据源动态拉取数据，自动化系统之间的数据流，实现数据采集、处理等功能。
            </p>
          </Col>
          {/* <Col span={10}></Col> */}
          {/* <Col span={6} 
              style={{ padding:100,
                    // backgroundImage:`url(${Background2})`,
                    // // backgroundAttachment:'fixed', 
                    // backgroundRepeat:'no-Repeat',
                    // backgroundSize:'cover', 
                    color:'#fff', 
                  }}
          >
            <img src={img2}></img>
            <p>
            一个轻量级混合集成平台（HIP），旨在帮助企业便捷、快速地实现数据、
            应用、服务间的灵活流转与敏捷集成，为企业技术创新与数字化转型赋能，提升用户体验。
            </p>
          </Col> */}
        </Row>
            
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>赋能老系统，创新新应用</Footer>
    </Layout>      
  );
}

export default connect()(IndexPage);