import AuthModal from "@/components/AuthModal.tsx/AuthModal";
import useAuth from "@/hooks/useAuth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { userType, login } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (userType === "recruiter") router.replace("/recruiter/jobs");
    else if (userType === "user") router.replace("/user/jobs");
    else setModalOpen(true);
  }, [userType]);

  const handleSelect = (type: "recruiter" | "user") => {
    login(type);
    if (type === "recruiter") router.push("/recruiter/jobs");
    else router.push("/user/jobs");
  };

  return (
    <>
      <Head>
        <title>Job Platform Demo</title>
        <meta
          name="description"
          content="Job Platform Demo for recruitors and users to find jobs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthModal open={modalOpen} onSelect={handleSelect} />;
    </>
  );
}
