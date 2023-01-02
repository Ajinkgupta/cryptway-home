import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom"; 

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
    
<section className="w-full justify-between md:py-6 md:px-14 py-6 px-4">
      {!simplified && (
         
 

        <div className="py-24 flex justify-center">
          <div className="mb-3 w-96"> 
          <input
           className="
           form-control
           block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
         "
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          </div>
        </div>
        
      )} 
      <div className="grid gap-8 space-x-1 lg:grid-cols-4">

        {cryptos?.map((currency) => (
          <
          >
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>


<div class="px-4 py-4 shadow-md  border border-gray-200 cryptostatscard">
               

            <header className="flex items-center py-2 border-b-1"><div className="flex items-center flex-grow basis-0">   <h3 className="text-xl font-bold ">{`${currency.rank}. ${currency.name}`} </h3>
 </div>
    <div className="justify-end">
    <img className="w-10 h-10 object-contain"   src={currency.iconUrl} />
            </div>
  
          </header>  



       <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
    </div>

            </Link>
          </>
        ))}
     </div>
     </section>
    </>
  );
};

export default Cryptocurrencies;
