// // pages/api/addFolder.js

// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { slug } = req.body;

//   if (!slug) {
//     return res.status(400).json({ message: 'Slug is required.' });
//   }

//   const folderPath = path.join(process.cwd(), 'article', slug);

//   // Check if the folder already exists
//   if (fs.existsSync(folderPath)) {
//     return res.status(400).json({ message: 'Folder already exists.' });
//   }

//   // Create the folder
//   fs.mkdir(folderPath, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: 'Error creating folder.' });
//     }
//     res.status(200).json({ message: 'Folder created successfully.' });
//   });
// }






// create forder 

// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { slug } = req.body;

//   if (!slug) {
//     return res.status(400).json({ message: 'Slug is required.' });
//   }

//   const folderPath = path.join(process.cwd(), 'pages', 'article', slug);

//   // Check if the folder already exists
//   if (fs.existsSync(folderPath)) {
//     return res.status(400).json({ message: 'Folder already exists.' });
//   }

//   // Create the folder
//   fs.mkdir(folderPath, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: 'Error creating folder.' });
//     }
//     res.status(200).json({ message: 'Folder created successfully.' });
//   });
// }



import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { slug } = req.body;

  if (!slug) {
    return res.status(400).json({ message: 'Slug is required.' });
  }

  const filePath = path.join(process.cwd(), 'pages', 'article', `${slug}.js`);

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    return res.status(400).json({ message: 'File already exists.' });
  }

  // Create the file
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating file.' });
    }
    res.status(200).json({ message: 'File created successfully.' });
  });
}
