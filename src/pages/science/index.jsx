import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import Layout from '@/layout/womenLayout';
import HomeBanner from '@/components/pages/women/home-banner';
import ForumRegister from '@/components/pages/women/forumRegister';

import { client } from '@/components/contentful/client';
import FaqArea from '@/components/pages/landing/faq';
import Pricing from '@/components/pages/landing/pricing';
import ForumTracks from '@/components/pages/landing/forumTracks';
import Venue from '@/components/pages/women/venue';
import { pricing_sceince } from '@/data/pricing-data';

const index = ({ faq }) => {
	return (
		<Wrapper>
			<SEO pageTitle='Home' />
			<Layout topHeader>
				<div className=''>
					<HomeBanner
						title='World Science Forum'
						gradient='bg-gradient-science-bottom '
					/>
					<ForumRegister gradient='text_s_gradient' />
					<ForumTracks gradient='text_s_gradient' />
					<Pricing
						title='Register Now'
						description='Most commonly asked questions by our attendees to help you make decision to attend most important event which you should not to miss to experience global dias'
						themebg='gradient-science'
						earlyBg
						gradient='text_s_gradient'
						pricing_data={pricing_sceince}
					/>
					<Venue gradient='text_s_gradient' />
					<FaqArea faq={faq} gradient='text_s_gradient' />
				</div>
			</Layout>
		</Wrapper>
	);
};

export default index;

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
