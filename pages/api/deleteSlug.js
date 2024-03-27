import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { slug } = req.body;

  if (!slug) {
    return res.status(400).json({ message: 'Slug is required.' });
  }

  const filePath = path.join(process.cwd(), 'pages', 'article', `${slug}.js`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found.' });
  }

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting file.' });
    }
    res.status(200).json({ message: 'File deleted successfully.' });
  });
}
