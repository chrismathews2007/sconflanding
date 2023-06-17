import Text from '@/components/UI/text';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import feedback from '@/data/feedback';

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
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
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
		nextEl: '.tp-test-nxt',
		prevEl: '.tp-test-prv',
	},
};

export default function RatingProp() {
	const [isLoop, setIsLoop] = useState(false);
	useEffect(() => {
		setIsLoop(true);
	}, []);
	return (
		<div className='grey-bg pt-100 pb-100 wow fadeInRight' data-wow-delay='.4s'>
			<div className='container'>
				<div className='gap-4 text-center '>
					<Text h2>
						Why Join Our Conferences: Know Straight from Our Esteemed Speakers!
					</Text>
					<Link className='tp-btn-second large' href='#conferencesSection'>
						Register Now
					</Link>
				</div>
				<div className='gap-4 text-center '>
					<img src='/assets/img/paymentcards.png' height='30' />
				</div>
				<div className='d-flex gap-2 justify-content-center pt-40'>
					<div className='col-lg-7 d-flex gap-2 justify-content-center'>
						<Swiper
							{...setting}
							modules={[Navigation]}
							loop={isLoop}
							className='swiper-container tp-test-active pt-40'>
							{feedback.map((item) => (
								<SwiperSlide key={item.id}>
									<div className='tp-testi p-relative mb-70'>
										<div className='tp-testi__avata'>
											<img src={item.img} alt='testimonial-avata' />
										</div>
										<div className='tp-testi__content text-center'>
											<p>{item.des}</p>
											<h5 className='tp-testi__avata-title'>{item.name}</h5>
											<span className='tp-testi__ava-position'>
												{item.title}
											</span>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className='row text-center'>
							<div className='col-lg-12'>
								<div className='tp-test-arrow d-flex align-items-center justify-content-center'>
									<div className='tp-test-prv'>
										<i className='fa-regular fa-arrow-left'></i>
									</div>
									<div className='tp-test-nxt'>
										<i className='fa-regular fa-arrow-right'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
