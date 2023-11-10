import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import useUpdatecart from "../../hooks/useUpdatecart";

const ProductPageLayout = ({ data, isLoading }) => {
  useUpdatecart();
  const added = useSelector((state) => state.cart.products);
  if (!data) {
    return null;
  }

  //  console.log(data);

  return (
    // <Box mx="auto" }>
      <SimpleGrid
        columns={{
          base: "2",
          md: "2",
          lg: "4",
          xl: "4",
        }}
        gap={{
          base: "1",
          md: "12",
          lg: "5",
          xl: "5",
        }}
        px={["1", "4"]}
        alignSelf="center"
      >
        {data.map((value) => (
          <Skeleton key={value.id} isLoaded={!isLoading}>
            <ProductCard
              value={value?.attributes?.img?.data?.attributes?.url}
              id={value.id}
              title={value?.attributes?.title}
              price={value?.attributes?.price}
              oldprice={value?.attributes?.oldprice}
              desc={value?.attributes?.desc}
              added={!!added.find((item) => item.id === value.id)}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
    // </Box>
  );
};

export default ProductPageLayout;
