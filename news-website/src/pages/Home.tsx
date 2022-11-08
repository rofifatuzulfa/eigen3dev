import React, {FC, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Cards from '../components/Card';
import "../App.css";
import axios from "axios";

const Home: React.FC = () => {

    const [news, setNews] = useState<any[]>([]);

    const getNews = async() => {
        await axios
        .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=828bfd496ed0446c9b351ea03de659cd')
        .then((res) => {
            setNews(res.data.articles)
        })
    }

    useEffect(() => {
        getNews();
    }, []);

  return (
    <div className="App">
      <h1 className='title'>My News</h1>
      <div className='cards'>
        {news.map((item) => {
            return (
                <Cards image={item.urlToImage} title={item.title} description={item.description} author={item.author} />
            )
        })}
      </div>
    </div>
  );
}

export default Home;
