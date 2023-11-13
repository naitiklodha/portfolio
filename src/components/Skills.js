import { useNextSanityImage } from 'next-sanity-image';
import { Zoom, Slide, Fade } from 'react-reveal';
import ProgressBar from './ProgressBar';
import client from '@/utils/sanity';
import Image from 'next/image';
import { textStyle } from '@/utils/styles';

const SkillItem = ({ skill }) => {
  const imageProps = useNextSanityImage(client, skill.image);

  return (
    <Fade>
      <div className="mb-4 flex items-center">
        <Zoom>
          <div className="flex justify-center">
            <Image {...imageProps} className="h-8 w-8 md:h-12 md:w-12" alt={skill.name} />
          </div>
        </Zoom>
        <ProgressBar percentage={skill.level} />
      </div>
    </Fade>
  );
};

const CategoryCard = ({ category }) => {
  const sortSkillsDescending = (category) => {
    return category.skills.sort((a, b) => b.level - a.level);
  };
  sortSkillsDescending(category);

  return (
  
      <div className="border-gray-500 border-2 p-6 mx-8 rounded-lg shadow-md hover:scale-110">
        <Slide top>
          <h2 className={`${textStyle} text-2xl font-bold mb-4 text-center`}>{category.name}</h2>
        </Slide>
        <div className="">
          
          {
          category.skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </div>
      </div>
  
  );
};

const Skills = ({ skills }) => {

  return (
    <Slide bottom>
      <section className="py-16" id="skills">
        <Fade>
          <h1 className={`text-5xl mb-8 text-center uppercase ${textStyle}`}>Skills</h1>
        </Fade>
        <div className="flex flex-wrap justify-center">
          {skills.map((category) => (
            <Zoom key={category._id}>
              <div className="mb-8 m-4" key={category._id}>
                <CategoryCard category={category} />
              </div>
            </Zoom>
          ))}
        </div>
      </section>
    </Slide>
  );
};


export default Skills;
