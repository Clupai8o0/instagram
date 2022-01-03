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
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
};

export default Posts;
