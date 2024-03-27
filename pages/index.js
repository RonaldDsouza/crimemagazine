import Head from 'next/head'
import ArticleCard from '../components/ArticleCard'
import BreakingNews from '../components/BreakingNews'

export default function Home ({ articles }) {

  const rankMathSchema = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Crime Magazine | The Darkest Crime And Evil Minds.",
  "url": "https://crimemagazine.vercel.app/",
  "logo": "https://crimemagazine.vercel.app/article-image.png",
  "description": "Welcome to Crime Magazine. Our premier destination for in-depth coverage of crime-related news in India.",
  "sameAs": [
    "https://crimemagazine.vercel.app/",
    "https://gravatar.com/drtrailer2022"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://crimemagazine.vercel.app/search/{search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "author": {
    "@type": "Person",
    "name": "Dr Trailer",
    "url": "https://crimemagazine.vercel.app/author/crimemagazine/",
    "image": {
      "@type": "ImageObject",
      "url": "https://gravatar.com/drtrailer2022"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Crime Magazine",
    "logo": {
      "@type": "ImageObject",
      "url": "https://crimemagazine.vercel.app/article-image.jpg"
    }
  }
}
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://crimemagazine.vercel.app/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://crimemagazine.vercel.app/search/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Home",
      "description": "Welcome to Crime Magazine",
      "url": "https://crimemagazine.vercel.app/"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "About",
      "description": "Our premier destination for in-depth coverage of crime-related news in India.",
      "url": "https://crimemagazine.vercel.app/about/"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Contact",
      "description": "Contact",
      "url": "https://crimemagazine.vercel.app/contact/"
    }
  ]
}
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://crimemagazine.vercel.app/"
  },
  "headline": "Crime Magazine | The Darkest Crime And Evil Minds.",
  "image": [
    "https://crimemagazine.vercel.app/article-image.jpg"
   ],
  "datePublished": "2024-03-27T08:00:00Z",
  "dateModified": "2024-03-28T09:20:00Z",
  "author": {
    "@type": "Person",
    "name": "Dr Trailer"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Crime Magazine",
    "logo": {
      "@type": "ImageObject",
      "url": "https://crimemagazine.vercel.app/article-image.jpg"
    }
  },
  "description": " Welcome to Crime Magazine, your premier destination for in-depth coverage of crime-related news in India. Our platform curates the most compelling stories from reliable sources, offering a comprehensive look into the world of crime. Through a blend of audio, video, and images sourced from reputable channels, we strive to present the truth behind each incident."
}
`;

  return (
    <div
      className='w-full  mx-auto py-8 px-4'
      style={{
        backgroundColor: 'rgb(192, 192, 192)'
      }}
    >
      <Head>
        <title>Crime Magazine | The Darkest Crime And Evil Minds.</title>
        <meta
          name='description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:locale" content="en_US" />
        <meta name="revisit-after" content="1 days" />
        <meta name='keywords' content="india news, india news headlines, india local news, india daily news, india newspaper, latest news, india headlines, india news today, india news, top news, breaking news, current news, current news updates, news updates, online newspaper, bollywood, sports, life and style, crime, news portal "/>
        <meta
          property='og:title'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          property='og:description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta property='og:site_name' content='Crime Magazine' />
        <meta property='og:type' content='website' />
        <meta property="og:type" content="article" />
        <meta name="mobile-web-app-capable" content="yes">
        <meta property='og:url' content='https://crimemagazine.vercel.app/' />
        <meta property='og:image' content='https://crimemagazine.vercel.app/article-image.jpg' />
        <meta property='og:image:type' content='image/jpg' />
        <meta name='dailymotion-domain-verification' content='dmqy1s4atw72q97l8' />
        <link rel="manifest" href="/site.webmanifest">
        <meta property='fb:page_id' content='101982830708' />
        <meta property='fb:app_id' content='854936678691784' />
        <meta name='twitter:site' content='@crime_mag_id' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='robots' content='index, follow, noodp, noydir' />
        <link rel='canonical' href='https://crimemagazine.vercel.app/' />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://crimemagazine.vercel.app/sitemap.xml" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name="google-site-verification" content="49WAkeHVyYLOO41vqw4JPOE4QOR244MUbadgZ4k3WcE" />
     
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
      </Head>

      <main className='container mx-auto py-8 px-4'>
        <h1
          className='text-4xl font-bold text-center mb-8'
          style={{
            color: '#FF0000',

            justifyContent: 'center',
            alignItems: 'center',

            textShadow: '3px 5px 5px #000',

            fontWeight: 'bold'
          }}
        >
          Welcome to Crime Magazine.
        </h1>
        <p className="text-lg text-center mb-8"  style={{
              textShadow: '1px 1px 1px #000',
                      
            }}>
    Welcome to Crime Magazine, your premier destination for in-depth coverage of crime-related news in India. Our platform curates the most compelling stories from reliable sources, offering a comprehensive look into the world of crime. Through a blend of audio, video, and images sourced from reputable channels, we strive to present the truth behind each incident.

    From high-profile cases to lesser-known events, we delve deep into the details, providing our readers with a nuanced understanding of the crime landscape in India. Our commitment to accuracy and reliability ensures that every story we deliver is thoroughly researched and fact-checked.

    At Crime Magazine, we aim to shed light on the complexities of crime while offering insights into its impact on society. Join us as we uncover the truth behind the headlines and explore the realities of the crime world in India.
  </p>
        <BreakingNews />
        <ArticleCard />
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  try {
    const res = await fetch('/crime.json')
    const data = await res.json()
    const articles = data.articles

    return {
      props: {
        articles
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        articles: [] // Return an empty array if there's an error
      }
    }
  }
}
