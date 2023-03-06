import { Box } from "@chakra-ui/react";
import {useIsDesktop} from '../../useIsDesktop'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerCard from "./BannerCard";

const imgs = [
  { id: 1, banner: "/carosel/pix1.webp" },
  { id: 2, banner: "/carosel/pix2.webp" },
  { id: 3, banner: "/carosel/pix3.webp" },
  { id: 4, banner: "/carosel/pix4.webp" },
  { id: 5, banner: "/carosel/pix5.webp" },
];

const Banner = () => {
const {isDesktop} = useIsDesktop()

  return (
    <Box pos='relative' pt={{md: '12'}} maxW='6xl' mx='auto' px={{md: 4}}>
      <Swiper
        slidesPerView={isDesktop ? 2 : 1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'>
        {imgs.map((img) => (
          <SwiperSlide key={img.id}>
            <BannerCard {...img} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <Box>
          <img alt='' loading='lazy' src='/carosel/pix1-1.webp' />
        </Box>
        <Box>
          <img alt='' loading='lazy' src='/carosel/pix2.webp' />
        </Box>
        <Box>
          <img alt='' loading='lazy' src='/carosel/pix3.webp' />
        </Box>
      </Carousel> */}
    </Box>
  );
};

export default Banner;
