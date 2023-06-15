import Text from '@/components/UI/text';
import React from 'react';

function Venue({ gradient }) {
	const DATA = [
		{
			value: 'Marketing',
		},
		{
			value: 'Developers',
		},
		{
			value: 'Designers',
		},
		{
			value: 'Enterprise',
		},
	];
	return (
		<section className='pt-80 pb-80'>
			<div className='container'>
				<div className='row justify-content-center text-center'>
					<div className='col-xl-8'>
						<Text h2 gradient={gradient}>
							Venue
						</Text>
						<Text size={22}>
							STAR Conference always bring you best conference experience by
							organizing at most wished places. We don't make any exceptions
							this time either.
						</Text>
					</div>
				</div>
				<div className='row mt-80'>
					<div className='col-lg-6 d-flex flex-column justify-content-center'>
						<Text h2 gradient={gradient}>
							MGM Grand Hotel
						</Text>
						<div className='mt-30 mb-30'>
							<Text size={22}>
								3799 S Las Vegas Blvd, <br />
								Las Vegas, NV, 89109
							</Text>
						</div>
						<div className='row'>
							<div className='col-lg-6 row'>
								{DATA.map((item, i) => {
									return (
										<div
											key={i}
											className='col-6 d-flex align-items-center mb-10'>
											<i className='fa-solid fa-circle-check pe-2 mb-0 text-warning'></i>
											<Text size={20}>{item.value}</Text>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<img src='assets/img/venue/mgm-grand.jpg' className='w-100' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Venue;
