import React, { useEffect, useState } from 'react';
import "../components/Navbar.css";
import axios from 'axios';
import CryptoList from './CryptoListComponent';

function Home()
{
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false', {
            crossDomain: true
        })
        .then(res => {
            setCoins(res.data);
            // console.log(res.data + " This is the data");
        })
        .catch(err => alert("Something went wrong"));
    })

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filterCrypto = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
       <div className='container'>
        <div className='crypto-container'>
            <div className='search'>
                <h3 className='text'>Search Any Currency</h3>
                <form>
                    <input type='text' id='input'
                    name='search' placeholder='Search'
                    className='input' onChange={handleChange} />
                </form>
            </div>
            {filterCrypto.map(coin => {
                return (
                    <CryptoList key={coin.id} 
                            name={coin.name} 
                            image={coin.image} 
                            symbol={coin.symbol}  
                            price={coin.current_price} 
                            priceChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap} />
                );
            })}
        </div>
        </div>
    );
}

export default Home;