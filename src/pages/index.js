import { Inter } from "next/font/google";
import { createClient } from "next-sanity";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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
    <>
      <Header />
      <Hero textStyle={textStyle} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between overflow-hidden  p-24 ${inter.className}`}
      >
        <Skills
          skills={skills}
          client={client}
          textStyle={textStyle}
        ></Skills>
        <Projects
          projects={projects}
          client={client}
          textStyle={textStyle}
        ></Projects>
      </main>
    </>
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
