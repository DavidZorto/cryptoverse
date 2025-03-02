import React from 'react'
import News from './News';
import Cryptocurrencies from './Cryptocurrencies';
import { Carousel, Space, Typography, Row, Col, Statistic, Divider } from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
import millify from 'millify';
import {Link} from 'react-router-dom';


const {Title}= Typography;


const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(globalStats);

  return (
    <div className='homepagecontainer'>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={3} className="heading">Global Crypto Stats</Title>
                <div className="home-head"> 
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats?.totalMarketCap)}`} /></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats?.total24hVolume)}`} /></Col>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>
                </Row>
                </div>
            <Divider/> 
                <div className="home-heading-container">
                    <Title level={3} className="home-title">Top 10 Cryptos In The World</Title>
                    <Title level={5} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
                </div>
            <Cryptocurrencies simplified />
            <Divider/>  
                <div className="home-heading-container">
                    <Title level={3} className="home-title">Latest Crypto News</Title>
                    <Title level={5}><Link to="/news">Show more</Link></Title>
                </div>
            <News simplified />

            </Space>

    </div>
  )
}

export default Homepage