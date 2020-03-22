import React,{ Component } from 'react';
import { Descriptions,Button } from 'antd';
import { connect } from 'dva';
import styles from './details.css';
// import Header from '../header';
import { Link } from 'dva/router';

import img from '../../assets/bsylogo.png';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class CheckPage extends Component{
    
    render(){

        // console.log(JSON.parse(this.props.match.params.data));
        const data = JSON.parse(this.props.match.params.data);
        // console.log(data)
        const id = (data.current - 1) * data.pageSize + data.index;
        // const id = this.props.location.query.id;
        const list = this.props.list;
        console.log(id);
        // console.log(this.props.location.query);

        return(
            <div>
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
                        <Button className={styles.button}>
                            <Link to="/">退出登录</Link>
                        </Button>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px'}}>
                        <Breadcrumb style={{ margin: '16px 16px' }}>
                        <Breadcrumb.Item style={{ fontSize:'16px' }}>公告列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 472 }}>
                            <Descriptions title="公告详情" bordered className={styles.title} column="2">
                                <Descriptions.Item label="公告标题">{list[id].title}</Descriptions.Item>
                                <Descriptions.Item label="创建人">{list[id].name}</Descriptions.Item>
                                <Descriptions.Item label="有效期限">{list[id].time1}至{list[id].time2}</Descriptions.Item>
                                <Descriptions.Item label="是否过期">{list[id].due}</Descriptions.Item>
                                <Descriptions.Item label="公告内容">{list[id].content}</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>赋能老系统，创新新应用</Footer>
                </Layout>                
            </div>           
        )        
    }
}
 
export default connect(({ user }) => {

    // console.log(user);
    return {
        list:user.list
    };
})(CheckPage);