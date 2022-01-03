import Head from "next/head";
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram</title>
				<link rel="icon" href="/instagram.png" />
			</Head>

      <Header />
      <Feed />

      {/* Modal */}
		</div>
	);
}
