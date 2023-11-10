import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../query/authqueries";
import { object, string, ref } from "yup";

const validationSchema = object({
  password: string()
    .min(8, "Password must atleast be 8 charecters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const PassReset = () => {
  const toast = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  const { mutate, isLoading } = useMutation(["reset"], resetPassword, {
    onSuccess: (data) => {
      toast({
        description: `Password reset successfully.`,
        status: "success",
        variant: "left-accent",
        position: "top-right",
        duration: 8000,
      });
      
    },

    onError: (error) => {
      toast({
        description: `${error.response.data.error.message}.`,
        status: "error",
        duration: 9000,
        position: "top-right",
      });
    },
  });

  return (
    <Card>
      {" "}
      <Stack spacing={"3"}>
        <Heading as={"b"} textAlign={"left"} fontSize={"md"}>
          Reset Password
        </Heading>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // console.log(values);
            mutate({
              password: values.password,
              code: code,
              passwordConfirmation: values.confirmPassword,
            });
          }}
        >
          {() => (
            <Form>
              <Stack spacing={"3"}>
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl
                      id="password"
                      isRequired
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <FormLabel fontSize={"sm"}>New Password</FormLabel>
                      <Input {...field} name="password" type={"password"} />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ field, meta }) => (
                    <FormControl
                      id="confirmPassword"
                      isRequired
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <FormLabel fontSize={"sm"}>Confirm Password</FormLabel>
                      <Input
                        {...field}
                        name="confirmPassword"
                        type={"password"}
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
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
                  Reset Password
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Card>
  );
};

export default PassReset;
