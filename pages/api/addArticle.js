import fs from 'fs'
import path from 'path'

export default function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { id, name, description, keywords,url,title,slug,author,date,time,type,location,image,excerpt,articleBody,content,articleSection,datePublished,dateModified,category,sources,tags,video,audio,images } = req.body
  const filePath = path.join(process.cwd(), 'public', 'crime.json')

  // Read the content of the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Error reading JSON file.' })
    }

    // Parse JSON data
    let articles = JSON.parse(data)

    // Check if an article with the same ID already exists
    if (articles.find(article => article.id === parseInt(id))) {
      return res
        .status(400)
        .json({ message: 'Article with the same ID already exists.' })
    }

    // Add the new article to the array
    articles.push({
      id: parseInt(id),
      name,
      description,
      keywords,
      url,
      title,
      slug,
      author,
      date,
      time,
      type,
      location,
      image,
      excerpt,
      articleBody,
      content,
      articleSection,
      datePublished,
      dateModified,
      category,
      sources,
      tags,
      video,
      audio,
      images,
    })

    // Write updated data back to the file
    fs.writeFile(filePath, JSON.stringify(articles, null, 2), err => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Error updating JSON file.' })
      }

      res.status(200).json({ message: 'Article added successfully.' })
    })
  })
}
