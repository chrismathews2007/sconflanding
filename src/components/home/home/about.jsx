import Link from 'next/link';
import React from 'react';

// content
const content = {
	left_img: 'assets/img/about/about-bg-01.png',
	lasvegas_img: 'assets/img/places/lasvegas.png',
	paris_img: 'assets/img/places/paris.png',
};

const { left_img, lasvegas_img, paris_img } = content;

const hero_box = [
	{
		id: 1,
		image: lasvegas_img,
		des: 'Las Vegas, 2023',
		color: '',
	},
	{
		id: 2,
		image: paris_img,
		des: 'Paris, 2024',
		color: 'pink-icon',
		border: 'pink-border',
	},
];

const forumsData = [
	{
		title: 'World Technology Forum',
		content:
			'The World Technology Forum organized by STAR conferences invites distinguished researchers, renowned scientists, policymakers, and accomplished industrial specialists from around the world. Join us for an enlightening and intriguing conversation on the latest developments and challenges in building a resilient future.',
		left_img: 'assets/img/about/about-bg-01.png',
		locations: [
			{
				id: 1,
				image: 'assets/img/places/lasvegas.png',
				des: 'Las Vegas, 2023',
				color: '',
			},
			{
				id: 2,
				image: 'assets/img/places/paris.png',
				des: 'Paris, 2024',
				color: 'pink-icon',
				border: 'pink-border',
			},
		],
	},
	{
		title: 'World Women Forum',
		content:
			"The World Women's Forum, hosted by STAR conferences, offers an unparalleled opportunity for women of diverse backgrounds and cultures to connect, collaborate and network on a variety of issues affecting their lives. The forum serves as a catalyst for positive change and aims to promote gender equality, economic empowerment, education, health, and political participation for women worldwide.",
		left_img: 'assets/img/about/womenForm.png',
		locations: [
			{
				id: 1,
				image: 'assets/img/places/lasvegas.png',
				des: 'Las Vegas, 2023',
				color: '',
			},
			{
				id: 2,
				image: 'assets/img/places/paris.png',
				des: 'Paris, 2024',
				color: 'pink-icon',
				border: 'pink-border',
			},
		],
	},
	{
		title: 'World Health Forum',
		content:
			'Star Conferences is thrilled to invite researchers, healthcare professionals, policymakers, and stakeholders to the World Health Forum. This event aims to provide thought leaders worldwide with a dynamic platform to congregate, discuss, and share cutting-edge ideas and innovations that will shape the future of global healthcare. ',
		left_img: 'assets/img/about/healthForm.png',
		locations: [
			{
				id: 1,
				image: 'assets/img/places/lasvegas.png',
				des: 'Las Vegas, 2023',
				color: '',
			},
			{
				id: 2,
				image: 'assets/img/places/paris.png',
				des: 'Paris, 2024',
				color: 'pink-icon',
				border: 'pink-border',
			},
		],
	},
	{
		title: 'World Sceince Forum',
		content:
			'The World Science Forum organized by STAR conferences invites distinguished researchers, renowned scientists, policymakers, and accomplished industrial specialists from around the world. Join us for an enlightening and intriguing conversation on the latest developments and challenges in building a resilient future.',
		left_img: 'assets/img/about/scienceForm.png',
		locations: [
			{
				id: 1,
				image: 'assets/img/places/lasvegas.png',
				des: 'Las Vegas, 2023',
				color: '',
			},
			{
				id: 2,
				image: 'assets/img/places/paris.png',
				des: 'Paris, 2024',
				color: 'pink-icon',
				border: 'pink-border',
			},
		],
	},
];

const About = () => {
	return (
		<>
			<section
				id='tp-about-scroll'
				className='about-area pt-95 pb-90 grey-bg fix'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-8 col-md-8 col-12'>
							<div className='tp-section'>
								<span className='tp-section__sub-title left-line mb-20'>
									Events
								</span>
								<h3 className='tp-section__title mb-50'>Upcoming Forums</h3>
							</div>
						</div>
					</div>
					{forumsData.map((item) => (
						<div className='row forums'>
							<div className='col-xl-6 col-lg-12 image'>
								<div
									className='about__thumb mb-60 wow fadeInLeft'
									data-wow-delay='.4s'>
									<div className='about__img text-center'>
										<img src={item.left_img} alt='about-bg-img' />
									</div>
								</div>
							</div>
							<div className='col-xl-6 col-lg-12 content'>
								<div
									className='tp-about__content pt-25 mb-50 wow fadeInRight'
									data-wow-delay='.4s'>
									<div className='tp-section'>
										<h3 className='tp-section__title tp-ab-sm-title mb-10'>
											{item.title}
										</h3>
										<p className=' mb-45'>{item.content}</p>
									</div>
									<div className='banner__box-item'>
										<div className='row'>
											{item.locations.map((item) => (
												<div
													key={item.id}
													className='col-xl-6 col-lg-6 col-md-6'>
													<div className='tp-gallery__item p-relative'>
														<div className='tp-gallery__img p-relative'>
															<img
																src={item.image}
																style={{ width: '100%', borderRadius: 10 }}
																alt='gallery-img'
															/>
														</div>
														<div className='banner__item-content'>
															<span>{item.des}</span>
														</div>
														<div className='tp-gallery__content'>
															<h4 className='tp-gallery__title'>
																<Link href='/'>{item.des}</Link>
															</h4>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default About;
