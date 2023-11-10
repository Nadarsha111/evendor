import { Stack } from "@chakra-ui/react";
import TopNav from "../../components/TopNav/TopNav";
import { hamperpage } from "../../query/queries";
import ProductPageLayout from "../../components/ProductList/ProductPageLayout";
import { useQuery } from "@tanstack/react-query";
import useUpdatecart from "../../hooks/useUpdatecart";
import { hampers } from "../../constants/data";
const Hamper = () => {
  const { data, isLoading } = useQuery(["hamper"], hamperpage);
  //useUpdatecart();

  return (
    <TopNav>
      <Stack justify="center" mt="10">
        <ProductPageLayout data={hampers} isLoading={false} />
      </Stack>
    </TopNav>
  );
};

export default Hamper;
