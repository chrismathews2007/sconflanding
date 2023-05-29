import React from 'react';

export default function Text({
	h1,
	h2,
	h3,
	h4,
	h5,
	subTitle,
	small,
	align,
	color,
	mb,
	size,
	children,
}) {
	const renderText = h1 ? (
		<h2
			className={`text__h1 ${mb ? mb : 'mb-20'} ${
				align ? align : 'text-left'
			} ${color ? color : null}`}>
			{children}
		</h2>
	) : h2 ? (
		<h2
			className={`text__h2 ${mb ? mb : 'mb-20'} ${
				align ? align : 'text-left'
			}`}>
			{children}
		</h2>
	) : h3 ? (
		<h3
			className={`text__h3 ${mb ? mb : 'mb-20'} ${
				align ? align : 'text-left'
			}`}>
			{children}
		</h3>
	) : h4 ? (
		<h4
			className={`text__h4 ${mb ? mb : 'mb-20'} ${
				align ? align : 'text-left'
			}`}>
			{children}
		</h4>
	) : h5 ? (
		<h5
			className={`text__h5 ${mb ? mb : 'mb-20'} ${
				align ? align : 'text-left'
			}`}>
			{children}
		</h5>
	) : subTitle ? (
		<span className={`text__sub-heading ${mb ? mb : 'mb-20'}`}>{children}</span>
	) : small ? (
		<span className={`text__small`}>{children}</span>
	) : (
		<p
			className={`text__p ${mb ? mb : 'mb-0'}  ${color ? color : null} 
			}`}>
			{children}
		</p>
	);

	return renderText;
}
