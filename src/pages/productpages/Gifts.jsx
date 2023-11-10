import { Stack } from "@chakra-ui/react";
import TopNav from "../../components/TopNav/TopNav";
import ProductPageLayout from "../../components/ProductList/ProductPageLayout";
import { useQuery } from "@tanstack/react-query";
import { giftpage } from "../../query/queries";
import useUpdatecart from "../../hooks/useUpdatecart";
import { gift } from "../../constants/data";

const Gifts = () => {
  //useUpdatecart();
  // const { data, isLoading } = useQuery(["gifts"], giftpage);


  return (
    <TopNav>
      <Stack justify="center" mt="10">
        <ProductPageLayout data={gift} isLoading={false } />
      </Stack>
    </TopNav>
  );
};

export default Gifts;
