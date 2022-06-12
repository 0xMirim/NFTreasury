import	React, {ReactElement}		from	'react';
import	Link						from	'next/link';
import	{useRouter}					from	'next/router';
import	LogoNFTreasury				from	'components/icons/LogoNFTreasury';
import LogoNFTreasurySmall from './icons/LogoNFTreasurySmall';

const aboutPathnames: string[] = [
	'/',
	'/learn-more',
	'/how-it-works'
];

const createTreasuryPathnames: string[] = [
	'/connect-wallet',
	'/keep-eth',
	'/swap-eth',
	'/wrap-eth',
	'/execute-swap',
	'/final-final-step',
	'/woohoo'
];

const portfolioPathnames: string[] = [
	'/treasury'
];

function	Header(): ReactElement {
	const router = useRouter();
	const isAboutPage = aboutPathnames.includes(router.pathname);
	const isCreateTreasuryPage = createTreasuryPathnames.includes(router.pathname);
	const isPortfolioPage = portfolioPathnames.includes(router.pathname);
	const isActive = false;

	return (
		<>
			<header className={'hidden flex-row justify-between items-center py-10 md:flex'}>
				<Link href={'/'}>
					<div className={'cursor-pointer'}>
						<LogoNFTreasury />
					</div>
				</Link>
				<div className={'flex flex-row items-center space-x-6'}>
					<Link href={'/'}>
						<p className={`link-with-dot ${isAboutPage ? 'active' : '' }`}>
							{'about'}
						</p>
					</Link>
					<Link href={isPortfolioPage ? '/treasury' : '/connect-wallet'}>
						<p className={`link-with-dot ${isCreateTreasuryPage || isPortfolioPage ? 'active' : '' }`}>
							{'create treasury'}
						</p>
					</Link>
				</div>
				<div>
					<p className={`link-no-dot ${isActive ? 'active' : '' }`}>
						{'connect project'}
					</p>
				</div>
			</header>
			<header className={'flex flex-row justify-between items-center py-4 mb-4 border-b-2 md:hidden border-primary-500'}>
				<Link href={'/'}>
					<div className={'cursor-pointer'}>
						<LogoNFTreasurySmall className={'w-10 h-10'}/>
					</div>
				</Link>
				<div>
					<p className={'text-sm'}>{'connect project'}</p>
				</div>
			</header>
		</>
	);
}

export default Header;
