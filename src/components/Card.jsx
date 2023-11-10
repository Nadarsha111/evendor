import { Card as ChakraCard, useMediaQuery } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
  const [showCard] = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <ChakraCard
        bg={{
          base: showCard ? "white" : "transparent",
          md: "white",
        }}
        p={{
          base: showCard ? "4" : "0",
          md: "6",
        }}
        borderRadius={{
          base: showCard ? "1rem" : "none",
          md: "1rem",
        }}
        w="456px"
        boxShadow={{
          base: showCard ? "none" : "md",
          md: "lg",
        }}
        {...props}
      >
        {children}
      </ChakraCard>
    </div>
  );
};

export default Card;
