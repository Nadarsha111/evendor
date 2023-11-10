import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../query/authqueries";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, validateYupSchema } from "formik";
import TopNav from "../../../components/TopNav/TopNav";
import { object, string } from "yup";

const validationSchema = object({
  email: string().email("Invalid email address").required("Email is required"),
});
const ForgotPass = () => {
  const toast = useToast();
  const { mutate, isLoading } = useMutation(["forgot"], forgotPassword, {
    onSuccess: (data) => {
      toast({
        description: `Email sent successfully.`,
        status: "success",
        variant: "left-accent",
        position: "top-right",
        duration: 8000,
      });
    },
    onError: (error) => {
      toast({
        description: `Some thing went wrong.`,
        status: "error",
        duration: 8000,
        isClosable: true,
      });
      // console.log(error.response.data.error.message);
    },
  });

  return (
    <TopNav>
      <Card>
        <Stack spacing="4" mb="4" textAlign={"left"}>
          <Link to="/">
            <Icon as={MdOutlineArrowBack} boxSize={"5"} color="#263A45" />
          </Link>
          <Heading as="h1" size={"md"}>
            Forgot Password
          </Heading>
          <Text textAlign={"left"}>
            Enter your email address for the account you want to reset the
            password.
          </Text>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => {
              // console.log(values);
              mutate({ email: values.email });
            }}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <Stack spacing={"2"}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl
                        id="email"
                        isRequired
                        isInvalid={!!(meta.error && meta.touched)}
                      >
                        <FormLabel textAlign={"left"} fontSize={"sm"}>
                          Email
                        </FormLabel>
                        <Input {...field} type="email" />
                        <FormErrorMessage> {meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    bg="#263A45"
                    color={"white"}
                    size="md"
                    type="submit"
                    isLoading={isLoading}
                  >
                    Send Email
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Card>
    </TopNav>
  );
};

export default ForgotPass;
