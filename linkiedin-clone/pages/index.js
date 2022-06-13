import Head from "next/head";
import HeaderDashboard from "../components/HeaderDashboard";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>LinkiedIn App</title>
        <meta name="locale" content="en_US" />
        <link
          rel="icon"
          href="https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
        />
      </Head>
      {/* <div>
        <button onClick={signOut}>Sign out</button>
      </div> */}

      <HeaderDashboard />
    </div>
  );
}
