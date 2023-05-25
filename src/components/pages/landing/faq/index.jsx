import AnswerQuestion from '@/common/answer-question';
import Text from '@/components/UI/text';
import React from 'react';

const Faq = () => {
	return (
		<>
			<section className='faq-area pt-125 pb-100'>
				<div className='container'>
					<div className='row text-center'>
						<div className='col-lg-12 col-md-12 col-12'>
							<Text h2>The Transformation</Text>
							<Text>
								quis consequat, minim Ut iriure consectetuer ut dolore eum illum
								feugait nulla esse et
							</Text>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<AnswerQuestion />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
