import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space, Avatar, Image} from 'antd';
import { useState } from 'react';
import {HomeOutlined,FileOutlined,AreaChartOutlined} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import {Homepage, Cryptocurrencies, News, Cryptodetails} from "./components";
import './App.css';
import logo from './images/logo512.png';

//=======


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, link, children, ) {
  return {
    key,
    icon,
    children,
    link,
    label,
  };
}

const items = [
  getItem('Homepage', '1', <HomeOutlined />,'/'),
  getItem('Cryptocurrencies', '2', <AreaChartOutlined />, '/cryptocurrencies'),
  getItem('News', '3', <FileOutlined />, '/news'),
];


const App = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout hasSider>
        <Sider 
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div
                style={{
                    height: 70,
                    margin: 16,}}
            >
                <div className="logo-container">
                    <Avatar className="logo" size={64} src={logo} />
                </div>
            </div>
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
                </Menu>


        </Sider>


        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >

            <Content>
            <div className="main">
                    <Layout>
                        <div className="routes">
                            <Routes>
                                <Route path ="/" index element={<Homepage/>}/>
                                <Route path ="/cryptocurrencies" element={<Cryptocurrencies/>} />
                                <Route path ="/crypto/:coinID"  element={<Cryptodetails/>}/>
                                <Route path ="/news" element={<News/>} />
                            </Routes>
                        </div>
                    </Layout>
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            Cryptoverse ©2023 Created by David Zorto
            </Footer>
        </Layout>
        </Layout>
  );
};
export default App;