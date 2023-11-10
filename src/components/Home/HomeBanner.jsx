import { Box, Button, Container, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <Box
      bgImage="url('/banner.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={{
        base: "300px",
        md: "500px",
        lg: "500px",
        xl: "39rem",
      }}
      position="relative"
    >
      <Stack
        bg="#ffffffb3"
        position="absolute"
        borderRadius="20px"
        color="#263A45"
        transform={{
          base: "translate(3%, 10%)",
          md: "translate(15%, 20%)",
          lg: "translate(25%, 20%)",
          xl: "translate(35%, 55%)",
        }}
      >
        <Container
          maxW={{
            base: "300px",
            md: "500px",
            lg: "500px",
            xl: "550px",
          }}
          maxH="504px"
          p="7"
        >
          <Box
            fontSize={{
              base: "24px",
              md: "25px",
              lg: "32px",
              xl: "32px",
            }}
            fontWeight="300"
          >
            The Best Gift Shop
          </Box>
          <Box
            fontSize={{
              base: "25px",
              md: "42px",
              xl: "49px",
            }}
            fontWeight="600"
          >
            Creating Happiness For Your Loved Ones
          </Box>
          <Box fontSize={{
            base: "14px",
            md:"18px"}} fontWeight="400" maxW="434px">
            Browse through some of the largest collection of gifts to brighten
            your day
          </Box>
          <Box>
            <Link to="/products">
            <Button bgColor="#263A45" color="white" px="5" py="6">
              Choose A Gift
            </Button>
            </Link>
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default HomeBanner;
