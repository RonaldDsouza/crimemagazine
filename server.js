const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression'); // import the compression package
const fs = require('fs'); // import the fs module
const cron = require('node-cron'); // import the node-cron module

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files with caching headers
  server.use('/static', express.static(path.join(__dirname, 'static'), {
    maxAge: dev ? '0' : '365d',
    immutable: true
  }));

  // Compress static files with gzip
  server.use(compression());

  // Serve Next.js pages
  server.get('*', (req, res) => handle(req, res));

  // Dashboard route
  server.get('/dashboard', (req, res) => {
    try {
      // Read the JSON file containing logged information
      const logs = JSON.parse(fs.readFileSync('logs.json', 'utf8'));
      // Render the dashboard page and pass logged information as props
      return app.render(req, res, '/dashboard', { logs });
    } catch (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  // Schedule a cron job to run every hour
  cron.schedule('0 * * * *', () => {
    console.log('Running article deletion process...');

    try {
      // Read the JSON file containing articles
      const articles = JSON.parse(fs.readFileSync('articles.json', 'utf8'));
      // Implement logic to delete articles that meet the deletion criteria
      // For example, iterate through articles, check deletion condition, and delete if necessary
      const updatedArticles = articles.filter(article => {
        // Implement logic to determine if article should be deleted
        // Example: if article.delete === "After 24 Hours" and creation time > 24 hours ago, delete article
        return true; // Placeholder logic
      });

      // Write updated articles back to JSON file
      fs.writeFileSync('articles.json', JSON.stringify(updatedArticles));

      console.log('Article deletion process completed.');
    } catch (error) {
      console.error('Error deleting articles:', error);
    }
  }, {
    scheduled: true,
    timezone: 'Asia/Kolkata' // Set your desired timezone
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
