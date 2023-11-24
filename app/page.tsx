"use client";
import Hero from "@/components/Hero";
import MessagePage from "@/components/MessagePage";
import { checkEnvVars } from "@/utils/server-actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const [enableSite, setEnableSite] = useState(false);

  // Demoing how to use Server Actions inside a Client Component
  useEffect(() => {
    checkEnvVars().then((result) => {
      setEnableSite(result);
      setIsFetching(false);
    });
  }, []);

  const loadingDiv = (
    <div className="flex padding-x flex-center justify-center text-center align-center">
      <h2>Loading...</h2>
    </div>
  );

  return isFetching ? (
    loadingDiv
  ) : !enableSite ? (
    <MessagePage
      title={"Set-up Env Vars."}
      primaryText={"Set-up the environmental variables."}
      secondaryText={"for this environment"}
      hasBackButton={false}
    />
  ) : (
    <div className="home-page">
      <Hero />
    </div>
  );
}
