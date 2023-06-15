import SocialLinks from '@/common/social-links';
import Link from 'next/link';
import React from 'react';

const footer_content = {
	footer_info: [
		{
			id: 1,
			title: 'Quick Links',
			cls: 'footer-col-2',
			links: [
				{ name: 'About Us', link: '/' },
				{ name: 'Contact us', link: '/' },
				{ name: 'Grants', link: '/' },
				{ name: 'Privacy Policy', link: '/' },
				{ name: 'Terms and Conditions', link: '/' },
			],
		},
		{
			id: 2,
			title: 'Contact info',
			cls: 'footer-col-3',
			links: [
				{ name: '6605 Longshore ST STE 240 216 Dublin, OH 43017 - 2774' },
				{ name: '+1(234)432-STAR' },
				{ name: 'contact@starconferences.org' },
			],
		},
	],
	copy_right_text: (
		<>
			© Copyright © {new Date().getFullYear()}
			<Link href='/'> Developed by Ecorfy Inc</Link>.
			<i> All Rights Reserved Copyright</i>
		</>
	),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = ({ themeBg }) => {
	return (
		<>
			<footer>
				<div
					className={`footer-area ${
						themeBg ? themeBg : 'theme-bg'
					} pt-100 pb-50`}>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-4 col-lg-4 col-md-6'>
								<div
									className='footer-widget footer-col-1 mb-50 wow fadeInUp'
									data-wow-delay='.2s'>
									<h4 className='footer-widget__title mb-30'>
										<a href='index'>
											<img src='/assets/img/logo/logo.png' alt='logo' />
										</a>
									</h4>
									<p>
										STAR Conferences is extremely passionate in 3C’s, Creating,
										Connections and Conversions among research scientists and
										researchers as leading experts to integrate B2B businesses
										among individuals, and companies to connect, communicate,
										cultivate, and convert research ideas elegantly and
										efficiently for human mankind.
									</p>
									<div className='footer-widget__social'>
										<SocialLinks />
									</div>
								</div>
							</div>
							{footer_info.map((item) => (
								<div key={item.id} className='col-xl-4 col-lg-4 col-md-6'>
									<div
										className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
										data-wow-delay='.4s'>
										<h4 className='footer-widget__title mb-20'>{item.title}</h4>
										<div className='footer-widget__links'>
											<ul>
												{item.links.map((link, i) => (
													<li key={i}>
														<Link href={`${link?.link ? link.link : '/'}`}>
															{link.name}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='footer-area-bottom theme-bg'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-6 col-lg-6 col-md-12 col-12'>
								<div className='footer-widget__copyright'>
									<span>{copy_right_text}</span>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-12 col-12'>
								<div className='footer-widget__copyright-info info-direction'>
									<ul className='d-flex align-items-center'>
										<li>
											<a href='#'>Terms and conditions</a>
										</li>
										<li>
											<a href='#'>Privacy policy</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
