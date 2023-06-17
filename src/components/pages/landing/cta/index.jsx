import Text from '@/components/UI/text';
import Rating from '@/components/rating/Rating';
import Link from 'next/link';
import React from 'react';

const Cta_Area = () => {
	return (
		<section className='cta-area pt-40 pb-40 cta-bg theme-light-bg d-flex align-items-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className=' text-center'>
							<Text h2 color='text-white'>
								Elevate Your Brand and Personal Visibility on a Global Scale{' '}
							</Text>
							<Text h4 color='text-white'>
								Leverage Our Global Platforms for Targeted Audience engagement
							</Text>
							<span style={{ fontSize: 60 }}>🎯</span>
						</div>
						<div className='gap-4 d-flex justify-content-center flex-column align-items-center '>
							<Rating color='text-white' />
							<Link className='tp-btn-second large' href='#conferencesSection'>
								Register Now
							</Link>
						</div>
						<div className='gap-4 text-center mt-15'>
							<img src='/assets/img/paymentcards.png' height='30' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta_Area;
