import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [articleCount, setArticleCount] = useState(0)
  const [articleDeletionTimeLeft, setArticleDeletionTimeLeft] = useState('')
  const [jsonFilesDeleted, setJsonFilesDeleted] = useState(0)
  const [jsonFilesCount, setJsonFilesCount] = useState(0)
  const [articlesAddedPerDay, setArticlesAddedPerDay] = useState(0)
  const [articlesAddedPerWeek, setArticlesAddedPerWeek] = useState(0)
  const [articlesAddedPerMonth, setArticlesAddedPerMonth] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [
        articleCountResponse,
        deletionTimeLeftResponse,
        jsonFilesDeletedResponse,
        jsonFilesCountResponse,
        articlesAddedResponse
      ] = await Promise.all([
        axios.get('/api/articleCount'),
        axios.get('/api/deletionTimeLeft'),
        axios.get('/api/jsonFilesDeleted'),
        axios.get('/api/jsonFilesCount'),
        axios.get('/api/articlesAdded')
      ])

      setArticleCount(articleCountResponse.data.count)
      setArticleDeletionTimeLeft(deletionTimeLeftResponse.data.timeLeft)
      setJsonFilesDeleted(jsonFilesDeletedResponse.data.count)
      setJsonFilesCount(jsonFilesCountResponse.data.count)
      setArticlesAddedPerDay(articlesAddedResponse.data.articlesAddedPerDay)
      setArticlesAddedPerWeek(articlesAddedResponse.data.articlesAddedPerWeek)
      setArticlesAddedPerMonth(articlesAddedResponse.data.articlesAddedPerMonth)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
      <h2>Article Count: {articleCount}</h2>
        <h2>Article Deletion Time Left: {articleDeletionTimeLeft}</h2>
        <h2>JSON Files Deleted: {jsonFilesDeleted}</h2>
        <h2>JSON Files Count: {jsonFilesCount}</h2>
        <h2>Articles Added Per Day: {articlesAddedPerDay}</h2>
        <h2>Articles Added Per Week: {articlesAddedPerWeek}</h2>
        <h2>Articles Added Per Month: {articlesAddedPerMonth}</h2>
      </div>
    </div>
  )
}

export default Dashboard
