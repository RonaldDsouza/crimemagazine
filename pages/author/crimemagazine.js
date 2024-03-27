import { useState } from 'react';
import Head from 'next/head';


export default function crimemagazine ({ movie }) {
    
    return (
        <div className={`w-full bg-gray-600 shadow`}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Crime Magazine | The Darkest Crime And Evil Minds.</title>
                {/* Add your other meta tags here */}
                <script
                    type="application/ld+json"
                    className="rank-math-schema"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Person",
                                    "@id": "https://gravatar.com/drtrailer2022/#person",
                                    "name": "Dr Trailer"
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://crimemagazine.vercel.app/#website",
                                    "url": "https://crimemagazine.vercel.app",
                                    "name": "Watch Movies Online™",
                                    "publisher": {
                                        "@id": "https://gravatar.com/drtrailer2022/#person"
                                    },
                                    "inLanguage": "en-US"
                                },
                                {
                                    "@type": "ProfilePage",
                                    "@id": "https://crimemagazine.vercel.app/author/crimemagazine/#webpage",
                                    "url": "https://crimemagazine.vercel.app/author/crimemagazine/",
                                    "name": "Dr Trailer",
                                    "isPartOf": {
                                        "@id": "https://crimemagazine.vercel.app/#website"
                                    },
                                    "inLanguage": "en-US",
                                    "mainEntityOfPage": {
                                        "@id": "https://crimemagazine.vercel.app/author/crimemagazine/#webpage"
                                    }
                                },
                                {
                                    "@type": "Person",
                                    "@id": "https://crimemagazine.vercel.app/author/crimemagazine/",
                                    "name": "Dr Trailer",
                                    "url": "https://crimemagazine.vercel.app/author/crimemagazine/",
                                    "image": {
                                        "@type": "ImageObject",
                                        "@id": "https://gravatar.com/drtrailer2022",
                                        "url": "https://gravatar.com/drtrailer2022",
                                        "caption": "Dr Trailer",
                                        "inLanguage": "en-US"
                                    },
                                    "sameAs": [
                                        "https://crimemagazine.vercel.app"
                                    ],
                                    "mainEntityOfPage": {
                                        "@id": "https://crimemagazine.vercel.app/author/crimemagazine/#webpage"
                                    }
                                }
                            ]
                        }`
                    }}
                ></script>
            </Head>
            <div id="main">
       
                        <div className="hm-button"><a href="https://crimemagazine.vercel.app/" className="btn btn-lg btn-successful" style={{ color: '#40D7BC', fontSize: '24px', textShadow: '3px 5px 5px #000' }}>Crime Magazine | The Darkest Crime And Evil Minds.</a></div>
                    </div>
                </div>
          
    );
}
