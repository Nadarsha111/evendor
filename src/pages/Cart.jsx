import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "../components/cart/CartItem";
import { CartOrderSummary } from "../components/cart/CartOrderSummary";
import TopNav from "../components/TopNav/TopNav";
import { useSelector } from "react-redux";
import useUpdatecart from "../hooks/useUpdatecart";

const Cart = () => {
const{products}=useUpdatecart();
  return (
    <TopNav>
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
        mx={["", "", "", "", "150px", "auto"]}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (
              {products.length === 1
                ? `${products.length} item`
                : `${products.length}  items`}
              )
            </Heading>

            <Stack spacing="6">
              {products.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </TopNav>
  );
};

export default Cart;
