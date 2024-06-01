import "./recommend-job.styles";

import React from "react";
import { RecommendJobWrapper } from "./recommend-job.styles";
import { useShellNavigate } from "@career-up/shell-router";

interface RecommendJobProps {
  id: number;
  position: string;
  company: string;
}

const RecommendJob: React.FC<RecommendJobProps> = ({
  id,
  position,
  company,
}) => {
  const shellNavigate = useShellNavigate();
  const onClick = () => {
    // /posting에서 /posting/*으로 가는 것이 아니라 /posting에서 /job/${id}로 이동하기 때문에 shellNavigate사용
    shellNavigate(`/job/${id}`);
  };
  return (
    <RecommendJobWrapper onClick={onClick}>
      <div className="job--recommend-job-position">{position}</div>
      <div className="job--recommend-job-company">{company}</div>
    </RecommendJobWrapper>
  );
};

export default RecommendJob;
