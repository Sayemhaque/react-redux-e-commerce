import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  // Replace these with actual image URLs and titles
  const slides = [
    {
      imageUrl: 'https://image.made-in-china.com/44f3j00lMRqaOvBrukJ/Modern-Hotel-Household-Living-Room-Furniture-L-Shape-Big-Size-Classic-Sofa-Set.webp',
      title: 'Word Best Sofa',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1609334761848-77b4d1994040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'Slide 2 Title',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60',
      title: 'Slide 3 Title',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWMlMjBwcm9kdWN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Slide 3 Title',
    },
    // Add more slides as needed
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
              <img className='w-full h-[400px] md:h-[600px] object-contain' src={slide.imageUrl} alt={slide.title} />
              <p className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black bg-opacity-50">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
