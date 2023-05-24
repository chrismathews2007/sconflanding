import Link from 'next/link';
import React from 'react';

// choose data
const choose = [
	{
		id: 1,
		color: '',
		image: 'assets/img/list/lastConferences.png',
		title: <>Last Connferences</>,
	},
	{
		id: 2,
		color: 'pink-icon',
		image: 'assets/img/list/magazines.png',
		title: <>Magazines</>,
	},
	{
		id: 3,
		color: 'green-icon',
		image: 'assets/img/list/journals.png',
		title: <>Journals</>,
	},
	{
		id: 4,
		color: 'sky-icon',
		image: 'assets/img/list/gallery.png',
		title: <>Gallery</>,
	},
];

const Specialists = () => {
	return (
		<>
			<section className='choose-area theme-bg pt-120 pb-120'>
				<div className='container'>
					<div className='row'>
						{choose.map((item) => (
							<div key={item.id} className='col-xl-3 col-md-6'>
								<div
									className='tp-choose__item wow fadeInUp'
									data-wow-delay='.8s'>
									<img
										src={item.image}
										alt='about-bg-img'
										className='w-100'
										style={{ borderRadius: 10 }}
									/>
									<div className='tp-choose__content mt-10'>
										<h4 className='tp-choose__title mb-20'>{item.title}</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Specialists;
