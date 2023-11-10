import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    mt="40px"
    pb={{
      base: "8",
      md: "6",
    }}
    maxW="container.lg"
   
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <img src="/logo.png" alt="logo" width="150px" height="200px" />
        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Stack>
      <Text
        fontSize={{
          base: "10px",
          md: "sm",
        }}
        color="fg.subtle"
      >
        &copy; {new Date().getFullYear()} Evendor, All rights reserved.
      </Text>
    </Stack>
  </Container>
);
