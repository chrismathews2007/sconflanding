import React from 'react';
import Text from '../UI/text';

function Rating({ value, starColor, color }) {
	return (
		<div className='d-flex'>
			<span className='me-2'>
				{value &&
					[...Array(value)].map((star, index) => {
						return (
							<i
								className={`fa-solid fa-star ${
									starColor ? starColor : 'text-success'
								}`}
								key={index}></i>
						);
					})}
			</span>
			<Text color={color}>Rated 4.9/5 by 1000’s of verified attendies</Text>
		</div>
	);
}

export default Rating;
