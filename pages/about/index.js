//useState is a hook in React, allows you to add state to functional components. 
// using motion Framer  is a popular animation library that makes it easy to create smooth and interactive animations in React applications.
//https://www.framer.com/motion/

import React, { useState } from 'react';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import CountUp from 'react-countup';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '1sstAwards - Awards ',
        stage: '2011 - 2012',
      },
      {
        title: '1sstAwards - Awards ',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - ABC Agency',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'full stack- ABC Agency',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University',
        stage: '2011',
      },
      {
        title: 'XY Diploma - ABC University',
        stage: '2009',
      },
      {
        title: 'XY Diploma- ABC University',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] =useState(0);
  console.log(index);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />

    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial='hidden' 
    animate='show'
     exit='hidden'
    className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>

    <div className='container max-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
     {/*text*/}
      <div className='flex-1 flex flex-col justify-center'>
        
      <motion.h2
      variants={fadeIn('right', 0.2)} 
      initial='hidden' 
      animate='show'
       exit='hidden'
      className='h2'>Lorem Ipsum 
       <span className='text-accent'>simply</span> 
       dummy text  
      </motion.h2>
      <motion.p 
      variants={fadeIn('right', 0.4)} 
      initial='hidden' 
      animate='show'
      exit='hidden'
      className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'> 
      Lorem Ipsum has been the industry's standard dummy text
       </motion.p>
      
      <motion.div
variants={fadeIn('right', 0.6)} 
initial='hidden' 
animate='show'
 exit='hidden'

       className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>

        <div className='flex flex-1 xl:gap-x-6'>

          {/* exp */}

          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-exl xl:text-4xl font-extrabold text-accent mb-2'>
              < CountUp start={0} end={10} duration={5}/>+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                years of experience
                </div>
          </div>
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>

            <div className='text-exl xl:text-4xl font-extrabold text-accent mb-2'>
              < CountUp start={0} end={100} duration={5}/>
              +
              </div>

              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                satisfied
                </div>
            </div>    
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-exl xl:text-4xl font-extrabold text-accent mb-2'>
              < CountUp start={0} end={50} duration={5}/>+</div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects </div>
          
          </div>

        </div>


      </motion.div>
      
      </div>



        {/*info*/}
      <motion.div
      variants={fadeIn('left', 0.4)} 
      initial='hidden' 
      animate='show'
       exit='hidden'
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 '>
          {aboutData.map((iteam, iteamIndex)=>{
            return <div key={iteamIndex} className={ `${index === iteamIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after: duration-300'} cursor-pointer capitalize xl:tex-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
            onClick={()=> setIndex(iteamIndex)}
            >
            {iteam.title}
            </div> 
            
          })}
        </div>


        <div className='bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, iteamIndex)=>{
            return (
            <div key={iteamIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* title */}
              <div>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>

              {/*icons*/}
              {item.icons?.map((icon, iteamIndex)=>{
                return <div className='text-2xl text-white'>
                  {icon}
                  </div>
              
              }
              )}
              </div>

            </div>
)
          })
          }
        </div>
      </motion.div>
    </div>
  </div>)
};

export default About;
