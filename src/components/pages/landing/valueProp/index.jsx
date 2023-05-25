import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function ValueProp() {
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
		<section className='valueprop container-fluid bg-white pt-40 pb-40'>
			<div className='container'>
				<Text>
					<span>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
					</span>
					Rated 4.9/5 by 100’s of verified Students
				</Text>
				<Text h1>
					Value Proposition <br /> Featuring Benefit
				</Text>
				{DATA.map((item, i) => {
					return (
						<div key={i} className='d-flex align-items-center mb-20'>
							<i class='fa-solid fa-circle-check pe-2 mb-0'></i>
							<Text>{item.value}</Text>
						</div>
					);
				})}
				<div className='valueprop__btn mt-10'>
					<Link className='tp-btn-second large ' href='/'>
						Buy Now
					</Link>
				</div>
				<img src='/assets/img/paymentcards.png' height='30' />
			</div>
		</section>
	);
}
