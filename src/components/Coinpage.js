import React, { useState, useEffect } from 'react'

import './layout.css'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../states/index'


const Coinpage = () => {

    const [coinData, setCoinData] = useState([])


    useEffect(() => {
        async function data() {
            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=200&offset=0';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '59b35622d8mshb67ad93c651d392p14c3f0jsn87bbc0757bcd',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const coins = result.data.coins
                setCoinData(coins)
                // dispatch(actionCreators.coinData(coins.uuid))


                // console.log(coins);
            } catch (error) {
                console.error(error);
            }
        }

        data()


    }, [])


    console.log(coinData)


    const data = useSelector(state => state.data)

    console.log("this is redux", data)

    const dispatch = useDispatch()







    //  // search function code
    // // not using right now 
    //     const [searchQuery, setSearchQuery] = useState('');
    //     const [filteredCoinData, setFilteredCoinData] = useState([]);




    //     useEffect(() => {
    //       handleSearch();
    //     }, [searchQuery, data]);

    //     const handleSearch = () => {
    //       if (searchQuery.trim() === '') {
    //         setFilteredCoinData(Object.values(data));
    //       } else {
    //         const filteredData = Object.values(data).filter(
    //           coin => coin.name && coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         );
    //         setFilteredCoinData(filteredData);
    //       }
    //     };



    // const buttonID =()=>{
    //   const harsh=  dispatch(actionCreators.coinData(coins.uuid))
    //   console.log(harsh)
    // }



    return (
        < >
            <div className='container'>
                <div className='row '>



                    {coinData.map((e) => (
                        <div className='col-lg-3 col-md-6 my-3  p-7' key={e.uuid}>
                            <div className=''>
                                <div className='card px-3 py-3 animate' style={{ width: '19rem' }}>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        Rank {e.rank}

                                    </span>

                                    <img src={e.iconUrl} style={{ height: '100px', width: '100px' }} className='card-img-top animate' alt='...' />

                                    <div className='card-body'>


                                        <h4 className='card-title'>{e.name}</h4>

                                        <h6 className='card-title my-3'>price: $ <strong className='other'> {Number(e.price).toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</strong></h6>

                                        <p>Volume(24h):<br /> $ <strong className='other'> {Number(e['24hVolume']).toLocaleString()}</strong></p>


                                        <div className='card-text row'>
                                            <div className='col' >Tier:<br /><strong className='Tier'>{e.tier}</strong></div>

                                            <div className='col'>change: <strong className='change'>{e.change}</strong></div>

                                            <div className='col'>Symbol: <strong className='Symbol'>{e.symbol}</strong></div>
                                            <div className='col'></div>
                                            <div className='col'></div>


                                        </div>
                                        {/* <button onClick={() => dispatch(actionCreators.coinData(e.uuid))} className='btn btn-primary  my-3'>
                                            Go somewhere
                                        </button> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}





                </div>
            </div>

        </>
    )
}

export default Coinpage