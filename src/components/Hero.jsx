import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from './Button';

function Hero() {
  // Replace these with actual image URLs and titles
  const slides = [
    {
      imageUrl: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?cs=srgb&dl=pexels-garrett-morrow-682933.jpg&fm=jpg',
      title: 'Discover Exclusive Deals',
      buttonTitle: "Add to Cart"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/tech-gadgets-devices-arranged-organized-manner-generative-ai_546192-1933.jpg',
      title: 'Explore Our Latest Collections',
      buttonTitle: "View Special Offers"
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/tech-gadgets-devices-arranged-organized-manner-generative-ai_546192-1943.jpg',
      title: 'Upgrade Your Wardrobe Today',
      buttonTitle: "Explore Products"
    },
    {
      imageUrl: 'https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg',
      title: 'Join Our Shopping Extravaganza',
      buttonTitle: "Buy Now"
    },
    // Add more slides as needed
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-purple-800 bg-opacity-70">
              <img className='w-full h-[400px] md:h-[600px] object-cover' src={slide.imageUrl} alt={slide.title} />
              <div className="absolute inset-0 flex items-center flex-col justify-center
               text-white  bg-black bg-opacity-50">
                <p className='text-xl font-bold font-serif md:text-5xl'>    {slide.title}</p>
                <Button
                  title={slide.buttonTitle}
                  style={"text-md px-5 py-1 bg-purple-600 bg-opacity-80 rounded-md mt-12"}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
