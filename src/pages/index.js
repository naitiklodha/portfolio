// pages/index.js

import { Inter } from "next/font/google";
import client from "@/utils/sanity";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { Bounce } from "react-reveal";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects, skills }) {
  return (
    <div className={`bg-black text-gray-50`}>
      <Bounce>
        <Header />
      </Bounce>
      <Hero />

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
