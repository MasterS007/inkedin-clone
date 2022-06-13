import Head from "next/head";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>feed | LinkiedIn</title>
        <meta name="locale" content="en_US" />
        <link
          rel="icon"
          href="https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
        />
      </Head>

      <HeaderDashboard />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          {/* sidebar */}
          <Sidebar />

          {/* feed */}
        </div>

        {/* widget */}
      </main>
    </div>
  );
}
