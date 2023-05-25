import React from 'react';

export default function TopHeader() {
	return (
		<div
			className='container-fluid d-flex justify-content-between align-items-center px-4'
			style={{ background: '#371381', width: '100%', height: 40 }}>
			<div className='welcome text-white'>Welcome to Star Conferences!</div>
			<div className='welcome'>
				<ul className='d-flex m-0 gap-3'>
					<li className='listitem text-white'>
						<i class='fa-regular fa-location-pin'></i> Deliver to 423651
					</li>
					<span className='text-white'>|</span>
					<li className='listitem text-white'>
						<i class='fa-regular fa-location-pin'></i> Track your order
					</li>
					<span className='text-white'>|</span>
					<li className='listitem text-white'>
						<i class='fa-regular fa-location-pin'></i> All Offers
					</li>
				</ul>
			</div>
		</div>
	);
}
