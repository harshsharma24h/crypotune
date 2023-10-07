import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {

    const [data, setData] = useState([])


    const coinName = useSelector(state => state.data)
    // console.log("this is from coin page ", coinName)


    useEffect(() => {
        async function data() {
            const url = `https://coinranking1.p.rapidapi.com/coin/${coinName}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
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
                console.log(coins)
                setData(coins)
                // dispatch(actionCreators.coinData(coins.uuid))


                // console.log(coins);
            } catch (error) {
                console.error(error);
            }
        }

        data()


    }, [])

// console.log("hii i am harsh ",data)

    return (
        <>{
            <div class="card" style={{ width: '19rem' }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                    <h5 class="card-title">hhiihi </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>}
        </>
    )
}

export default Coin