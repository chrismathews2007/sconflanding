import Text from '@/components/UI/text';
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { Countries } from '@/data/countries';

const Checkout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isShipOpen, setIsShipOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isCodeOpen, setIsCodeOpen] = useState(false);

	const [selectedCountry, setSelectedCountry] = useState(null);

	const customStyles = {
		control: (base, state) => ({
			...base,
			height: 'calc(3.5rem + 2px)',
			lineHeight: 1.25,
		}),
		placeholder: (defaultStyles) => {
			return {
				...defaultStyles,
				color: '#6f7172',
				opacity: 1,
			};
		},
	};

	return (
		<>
			<section
				className='checkout-area pb-100 wow fadeInUp'
				data-wow-duration='.8s'
				data-wow-delay='.2s'>
				<div className='container'>
					<form action='#'>
						<div className='row'>
							<div className='col-lg-6 col-md-12 customer-details'>
								{isLoginOpen ? (
									<div
										id='checkout-login'
										className={`coupon-content ${
											isLoginOpen ? 'd-block' : ''
										}`}>
										<div className='coupon-info'>
											<p className='coupon-text'>
												Quisque gravida turpis sit amet nulla posuere lacinia.
												Cras sed est sit amet ipsum luctus.
											</p>
											<form action='#'>
												<p className='form-row-first'>
													<label>
														Username or email
														<span className='required'>*</span>
													</label>
													<input type='text' />
												</p>
												<p className='form-row-last'>
													<label>
														Password <span className='required'>*</span>
													</label>
													<input type='text' />
												</p>
												<p className='form-row'>
													<button className='tp-btn-second' type='submit'>
														Login
													</button>
													<label>
														<input type='checkbox' />
														<span> Remember me</span>
													</label>
												</p>
												<p className='lost-password'>
													<a href='#'>Lost your password?</a>
												</p>
												<span
													className='tp-btn-second'
													id='showlogin'
													onClick={() => setIsLoginOpen(!isLoginOpen)}>
													Continue as Guest
												</span>
											</form>
										</div>
									</div>
								) : (
									<div className=''>
										<div className='d-flex justify-content-between align-items-center mb-20'>
											<Text h4 mb='mb-0'>
												Customer information
											</Text>
											<div>
												Already have an account?{' '}
												<span
													className='text-primary'
													role='button'
													tabIndex='0'
													id='showlogin'
													onClick={() => setIsLoginOpen(!isLoginOpen)}>
													Login
												</span>
											</div>
										</div>
										<div className='form-floating mb-3'>
											<input
												type='email'
												className='form-control'
												id='floatingInput'
												placeholder='name@example.com'
											/>
											<label htmlFor='floatingInput'>Email address</label>
										</div>
										<div className='checkout-form-list create-acc'>
											<input
												onClick={() =>
													console.log(
														'Keep me up to date with news and special offers'
													)
												}
												id='cbox'
												type='checkbox'
											/>
											<label htmlFor='cbox'>
												Keep me up to date with news and special offers
											</label>
										</div>
										<div className='d-flex justify-content-between align-items-center mb-20'>
											<Text h4 mb='mb-0'>
												Shipping address
											</Text>
										</div>
										<div className='d-flex flex-wrap'>
											<div className='col-md-6 p-2 ps-0'>
												<div className='form-floating mb-3'>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='First name'
													/>
													<label htmlFor='floatingInput'>First name</label>
												</div>
											</div>
											<div className='col-md-6 p-2 pe-0'>
												<div className='form-floating mb-3'>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='Last name'
													/>
													<label htmlFor='floatingInput'>Last name</label>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-floating mb-3'>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='Company (optional)'
													/>
													<label htmlFor='floatingInput'>
														Company (optional)
													</label>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-floating mb-3'>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='Address'
													/>
													<label htmlFor='floatingInput'>Address</label>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-floating mb-3'>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='Apt, etc. (optional)'
													/>
													<label htmlFor='floatingInput'>
														Apt, etc. (optional)
													</label>
												</div>
											</div>
											<div className='col-md-6 p-2 ps-0'>
												<Select
													defaultValue={selectedCountry}
													onChange={setSelectedCountry}
													options={Countries}
													placeholder='Select a country'
													styles={customStyles}
												/>
												{/* <div className='form-floating mb-3'>
													<select className='form-select'>
														<option value='volvo'>United States</option>
														<option value='saab'>Algeria</option>
														<option value='mercedes'>Canada</option>
														<option value='audi'>Germany</option>
														<option value='audi2'>England</option>
														<option value='audi3'>Qatar</option>
														<option value='audi5'>Dominican Republic</option>
													</select>
													<label htmlFor='floatingInput'>Country</label>
												</div> */}
											</div>
											<div className='col-md-6 p-2 pe-0'>
												<Select
													defaultValue={selectedCountry}
													onChange={setSelectedCountry}
													options={Countries}
													placeholder='Select a State'
													styles={customStyles}
												/>
											</div>
											<div className='col-md-6 p-2 ps-0'>
												<Select
													defaultValue={selectedCountry}
													onChange={setSelectedCountry}
													options={Countries}
													placeholder='Select a City'
													styles={customStyles}
												/>
											</div>
											<div className='col-md-6 p-2 pe-0'>
												<div className='form-floating mb-3'>
													<input
														type='number'
														className='form-control'
														id='floatingInput'
														placeholder='ZIP Code'
													/>
													<label htmlFor='floatingInput'>ZIP/Postal</label>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-floating mb-3'>
													<input
														type='number'
														className='form-control'
														id='floatingInput'
														placeholder='Phone Number'
													/>
													<label htmlFor='floatingInput'>Phone Number</label>
												</div>
											</div>
											<div className='col-md-12'>
												<div className='form-floating mb-3'>
													<textarea class='form-control' rows='3'></textarea>
													<label htmlFor='floatingInput'>
														Comments (Optional)
													</label>
												</div>
											</div>
											<div className='col-12'>
												<div className='checkout-form-list create-acc'>
													<input
														onClick={() =>
															console.log('Save my information for next time')
														}
														id='cbox'
														type='checkbox'
													/>
													<label htmlFor='cbox'>
														Save my information for next time
													</label>
												</div>
												<div className='order-button-payment mt-20'>
													<button type='submit' className='tp-btn-second w-100'>
														Place order
													</button>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='col-lg-6 col-md-12 your-order '>
								<div className='mb-30 '>
									<Text h4>Order Summary</Text>
									<div className='your-order-table table-responsive'>
										<table>
											<thead>
												<tr>
													<th className='product-name'>Product</th>
													<th className='product-total'>Total</th>
												</tr>
											</thead>
											<tbody>
												<tr className='cart_item'>
													<td className='product-name'>
														Oreder Item
														<strong className='product-quantity'> × 1</strong>
													</td>
													<td className='product-total'>
														<span className='amount'>$165.00</span>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr className='cart-subtotal'>
													<th>Cart Subtotal</th>
													<td>
														<span className='amount'>$215.00</span>
													</td>
												</tr>
												<tr className='shipping'>
													<th>Shipping</th>
												</tr>
												<tr className='order-total'>
													<th>Order Total</th>
													<td>
														<strong>
															<span className='amount'>$215.00</span>
														</strong>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* <!-- checkout-area end --> */}
		</>
	);
};

export default Checkout;
