import Text from '@/components/UI/text';
import pricing_data from '@/data/pricing-data';
import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = ({ dark, p_bottom }) => {
	const [isAccomdation, setIsAccomdation] = useState(false);
	return (
		<>
			<section className={`pricing-area pt-40 pb-40 d-flex align-items-center`}>
				<div className='container'>
					<div className='row text-center'>
						<div className='col-lg-12 col-md-12 col-12'>
							<div className='tp-section' style={{ marginBottom: 40 }}>
								<Text h2>Our Upcoming Forums</Text>
							</div>
						</div>
					</div>
					<div className='row'>
						{pricing_data.map((item) => (
							<div key={item.id} className={`col-lg-4 col-md-6`}>
								<div
									className={`tp-price ${item.class} ${
										dark ? 'tp-white-price' : ''
									} mb-40`}>
									<div className='tp-price__badge mb-45'>
										<Text h3>{item.title}</Text>
									</div>
									<div className='tp-price__heading mb-45'>
										<div className='tp-price__content'>
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
									<div className='input-group mb-3 d-flex align-items-center'>
										<input
											className='mt-0 me-2'
											type='checkbox'
											id={item.id}
											onClick={() => setIsAccomdation(!isAccomdation)}
										/>
										<label for={item.id}>i'd like to add accomdation</label>
									</div>

									<div className={`tp-price__btn ${item.btn_color} `}>
										<Link
											href={`${
												isAccomdation
													? item.paymentWithAccomdation
													: item.payment
											}`}>
											Register
											<span>
												<svg
													width='22'
													height='8'
													viewBox='0 0 22 8'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269206 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
														fill='white'
													/>
												</svg>
											</span>
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
