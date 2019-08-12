import React from 'react';
import { Menu } from 'antd';
import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                    公告列表
              </Menu.Item>            
            </Menu>
        );
    }
}

export default Header;