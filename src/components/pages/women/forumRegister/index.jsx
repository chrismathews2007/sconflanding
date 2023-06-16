import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

function ForumRegister({ gradient }) {
	return (
		<section
			className='pt-40 pb-40 d-flex align-items-center justify-content-center h-100 wow fadeInUp'
			data-wow-duration='.8s'
			data-wow-delay='.2s'>
			<div className='container text-center '>
				<div className='row justify-content-center'>
					<div className='col-xl-8'>
						<Text size={25}>Star Conference</Text>
						<Text h2 gradient={gradient}>
							World Women Forum
						</Text>
						<Text size={22}>
							Proudly organized by STAR Conferences in the cities across North
							America, Europe and Asia. World Women Forum is two day event that
							brings together 100's of Women leaders around the globe to speak,
							learn and network with passionate minds like you.
						</Text>
						<div className='mt-25 d-flex align-items-center justify-content-center'>
							<button type='button' className='tp-btn bg-majorelleblue me-3'>
								Brochure
							</button>
							<Link className='tp-btn-second' href='/'>
								Register Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ForumRegister;
