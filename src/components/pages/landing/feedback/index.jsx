import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import Text from "@/components/UI/text";
import { client } from "@/components/contentful/client";

// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tp-test-nxt",
    prevEl: ".tp-test-prv",
  },
};

const Feedback = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoop, setIsLoop] = useState(false);

  const fetchTestimonials = async () => {
    const { items } = await client.getEntries({ content_type: "testimonial" });
    setTestimonials(items);
  };

  useEffect(() => {
    fetchTestimonials();
    setIsLoop(true);
  }, []);

  return (
    <>
      <section
        className="testimonial-area testimonial-bg pt-40 pb-40 d-flex align-items-center"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-02.png)` }}
        data-background="assets/img/shape/shape-bg-02.png"
      >
        <div className="container">
          <div className="row wow fadeInUp mb-30" data-wow-delay=".3s">
            <div className="gap-4 text-center ">
              <Text h2>
                Why Join Our Conferences: Know Straight from Our Esteemed
                Speakers!
              </Text>
              <Link className="tp-btn-second large" href="/">
                Register Now
              </Link>
            </div>
            <div className="gap-4 text-center ">
              <img src="/assets/img/paymentcards.png" height="30" />
            </div>
          </div>
          <Swiper
            {...setting}
            modules={[Navigation]}
            loop={isLoop}
            className="swiper-container tp-test-active pt-40"
          >
            {testimonials.map((item, i) => {
              const { photo, testimonial, affiliation } = item.fields;
              return (
                <SwiperSlide key={i}>
                  <div className="tp-testi p-relative">
                    <div className="tp-testi__avata">
                      <img
                        src={photo.fields.file.url}
                        alt="testimonial-avata"
                        width="100"
                      />
                    </div>
                    <div className="tp-testi__content text-center ">
                      <Text>{testimonial}</Text>
                      <Text h5 mb="mb-0 mt-25">
                        {item.name}
                      </Text>
                      <Text small>{affiliation}</Text>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-test-arrow d-flex align-items-center justify-content-center">
                <div className="tp-test-prv">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-test-nxt">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
