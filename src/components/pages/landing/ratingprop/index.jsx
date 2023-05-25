import Text from '@/components/UI/text';
import Link from 'next/link';
import React from 'react';

export default function RatingProp() {
	return (
		<div className='grey-bg pt-100 pb-100 wow fadeInRight' data-wow-delay='.4s'>
			<div className='container'>
				<div className='gap-4 text-center '>
					<Text h2>
						Value Proposition Featuring <br /> Benefit
					</Text>
					<Link className='tp-btn-second large' href='/'>
						Buy Now
					</Link>
				</div>
				<div className='gap-4 text-center '>
					<img src='/assets/img/paymentcards.png' height='30' />
				</div>
				<div className='d-flex gap-2 justify-content-center pt-80'>
					<div className='col-lg-7 d-flex gap-2 justify-content-center'>
						<img src='/assets/img/profile1.png' height='150' />
						<div className='ms-3 gap-2'>
							<Text>
								Eros volutpat. Duis erat illum dolore minim tation tincidunt
								blandit aliquip exerci dolor accumsan delenit iusto vel te augue
								zzril laoreet quis sed hendrerit
							</Text>
							<Text h4>Cristina</Text>
							<div>
								<span>
									<i class='fa-solid fa-star text-warning'></i>
									<i class='fa-solid fa-star text-warning'></i>
									<i class='fa-solid fa-star text-warning'></i>
									<i class='fa-solid fa-star text-warning'></i>
									<i class='fa-solid fa-star text-warning'></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
