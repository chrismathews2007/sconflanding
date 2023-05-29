import Text from '@/components/UI/text';
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { Countries } from '@/data/countries';

const Checkout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isShipOpen, setIsShipOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isCodeOpen, setIsCodeOpen] = useState(false);
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');

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
						<div className='col-12 col-lg-10 row ms-auto me-auto'>
							<div className='col-lg-8 col-md-12 customer-details'>
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
										<div
											className='alert alert-info d-flex justify-content-between'
											role='alert'>
											<div className='col-12 col-sm-8'>
												<Text small>
													An item you ordered is in high demanded.
												</Text>
												<Text small>
													No worries, we have reserved your order
												</Text>
											</div>
											<div className='col-12 col-sm-4 d-flex align-items-start'>
												<i className='fa-sharp fa-solid fa-timer me-2 pt-2'></i>
												<Text small>
													Your order is reserved for <b>9:35</b>
												</Text>
											</div>
										</div>
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
										</div>
										<div>
											<Text small>
												<input
													onClick={() => setIsShipOpen(!isShipOpen)}
													id='ship-box'
													type='checkbox'
												/>
												<label htmlFor='ship-box' className='ms-2'>
													Ship to a different address?
												</label>
											</Text>
											{isShipOpen && (
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
															<label htmlFor='floatingInput'>
																Phone Number
															</label>
														</div>
													</div>
												</div>
											)}
											<div className='order-notes'>
												<div className='checkout-form-list'>
													<Text h4>Pay Now</Text>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='col-lg-4 col-md-12 your-order '>
								<div className='mb-30 '>
									<Text h4>Order Summary</Text>
									<div className='your-order-table table-responsive'>
										<table>
											<tbody>
												<tr className='cart_item'>
													<td class='Cart-Items-table-image'>
														<img
															alt=''
															width='80'
															height='80'
															src='https://cdn.schema.io/next-jsn-commerce/60c14dd8a0ed0541fdcac28c/a5a56b22d2098fdf866176e9b711a845?width=160&amp;height=160&amp;&amp;padded='
															title=''
														/>
													</td>
													<td className='product-name'>
														1x Product
														<div className='product-total'>
															<b className='text-primary'> Only $165.00</b>
														</div>
													</td>
												</tr>
											</tbody>
										</table>

										<div className='coupon-info mt-3'>
											<div className='checkout-coupon d-flex'>
												<div className='form-floating me-3 col-12 col-sm-8 '>
													<input
														type='text'
														className='form-control'
														id='floatingInput'
														placeholder='Coupon Code'
													/>
													<label htmlFor='floatingInput'>Coupon Code</label>
												</div>
												<button
													className='btn btn-warning btn-sm w-100'
													type='submit'>
													Apply
												</button>
											</div>
										</div>

										<table>
											<tfoot>
												<tr className='cart-subtotal'>
													<th>Subtotal</th>
													<td>
														<span className='amount'>$215.00</span>
													</td>
												</tr>
												<tr className='shipping'>
													<td>Shipping</td>
													<td>
														<b>FREE Shipping</b>
													</td>
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
										<div className='d-flex gap-2 justify-content-center'>
											<img src='/assets/img/profile1.png' height='80' />
											<div className='ms-3 gap-2'>
												<Text small>
													Eros volutpat Duis erat illum dolore minim tation
													tincidunt blandit aliquip
												</Text>
												<Text h4 mb='mb-0'>
													Cristina
												</Text>
											</div>
										</div>
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
