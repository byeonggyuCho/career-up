import React from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { id } = useParams();
  return <div>id: {id}</div>;
};

export default DetailPage;
