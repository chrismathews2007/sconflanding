import Text from '@/components/UI/text';
import pricing_data from '@/data/pricing-data';
import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = ({
	dark,
	p_bottom,
	title,
	description,
	themebg,
	earlyBg,
	gradient,
}) => {
	const [isAccomdation, setIsAccomdation] = useState(false);
	return (
		<>
			<section
				className={`pricing-area pt-80 pb-80 d-flex align-items-center wow fadeInUp`}
				data-wow-duration='.8s'
				data-wow-delay='.2s'>
				<div className='container'>
					<div className='row text-center justify-content-center'>
						<div className='col-xl-8'>
							<div className='tp-section' style={{ marginBottom: 40 }}>
								<Text h2 gradient={gradient}>
									{title}
								</Text>
								<Text size={25}>{description}</Text>
							</div>
						</div>
					</div>
					<div className='row'>
						{pricing_data.map((item) => (
							<div key={item.id} className={`col-lg-3 col-md-6`}>
								<div
									className={`tp-price ${themebg ? themebg : item.class} ${
										dark ? 'tp-white-price' : ''
									} mb-40 position-relative`}>
									<div
										className='d-flex justify-content-center p-2 position-absolute'
										style={{ right: -10, top: -10 }}>
										<div
											className={`text-center bg-${
												earlyBg ? themebg : 'danger'
											}`}
											style={{ padding: '5px 15px' }}>
											<Text small color='text-white'>
												Super Early Bird
											</Text>
										</div>
									</div>
									<div
										className='tp-price__badge mb-15 mt-25'
										style={{ minHeight: 70 }}>
										<Text h4>{item.title}</Text>
									</div>
									<div className='tp-price__heading mb-10'>
										<div
											className='tp-price__content'
											style={{ minHeight: 140 }}>
											<Text h2>${item.price}</Text>
											<Text>{item.sub_title}</Text>
										</div>
									</div>
									<div
										className='tp-price__features tp-yearly-list mb-55'
										style={{ minHeight: 150 }}>
										<ul>
											{item.price_features.map((list, i) => (
												<li key={i} className={`${list.active}`}>
													{list.list}
												</li>
											))}
										</ul>
									</div>
									<div className=' mb-3 d-flex align-items-center'>
										<input
											className='mt-0 me-2'
											type='checkbox'
											id={item.id}
											onClick={() => setIsAccomdation(!isAccomdation)}
										/>
										<label for={item.id} style={{ fontSize: 12 }}>
											i'd like to add accomdation
										</label>
									</div>

									<div
										className={`tp-price__btn ${
											themebg ? `bg-${themebg}` : item.btn_color
										}`}>
										<Link
											className='w-100'
											href={`${
												isAccomdation
													? item.paymentWithAccomdation
													: item.payment
											}`}>
											Register
										</Link>
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

export default Pricing;
