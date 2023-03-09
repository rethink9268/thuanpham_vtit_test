import Image from "next/image.js";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsStarFill } from "react-icons/bs";
import styles from "./Page7.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function Page7({ slides }) {
  return (
    <div className="section-center" id="contacts">
      <div className={styles.container}>
        <div className={styles.header_container}>
          <h5>TESTIMONIALS</h5>
          <h1>Customer Reviews</h1>
          <p>Content management system, got a license for it or adapted</p>
        </div>
        <div className={styles.carousel_container}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            speed={800}
            effect="fade"
            navigation>
            {slides.map((item) => {
              const { avatar, name, review, id } = item;
              return (
                <SwiperSlide key={id}>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <Image src={avatar} width={80} height={80} alt={name} />
                      <div>
                        <h3>{name}</h3>
                        <span>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </span>
                      </div>
                    </div>
                    <div className={styles.review}>
                      <p>{review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
