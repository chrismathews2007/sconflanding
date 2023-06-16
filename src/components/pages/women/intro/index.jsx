import Text from '@/components/UI/text';
import Rating from '@/components/rating/Rating';
import Link from 'next/link';
import React from 'react';

export default function Intro() {
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
	return (
		<section className='valueprop container-fluid bg-white pt-40 pb-40 d-flex align-items-center'>
			<div className='container'>
				<div className='col-12 col-lg-6'>
					<Rating value={5} />
					<Text h2 className='mb-20'>
						World Women Forum
					</Text>
					<Text h4>November 1-2, Las Vegas USA</Text>
					<Text>
						The most important women forum in the world brings women leaders
						like you to the global stage at MGM Grand of Las Vegas
					</Text>
					<div className='mt-20'>
						{DATA.map((item, i) => {
							return (
								<div key={i} className='d-flex align-items-center mb-20'>
									<i className='fa-solid fa-circle-check pe-2 mb-0'></i>
									<Text>{item.value}</Text>
								</div>
							);
						})}
					</div>
					<div className='valueprop__btn mt-10 d-flex align-items-center'>
						<a
							className='tp-btn large me-3'
							download={'star_women_forum_brochure.pdf'}
							href='/assets/pdf/women.pdf'>
							Brochure
						</a>
						<Link className='tp-btn-second large ' href='/'>
							Register Now
						</Link>
					</div>
					<div className='mt-20'>
						<img src='/assets/img/paymentcards.png' height='30' />
					</div>
				</div>
			</div>
		</section>
	);
}
