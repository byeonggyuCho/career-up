import type { PropsWithChildren } from "react";
import React from "react";
import MyNetworkContainer from "../containers/my-network-container";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="network--flex network--flex-grow network--gap-6 network--mx-auto network--my-0 network--p-4 network--mx-w-[1129px]">
      <div className="network--flex network--flex-col network--w-[225px] network--gap-2.5">
        <MyNetworkContainer />
      </div>
      <div className="network--flex network--flex-col network--w-[879px] network--gap-2.5">
        {props.children}
      </div>
    </div>
  );
}
