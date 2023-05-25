import React from 'react';
import Layout from '@/layout/layout';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import ValueProp from '@/components/pages/landing/valueProp';
import Brands from '@/common/brands';
import Steps from '@/components/pages/landing/steps';
import ImageContent from '@/components/pages/landing/imageContent';
import RatingProp from '@/components/pages/landing/ratingprop';

const index = () => {
	return (
		<Wrapper>
			<SEO pageTitle='Home' />
			<Layout>
				<div
					style={{
						width: '100%',
						paddingTop: 80,
					}}>
					<ValueProp />
					<Brands />
					<Steps />
					<ImageContent />
					<RatingProp />
				</div>
			</Layout>
		</Wrapper>
	);
};

export default index;
