import {
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slice/cartControl";
import { QuantitySelect } from "./QuantitySelect";

export const CartItem = (props) => {
  const {
    isGiftWrapping,
    title,
    desc,
    quantity,
    img,
    currency,
    price,
    id,
    oldprice,
  } = props;

  const dispatch = useDispatch();
  const onClickDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        description={desc}
        image={img}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect value={quantity} id={id} />
        <PriceTag
          price={(oldprice || price + 20) * quantity}
          currency={currency}
          salePrice={price * quantity}
        />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline" onClick={onClickDelete}>
          Delete
        </Link>
        <QuantitySelect value={quantity} id={id} />
        <PriceTag
          price={(oldprice || oldprice + 20) * quantity}
          salePrice={price * quantity}
          currency={currency}
        />
      </Flex>
    </Flex>
  );
};
