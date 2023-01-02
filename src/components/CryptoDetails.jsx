import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import {Col, Row, Typography, Select} from 'antd';
import {
    MoneyCollectOutlined,
    DollarCircleOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    TrophyOutlined,
    CheckOutlined,
    NumberOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';

import {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} from '../services/cryptoApi';

import Loader from './Loader';
import LineChart from './LineChart';

const {Title, Text} = Typography;
const {Option} = Select;

const CryptoDetails = () => {
    const {coinId} = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
    const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timeperiod});
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return <Loader/>;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        {
            title: 'Price to USD',
            value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
            icon: <DollarCircleOutlined/>
        },
        {title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined/>},
        {
            title: '24h Volume',
            value: `₹ ${cryptoDetails['24hVolume'] && millify(cryptoDetails['24hVolume'])}`,
            icon: <ThunderboltOutlined/>
        },
        {
            title: 'Market Cap',
            value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
            icon: <DollarCircleOutlined/>
        },
        {
            title: 'All-time-high(daily avg.)',
            value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,
            icon: <TrophyOutlined/>
        },
    ];

    const genericStats = [
        {title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined/>},
        {title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined/>},
        {
            title: 'Approved Supply',
            value: cryptoDetails?.supply?.confirmed ? <CheckOutlined/> : <StopOutlined/>,
            icon: <ExclamationCircleOutlined/>
        },
        {
            title: 'Total Supply',
            value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
            icon: <ExclamationCircleOutlined/>
        },
        {
            title: 'Circulating Supply',
            value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
            icon: <ExclamationCircleOutlined/>
        },
    ];

    return (

        
<section  className="w-full justify-between  md:px-14 py-24 px-4"> 
        <div>
            <h2 className="font-medium text-center text-white text-3xl mt-0 mb-2 "> {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price </h2>
                <p className="font-medium text-center text-white">
                    {cryptoDetails.name} Live price in US dollars.
                    View value statistics, market cap and supply.
                </p>
                <br></br>
            </div>
            <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)}
                       coinName={cryptoDetails?.name}/>
<br></br>
            <div className="grid  max-w-[800px] m-auto grid-cols-1 gap-4 sm:grid-cols-2">
              
              
            <div class="px-4 py-4 shadow-md  border border-gray-200 cryptostatscard">
                 <h3 className="font-medium text-center text-white text-2xl mt-0 mb-2 "> {cryptoDetails.name} Value Statistics
                        </h3>
                        <p>
                            An overview showing the stats of {cryptoDetails.name}
                        </p>
                     
                    {stats.map(({icon, title, value}) => (
                         <tr>
                
                         <td class="py-4 px-6">
                              {icon}
                         </td>
                         <td class="py-4 px-6">
                           {title} 
                         </td>
                          <td class="py-4 px-6">
                             {value}
                         </td>
                     </tr>

                    ))}
                </div>

                <div class="px-4 py-4 shadow-md  border border-gray-200 cryptostatscard">
               <h3 className="font-medium text-center text-white text-2xl mt-0 mb-2 ">   Other Statistics
                        </h3>
                        <p className="center">
                            An overview showing the stats of all cryptocurrencies
                        </p> 
                    {genericStats.map(({icon, title, value}) => (
                      
                      <tr>
                
                      <td class="py-4 px-6">
                           {icon}
                      </td>
                      <td class="py-4 px-6">
                        {title} 
                      </td>
                       <td class="py-4 px-6">
                          {value}
                      </td>
                  </tr>

                    ))}
                </div>



            </div>

            

            <br />
            <div class="px-4 py-4 shadow-md max-w-[800px] m-auto border border-gray-200 cryptostatscard">
              <h3 className="font-medium text-white">  What is {cryptoDetails.name} </h3>
                        <p className="font-medium text-white ">{HTMLReactParser(cryptoDetails.description)}</p>
                     
               

            </div>

        
        </section>
    );
};

export default CryptoDetails;