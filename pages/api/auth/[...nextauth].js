import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	//? simple theme customization
	// theme: {
	//   logo: 'https://links.papareact.com/sq0',
	//   brandColor: '#212121',
	//   colorScheme: 'auto';
	// }

	pages: {
		signIn: "/auth/signin",
	},
});
