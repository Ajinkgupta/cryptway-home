import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import hero from "../images/hero-img.png"; 
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>


<section className="w-full justify-between md:py-6 md:px-14 py-6 px-4 ">
    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">Modern Decentralized  Application</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">"The Modern Crypto Transaction and swapping Platform from one Wallet to Another using Metamask or any wallet "</p>
           
           <a href="https://app.cryptway.in/">  <button
              type="button"
              
              className="flex px-6 py-2   flex-row justify-center items-center my-5 bg-[#eb056d]  p-3 rounded-3xl  cursor-pointer hover:bg-[#119694]"
            >
              <span className="font-poppins font-bold text-lg text-white">
                Launch App  
              </span>
            </button> </a>
           
           
           
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="mockup" />
        </div>                
    </div>
</section>
<section id="stats" className="w-full justify-between md:py-6 md:px-14 py-6 px-4">
  <h2 className="font-medium text-center text-white text-3xl mt-0 mb-2 ">GLOBAL CRYPTO STATS</h2>
  <br></br>
<div class="grid gap-8 space-x-1 lg:grid-cols-5">
    <div class="px-4 py-4  cryptostatscard">
        <h3 class="text-2xl text-center font-bold font-white">{globalStats.total}</h3>
        <p class="text-center text-gray-500">Total Cryptocurrencies</p>
    </div>
    <div class="px-4 py-4  cryptostatscard">
        <h3 class="text-2xl text-center font-bold font-white">{millify(globalStats.totalExchanges)}</h3>
        <p class="text-center text-gray-500">Total Exchanges</p>
    </div>
    <div class="px-4 py-4  cryptostatscard">
        <h3 class="text-2xl text-center font-bold font-white">{`$${millify(globalStats.totalMarketCap)}`}</h3>
        <p class="text-center text-gray-500">Total Market Cap </p>
    </div>
    <div class="px-4 py-4  cryptostatscard">
        <h3 class="text-2xl text-center font-bold font-white">{`$${millify(globalStats.total24hVolume)}`}</h3>
        <p class="text-center text-gray-500">Total 24h Volume</p>
    </div>
    
    <div class="px-4 py-4  cryptostatscard">
        <h3 class="text-2xl text-center font-bold font-white">{millify(globalStats.totalMarkets)}</h3>
        <p class="text-center text-gray-500">Total Markets</p>
    </div>

</div>
</section>
<br /><br /><br />
<section  className="w-full justify-between md:py-6 md:px-14 py-6 px-4">

<h2 className="font-medium text-center text-white text-3xl mt-0 mb-2 ">TOP 12 CRYPTOCURRENCIES IN WORLD</h2>

</section>
<Cryptocurrencies simplified />

<div class="grid place-items-center"> <Link to="/cryptocurrencies" className="text-center"> 
<button
              type="button"
              
              className="flex px-6 py-2  items-center flex-row  my-5 bg-[#eb056d]  p-3 rounded-3xl  cursor-pointer hover:bg-[#119694]"
            >
              <span className="font-poppins font-bold text-lg text-white">
               Show More
              </span>
            </button></Link></div>
<br /> <br />
            <h2 className="font-bold text-center text-white text-2xl mt-0 mb-2 ">LATEST CRYPTO NEWS</h2>

       
      <News simplified />
      <div class="grid place-items-center"> <Link to="/news" className="text-center"> 
<button
              type="button"
              
              className="flex px-6 py-2  items-center flex-row  my-5 bg-[#eb056d]  p-3 rounded-3xl  cursor-pointer hover:bg-[#119694]"
            >
              <span className="font-poppins font-bold text-lg text-white">
               Show More
              </span>
            </button></Link></div>

      
    
    </>
  );
};

export default Homepage;