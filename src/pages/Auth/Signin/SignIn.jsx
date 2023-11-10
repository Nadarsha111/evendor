import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  useToast,
} from "@chakra-ui/react";
import TopNav from "../../../components/TopNav/TopNav";
import { Field, Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "../../../query/authqueries";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../redux/slice/authReducer";
import { getCart } from "../../../query/cartqueries";
import { addToCart, cartid } from "../../../redux/slice/cartControl";

const validationSchema = object({
  email: string().email("Invalid email address").required("Email is required"),
  password: string().required("Password is required"),
});
const SignIn = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(["signin"], signinUser, {
    onSuccess: async (data) => {
      dispatch(setToken(data));
      const { cart } = await getCart(data.jwt);
      console.log(cart);
      dispatch(cartid(cart.id));
      dispatch(addToCart(cart.mycart));
      navigate("/");
    },
    onError: (error) => {
      toast({
        description: `Invalid Email or Password.`,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    },
  });

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
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <HStack>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool
              </Text>
              <Text color={"blue.400"}>features</Text>
              <Text>✌️</Text>
            </HStack>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Formik
              initialValues={{
                email: "nadarsha565@gmail.com",
                password: "password",
              }}
              onSubmit={(values) => {
                mutate({
                  email: `${values.email}`,
                  password: `${values.password}`,
                });
              }}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <Stack spacing={4}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl
                          id="email"
                          isInvalid={!!(meta.error && meta.touched)}
                          isRequired
                        >
                          <FormLabel>Email address</FormLabel>
                          <Input {...field} type="email" />
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
                          <Input {...field} type="password" />
                        </FormControl>
                      )}
                    </Field>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Remember me</Checkbox>
                        <Link to="/forgot-password">
                          <Text color={"blue.400"}>Forgot password?</Text>
                        </Link>
                      </Stack>
                      <Button
                        loadingText="Signing in"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                        isLoading={isLoading}
                      >
                        Sign in
                      </Button>
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

export default SignIn;
