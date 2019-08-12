import { connect } from 'dva';
import Main from '../components/layout/main';
import UserTable from '../components/user/user';
// import Header from '../components/header';
import { Button } from 'antd';
import style from './IndexPage.css';
import { Link } from 'dva/router';
import img from '../assets/bsylogo.png';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const UserPage=()=>{

    return (
        <Main>
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
                        <Link to="/">退出登录</Link>
                    </Button>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px'}}>
                    <Breadcrumb style={{ margin: '16px 16px' }}>
                    <Breadcrumb.Item style={{ fontSize:'16px' }}>公告列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 472 }}>
                        <UserTable/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>赋能老系统，创新新应用</Footer>
            </Layout>
        </Main>
    );
};

export default connect()(UserPage);