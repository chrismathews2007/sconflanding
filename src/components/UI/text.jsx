import React from 'react';

export default function Text({ h1, h2, h3, h4, h5, subTitle, text, children }) {
	const renderText = h1 ? (
		<h2 className='text__h1 mb-20'>{children}</h2>
	) : h2 ? (
		<h2 className='text__h2 mb-20'>{children}</h2>
	) : h3 ? (
		<h3 className='text__h3 mb-20'>{children}</h3>
	) : h4 ? (
		<h4 className='text__h4 mb-20'>{children}</h4>
	) : h5 ? (
		<h5 className='text__h5 mb-20'>{children}</h5>
	) : subTitle ? (
		<span className='text__sub-heading mb-10'>{children}</span>
	) : (
		<p className='text__p mb-0'>{children}</p>
	);

	return renderText;
}
