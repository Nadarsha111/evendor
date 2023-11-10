import React from "react";
import TopNav from "../../../components/TopNav/TopNav";
import Card from "../../../components/Card";
import { Center, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import { useLocation } from "react-router-dom";

const EmailSend = () => {
  const location = useLocation();
  const email = location.state?.email ?? "";
  return (
    <TopNav>
      <Card>
        <VStack>
          <Icon as={MdVerified} boxSize={"16"} color="green.400" />
          <Heading fontSize={[""]}>Verification email sent</Heading>
          <Text fontSize={["sm"]} textAlign={"center"}>
            We have sent you an email at <b>{email} </b>{" "}
          </Text>
        </VStack>
      </Card>
    </TopNav>
  );
};

export default EmailSend;
