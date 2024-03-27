import Link from 'next/link';
import { useState } from 'react'; // Import useState hook


export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
  <nav className="w-full bg-black" style={{ marginTop: '10px' }}>
  <div className="px-4 mx-auto md:flex md:items-center md:justify-between md:px-8">
          <div className="flex items-center py-3 md:py-5">
            <div className="flex items-center flex-col">
              <img src='/logo.png' alt='Logo' width={450} height={100} className="rounded-3xl" />
              <p className="text-white mt-2 text-center md:text-right"style={{ marginTop: '10px', textShadow: "5px 5px 5px #2b2 "}}> The Best Movies Platform HD Movies.</p>
            </div>
     
            <button className="md:hidden" onClick={toggleNavbar}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbar ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${navbar ? 'block' : 'hidden'} space-x-6 md:w-auto md:items-right`}>
          {/* <div className={`md:flex md:items-center space-x-4 ${navbar ? 'block' : 'hidden'}`}> */}
            <div className="md:flex-grow"></div>
            <div className="md:flex md:items-center text-center">
              <a href="/">
                <div className=" block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold" style={{ fontSize:"20px", textShadow: "2px 5px 5px #2b2 " }}>
                  Home
                </div>
                </a>
              <a href="/intro/contact">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold" style={{ fontSize:"20px", textShadow: "2px 5px 5px #2b2 " }}>
                  Contact
                </div>
              </a>
              <a href="/intro/privacy">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold" style={{ fontSize:"20px", textShadow: "2px 5px 5px #2b2 " }}>
                 Privacy Policy
                </div>
              </a>
              <a href="/intro/tearms">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold" style={{ fontSize:"20px", textShadow: "2px 5px 5px #2b2 " }}>
                 Term Conditions
                </div>
              </a>
             <a href="/intro/dmca">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold" style={{ fontSize:"20px", textShadow: "2px 5px 5px #2b2 " }}>
                 D.M.C.A
                </div>
              </a>
                  </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


// components/Header.js
// import Link from 'next/link';
// import { useState } from 'react';
// import styles from '../styles/menu.module.css';

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);

//   const toggleNavbar = () => {
//     setNavbar(!navbar);
//   };

//   return (
//     <header className={styles.menu}>
//       <nav className="w-full bg-black">
//         <div className="px-4 mx-auto md:flex md:items-center md:justify-between md:px-8">
//           <div className="flex items-center py-3 md:py-5">
//             <div className="flex items-center flex-col">
//               <img src='/logo.png' alt='Logo' width={450} height={100} className="rounded-3xl" />
//               <p className="text-white mt-2 text-center md:text-right">Watch HD Quality Movies & TV Series Online Free.</p>
//             </div>
//             <button className="md:hidden" onClick={toggleNavbar}>
//               <svg
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {navbar ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//           <div className={`md:flex ${navbar ? 'block' : 'hidden'} md:w-auto md:items-center`}>
//             <Link href="/">
//               <div className={styles.menuItem}>Home</div>
//             </Link>
//             <Link href="/movies/info">
//               <div className={styles.menuItem}>Movies</div>
//             </Link>
//             <Link href="/tvshows/info">
//               <div className={styles.menuItem}>TV Shows</div>
//             </Link>
//             <Link href="/contact">
//               <div className={styles.menuItem}>Contact</div>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
