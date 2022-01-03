import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "Chuu Chloe",
		userImg:
			"https://pbs.twimg.com/profile_images/1136981065241776128/3PAqGW00_400x400.jpg",
		img: "https://pbs.twimg.com/profile_images/1136981065241776128/3PAqGW00_400x400.jpg",
		caption: "Beautiful",
	},
];

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		// advantage of snapshot, if the value changes anytime in the database, it updates it over here
		const unsubscribe = onSnapshot(
			query(collection(db, "posts"), orderBy("timestamp", "desc")),
			(snapshot) => {
				// every time value in db changes it updates the state
				setPosts(snapshot.docs);
			}
		);

		// you will never attach more than one real time listener
		return unsubscribe;
	}, [db]);

	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					userImg={post.data().profileImg}
					img={post.data().image}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
};

export default Posts;
