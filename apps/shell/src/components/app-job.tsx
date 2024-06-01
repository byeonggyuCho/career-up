import { useShellEvent } from "@career-up/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MicroApp, microAppRoute } from "../constants/prefix";
import inject from "job/injector";

const prefix = MicroApp.job;
const appName = `app-${prefix}`;

/**
 * @todo 컴포넌트 빌더로 만들어도 되겠다.
 * @returns
 */
export default function AppJob() {
  useShellEvent(appName, microAppRoute[prefix]);
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
      basePath: location.pathname.replace(microAppRoute[prefix], ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => () => unmountRef.current(), []);

  return <div ref={wrapperRef} id={appName} />;
}
