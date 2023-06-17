import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function ValueProp() {
	const DATA = [
		{
			value: 'Exclusive Discounts on Your “Speaker Registrations”',
		},
		{
			value: 'Earn CPD Credits to Foster Professional Growth',
		},
		{
			value: 'Get Unlimited Access to STAR Community',
		},
		{
			value: 'Elevate Your Visibility to New Heights',
		},
		{
			value: 'Add Undeniable Credibility to Your Personal Brand  ',
		},
	];
	return (
		<section className='valueprop container-fluid bg-white pt-40 pb-40 d-flex align-items-center'>
			<div className='container'>
				<Text>
					<span>
						<i className='fa-solid fa-star text-success'></i>
						<i className='fa-solid fa-star text-success'></i>
						<i className='fa-solid fa-star text-success'></i>
						<i className='fa-solid fa-star text-success'></i>
						<i className='fa-solid fa-star text-success'></i>
					</span>
					Rated 4.9/5 by 100’s of verified Students
				</Text>
				<Text h2>
					Curious about the extraordinary privileges <br />
					and advantages we offer our esteemed speakers? 
				</Text>
				{DATA.map((item, i) => {
					return (
						<div key={i} className='d-flex align-items-center mb-20'>
							<i className='fa-solid fa-circle-check pe-2 mb-0'></i>
							<Text>{item.value}</Text>
						</div>
					);
				})}
				<div className='valueprop__btn mt-10'>
					<Link className='tp-btn-second large ' href='#conferencesSection'>
						Register Now
					</Link>
				</div>
				<img src='/assets/img/paymentcards.png' height='30' />
			</div>
		</section>
	);
}
