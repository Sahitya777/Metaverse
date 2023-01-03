'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText,ExploreCard,TitleText,StartSteps } from "../components";
import styles from '../styles'
import {fadeIn,staggerContainer} from '../utils/motion'
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:'false',amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    ></motion.div>
    <TypingText title="| People on the World" textStyles="text-center"/>
    <TitleText  
      title={<>Track friends around you and invite them to play together in the same world</>}
      textStyles="text-center"
    />
    <motion.div
      variants={fadeIn('up','tween',0.3,1)}
      className="relative mt-[68px] flex w-full "
    >
      <img
        src="/map.png"
        alt="map"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
          src="people-01.png"
          alt="people"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
          src="people-02.png"
          alt="people"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-5 right-40 w-[100px] h-[100px] p-[6px] bg-[#5d6680] rounded-[20%]">
        <img
          src="meta.png"
          alt="people"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
          src="people-03.png"
          alt="people"
          className="w-full h-full"
        />
      </div>

    </motion.div>
  </section>
);

export default World;
