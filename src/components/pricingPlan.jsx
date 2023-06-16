import classNames from 'classnames';
import React from 'react';

const PricingPlan = ({
	pricingColor,
	withPopularTag,
	buttonLinkPath,
	withHotel,
}) => {
	const [acc, setAcc] = React.useState(false);
	const [hotel, setHotel] = React.useState(200);
	const [nights, setNights] = React.useState(0);
	const [person, setPerson] = React.useState(false);
	const [personPrice, setPersonPrice] = React.useState(100);
	const [price, setPrice] = React.useState(0);

	const onAddHotel = (e) => {
		if (hotel === 1) {
			setAcc(e.target.checked);
		} else {
			setAcc(e.target.checked);
			setNights(0);
			setPerson(false);
		}
	};

	const priceEstimation = () => {
		return (
			<Text
				placeholder='Price'
				propName='planPrice'
				renderBlock={(props) => {
					let price_obj = props.children;
					let price_amount = price_obj[0]?.props?.text?.text;
					let split_price_amount = price_amount?.split('$ ')[1];
					let hotel_price = hotel * nights;
					let acc_price = person ? personPrice : 0;
					let price_total =
						parseFloat(split_price_amount) + hotel_price + acc_price;
					setPrice(price_total);
					return (
						<ul>
							<li>Base Price: {price_obj}</li>
							<li>Hotel: $ {hotel_price} </li>
							{/* <li>Accompanying person: $ {acc_price}</li> */}
							<li>
								Total: ${' '}
								<b
									className={classNames('bold', pricingColor.mainDivClassName)}>
									{price_total}
								</b>
							</li>
						</ul>
					);
				}}
			/>
		);
	};
	return (
		<div
			className={classNames(
				'm-4 p-5 border border-t-4 rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]',
				pricingColor.mainDivClassName
			)}>
			<div>
				{withHotel && (
					<div className='flex-1 flex flex-col my-5'>
						<div className='flex gap-2 items-center'>
							<input
								type='checkbox'
								className='appearance-none checked:bg-blue-500 ...'
								name='accomidation'
								onChange={onAddHotel}
							/>
							<p>Add Hotel</p>
						</div>
					</div>
				)}
				{acc && (
					<div
						className={classNames(
							'my-5 flex-column text-justify rounded-lg bg-slate-100 p-2',
							pricingColor.mainDivClassName
						)}>
						<label htmlFor='hotel'>No of Nights: </label>
						<select
							className='mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							id='hotel'
							name='hotel'
							value={nights}
							onChange={(e) => setNights(parseFloat(e.target.value))}>
							<option value='0'>0</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
						</select>
					</div>
				)}
				{/* {
          (acc && nights > 0) && (<div className="flex-1 flex flex-col mb-5">
            <div className='flex gap-2 items-center'>
              <input type="checkbox" className="appearance-none checked:bg-blue-500 ..." name='person' onChange={(e) => setPerson(e.target.checked)} />
              <p>Accompanying Person</p>
            </div>
          </div>)
        } */}
				{((acc && nights > 0) || person) && (
					<div
						className={classNames(
							'my-5 flex-column text-justify rounded-lg bg-green-100 p-2',
							pricingColor.mainDivClassName
						)}>
						{nights === 1 && !person && priceEstimation()}
						{nights === 2 && !person && priceEstimation()}
						{nights === 3 && !person && priceEstimation()}
						{nights === 1 && person && priceEstimation()}
						{nights === 2 && person && priceEstimation()}
						{nights === 3 && person && priceEstimation()}
						{nights === 0 && person && priceEstimation()}
						{nights === 0 && !person && null}
					</div>
				)}

				<Link
					href={buttonLinkPath}
					className={classNames(
						'cursor-pointer block mb-8',
						'text-center text-lg py-2 px-3 sm:px-5 rounded hover:text-white font-medium border-2 hover:shadow-lg transition duration-200',
						pricingColor.buttonClassName,
						'dark:hover:text-white'
					)}>
					<Text
						renderBlock={(props) => <div>{props.children}</div>}
						placeholder='Action'
						propName='buttonText'
					/>
				</Link>
			</div>
		</div>
	);
};

PricingPlan.schema = {
	name: blockNames.STAR_PricingPlan,
	label: 'Plan',
	category: 'star-pricing',
	hideFromAddMenu: true,
	getDefaultProps: () => ({
		popularTagText: 'Most popular',
		withPopularTag: false,
		withHotel: false,
		pricingColor: pricingColors.CYAN.value,
		planName: 'Speaker Pass',
		planDescription: 'Starting From',
		planPrice: '$ 599',
		buttonText: 'Register',
		buttonLinkPath: '/',
		features: [
			{
				featureText: 'Certificate',
			},
			{
				featureText: 'CPD Credits',
			},
			{
				featureText: 'Speaker Slot',
			},
			{
				featureText: 'Breakfast',
			},
			{
				featureText: 'Lunch',
			},
		],
	}),
	repeaterItems: [
		{
			name: 'features',
			itemType: blockNames.STAR_PlanFeature,
			itemLabel: 'feature',
			min: 0,
			max: 15,
		},
	],
	sideEditProps: [
		pricingColorsEditProps,
		{
			name: 'withPopularTag',
			label: 'Popular tag',
			type: types.SideEditPropType.Boolean,
		},
		{
			name: 'withHotel',
			label: 'Add Hotel',
			type: types.SideEditPropType.Boolean,
		},
		{
			name: 'buttonLinkPath',
			label: 'Button link',
			type: types.SideEditPropType.Text,
		},
	],
};

export default PricingPlan;
