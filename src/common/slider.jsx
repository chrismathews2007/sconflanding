import React, { useEffect, useState } from 'react';
import banner_data from '../data/banner.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link.js';
import { Navigation } from 'swiper';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper';

// slider setting
const setting = {
	slidesPerView: 1,
	autoplay: {
		delay: 4500,
		disableOnInteraction: true,
	},
	effect: 'fade',
	navigation: {
		nextEl: '.team-n',
		prevEl: '.team-p',
	},
};

const SliderTop = () => {
	const [isLoop, setIsLoop] = useState(false);
	useEffect(() => {
		setIsLoop(true);
	}, []);
	return (
		<div className='team-area grey-bg'>
			<div
				className='swiper-container team-active wow fadeInUp position-relative'
				data-wow-delay='.3s'>
				<Swiper {...setting} loop={isLoop} modules={[Navigation]}>
					{banner_data.map((item) => (
						<SwiperSlide key={item.id}>
							<div className='swiper-slide'>
								<div className='tp-team'>
									<div className='tp-team__thumb fix'>
										<img src={item.img} alt='team-thumb' className='w-100' />
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div
					className='tp-team-arrow d-flex align-items-center justify-content-between position-absolute w-100'
					style={{
						top: '50%',
						zIndex: 9999,
						transform: 'translateY(-60%)',
						padding: 20,
					}}>
					<div className='team-p'>
						<i className='fa-regular fa-arrow-left'></i>
					</div>
					<div className='team-n'>
						<i className='fa-regular fa-arrow-right'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderTop;
