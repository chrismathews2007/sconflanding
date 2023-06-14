import Text from '@/components/UI/text';
import React from 'react';

export default function TopHeader() {
	return (
		<div
			className='container-fluid d-flex justify-content-between align-items-center px-4'
			style={{ background: '#371381', width: '100%', height: 40 }}>
			<div className='w-100 text-center'>
				<Text color='text-white'>
					Register early to unleash maximum discounts and a treasure trove of
					additional benefits!
				</Text>
			</div>
		</div>
	);
}
