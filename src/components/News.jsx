import {React, useState, useEffect} from 'react'
import {Input, Avatar, List, Space } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = ({simplified}) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const count = simplified ? 5 : 50;
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory,count});

    const [searchTerm, setSearchTerm] = useState('');

    const coinNews = cryptoNews?.value;
    console.log(coinNews);

    console.log(searchTerm);

      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredData = coinNews?.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    

  return (
    <div>
        
        

        { !simplified && (
        <Input 
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      )}


        <div className='listscroll'>
        <InfiniteScroll
            dataLength={count}
        >
             <List itemLayout="horizontal" dataSource={filteredData}
                renderItem={(item) => (
                <List.Item onClick={() => window.open(item.url)}>
                    <List.Item.Meta 
                    avatar={<Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl}/>}
                    title={item.name}
                    description= {item.description}
                    />
                </List.Item>
                    )}

                    />
        </InfiniteScroll>
        </div>

    </div>
  )
}

export default News