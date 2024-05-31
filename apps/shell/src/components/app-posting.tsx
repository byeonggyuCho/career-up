import { useShellEvent } from "@career-up/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appPostingBaseName } from "../constants/prefix";
import inject from "posting/injector";

export default function AppPosting() {
  useShellEvent("app-posting", appPostingBaseName);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;
    if (!wrapperRef.current) return;

    unmountRef.current = inject({
      rootElement: wrapperRef.current,
      routerType: "memory",
      basePath: location.pathname.replace(appPostingBaseName, ""),
    });
  }, []);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} />;
}
