// // import fs from 'fs';
// // import path from 'path';

// // export default function handler(req, res) {
// //   try {
// //     const filePath = path.resolve('./public/crime.json');
// //     const data = fs.readFileSync(filePath, 'utf8');
// //     const articles = JSON.parse(data);

// //     // Extract additional information for the report
// //     const reportData = {
// //       count: articles.length,
// //       categories: extractCategories(articles),
// //       authors: extractAuthors(articles),
// //       locations: extractLocations(articles),
// //       // Add more data extraction functions as needed
// //     };

// //     res.status(200).json(reportData);
// //   } catch (error) {
// //     console.error('Error fetching crime data:', error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // }

// // // Function to extract unique categories from articles
// // function extractCategories(articles) {
// //   const categories = new Set();
// //   articles.forEach(article => {
// //     categories.add(article.category);
// //   });
// //   return Array.from(categories);
// // }

// // // Function to extract unique authors from articles
// // function extractAuthors(articles) {
// //   const authors = new Set();
// //   articles.forEach(article => {
// //     authors.add(article.author);
// //   });
// //   return Array.from(authors);
// // }

// // // Function to extract unique locations from articles
// // function extractLocations(articles) {
// //   const locations = new Set();
// //   articles.forEach(article => {
// //     locations.add(article.location);
// //   });
// //   return Array.from(locations);
// // }

// // pages/api/crime.js

// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   try {
//     const filePath = path.resolve('./public/crime.json');
//     const data = fs.readFileSync(filePath, 'utf8');
//     const articles = JSON.parse(data);

//     // Extract required information
//     const deletionInProgress = articles.filter(article => article.delete !== 'No');
//     const deletionTimeLeft = calculateDeletionTimeLeft(deletionInProgress);
//     const articlesAddedPerMonth = calculateArticlesAddedPerMonth(articles);
//     const articlesAddedPerWeek = calculateArticlesAddedPerWeek(articles);

//     const reportData = {
//       deletionInProgress: deletionInProgress.map(article => ({
//         id: article.id,
//         status: article.delete
//       })),
//       deletionTimeLeft,
//       articlesAddedPerMonth,
//       articlesAddedPerWeek
//     };

//     res.status(200).json(reportData);
//   } catch (error) {
//     console.error('Error fetching crime data:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// // Function to calculate time left for articles deletion
// function calculateDeletionTimeLeft(articles) {
//   // Implement your logic to calculate time left for deletion
//   // For demonstration purposes, return a placeholder value
//   return '2 days';
// }

// // Function to calculate the number of articles added per month
// function calculateArticlesAddedPerMonth(articles) {
//   // Implement your logic to calculate articles added per month
//   // For demonstration purposes, return a placeholder value
//   return 20;
// }

// // Function to calculate the number of articles added per week
// function calculateArticlesAddedPerWeek(articles) {
//   // Implement your logic to calculate articles added per week
//   // For demonstration purposes, return a placeholder value
//   return 5;
// }

// pages/api/crime.js

import fs from 'fs'
import path from 'path'

export default function handler (req, res) {
  try {
    const filePath = path.resolve('./public/crime.json')
    const data = fs.readFileSync(filePath, 'utf8')
    const articles = JSON.parse(data)

    // Filter articles that are scheduled for deletion with a specific time
    const deletionInProgress = articles.filter(
      article => article.delete !== 'No' && article.delete.includes('After')
    )

    // Get the deletion times for articles in progress
    const deletionTimes = deletionInProgress.map(article => article.delete)

    // Calculate the time left for deletion for each article
    const timeLeftForDeletion = calculateTimeLeft(deletionTimes)

    // Prepare the report data
    const reportData = {
      deletionInProgress: deletionInProgress.map((article, index) => ({
        id: article.id,
        status: article.delete,
        timeLeft: timeLeftForDeletion[index] // Get time left for deletion for each article
      })),
      // Placeholder values for articles added per month and per week
      articlesAddedPerMonth: articles.length,
      articlesAddedPerWeek: articles.length
    }

    // Send the report data as JSON response
    res.status(200).json(reportData)
  } catch (error) {
    console.error('Error fetching crime data:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// Function to calculate the time left for deletion for multiple articles
function calculateTimeLeft(deletionTimes) {
    return deletionTimes.map(deletionTime => {
      // Parse the time from the deletion string
      const deletionTimeString = deletionTime.split(' ')[2]; // Assuming deletion time format is consistent
  
      // Parse the deletion time values (days, hours, minutes, seconds)
      const [days, hours, minutes, seconds] = deletionTimeString
        .split(/d|h|m|s/)
        .filter(Boolean)
        .map(part => parseInt(part)); // Convert parts to integers
  
      // Calculate the total time left in milliseconds
      const timeLeft =
        (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  
      return timeLeft;
    });
  }
  