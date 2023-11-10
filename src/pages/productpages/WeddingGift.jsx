import { Stack } from "@chakra-ui/react";
import TopNav from "../../components/TopNav/TopNav";
import { useQuery } from "@tanstack/react-query";
import ProductPageLayout from "../../components/ProductList/ProductPageLayout";
import { wrappingsheetPage } from "../../query/queries";
import useUpdatecart from "../../hooks/useUpdatecart";
import {wrappingsheets} from '../../constants/data'
const WeddingGift = () => {
  //useUpdatecart();

  // const { data, isLoading } = useQuery(["wrappingsheet"], wrappingsheetPage);

  return (
    <TopNav>
      <Stack justify="center" mt="10">
        <ProductPageLayout data={wrappingsheets} isLoading={false} />
      </Stack>
    </TopNav>
  );
};

export default WeddingGift;
