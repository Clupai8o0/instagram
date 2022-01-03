import { signIn, signOut, useSession } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession();

	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				// src="https://pbs.twimg.com/profile_images/1136981065241776128/3PAqGW00_400x400.jpg"
        src={session?.user.image}
				alt="profile picture"
				className="w-16 h-16 rounded-full border p-[2px]"
			/>

			<div className="flex-1 mx-4">
				<h2 className="font-bold">{session?.user?.username}</h2>
				<h3 className="text-sm text-gray-400">Welcome to instagram</h3>
			</div>

			<button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign out</button>
		</div>
	);
};

export default MiniProfile;
