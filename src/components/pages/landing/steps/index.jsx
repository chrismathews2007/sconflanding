import Text from '@/components/UI/text';
import React from 'react';

export default function Steps() {
	const DATA = [
		{
			icon: '/assets/img/steps/cart.png',
			title: 'Step 1',
			shortNotes:
				'Increase your conversion rates in real-time, regardless of your chosen platform or level of expertise',
		},
		{
			icon: '/assets/img/steps/shipping.png',
			title: 'Step 2',
			shortNotes:
				'Wqui blandit velit sed exerci commodo facilisis augue sit suscipit ex enim vero consequat,',
		},
		{
			icon: '/assets/img/steps/happy.png',
			title: 'Step 3',
			shortNotes:
				'Svero laoreet consequat, delenit vel dolore dolor luptatum te esse praesent vulputate aliquip aliquam',
		},
	];
	return (
		<section id='tp-about-scroll' className='steps pt-95 pb-90 fix'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='text-center'>
						<Text h2>The Transformation</Text>
						<Text>
							quis consequat, minim Ut iriure consectetuer ut dolore eum illum
							feugait nulla esse et
						</Text>
					</div>
				</div>
				<div className='steps d-flex justify-content-between mt-50'>
					{DATA.map((item, i) => (
						<div className='step-item text-center'>
							<div className='mt-20 mb-20'>
								<img src={item.icon} alt={item.title} height='50' />
							</div>
							<Text h4>{item.title}</Text>
							<Text>{item.shortNotes}</Text>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
