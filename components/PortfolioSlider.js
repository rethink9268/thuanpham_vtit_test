import Image from "next/image.js";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./PortfolioSlider.module.scss";

export default function PortfolioSlider({ slides }) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          490: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        speed={800}
        navigation>
        {slides.map((item) => {
          const { title, subtitle, url, id } = item;
          return (
            <SwiperSlide key={id}>
              <div className={styles.card}>
                <Image width={560} height={800} src={url} alt={title} />
                <div className={styles.card_content}>
                  <h5>{subtitle}</h5>
                  <h2>{title}</h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
