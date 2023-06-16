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
import Unsure from '@/components/pages/landing/unsure';
import Feedback from '@/components/pages/landing/feedback';
import SliderTop from '@/common/slider';
import ForumTracks from '@/components/pages/landing/forumTracks';
import { client } from '@/components/contentful/client';

export async function getStaticProps() {
	const { items } = await client.getEntries({
		content_type: 'faq',
	});
	return {
		props: {
			faq: items,
		},
	};
}

const index = ({ faq }) => {
	return (
		<Wrapper>
			<SEO pageTitle='Home' />
			<Layout topHeader>
				<div className='home_layout'>
					<SliderTop />
					<ValueProp />
					{/* <Brands /> */}
					<Cta_Area />
					<Steps />
					<Discover />
					<ExploreSeries />
					<Unsure />
					<Feedback />
					<Faq faq={faq} />
				</div>
			</Layout>
		</Wrapper>
	);
};

export default index;
