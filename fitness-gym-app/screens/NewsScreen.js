import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import newsData from "../assets/data.json"

const NewsScreen = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData.news);
  }, []);

  return (
    <ScrollView>
      {news.map((news_unit, index) => (
        <NewsCard key={index}
            imageUrl={news_unit.image}
            title={news_unit.title}
            url={news_unit.url}
        />
      ))}
    </ScrollView>
  )
};

export default NewsScreen;