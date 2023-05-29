import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Header() {
	return (
		<header>
			<div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
				<div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50' />

				<Image
					src='https://links.papareact.com/c2cdd5'
					alt='trello'
					width={300}
					height={100}
					className='w-44 md:w-54 pb-10 md:pb-0 object-contain'
				/>
				<div className='flex items-center space-x-5 flex-1 justify-end w-full'>
					<form className='flex items-center space-x-5 rounded-sm p-2 shadow-md flex-1 md:flex-initial bg-white'>
						<MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
						<input type='text' className='flex-1 outline-none p-2' />
						<button>Search</button>
					</form>
				</div>
			</div>
			<div className='flex items-center justify-center px-5 md:py-5'>
				<p className='flex items-center text-sm justify-center rounded-xl w-fit bg-white italic  max-w-3xl shadow-xl pr-5 p-5 font-light'>
					<UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />
					GPT is summarising your tasks for the day
				</p>
			</div>
		</header>
	);
}

export default Header;
