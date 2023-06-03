import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function ExploreSeries() {
	const DATA = [
		{
			image: 'assets/img/series/isha farha quraishy.jpeg',
			title: 'Isha Farha Quraishy',
		},
		{
			image: 'assets/img/series/dr angelica wagner.jpeg',
			title: 'Dr Angelica Wagner',
		},
		{
			image: 'assets/img/series/dr milos pocekovac.jpeg',
			title: 'Dr Milos Pocekovac',
		},
		{
			image: 'assets/img/series/kristen thomasino.webp',
			title: 'Kristen Thomasino',
		},
		{
			image: 'assets/img/series/Jackie Lacroix.jpeg',
			title: 'Dr Angelica Wagner',
		},
		{
			image: 'assets/img/series/dr kalpana sundar.jpeg',
			title: 'Dr Kalpana Sundar',
		},
		{
			image: 'assets/img/series/nim stant.jpeg',
			title: 'Nim Stant',
		},
		{
			image: 'assets/img/series/dr debra dupree.png',
			title: 'Dr Debra Dupree',
		},
		{
			image: 'assets/img/series/dr remya nirmala.jpeg',
			title: 'Dr Remya Nirmala',
		},
	];
	const Card = ({ data }) => {
		const { image, title, rating } = data;
		return (
			<div className='col-6 col-md-4 col-lg-3 mb-20'>
				<div
					className='w-100 mb-10'
					style={{ with: '100%', overflow: 'hidden' }}>
					<img src={image} alt='' className='w-100' />
				</div>
				<Text h4 mb='mb-0'>
					{title}
				</Text>
			</div>
		);
	};
	return (
		<section
			className='pt-40 pb-40 wow fadeInRight d-flex align-items-center'
			data-wow-delay='.4s'>
			<div className='container'>
				<div className='gap-4 text-center '>
					<Text h2>
						Join speakers from worldwide and Forge Meaningful Collaborations and
						Partnerships.
					</Text>
				</div>
				<div className='row mt-40 mb-40 justify-content-center'>
					{DATA.map((item, i) => {
						return <Card data={item} />;
					})}
				</div>
				<div className='gap-4 text-center '>
					<Text mb='mb-20'>
						<span>
							<i className='fa-solid fa-star text-success'></i>
							<i className='fa-solid fa-star text-success'></i>
							<i className='fa-solid fa-star text-success'></i>
							<i className='fa-solid fa-star text-success'></i>
							<i className='fa-solid fa-star text-success'></i>
						</span>
						Rated 4.9/5 by 100’s of verified Students
					</Text>
					<Link className='tp-btn-second large' href='/'>
						Buy Now
					</Link>
				</div>
				<div className='gap-4 text-center '>
					<img src='/assets/img/paymentcards.png' height='30' />
				</div>
			</div>
		</section>
	);
}
