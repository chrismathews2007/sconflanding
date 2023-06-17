import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import useSticky from 'hooks/use-sticky';
import Sidebar from '@/common/sidebar';
import TopHeader from './topHeader';

const Header = ({ topHeader }) => {
	const { sticky } = useSticky();
	const [isActive, setIsActive] = useState(false);

	// console.log('sticky: ', sticky);

	return (
		<>
			<div
				id='header-mob-sticky'
				className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
					sticky ? 'header-sticky' : ''
				} `}>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-4 col-10'>
							<div className='tp-mob-logo'>
								<Link href='/'>
									{sticky ? (
										<img src='/assets/img/logo/logo.png' alt='logo' />
									) : (
										<img src='/assets/img/logo/logo_lite.png' alt='logo' />
									)}
								</Link>
							</div>
						</div>
						<div className='col-md-8 col-2'>
							<div className='tp-mobile-bar d-flex align-items-center justify-content-end'>
								<button
									onClick={() => setIsActive(true)}
									className='tp-menu-toggle'>
									<i className='far fa-bars'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<header className='d-none d-xl-block'>
				{topHeader && <TopHeader />}
				<div
					className={`header__area tp-home-one ${
						sticky ? 'header-sticky' : ''
					}`}
					id='header-sticky'>
					<div className='container-fluid'>
						<div className='row align-items-center w-100 m-0 mx-auto'>
							<div className='col-xxl-5 col-lg-6'>
								<div className={`main-menu ${sticky ? 'sticky-menu' : ''}`}>
									<nav id='mobile-menu'>
										<NavMenu />
									</nav>
								</div>
							</div>
							<div className='col-xxl-2 col-lg-3 me-auto'>
								<div className='logo'>
									<Link href='/'>
										<img src='/assets/img/logo/logo_lite.png' alt='logo' />
									</Link>
								</div>
							</div>
							<div className='col-xxl-3 col-lg-3 d-flex align-items-center justify-content-end'>
								<a className='tp-bt-btn' href='tel:+1(234)432-STAR'>
									<svg
										width='14'
										height='19'
										viewBox='0 0 14 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<circle cx='2' cy='2' r='2' fill='#0E63FF' />
										<circle cx='7' cy='2' r='2' fill='#0E63FF' />
										<circle cx='12' cy='2' r='2' fill='#0E63FF' />
										<circle cx='12' cy='7' r='2' fill='#0E63FF' />
										<circle cx='12' cy='12' r='2' fill='#0E63FF' />
										<circle cx='7' cy='7' r='2' fill='#0E63FF' />
										<circle cx='7' cy='12' r='2' fill='#0E63FF' />
										<circle cx='7' cy='17' r='2' fill='#0E63FF' />
										<circle cx='2' cy='7' r='2' fill='#0E63FF' />
										<circle cx='2' cy='12' r='2' fill='#0E63FF' />
									</svg>
									<span>Help Desk :</span> +1(234)432-STAR
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* side bar start */}
			<Sidebar isActive={isActive} setIsActive={setIsActive} />
			{/* side bar end */}
		</>
	);
};

export default Header;
