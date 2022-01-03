// _rafce (From ES7 extension)
import Image from "next/image";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

import { useSession } from 'next-auth/react';

const Header = () => {
	const session = useSession();

	console.log(session);

	return (
		<div className="shadow-md border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/* Left */}
				<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				<div className="relative w-10 lg:hidden">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* Middle (Search input field) */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-400" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />

					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />

					<img
						src="https://pbs.twimg.com/profile_images/1136981065241776128/3PAqGW00_400x400.jpg"
						alt="profile picture"
						className="h-10 w-10 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
