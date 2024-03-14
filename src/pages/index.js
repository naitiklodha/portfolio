import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import client from "@/utils/sanity";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { Bounce } from "react-reveal";
import Loading from "@/components/loading";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects, skills }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />


      <div className={`bg-black text-gray-400`}>

        <Bounce>
          <Hero />
        </Bounce>

        <main
          className={`flex min-h-screen flex-col items-center justify-between overflow-hidden p-24 ${inter.className}`}
        >
          <Bounce>
            <About />
          </Bounce>
          <Bounce>
            <Skills skills={skills} />
          </Bounce>
          <Bounce>
            <Projects projects={projects} />
          </Bounce>
          <Bounce>
            <Contact />
          </Bounce>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query);
  const skillquery = '*[_type=="skillCategory"]';
  const skills = await client.fetch(skillquery);

  return {
    props: {
      projects,
      skills,
    },
  };
}
