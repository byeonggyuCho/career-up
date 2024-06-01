import { InjectFunctionType, useShellEvent } from "@career-up/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MicroApp, microAppRoute } from "../constants/prefix";
import { importRemote } from "@module-federation/utilities/.";

const scope = MicroApp.network;
const appName = `app-${scope}`;

/**
 * @todo 컴포넌트 빌더로 만들어도 되겠다.
 * @returns
 */
export default function AppNetwork() {
  useShellEvent(appName, microAppRoute[scope]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) return;
    if (!wrapperRef.current) return;

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFunctionType }>({
      scope: scope,
      url: process.env.REACT_APP_MICRO_APP_NETWORK_URL || "",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          rootElement: wrapperRef.current!,
          routerType: "memory",
          basePath: location.pathname.replace(microAppRoute[scope], ""),
        });
      })
      .catch((error) => {
        console.log(error);
        // 마이크로앱을 가져오는 것을 실패한 경우에 대한 처리
        throw error;
      });
  }, [location]);

  useEffect(() => {
    return () => unmountRef.current();
  }, []);

  return <div ref={wrapperRef} id={appName} />;
}
