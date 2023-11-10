"use client";
import TopNav from "../../../components/TopNav/TopNav";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import { Form, Formik, Field } from "formik";
import { object, string, number, date } from "yup";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../../query/authqueries";

const validationSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  password: string()
    .min(8, "Password must atleast be 8 charecters")
    .required("Password is required"),
});

export const Signup = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShowPassword(false);
  }, []);

  const passctrl = () => {
    setShowPassword(!showPassword);
  };
  const { mutate, isLoading } = useMutation(
    ["signup"],
    signupUser,

    {
      onSuccess: (data) => {
        if (data.user.email) {
          navigate("/email-verify", { state: { email: data.user.email } });
        }
      },
      onError: (error) => {
        toast({
          description: `${error.response.data.error.message}.`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );

  return (
    <TopNav>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                mutate({
                  username: `${values.firstName}`,
                  email: `${values.email}`,
                  password: `${values.password}`,
                  lastname: `${values.lastName}`,
                });
              }}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <Field name="firstName">
                          {({ field, meta }) => (
                            <FormControl
                              id="firstName"
                              isInvalid={!!(meta.error && meta.touched)}
                              isRequired
                            >
                              <FormLabel>First Name</FormLabel>
                              <Input {...field} name="firstName" type="text" />

                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                      <Box>
                        <Field name="lastName">
                          {({ field, meta }) => (
                            <FormControl
                              id="lastName"
                              isInvalid={!!(meta.error && meta.touched)}
                              isRequired
                            >
                              <FormLabel>Last Name</FormLabel>
                              <Input {...field} name="lastName" type="text" />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                    </HStack>

                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl
                          isInvalid={!!(meta.error && meta.touched)}
                          id="email"
                          isRequired
                        >
                          <FormLabel>Email address</FormLabel>
                          <Input {...field} name="email" type="email" />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl
                          id="password"
                          isRequired
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel>Password</FormLabel>
                          <InputGroup>
                            <Input
                              name="password"
                              {...field}
                              type={showPassword ? "text" : "password"}
                            />
                            <InputRightElement h={"full"}>
                              <Button
                                variant={"ghost"}
                                size={""}
                                onClick={passctrl}
                              >
                                {showPassword ? (
                                  <GrFormView />
                                ) : (
                                  <GrFormViewHide />
                                )}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                        isLoading={isLoading}
                      >
                        Sign up
                      </Button>
                    </Stack>
                    <Stack
                      pt={6}
                      display={"flex"}
                      flexDir={"row"}
                      justify={"center"}
                    >
                      <Text>Already a user? </Text>
                      <Text color={"blue.400"}>
                        <Link to="/signin">Login</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Flex>
    </TopNav>
  );
};
