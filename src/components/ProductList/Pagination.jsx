import { HStack } from "@chakra-ui/react";
import React from "react";

const Pagination = () => {
  const total = 10;
  const pageSize = 25;
  const pageCount = Math.ceil(total / pageSize);
  // page: 1;
  // pageCount: 1;
  // pageSize: 25;
  // total: 19;
  return <HStack></HStack>;
};

export default Pagination;
