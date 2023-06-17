import Text from '@/components/UI/text';
import Rating from '@/components/rating/Rating';
import Link from 'next/link';
import React from 'react';

export default function Steps() {
	const DATA = [
		{
			icon: '/assets/img/steps/register.png',
			title: 'Register as Speaker',
			shortNotes:
				'Increase your conversion rates in real-time, regardless of your chosen platform or level of expertise',
		},
		{
			icon: '/assets/img/steps/submit.png',
			title: 'Submit your Abstract',
			shortNotes:
				'Wqui blandit velit sed exerci commodo facilisis augue sit suscipit ex enim vero consequat,',
		},
		{
			icon: '/assets/img/steps/speak.png',
			title: 'Speak at our Conferences',
			shortNotes:
				'Svero laoreet consequat, delenit vel dolore dolor luptatum te esse praesent vulputate aliquip aliquam',
		},
		{
			icon: '/assets/img/steps/promote.png',
			title: 'Get Promoted',
			shortNotes:
				'Svero laoreet consequat, delenit vel dolore dolor luptatum te esse praesent vulputate aliquip aliquam',
		},
	];
	return (
		<section
			id='tp-about-scroll'
			className='steps pt-40 pb-40 fix d-flex align-items-center'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='text-center'>
						<Text h2>Help at every stage towards Your Personal Branding</Text>
						<Text>
							Be a part of the speaker-centric universe of STAR Conferences
							through four streamlined steps
						</Text>
					</div>
				</div>
				<div className='steps d-flex justify-content-between mt-50'>
					{DATA.map((item, i) => (
						<div key={i} className='step-item text-center'>
							<div className='mt-20 mb-20'>
								<img src={item.icon} alt={item.title} height='150' />
							</div>
							<Text h4>{item.title}</Text>
						</div>
					))}
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
		</section>
	);
}
