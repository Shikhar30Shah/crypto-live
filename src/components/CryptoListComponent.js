import React from 'react';
import '../App.css';

const CryptoList = ({ name, image, symbol, price, priceChange, marketCap }) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-top'>
                <div className="crypto">
                    <div className='row my-row'>
                        <div className='col-12 col-sm-2'>
                            <img src={image} alt="CryptoCurrency" />
                        </div>
                        <div className='col-12 col-sm-2'>
                            <h1>{name}</h1>
                        </div>
                        <div className='col-12 col-sm-2'>
                            <p className="crypto-symbol">{symbol}</p>
                        </div>
                        <div className='col-12 col-sm-2'>
                            <p className="crypto-price">{price} Rs.</p>
                        </div>
                        <div className='col-12 col-sm-2'>
                            {priceChange < 0 ? (
                                <p className="crypto-percent change-red" style={{color: 'red'}}>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className="crypto-percent change-green" style={{color: 'limegreen'}}>{priceChange.toFixed(2)}%</p>
                            )}
                        </div>
                        <div className='col-12 col-sm-2'>
                            <p className="crypto-marketcap">Mkt. Cap: {marketCap.toLocaleString()}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoList;