import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./swiper.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.mySwiper} ${styles.swiper}`}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/children.jpg"}
            width={100}
            height={100}
            alt="ssss"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/health.jpg"}
            width={100}
            height={100}
            alt="ssss"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={"/asset/Shelter.webp"}
            width={100}
            height={100}
            alt="ssss"
          />

          <span className={styles.caption}>
            captionsslslslsssssssssssssssss
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
