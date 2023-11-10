import { HStack, IconButton, Text } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartControl";

export const QuantitySelect = (props) => {
  const dispatch = useDispatch();
  const quantityUpdate = (quantity) => {
    if (quantity > 0) {
      dispatch(
        addToCart([
          {
            id: props.id,
            quantity: quantity,
          },
        ])
      );
    } else {
      dispatch(
        addToCart([
          {
            id: props.id,
            quantity: 1,
          },
        ])
      );
    }
  };

  return (
    <HStack>
      <IconButton
        bg="white"
        size="sm"
        variant={"outline"}
        aria-label="Minus Button"
        icon={<FiMinusCircle />}
        w="14"
        onClick={() => quantityUpdate(props.value - 1)}
      />
      <Text fontSize="16px" fontWeight="500">
        {props?.value}
      </Text>
      <IconButton
        size="sm"
        w="14"
        bg="white"
        variant={"outline"}
        aria-label="Plus Button"
        icon={<FiPlusCircle />}
        onClick={() => quantityUpdate(props.value + 1)}
      />
    </HStack>
  );
};
