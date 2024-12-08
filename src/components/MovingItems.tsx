"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skills } from "@/data/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";

const SkillSwiper: React.FC<{ reverseDirection?: boolean }> = ({
  reverseDirection = false,
}) => (
  <Swiper
    slidesPerView={5}
    loop
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection,
    }}
    speed={5000}
    modules={[Autoplay]}
    spaceBetween={10}
  >
    {skills.map((skill) => (
      <SwiperSlide key={skill.name} aria-label={`Skill: ${skill.name}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center"
        >
          <Image
            src={skill.image}
            alt={`Skill: ${skill.name}`}
            width={skill.width}
            height={skill.height}
          />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const MovingItems: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-8 md:space-y-20"
  >
    <SkillSwiper />
    <SkillSwiper reverseDirection />
  </motion.div>
);

export default MovingItems;
