import { InjectFunctionType, useShellEvent } from "@career-up/shell-router";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MicroApp, microAppRoute } from "../constants/prefix";
import { importRemote } from "@module-federation/utilities/.";

const scope = MicroApp.posting;
const appName = `app-${scope}`;
/**
 * 동적으로 가지오고 오면서 예외처리를 할 수 있는 구조로 변경
 * @returns
 */
export default function AppPosting() {
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
      scope: MicroApp.posting,
      url: process.env.REACT_APP_MICRO_APP_POSTING_URL || "",
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

  useEffect(() => () => unmountRef.current(), []);

  return <div ref={wrapperRef} id={appName} />;
}
