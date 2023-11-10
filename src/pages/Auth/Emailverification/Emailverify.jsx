import { Box, Button, Icon, Text, VStack, useToast } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { MdEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resendEmail } from "../../../query/authqueries";
import TopNav from "../../../components/TopNav/TopNav";

const Emailverify = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const email = location.state?.email ?? "";
  const { mutate, isLoading } = useMutation(
    ["resend"],
    () => resendEmail({ email }),
    {
      onSuccess: (data) => {
        toast({
          description: `Email sent successfully.`,
          status: "success",
          variant: "left-accent",
          position: "top-right",
          duration: 8000,
        });

        navigate("/email-sent-successfully", { state: { email: email } });
      },
      onError: (error) => {
        toast({
          description: `${error.response.data.error.message}.`,
          status: "error",
          duration: 8000,
          isClosable: true,
        });
      },
    }
  );

  if (!email) {
    return <div>Something went wrong</div>;
  }
  const sendMail = () => {
    mutate(email);
  };
  return (
    <TopNav>
      <Card>
        <VStack>
          <Icon as={MdEmail} boxSize={"16"} color="#263A45" />
          <Text>Verify your email</Text>
          <Text textAlign={"center"}>
            We have sent you an email verification to {""}
            <Box as="b" color="p.black">
              {email}
            </Box>
            . If you didn’t receive it, click the button below.
          </Text>
          <Button
            w="full"
            bg="#263A45"
            color={"white"}
            onClick={sendMail}
            isLoading={isLoading}
          >
            <Text>Resend Email</Text>
          </Button>
        </VStack>
      </Card>
    </TopNav>
  );
};

export default Emailverify;
