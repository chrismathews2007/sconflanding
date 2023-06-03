import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function Discover() {
	const DATA = [
		{
			leftFirst: 'Unlock the',
			leftSecond: 'FUTURE OF SUCCESS',
			right:
				'Gain access to cutting-edge insights, thought-provoking discussions, and practical strategies from renowned speakers, who are authorities in the field.',
			bg: 'info',
		},
		{
			leftFirst: 'Expand Your',
			leftSecond: 'GLOBAL NETWORK',
			right:
				'Connect, collaborate, and propel your career to new heights with ample networking opportunities at STAR conferences!',
			bg: 'success',
		},
		{
			leftFirst: 'Ignite Your',
			leftSecond: 'INSPIRATION',
			right:
				'Access the latest trends, research, and best practices in your industry with a powerful platform for knowledgesharing at STAR conferences!',
			bg: 'danger',
		},
		{
			leftFirst: 'Stay',
			leftSecond: 'AHEAD OF THE GAME',
			right:
				'Acquire new knowledge and boost your career prospects with our comprehensive professional development opportunities.',
			bg: 'warning',
		},
		{
			leftFirst: 'Elevate your',
			leftSecond: 'PROFESSIONAL GROWTH',
			right:
				'Unleash your creativity, fuel your passion, and catapult your career to new heights with our esteemed speakers at STAR conferences!',
			bg: 'secondary',
		},
	];
	return (
		<section className='row forums d-flex align-items-center pt-40 pb-40'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='text-center'>
						<Text h2>
							Discover the Unmatched Value of <br />
							Attending Our Conference: Why You Can't <br />
							Afford to Miss Out! 🚀{' '}
						</Text>
						<Text>
							Be a part of the speaker-centric universe of STAR Conferences
							through four streamlined steps
						</Text>
					</div>
				</div>
				<div className='mt-50 mb-50 ps-4 pe-4'>
					{DATA.map((item) => (
						<div className='row justify-content-center mt-20 mb-20'>
							<div
								className={`col-12 col-md-5 bg-${item.bg} d-flex flex-column justify-content-center align-items-center text-center p-4 rounded-start wow fadeInLeft`}
								data-wow-delay='.4s'>
								<span className='me-2'>
									<Text mb='mb-0' color='text-white'>
										{item.leftFirst}
									</Text>
								</span>
								<Text h3 mb='mb-0' color='text-white'>
									{item.leftSecond}
								</Text>
							</div>
							<div
								className={`col-12 col-md-5 alert alert-${item.bg} d-flex align-items-center p-4 rounded-0 rounded-end mb-0 wow fadeInRight`}
								data-wow-delay='.4s'>
								<Text>{item.right}</Text>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
