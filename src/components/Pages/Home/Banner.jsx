import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import img1 from '../../../assets/121.jpg';
import img2 from '../../../assets/front-view-mother-helping-kid-with-homework.jpg';
import img3 from '../../../assets/modern-muslim-woman-hijab-office-room.jpg';
import img4 from '../../../assets/satisified-muslim-college-student-with-notepad-papers.jpg';
import img5 from '../../../assets/young-pretty-modern-muslim-woman-hijab-working-laptop-office-room-education-online.jpg';
import { Fade } from 'react-awesome-reveal';


const images = [img1, img2, img3, img4, img5];

const info = [
    { name: "Emily Johnson", review: "This platform helped me find the best language tutor. My speaking skills have improved a lot!" },
    { name: "David Smith", review: "The tutors here are very professional and patient. Booking sessions is super easy!" },
    { name: "Sophia Williams", review: "I finally found a math tutor who explains everything so clearly. Highly recommend!" },
    { name: "Michael Brown", review: "Great selection of tutors! I’ve learned so much in just a few weeks." },
    { name: "Sarah Lee", review: "The personalized learning experience is amazing. This platform truly changed my study routine!" },
];

const Banner = () => {
  return (
    <div className="w-full overflow-y-hidden max-w-5xl mx-auto py-16 px-4 lg:px-0 overflow-x-hidden">
      <Fade>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          navigation={true}
          modules={[EffectCards, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-orange-500">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="text-lg font-semibold italic mb-2">"{info[index].review}"</p>
                  <p className="text-sm font-medium">- {info[index].name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </div>
  );
};

export default Banner; 