import React from 'react';
import { techStack } from '../data';
import SkillCard from '../utils/components/Cards/SkillCard';

export const AboutPage = () => {
  return (
    <section id="about" className="page__container">
      <div className="page__title">
        <h1 className="text-white">
          <span className="text-accent"> About </span> myself: My
          <span className="text-accent"> tech </span> stack
        </h1>
      </div>
      <div className="flex-row mt-8 flex gap-2  justify-center  ">
        <div className="bg-secondAccent rounded-sm  self-center   p-8">
          <div className="gap-8 flex-col  text-thirdAccent flex text-left ">
            <p className="">
              Hi, my name is Lucas. I'm a
              <span className="font-extrabold text-white">
                {' '}
                Computer Engineering{' '}
              </span>
              student with a passion for
              <span className="font-extrabold text-white"> Engineering </span>.
            </p>
            <p className="">
              I'm currently pursuing
              <span className="font-extrabold text-white">
                {' '}
                Computer Engineering{' '}
              </span>
              at <span className="font-extrabold text-white"> UA </span>
              (Universidad Americana), located in Asuncion, Paraguay.
            </p>
            <p className="">
              I'm a full-stack developer, specializing in the
              <span className="font-extrabold text-white"> MERN </span> stack
              (MongoDB, Express, React, and Node), and I'm keen on building
              high-quality, scalable web applications.
            </p>
            <p className="">
              My approach to application development is based on several core
              principles. I prioritize creating
              <span className="font-extrabold text-white"> modern </span> user
              interfaces that are visually
              <span className="font-extrabold text-white"> appealing </span>
              and easy to use. Additionally, I am committed to ensuring that
              every application I build performs
              <span className="font-extrabold text-white"> optimally </span>
              and is
              <span className="font-extrabold text-white"> user-friendly</span>.
            </p>
            <p className="">
              I continuously improve my skills and knowledge by tackling complex
              challenges and collaborating with others to find creative
              solutions.
            </p>
          </div>
          <a
            download=""
            src=""
            className=" hidden absolute bottom-4 right-4 border p-2 "
          >
            Resume
          </a>
        </div>
        <div className="skill__container">
          {techStack.map(({ stack, stackName, id }) => (
            <SkillCard key={id} stack={stack} stackName={stackName}></SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};
