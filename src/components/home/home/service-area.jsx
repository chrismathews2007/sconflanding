import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';

// slider setting
const setting = {
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		1200: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 3,
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
		nextEl: '.services-n',
		prevEl: '.services-p',
	},
};

// slider_content
const slider_content = [
	{
		id: 1,
		icon: 'flaticon-hemoglobin-test-meter',
		title: 'HEMOGLOBIN TEST',
		des: 'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam',
		color_icon: '',
		color: '',
	},
	{
		id: 2,
		icon: 'flaticon-blood-test',
		title: 'BLOOD TESTING',
		des: 'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam',
		color_icon: 'pink-icon',
		color: 'pink-hexa',
	},
	{
		id: 3,
		icon: 'flaticon-biochemistry',
		title: 'BIOCHEMISTRY',
		des: 'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam',
		color_icon: 'green-icon',
		color: 'green-hexa',
	},
	{
		id: 4,
		icon: 'flaticon-dna-1',
		title: 'HISTOPATOLOGY',
		des: 'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam',
		color_icon: 'sky-icon',
		color: 'sky-hexa',
	},
];

const ServiceArea = () => {
	const [isLoop, setIsLoop] = useState(false);
	useEffect(() => {
		setIsLoop(true);
	}, []);
	return (
		<>
			<section
				className='services-area pt-95 grey-bg fix'
				style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-12'>
							<div className='tp-section'>
								<h3 className='tp-section__title mb-20'>
									Subscribe to Our Newsletter
								</h3>
								<span className='tp-section__sub-title mb-50'>
									This is the best way to make sure you never miss a deadline
									and have direct access to all up-to-date materials.
								</span>
							</div>
						</div>
					</div>
					<div className='row mb-125'>
						<div className='col-lg-12'>
							<div className='search-form'>
								<form action='#'>
									<input type='text' placeholder='Email' />
									<button className='tp-btn search-btn' type='submit'>
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceArea;
