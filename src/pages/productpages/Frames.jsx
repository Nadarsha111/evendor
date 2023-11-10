import { Stack } from "@chakra-ui/react";
import TopNav from "../../components/TopNav/TopNav";
import ProductPageLayout from "../../components/ProductList/ProductPageLayout";
import { framespage } from "../../query/queries";
import { useQuery } from "@tanstack/react-query";
import { frames } from "../../constants/data";
const Frames = () => {
  // const { data, isLoading } = useQuery(["frames"], framespage);

  return (
    <TopNav>
      <Stack justify="center" mt="10">
        <ProductPageLayout data={frames} isLoading={false} />
      </Stack>
    </TopNav>
  );
};

export default Frames;
