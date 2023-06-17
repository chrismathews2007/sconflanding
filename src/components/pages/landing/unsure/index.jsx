import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function Unsure() {
	const DATALEFT = [
		{
			value:
				'A dynamic speaker yearning to showcase your expertise, connect with like-minded professionals, and forge fruitful collaborations.',
			icon: '🎤',
		},
		{
			value:
				'An insightful author searching for the perfect platform to share your literary masterpieces.',
			icon: '📚',
		},
		{
			value:
				'An innovative researcher aspiring for thought leadership in your field, cementing your reputation as a visionary and trailblazer.',
			icon: '🔬',
		},
		{
			value:
				'A passionate student in relentless pursuit of the most cutting-edge knowledge.',
			icon: '🎓',
		},
		{
			value:
				'An ambitious entrepreneur, driven by unwavering belief in the limitless potential of your extraordinary products and services.',
			icon: '💼',
		},
	];
	const DATARIGHT = [
		{
			value:
				'A speaker looking for monetary compensations for their speaking enggagements and not credibility.',
			icon: '❌',
		},
		{
			value:
				'An author whose primary focus is solely on book sales and not on providing substantive content or adding value to our attendees.',
			icon: '❌',
		},
		{
			value:
				'An innovative researcher not aspiring for leadership and impact in their respective field.',
			icon: '❌',
		},
		{
			value:
				'A student whose current academic objectives may not align with a focus on cutting-edge knowledge.',
			icon: '❌',
		},
		{
			value:
				'An entrepreneur to whome collaboration and networking do not align with their approach to business expansion',
			icon: '❌',
		},
	];
	return (
		<section
			id='tp-about-scroll'
			className='steps pt-40 pb-40 fix d-flex align-items-center'>
			<div className='container'>
				<div className='row align-items-center justify-content-center'>
					<div className='text-center col-12 col-md-9'>
						<Text h2>
							Still Unsure About the Fit of <br />
							STAR Conferences for You?
						</Text>
						<Text>
							We understand your hesitation and believe in saving your valuable
							time by helping you assess whether our conferences align with your
							specific needs before you make a commitment.
						</Text>
					</div>
				</div>
				<div className='row forums mt-50'>
					<div className='col-xl-6 col-lg-12 image'>
						<div
							className='tp-about__content pt-25 mb-50 wow fadeInLeft alert alert-primary'
							data-wow-delay='.4s'>
							<div className='gap-4'>
								<Text h4>Our Conferences are a 100% must if you are:</Text>
								{DATALEFT.map((item, i) => {
									return (
										<div key={i} className='d-flex align-items-start mb-10'>
											<span className='pe-2 mb-0'>{item.icon}</span>
											<Text>{item.value}</Text>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className='col-xl-6 col-lg-12 content d-flex align-items-center'>
						<div
							className='tp-about__content pt-25 mb-50 wow fadeInRight alert alert-info'
							data-wow-delay='.4s'>
							<div className='gap-4'>
								<Text h4>Our Conferences are a 100% must if you are:</Text>
								{DATARIGHT.map((item, i) => {
									return (
										<div key={i} className='d-flex align-items-start mb-10'>
											<span className='pe-2 mb-0'>{item.icon}</span>
											<Text>{item.value}</Text>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className='d-flex align-items-center flex-column'>
					<Link className='tp-btn-second ' href='#conferencesSection'>
						Register Now
					</Link>
					<div className='mt-20 mb-20'>
						<Text>
							<span className='pe-2'>
								<i className='fa-solid fa-star text-success'></i>
								<i className='fa-solid fa-star text-success'></i>
								<i className='fa-solid fa-star text-success'></i>
								<i className='fa-solid fa-star text-success'></i>
								<i className='fa-solid fa-star text-success'></i>
							</span>
							Rated 4.9/5 by 100’s of verified Students
						</Text>
					</div>
					<img src='/assets/img/paymentcards.png' height='30' />
				</div>
			</div>
		</section>
	);
}
