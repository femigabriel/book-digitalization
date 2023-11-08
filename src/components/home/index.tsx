import React from "react";
import { LandingPage } from "./LandingPage";
import { Feautures } from "./Feautures";
import { AboutPage } from "./AboutPage";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Feautures />
      <AboutPage />
      <Footer />
    </div>
  );
};
