import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function ImageContent() {
	const DATA = [
		{
			value:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
		},
		{
			value:
				'velit adipiscing dolore molestie veniam, aliquip nonummy vel vel enim facilisis erat',
		},
		{
			value:
				'zzril facilisi. dolore feugiat ex velit Duis et eros suscipit tincidunt nisl',
		},
	];
	return (
		<div className='row forums '>
			<div className='col-xl-6 col-lg-12 image'>
				<div className='about__thumb wow fadeInLeft' data-wow-delay='.4s'>
					<div className='about__img text-center'>
						<img
							src='assets/img/womenConf.png'
							alt='about-bg-img'
							className='w-100'
						/>
					</div>
				</div>
			</div>
			<div className='col-xl-6 col-lg-12 content d-flex align-items-center'>
				<div
					className='tp-about__content pt-25 mb-50 wow fadeInRight'
					data-wow-delay='.4s'>
					<div className='gap-4'>
						<Text h2>Value Proposition Featuring Benefit</Text>
						{DATA.map((item, i) => {
							return (
								<div key={i} className='d-flex align-items-center mb-10'>
									<i class='fa-solid fa-circle-check pe-2 mb-0'></i>
									<Text>{item.value}</Text>
								</div>
							);
						})}
					</div>
					<div className='d-flex gap-2 align-items-center mt-20 mb-20'>
						<Link className='tp-btn-second ' href='/'>
							Buy Now
						</Link>
						<Text>
							<span className='pe-2'>
								<i class='fa-solid fa-star text-success'></i>
								<i class='fa-solid fa-star text-success'></i>
								<i class='fa-solid fa-star text-success'></i>
								<i class='fa-solid fa-star text-success'></i>
								<i class='fa-solid fa-star text-success'></i>
							</span>
							Rated 4.9/5 by 100’s of verified Students
						</Text>
					</div>
					<img src='/assets/img/paymentcards.png' height='30' />
				</div>
			</div>
		</div>
	);
}
