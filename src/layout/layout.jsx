import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ topHeader, children }) => {
	return (
		<div>
			<Header topHeader={topHeader} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
