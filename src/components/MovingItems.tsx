"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MovingItems = () => {
    return (
        <div className="space-y-20">
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                modules={[Autoplay]}
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                speed={5000}
                modules={[Autoplay]}
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovingItems;