import Text from '@/components/UI/text';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
	{ value: '1', label: 'One night' },
	{ value: '2', label: 'Two nights' },
];

const Pricing = ({
	dark,
	p_bottom,
	title,
	description,
	themebg,
	earlyBg,
	gradient,
	pricing_data,
}) => {
	const [isAccomdation, setIsAccomdation] = useState(false);
	const [acc, setAcc] = React.useState();
	const [hotel, setHotel] = React.useState(249);
	const [totalHotel, setTotalHotel] = React.useState();
	const [nights, setNights] = React.useState(0);
	const [person, setPerson] = React.useState(1);
	const [personPrice, setPersonPrice] = React.useState(100);
	const [price, setPrice] = React.useState(0);

	const onAddHotel = (e) => {
		setAcc(e.id);
		setIsAccomdation(!isAccomdation);
		setPrice(e.price);
		setNights(0);
		setPerson(1);
		setTotalHotel();
		console.log(e);
	};

	const handleChange = (selected) => {
		setNights(selected.value);
		let hotel_price =
			selected.value == 2 ? hotel + 250 : hotel * selected.value;
		setTotalHotel(hotel_price);
		// console.log('selected', selected.value);
		// console.log('Setting hotel price: ', hotel_price);
	};

	return (
		<>
			<section
				id='registration'
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
										className='tp-price__features tp-yearly-list mb-15'
										style={{ minHeight: item.accomdation ? 160 : 200 }}>
										<ul>
											{item.price_features.map((list, i) => (
												<li key={i} className={`${list.active}`}>
													{list.list}
												</li>
											))}
										</ul>
									</div>
									{item.accomdation && (
										<>
											<div className=' mb-3 d-flex align-items-center'>
												<input
													className='mt-0 me-2'
													type='checkbox'
													id={item.id}
													onClick={() => onAddHotel(item)}
												/>
												<label htmlFor={item.id} style={{ fontSize: 12 }}>
													i'd like to add accomdation
												</label>
											</div>
											{acc == item.id && isAccomdation ? (
												<>
													<Select
														className='mt-15 mb-15'
														options={options}
														onChange={handleChange}
														placeholder='Select no. of nights'
													/>
													{totalHotel && (
														<div className='alert alert-info p-3'>
															<Text>Base Price: {item.price}</Text>
															<Text mb='mt-5 mb-5'>Hote: {totalHotel}</Text>
															<Text>Total: {price + totalHotel}</Text>
														</div>
													)}
												</>
											) : null}
										</>
									)}

									<div
										className={`tp-price__btn ${
											themebg ? `bg-${themebg}` : item.btn_color
										}`}>
										<Link
											className='w-100'
											href={`${
												nights == 1
													? item.paymentWithAccomdation
													: nights == 2
													? item.paymentWithAccomdation2
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
