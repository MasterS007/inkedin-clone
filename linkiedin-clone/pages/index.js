/* eslint-disable react-hooks/exhaustive-deps */
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/home");
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <div>
      <h1>jsnajfnjsanfj</h1>
    </div>
  ) : (
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
          <Feed />
        </div>
        {/* widget */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //if the user is authenticated
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
