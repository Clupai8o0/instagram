import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
	const [suggestions, setSuggestions] = useState([]);
	const { data: session } = useSession();

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=20")
			.then((res) => res.json())
			.then((data) => setSuggestions(data.results))
			.catch(console.error);
	}, []);

	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && (
				<Story img={session.user.image} username={session.user.username}/>
			)}

			{suggestions.map((profile) => {
				return (
					<Story
						key={profile.login.uuid}
						img={profile.picture.large}
						username={profile.name.first + " " + profile.name.last}
					/>
				);
			})}
		</div>
	);
};

export default Stories;
