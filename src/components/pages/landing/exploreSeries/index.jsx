import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function ExploreSeries() {
	const DATA = [
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 4,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 4,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 4,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 5,
		},
		{
			image: 'assets/img/womenConf.png',
			title: 'Hendrerit praesent te dolore Lorem',
			rating: 4,
		},
	];
	const Card = ({ data }) => {
		const { image, title, rating } = data;
		return (
			<div className='col-6 col-md-4 col-lg-3 mb-20'>
				<div
					className='w-100 mb-10'
					style={{ height: '200px', overflow: 'hidden' }}>
					<img src={image} alt='' className='w-100' />
				</div>
				<Text h4 mb='mb-0'>
					{title}
				</Text>
				<div>
					{[...Array(rating)].map(() => (
						<span>
							<i className='fa-solid fa-star text-warning'></i>
						</span>
					))}
				</div>
			</div>
		);
	};
	return (
		<div className='pt-100 pb-100 wow fadeInRight' data-wow-delay='.4s'>
			<div className='container'>
				<div className='gap-4 text-center '>
					<Text h2>Explore by Series</Text>
					<Text>
						quis consequat, minim Ut iriure consectetuer ut dolore eum illum
						feugait nulla esse et
					</Text>
				</div>
				<div className='row mt-40 mb-40'>
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
		</div>
	);
}
