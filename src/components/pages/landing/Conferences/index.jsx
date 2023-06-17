import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function Conferences() {
	const DATA = [
		{
			image: 'assets/img/conferences/women.jpg',
			title: 'World Women Forum',
			bg: 'women',
			path: 'women/#registration',
		},
		{
			image: 'assets/img/conferences/health.jpg',
			title: 'World Health Forum',
			bg: 'health',
			path: 'health/#registration',
		},
		{
			image: 'assets/img/conferences/technology.jpg',
			title: 'World Technology Forum',
			bg: 'tech',
			path: 'technology/#registration',
		},
		{
			image: 'assets/img/conferences/science.jpg',
			title: 'World Science Forum',
			bg: 'science',
			path: 'science/#registration',
		},
	];
	return (
		<section
			id='conferencesSection'
			className='d-flex align-items-center justify-content-center grey-bg wow fadeInUp'
			data-wow-duration='.8s'
			data-wow-delay='.2s'>
			<div className='container'>
				<div className='row text-center justify-content-center'>
					<div className='col-xl-8'>
						<div className='tp-section' style={{ marginBottom: 40 }}>
							<Text h2>Conferences</Text>
						</div>
					</div>
				</div>
				<div className='row'>
					{DATA.map((item) => {
						return (
							<div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-20 '>
								<div
									className={` d-flex flex-column justify-content-center align-items-center bg-gradient-${item.bg} rounded`}
									style={{ minHeight: 150 }}>
									<div className='w-100 p-2 text-center'>
										<img
											src={item.image}
											className='w-100 mb-10'
											style={{ height: 150, objectFit: 'cover' }}
											alt=''
										/>
										<Text bold color='text-white'>
											{item.title}
										</Text>
										<Link
											className='tp-bt-btn pt-10 pb-10 mt-10 mb-10'
											href={`/${item.path}`}>
											Know More
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
