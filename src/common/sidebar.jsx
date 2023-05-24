import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = ({ isActive, setIsActive }) => {
	// photoIndex
	const [photoIndex, setPhotoIndex] = useState(null);
	// image open state
	const [isOpen, setIsOpen] = useState(false);
	// handleImagePopup
	const handleImagePopup = (i) => {
		setPhotoIndex(i);
		setIsOpen(true);
	};
	//  images

	return (
		<>
			<div
				className={`tpsideinfo tp-side-info-area ${
					isActive ? 'tp-sidebar-opened' : ''
				}`}>
				<button
					onClick={() => setIsActive(false)}
					className='tpsideinfo__close'>
					<i className='fal fa-times'></i>
				</button>
				<div className='tpsideinfo__logo mb-40'>
					<Link href='/'>
						<img src='/assets/img/logo/logo.png' alt='logo' />
					</Link>
				</div>

				<div className='mobile-menu mean-container d-block d-lg-none'>
					<div className='mean-bar'>
						<MobileMenus />
					</div>
				</div>

				<div className='tpsideinfo__content mb-60'>
					<p className=' d-none d-xl-block'>
						STAR Conferences is extremely passionate in 3C’s, Creating,
						Connections and Conversions among research scientists and
						researchers as leading experts to integrate B2B businesses among
						individuals, and companies to connect, communicate, cultivate, and
						convert research ideas elegantly and efficiently for human mankind.
					</p>
					<span>Contact Us</span>
					<a href='#'>
						<i className='fa-solid fa-star'></i>6605 Longshore ST STE 240 216
						Dublin, OH 43017 - 2774
					</a>
					<a href='tel:+1234432'>
						<i className='fa-solid fa-star'></i>+1(234)432-STAR
					</a>
					<a href='mailto:contact@starconferences.org'>
						<i className='fa-solid fa-star'></i>contact@starconferences.org
					</a>
				</div>
				<div className='tpsideinfo__content-inputarea mb-60 d-none d-xl-block'>
					<span>Get Update</span>
					<div className='tpsideinfo__content-inputarea-input'>
						<form action='#'>
							<input type='email' placeholder='Enter Mail' />
							<button className='tpsideinfo__content-inputarea-input-btn'>
								<i className='fa-solid fa-paper-plane'></i>
							</button>
						</form>
					</div>
				</div>

				<div className='tpsideinfo__socialicon'>
					<a href='#'>
						<i className='fa-brands fa-youtube'></i>
					</a>
					<a href='#'>
						<i className='fa-brands fa-twitter'></i>
					</a>
					<a href='#'>
						<i className='fa-brands fa-facebook-f'></i>
					</a>
					<a href='#'>
						<i className='fa-brands fa-skype'></i>
					</a>
				</div>
			</div>

			<div
				onClick={() => setIsActive(false)}
				className={`body-overlay ${isActive ? 'opened' : ''}`}></div>
		</>
	);
};

export default Sidebar;
