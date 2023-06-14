import React from 'react';
import Header from './women/header/header';
import Footer from './women/footer/footer';

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
