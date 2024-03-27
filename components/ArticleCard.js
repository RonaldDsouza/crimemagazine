import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const ArticleCard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/crime.json')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setArticles(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  if (articles.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
      {articles.map(article => (
        <div
          key={article.id}
          className='w-full rounded-lg shadow-lg p-6 mb-6'
          style={{
            backgroundColor: 'rgb(218, 219, 221)'
          }}
        >
          <Link href={`/article/${article.slug}`} passHref>
            <div>
              {/* <img src={`/images/${article.image}`} alt={article.title} className="w-full h-40 object-cover rounded-md mb-4" /> */}
              <img
                src={article.image}
                alt={article.title}
                className='w-full h-full object-fit rounded-md mb-4'
              />
              <h2
                className='text-xl font-bold text-red-500 mb-2'
                style={{
                  textShadow: '1px 1px 1px #000',
                  fontWeight: 'bold'
                }}
              >
                {article.title}
              </h2>
              <p
                className='text-gray-600'
                style={{
                  textShadow: '1px 1px 1px #000'
                }}
              >
                {article.excerpt}
              </p>
              <div className='mt-4 flex justify-between items-center'>
                <span
                  className='text-blue-600 hover:text-red-500'
                  style={{
                    fontWeight: 'bold',
                    textShadow: '1px 1px 1px #000',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '25px'
                  }}
                >
                  Read more...
                </span>
              </div>
              <span
                className=' text-blue-600 hover:text-red-500'
                style={{
                  marginTop: '25px'
                }}
              >
                <strong
                  className='text-black'
                  style={{
                    textShadow: '1px 1px 1px #000'
                  }}
                >
                  {' '}
                  Crime:{' '}
                </strong>{' '}
                {article.type}
              </span>
              <span className='mt-4 flex justify-between items-center text-blue-600 hover:text-red-500'>
                <strong
                  className='text-black'
                  style={{
                    textShadow: '1px 1px 1px #000'
                  }}
                >
                  {' '}
                  Date:
                </strong>{' '}
                {article.date}
              </span>
              <span className='mt-4 flex justify-between items-center text-blue-600 hover:text-red-500'>
                <strong
                  className='text-black'
                  style={{
                    textShadow: '1px 1px 1px #000'
                  }}
                >
                  {' '}
                  Place :{' '}
                </strong>
                {article.location}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleCard
