"use client";
import NProgress from "nprogress";
import { useEffect } from "react";
import NextNProgress from "nextjs-toploader";
import React from "react";

const PageLoader = () => {
  useEffect(() => {
    NProgress.done();
  }, []);

  return <NextNProgress color="#6366f1" showSpinner={false} />;
};

export default PageLoader;
