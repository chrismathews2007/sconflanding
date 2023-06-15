import AnswerQuestion from '@/common/answer-question';
import Text from '@/components/UI/text';
import React from 'react';

const FaqArea = ({ faq, gradient }) => {
	return (
		<section className='faq-area pt-40 pb-40 d-flex align-items-center'>
			<div className='container'>
				<div className='row text-center'>
					<div className='col-lg-12 col-md-12 col-12'>
						<div className='tp-section'>
							<Text Text h2 gradient={gradient}>
								Frequently Asked Questions
							</Text>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<AnswerQuestion faq={faq} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqArea;
