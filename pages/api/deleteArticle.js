// pages/api/deleteArticle.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;
  const filePath = path.join(process.cwd(), 'public', 'crime.json');

  // Read the content of the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error reading JSON file.' });
    }

    // Parse JSON data
    let articles = JSON.parse(data);

    // Find the index of the article to delete
    const index = articles.findIndex(article => article.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ message: 'Article not found.' });
    }

    // Remove the article from the array
    articles.splice(index, 1);

    // Write updated data back to the file
    fs.writeFile(filePath, JSON.stringify(articles, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error updating JSON file.' });
      }

      res.status(200).json({ message: `Article with ID ${id} deleted successfully.` });
    });
  });
}
