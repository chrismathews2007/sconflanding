// external
import Link from 'next/link';
import { useState } from 'react';
// internal
import VideoPopup from '@/modals/video-popup';

// content
const content = {
	sub_title: 'Welcoome to Bioxlab',
	title: (
		<>
			passion for better <br />
			Medicine
		</>
	),
	des: (
		<>
			STAR Conferences is extremely passionate in 3C's,
			<br />
			Creating, Connections and Conversions
			<br />
			among research scientists and researchers...
		</>
	),
	btn_text1: 'Register',
};
const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
	{
		id: 1,
		icon: 'flaticon-rating',
		des: '100% Customer Satisfaction',
		color: '',
	},
	{
		id: 2,
		icon: 'flaticon-target',
		des: 'Help and Acess is Our Mission',
		color: 'pink-icon',
		border: 'pink-border',
	},
	{
		id: 3,
		icon: 'flaticon-premium-badge',
		des: '100% Quality Laboratory service',
		color: 'green-icon',
		border: 'green-border',
	},
];

const HomeBanner = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<>
			<section className='banner-area p-relative pt-90'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-8'>
							<div className='banner__content pt-45 mb-135'>
								<div className='overlay_content'>
									<h2 className='banner__title mb-20'>Speakers</h2>
									<h2 className='banner__title mb-20'>Talk</h2>
									<h2 className='banner__title mb-20'>About</h2>
									<h2 className='banner__title mb-20'>Research</h2>
									<p>{des}</p>
									<div className='banner__btn'>
										<Link className='tp-btn' href='/'>
											{btn_text1}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='banner__shape d-none d-lg-block' style={{ zIndex: 1 }}>
					<img src='/assets/img/banner/banner-01.png' alt='banner-img' />
					<div className='banner__video-btn'>
						<button
							onClick={() => setIsVideoOpen(true)}
							className='banner__video-icon popup-video'>
							<i className='fa-solid fa-play'></i>
						</button>
					</div>
				</div>
			</section>
			{/* video modal start */}
			<VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={'d8w5SICzzxc'}
			/>
			{/* video modal end */}
		</>
	);
};

export default HomeBanner;
