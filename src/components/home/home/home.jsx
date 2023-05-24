import React from 'react';
import About from './about';
import ServiceArea from './service-area';
import Specialists from '../../../common/specialists';
import HomeBanner from './home-banner';

const HomeOne = () => {
	return (
		<>
			<HomeBanner />
			<About />
			<Specialists />
			<ServiceArea />
		</>
	);
};

export default HomeOne;
