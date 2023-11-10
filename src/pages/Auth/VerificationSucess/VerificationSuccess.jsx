import { GoVerified } from "react-icons/go";
import Card from "../../../components/Card";
import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const VerificationSuccess = () => {
  const navigate = useNavigate();
  return (
  
    <Card>
      <VStack align={"center"} gap={"5"}>
        <Icon as={GoVerified} boxSize={"16"} color={"green.500"} />
        <Text>Verification Successfull</Text>
        <Button
          bg="#263A45"
          color={"white"}
          w="full"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Welcome to Evendor
        </Button>
      </VStack>
    </Card>
  );
};

export default VerificationSuccess;
