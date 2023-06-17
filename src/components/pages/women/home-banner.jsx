// external
import Link from 'next/link';
import { useState } from 'react';
// internal
import VideoPopup from '@/modals/video-popup';
import Text from '@/components/UI/text';
import Rating from '@/components/rating/Rating';

// hero_box
const DATA = [
	{
		value: 'Speak on Global Stage',
	},
	{
		value: 'Unique Learning Opportunity',
	},
	{
		value: 'Networking with Like- minded',
	},
	{
		value: 'Build Credibility to your expertise',
	},
];

const HomeBanner = ({ title, gradient, brochure }) => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<>
			<section className={`banner-area ${gradient} p-relative pt-90`}>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-7'>
							<div className='banner__content pt-45 mb-135'>
								<div className='overlay_content'>
									<Rating
										value={5}
										starColor='text-warning'
										color='text-white-50'
									/>
									<Text h2 className='mb-20' color='text-white'>
										{title}
									</Text>
									<Text h3 color='text-warning'>
										November 1-2, Las Vegas USA
									</Text>
									<Text color='text-white-50'>
										The most important women forum in the world brings women
										leaders like you to the global stage at MGM Grand of Las
										Vegas
									</Text>
									<div className='mt-20'>
										{DATA.map((item, i) => {
											return (
												<div
													key={i}
													className='d-flex align-items-center mb-10'>
													<i className='fa-solid fa-circle-check pe-2 mb-0 text-warning'></i>
													<Text color='text-light'>{item.value}</Text>
												</div>
											);
										})}
									</div>
									<div className='valueprop__btn mt-25 d-flex align-items-center'>
										{/* <button type='button' className='tp-btn large me-3'>
											Brochure
										</button> */}
										<a
											className='tp-btn large me-3'
											download={'brochure.pdf'}
											href={brochure}>
											Brochure
										</a>
										<Link className='tp-btn-second' href='#registration'>
											Register Now
										</Link>
									</div>
									<div className='mt-25'>
										<img src='/assets/img/paymentcards.png' height='30' />
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
				videoId={'uyP5bXZw7YE'}
			/>
			{/* video modal end */}
		</>
	);
};

export default HomeBanner;
