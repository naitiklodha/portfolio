import { Inter } from "next/font/google";
import { createClient } from "next-sanity";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/sections/Hero"));
const About = dynamic(() => import("@/sections/About"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Projects = dynamic(() => import("@/sections/Projects"));
const Contact = dynamic(() => import("@/sections/Contact"));

const inter = Inter({ subsets: ["latin"] });
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
});

export default function Home({ projects, skills }) {
  const textStyle =
    "text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-tr from-purple-500  to-pink-500";
  return (
    <div className="bg-gray-200 dark:bg-black">
      <Header />
      <Hero textStyle={textStyle} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between overflow-hidden  p-24 ${inter.className}`}
      >
        <About textStyle={textStyle} />
        <Skills skills={skills} client={client} textStyle={textStyle} />
        <Projects projects={projects} client={client} textStyle={textStyle} />
        <Contact textStyle={textStyle} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = '*[_type=="projects"]';
  const projects = await client.fetch(query);
  const skillquery = '*[_type=="skills"]';
  const skills = await client.fetch(skillquery);

  return {
    props: {
      projects,
      skills,
    },
  };
}
