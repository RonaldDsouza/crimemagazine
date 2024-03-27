import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Max = ({}) => {
  const images = [
    {
      src: '/wp-content/uploads/2023/06/dune_S2_2024.webp',
      alt: 'Dune Part2 2024',
      link: '../tvshow/goosebumps-2023/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Movie Dune Part 2 (2024)'
    },
    {
      src: '/wp-content/uploads/2023/06/Parallel_2024.webp',
      alt: 'Parallel 2024',
      link: '../movie/parallel-2024/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Movie Parallel (2024)'
    },
    {
      src: '/wp-content/uploads/2023/06/Stranger_in_the_Woods_2024.webp',
      alt: 'Stranger in the Woods 2024',
      link: '../movie/stranger-in-the-woods-2024/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Movie Stranger in the Woods (2024)'
    },
    {
      src: '/wp-content/uploads/2023/06/Red_Right_Hand_2024.webp',
      alt: 'Red Right Hand 2024',
      link: '../movie/red-right-hand-2024/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Movie Red Right Hand (2024)'
    },
    {
      src: '/wp-content/uploads/2023/06/Halo_2024.webp',
      alt: 'Halo Season 2 ',
      link: '../tvshow/halo-s02-2024/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Tv Show Halo Season 2 (2024)'
    },
    {
      src: '/wp-content/uploads/2023/06/Indian_Police_force_2024.webp',
      alt: 'Indian Police Force Season 01',
      link: '../tvshow/indian-police-force-s01-2024/',
      boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
      text: 'Tv Show Indian Police Force Season 01 (2024)'
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const handleImageClick = link => {
    window.location.href = link
  }

  return (
    <div className='carousel-inner relative w-full cursor-pointer m-10 overflow-hidden'>
      <h2
        className='mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-3xl dark:text-white'
        style={{ color: '#40D7BC', textShadow: '2px 5px 5px #000000' }}
      >
        Latest Crime Magazine Updates{' '}
      </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              onClick={() => handleImageClick(image.link)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                textShadow: '2px 5px 5px #000000',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            >
              <img
                className='scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl'
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
              />
            </div>
            <div
              className='text-center mt-2 text-2xl'
              style={{ color: '#40D7BC', textShadow: '2px 5px 5px #000000' }}
            >
              {image.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Max
