import React from 'react';
import Layout from '@/layout/layout';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import ValueProp from '@/components/pages/landing/valueProp';
import Brands from '@/common/brands';
import Steps from '@/components/pages/landing/steps';
import ImageContent from '@/components/pages/landing/imageContent';
import RatingProp from '@/components/pages/landing/ratingprop';
import ExploreSeries from '@/components/pages/landing/exploreSeries';
import Faq from '@/components/pages/landing/faq';
import Pricing from '@/components/pages/landing/pricing';
import Cta_Area from '@/components/pages/landing/cta';
import Discover from '@/components/pages/landing/discover';

const index = () => {
	return (
		<Wrapper>
			<SEO pageTitle='Home' />
			<Layout topHeader>
				<div
					style={{
						width: '100%',
						paddingTop: 80,
					}}>
					<ValueProp />
					<Brands />
					<Cta_Area />
					<Steps />
					<Discover />
					<RatingProp />
					<Pricing />
					<ExploreSeries />
					<Faq />
				</div>
			</Layout>
		</Wrapper>
	);
};

export default index;
