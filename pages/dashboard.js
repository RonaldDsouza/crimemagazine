import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const [reportData, setReportData] = useState(null)
  const [articlesAddedPerMonth, setArticlesAddedPerMonth] = useState(0);
  const [articlesAddedPerWeek, setArticlesAddedPerWeek] = useState(0);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [articleIdToDelete, setArticleIdToDelete] = useState('')
  const [folderSlug, setFolderSlug] = useState('')
  const [slugToDelete, setSlugToDelete] = useState('')
  const [newArticle, setNewArticle] = useState({
    id: '',
    name: '',
    description: '',
    keywords: '',
    url: '',
    title: '',
    slug: '',
    author: '',
    date: '',
    time: '',
    type: '',
    location: '',
    image: '',
    excerpt: '',
    articleBody: '',
    content: '',
    articleSection: '',
    datePublished: '',
    dateModified: '',
    category: '',
    sources: '',
    tags: [],
    video: [],
    audio: '',
    images: []
  })
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const handleImagesChange = e => {
    const images = e.target.value.split('\n').map(url => url.trim()) // Split input by new lines and trim each URL
    setNewArticle({ ...newArticle, images })
  }
  // const handleTagsChange = (e) => {
  //   const tagsArray = e.target.value.split(',');
  //   setNewArticle({ ...newArticle, tags: tagsArray });
  // };
    
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/crime')
      const data = response.data
      setReportData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleLogin = () => {
    // Perform basic authentication
    if (username === 'ron' && password === 'ron') {
      setAuthenticated(true)
    }
  }

  const handleLogout = () => {
    // Clear username, password, and authentication status
    setUsername('')
    setPassword('')
    setAuthenticated(false)
  }

  const handleDeleteArticle = async () => {
    try {
      const response = await axios.delete(
        `/api/deleteArticle?id=${articleIdToDelete}`
      )
      alert(response.data.message)
      setArticleIdToDelete('')
      // Fetch data again after deletion
      fetchData()
    } catch (error) {
      console.error('Error deleting article:', error)
      alert('An error occurred while deleting the article. Please try again.')
    }
  }

  const handleAddArticle = async () => {
    try {
      // Validate input fields
      if (
        !newArticle.id ||
        !newArticle.name ||
        !newArticle.description ||
        !newArticle.keywords
      ) {
        alert('Please fill in all fields.')
        return
      }

      // Send a POST request to add the new article
      const response = await axios.post('/api/addArticle', newArticle)
      alert(response.data.message)

      // Clear the input fields after adding the article
      setNewArticle({
        id: '',
        name: '',
        description: '',
        keywords: '',
        url: '',
        title: '',
        slug: '',
        author: '',
        date: '',
        time: '',
        type: '',
        location: '',
        image: '',
        excerpt: '',
        articleBody: '',
        content: '',
        articleSection: '',
        datePublished: '',
        dateModified: '',
        category: '',
        sources: '',
        tags: [],
        video:[],
        audio: '',
        images: []
      })

      // Fetch data again after adding the new article
      fetchData()
    } catch (error) {
      console.error('Error adding article:', error)
      alert('An error occurred while adding the article. Please try again.')
    }
  }

  const handleAddFolder = async () => {
    try {
      if (!folderSlug) {
        alert('Please enter a folder slug.')
        return
      }

      const response = await axios.post('/api/addFolder', { slug: folderSlug })
      alert(response.data.message)
      setFolderSlug('')
    } catch (error) {
      console.error('Error creating folder:', error)
      alert('An error occurred while creating the folder. Please try again.')
    }
  }

  const handleDeleteSlug = async () => {
    try {
      const response = await axios.delete('/api/deleteSlug', {
        data: { slug: slugToDelete }
      })
      alert(response.data.message)
      setSlugToDelete('')
      // Fetch data again after deletion
      fetchData()
    } catch (error) {
      console.error('Error deleting slug:', error)
      alert('An error occurred while deleting the slug. Please try again.')
    }
  }

  if (!authenticated) {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      {reportData && (
        <div>
          {/* <h2>Deletion in Progress: {reportData.deletionInProgress.length}</h2> */}
          <ul>
            {reportData.deletionInProgress.map(article => (
              <li key={article.id}>
                Article ID: {article.id}, Status: {article.status}
              </li>
            ))}
          </ul>

          <h2>Articles Added Per Month: {reportData.articlesAddedPerMonth}</h2>
          <h2>Articles Added Per Week: {reportData.articlesAddedPerWeek}</h2>
          {/* Add Folder section */}
          <div>
            <h2>Add File</h2>
            <div>
              {/* Display other dashboard content here */}
              <input
                type='text'
                placeholder='Enter Slug to Delete'
                value={slugToDelete}
                onChange={e => setSlugToDelete(e.target.value)}
              />
              <button onClick={handleDeleteSlug}>Delete File</button>
            </div>
            <input
              type='text'
              placeholder='Folder Slug'
              value={folderSlug}
              onChange={e => setFolderSlug(e.target.value)}
            />
            <button onClick={handleAddFolder}>Create File</button>
          </div>
          <input
            type='text'
            placeholder='Enter Article ID to Delete'
            value={articleIdToDelete}
            onChange={e => setArticleIdToDelete(e.target.value)}
          />
          <button onClick={handleDeleteArticle}>Delete Article</button>

          {/* Add Article Form */}
          <div>
            <h2>Add New Article</h2>
            <input
              type='text'
              placeholder='ID'
              value={newArticle.id}
              onChange={e =>
                setNewArticle({ ...newArticle, id: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Name'
              value={newArticle.name}
              onChange={e =>
                setNewArticle({ ...newArticle, name: e.target.value })
              }
            />
            <textarea
              placeholder='Description'
              value={newArticle.description}
              onChange={e =>
                setNewArticle({ ...newArticle, description: e.target.value })
              }
            ></textarea>
            <input
              type='text'
              placeholder='Keywords'
              value={newArticle.keywords}
              onChange={e =>
                setNewArticle({ ...newArticle, keywords: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='URL'
              value={newArticle.url}
              onChange={e =>
                setNewArticle({ ...newArticle, url: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Title'
              value={newArticle.title}
              onChange={e =>
                setNewArticle({ ...newArticle, title: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Slug'
              value={newArticle.slug}
              onChange={e =>
                setNewArticle({ ...newArticle, slug: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Author'
              value={newArticle.author}
              onChange={e =>
                setNewArticle({ ...newArticle, author: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Date'
              value={newArticle.date}
              onChange={e =>
                setNewArticle({ ...newArticle, date: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Time'
              value={newArticle.time}
              onChange={e =>
                setNewArticle({ ...newArticle, time: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Type'
              value={newArticle.type}
              onChange={e =>
                setNewArticle({ ...newArticle, type: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Location'
              value={newArticle.location}
              onChange={e =>
                setNewArticle({ ...newArticle, location: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Image'
              value={newArticle.image}
              onChange={e =>
                setNewArticle({ ...newArticle, image: e.target.value })
              }
            />

            <textarea
              placeholder='Excerpt'
              value={newArticle.excerpt}
              onChange={e =>
                setNewArticle({ ...newArticle, excerpt: e.target.value })
              }
            ></textarea>
            <textarea
              placeholder='Article Body'
              value={newArticle.articleBody}
              onChange={e =>
                setNewArticle({ ...newArticle, articleBody: e.target.value })
              }
            ></textarea>
            <textarea
              placeholder='Content'
              value={newArticle.content}
              onChange={e =>
                setNewArticle({ ...newArticle, content: e.target.value })
              }
            ></textarea>
            <input
              type='text'
              placeholder='Article Section'
              value={newArticle.articleSection}
              onChange={e =>
                setNewArticle({ ...newArticle, articleSection: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Date Published'
              value={newArticle.datePublished}
              onChange={e =>
                setNewArticle({ ...newArticle, datePublished: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Date Modified'
              value={newArticle.dateModified}
              onChange={e =>
                setNewArticle({ ...newArticle, dateModified: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Category'
              value={newArticle.category}
              onChange={e =>
                setNewArticle({ ...newArticle, category: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Sources'
              value={newArticle.sources}
              onChange={e =>
                setNewArticle({ ...newArticle, sources: e.target.value })
              }
            />
            <input
              type='text'
              placeholder="Tags (Enter tags separated by commas)"
              value={newArticle.tags.join(',')}
              onChange={(e) => setNewArticle({ ...newArticle, tags: e.target.value.split(',') })}
            />
            <input
              type='text'
              placeholder='Video (Enter URLs separated by spaces or commas)'
              value={newArticle.video.join(',')}
              onChange={e =>
                setNewArticle({
                  ...newArticle,
                  video: e.target.value.split(/[,\s]+/)
                })
              
              }
            />
            <input
              type='text'
              placeholder='Audio'
              value={newArticle.audio}
              onChange={e =>
                setNewArticle({ ...newArticle, audio: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Images (Enter URLs separated by spaces or commas)'
              value={newArticle.images.join(',')}
              onChange={e =>
                setNewArticle({
                  ...newArticle,
                  images: e.target.value.split(/[,\s]+/)
                })
              }
            />
            {/* Additional fields for the new article */}
            {/* Add more input fields as needed for other properties */}
            <button onClick={handleAddArticle}>Add Article</button>
            {/* CSS */}
            <style jsx>{`
              .article-form {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #f9f9f9;
              }
              h2 {
                font-size: 1.5rem;
                margin-bottom: 20px;
              }
              input,
              textarea {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
              button {
                display: block;
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
