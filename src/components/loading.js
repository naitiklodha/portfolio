import Quote from"./Quote";
import Lottie from "react-lottie";
import animationData from "public/loading.json"
import Head from "next/head";


export default function Loading() {
  
  

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen px-4">
      <Head>
        <title>Naitik Lodha</title>
        <meta property="og:title" content="Naitik Lodha" />
        <meta
          property="og:description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta name="robots" content="follow" />

        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,React.js,React,TailwindCSS,Next,Next.js,Flask,Naitik Lodha"
        />
        <meta name="author" content="Naitik Lodha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="dlkM9uq8vriBaZ1483qLaZ-6rRmAPY3FI6wD_XBMAkY"
        />
        <meta property="og:image" content="image.png" />
      </Head>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
        <Quote/>
      </div>
    );
  }