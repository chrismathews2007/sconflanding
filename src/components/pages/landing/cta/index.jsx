import Text from '@/components/UI/text';
import React from 'react';

const Cta_Area = () => {
	return (
		<>
			<section className='cta-area pt-150 pb-150 cta-bg theme-light-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div
								// className=' pt-65 pb-70'
								style={
									{
										// backgroundImage: `url("/assets/img/shape/shape-bg-03.png")`,
									}
								}>
								<div className=' text-center'>
									<Text h2>
										Elevate Your Brand and Personal Visibility on a Global Scale{' '}
									</Text>
									<Text h4>
										Leverage Our Global Platforms for Targeted Audience
										engagement 🎯{' '}
									</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cta_Area;
