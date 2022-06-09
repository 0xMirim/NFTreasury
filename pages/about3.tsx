import	React, {ReactElement}	from	'react';
import	{Button}				from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';
import { useRouter } 			from 	'next/router'


function	Index(): ReactElement {
	const router = useRouter()
	return (
		<section className={'flex h-full items-center'}>
			<div className={''}>
				<div>
					<h2>{'How Does It Work?'}</h2>
				</div>
				<p className={'mt-6 w-7/12'}>
					{'Use the NFTreasury tool to decide what % of your project funds you’ll need for the short term (i.e the next 6 months). The rest of your Eth will be sent to a Yearn vault, safely secured and earning yield.'}
				</p>
				<p className={'mt-8 w-7/12'}>
					{'Next we’ll help you swap your short term funds into a mixture of Eth and USDC which will remain in your wallet so you can start building your project right away.'}
				</p>
				<p className={'mt-8 w-7/12'}>
					{'Simple right?'}
				</p>
				<div className={'flex justify-start mt-20'}>
					<div>
						<WithShadow role={'button'}>
							<Button className={'w-[176px]'} onClick={(e: React.MouseEvent) => { e.preventDefault(); router.push('/create-treasury') }}>
								{'Create Treasury'}
							</Button>
						</WithShadow>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
