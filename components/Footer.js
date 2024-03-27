// Footer.js

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <p className='text-gray-300'>
          &copy; 2024 Crime Magazine. All rights reserved.
        </p>
        <div className='px-4 flex space-x-4'>
          {/* Social media icons */}
          <Link
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/twitter-logo.png' alt='Twitter' className='w-10 h-10' />
          </Link>
          <Link
            href='https://facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/facebook-logo.png'
              alt='Facebook'
              className='w-10 h-10'
            />
          </Link>
          <Link
            href='https://instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/insta-logo.png' alt='Instagram' className='w-10 h-10' />
          </Link>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/linken-logo.png' alt='Linkedin' className='w-10 h-10' />
          </Link>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
