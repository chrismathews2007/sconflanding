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
				<div className='about__thumb mb-60 wow fadeInLeft' data-wow-delay='.4s'>
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
					<div className='tp-section '>
						<Text h2>Value Proposition Featuring Benefit</Text>
						{DATA.map((item, i) => {
							return (
								<div key={i} className='d-flex align-items-center mb-20'>
									<i class='fa-solid fa-circle-check pe-2 mb-0'></i>
									<span>{item.value}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
