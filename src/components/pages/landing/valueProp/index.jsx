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
				<span className='valueprop__sub-title mb-10 text-black'>
					<span>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
						<i class='fa-solid fa-star text-success'></i>
					</span>
					Rated 4.9/5 by 100’s of verified Students
				</span>
				<h2 className='valueprop__title mb-20'>
					Value Proposition <br /> Featuring Benefit
				</h2>
				{DATA.map((item, i) => {
					return (
						<div key={i} className='valueprop__list__item'>
							<i class='fa-solid fa-circle-check pe-2'></i>
							{item.value}
						</div>
					);
				})}
				<div className='valueprop__btn mt-10'>
					<Link className='tp-btn-second' href='/'>
						Buy Now
					</Link>
				</div>
				<img src='/assets/img/paymentcards.png' height='30' />
			</div>
		</section>
	);
}
