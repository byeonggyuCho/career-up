import useAppEvent from "../hooks/use-app-event";
import { Outlet } from "react-router-dom";

interface AppRouterManagerProps {
  type: string;
}

export default function AppRoutingManager(props: AppRouterManagerProps) {
  const { type } = props;

  useAppEvent(type);

  return <Outlet />;
}
