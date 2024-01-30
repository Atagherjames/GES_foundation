"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./swiper.module.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.mySwiper} ${styles.swiper}`}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/education.jpg"}
            width={100}
            height={100}
            alt="ssss"
            layout="responsive"
            priority={true}
          />
          <span className={styles.caption}>
            Enhancing Access to Quality Education
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/health.jpg"}
            width={100}
            height={100}
            alt="ssss"
            layout="responsive"
            priority={true}
          />
          <span className={styles.caption}>
            Providing Access to Quality and Affordable Health Care
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/house.jpg"}
            width={100}
            height={100}
            alt="ssss"
            layout="responsive"
            priority={true}
          />

          <span className={styles.caption}>
            Ensuring Access to Safe and Affordable Shelter for All
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
