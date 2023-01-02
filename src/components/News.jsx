import React, { useState } from 'react'; 
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
 

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return <Loader />;

  return (

    
<section  className="w-full justify-between md:py-24 md:px-14 py-24 px-4">

<div class="grid gap-8 lg:grid-cols-3">
          
                        
      


    
      {cryptoNews.value.map((news, i) => (
      
      <article class="p-6  cryptostatscard bg-white rounded-lg  shadow-md    border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                    News
                  </span>
                  <span class="text-sm">{moment(news.datePublished).startOf('ss').fromNow()}</span>
              </div>
              <h2 class="mb-2 text-2xl font-[400] tracking-tighttext-white flex"> 
                <img className="  bg-pink-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mr-2" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" /> <a href={news.url} >{news.name}</a> </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400"> {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
       
              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}  alt="Bonnie Green avatar" />
                      <span class="font-medium dark:text-white">
                      {news.provider[0]?.name}
                      </span>
                  </div>
                  <a href={news.url} class="inline-flex items-center font-medium text-primary-500 hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>   
        
      ))} 
       </div> 
    </section>
  );
};

export default News;