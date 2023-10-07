import React, { useEffect, useState } from 'react'

const News = () => {
  const [articals, setArticals] = useState([])

  useEffect(() => {
    async function news() {
      const url = 'https://bing-news-search1.p.rapidapi.com/news/search?q=enternment&freshness=Day&textFormat=Raw&safeSearch=Off';
      const options = {
        method: 'GET',
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '59b35622d8mshb67ad93c651d392p14c3f0jsn87bbc0757bcd',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const newsData = result.value
        setArticals(newsData)




        console.log(newsData);
      } catch (error) {
        console.error(error);
      }
    }


    news()

  }, [])



  return (
    <>

     <div className='row'>
  {articals.map((e) => (
    <div className='col-lg-3 col-md-6 my-3 p-7' key={e.id}>
      <div className="card" style={{ width: '18rem' }}>
        {/* <img className="card-img-top" src={e.image.thumbnail.contentUrl}  /> */}
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">{e.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default News