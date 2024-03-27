// // Header.js
// import React, { useState } from 'react'
// import Link from 'next/link'
// import styles from '../styles/Header.module.css'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className={styles.header}>
//       <nav className={styles.nav}>
//         <div className={styles.logo}>
//           <Link href='/'>
//             <img
//               src='./logo.png'
//               alt='Crime Magazine Logo'
//               className='rounded-3xl'
//             />
//           </Link>
//         </div>

//         <div className={styles.socialLinks}>
//           <Link
//             href='https://twitter.com'
//             target='_blank'
//             rel='noopener noreferrer'
//             size={48}
//             round
//           >
//             <img
//               src='/twitter-logo.png'
//               alt='Twitter'
//                         />
//           </Link>
//           <Link
//             href='https://facebook.com/'
//             target='_blank'
//             rel='noopener noreferrer'
//             size={48}
//             round
//           >
//             <img src='/facebook-logo.png' alt='Facebook' />
//           </Link>
//           <Link
//             href='https://instagram.com/'
//             target='_blank'
//             rel='noopener noreferrer'

//             round
//           >
//             <img src='/insta-logo.png' alt='Instagram' />
//           </Link>
//           <Link
//             href='https://www.linkedin.com/'
//             target='_blank'
//             rel='noopener noreferrer'
//             size={48}
//             round
//           >
//             <img src='/linken-logo.png' alt='Linkedin' />
//           </Link>
//           {/* Add more social media links as needed */}
//         </div>

//         <button className={styles.menuButton} onClick={toggleMenu}>
//           {isMenuOpen ? 'Close' : 'Menu'}
//         </button>
//         <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
//           <li>
//             <Link href='/'>
//               <h2>Home</h2>
//             </Link>
//           </li>
//           <li>
//             <Link href='/about'>
//               <h2>About</h2>
//             </Link>
//           </li>
//           <li>
//             <Link href='/contact'>
//               <h2>Contact</h2>
//             </Link>
//           </li>
//           {/* Add more menu items as needed */}
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default Header

import Link from 'next/link'
import { useState } from 'react' // Import useState hook
import styles from '../styles/Header.module.css'

export default function Home () {
  const [navbar, setNavbar] = useState(false)

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div>
      <nav className={`${styles.nav}`} className='bg-gray-800 '>
        {/* <nav className="w-full bg-black" style={{ marginTop: '10px' }}> */}
        <div className='px-4 mx-auto md:flex md:items-center md:justify-between md:px-8'>
          <div className='flex items-center py-3 md:py-5'>
            <div className='flex items-center flex-col'>
              <img
                src='/logo.png'
                alt='Logo'
                width={450}
                height={100}
                className='rounded-3xl'
              />
              <p
                className='text-white mt-2 text-center md:text-right'
                style={{ marginTop: '10px', textShadow: '5px 5px 5px #2b2 ' }}
              >
                {' '}
                The Darkest Crime And Evil Minds.
              </p>
            </div>
            <div className='px-5 py-3 md:py-5 container mx-auto flex items-center justify-between space-x-2'>
              {/* Social media icons */}
              <Link
                href='https://twitter.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/twitter-logo.png'
                  alt='Twitter'
                  className='w-10 h-10'
                />
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
                <img
                  src='/insta-logo.png'
                  alt='Instagram'
                  className='w-10 h-10'
                />
              </Link>
              <Link
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/linken-logo.png'
                  alt='Linkedin'
                  className='w-10 h-10'
                />
              </Link>
              {/* Add more social media links as needed */}
            </div>
            {/* <div
              className={`${styles.socialLinks}`}
              className='px-4   py-3 md:py-5 container mx-auto flex items-center justify-between'
            >
              <Link
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/twitter-logo.png'
                  alt='Twitter'
                  style={{ width: '100px', height: '100px ' }}
                />
              </Link>
              <Link
                href='https://facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/facebook-logo.png' alt='Facebook' style={{ width: '100px', height: '100px ' }}
                />
              </Link>
              <Link
                href='https://instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/insta-logo.png' alt='Instagram' style={{ width: '100px', height: '100px ' }}
                />
              </Link>
              <Link
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/linken-logo.png' alt='Linkedin' style={{ width: '100px', height: '100px ' }}
                />
              </Link>
           
            </div> */}
            <button className='md:hidden' onClick={toggleNavbar}>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {navbar ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16m-7 6h7' />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex ${
              navbar ? 'block' : 'hidden'
            } space-x-6 md:w-auto md:items-right`}
          >
            {/* <div className={`md:flex md:items-center space-x-4 ${navbar ? 'block' : 'hidden'}`}> */}
            <div className='md:flex-grow'></div>
            <div className='md:flex md:items-center text-center'>
              <a href='/'>
                <div
                  className=' block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold'
                  style={{ fontSize: '20px', textShadow: '2px 5px 5px #2b2 ' }}
                >
                  Home
                </div>
              </a>
              <a href='/intro/about'>
                <div
                  className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold'
                  style={{ fontSize: '20px', textShadow: '2px 5px 5px #2b2 ' }}
                >
                  About
                </div>
              </a>
              <a href='/intro/contact'>
                <div
                  className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold'
                  style={{ fontSize: '20px', textShadow: '2px 5px 5px #2b2 ' }}
                >
                  Contact
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
