/* eslint-disable react/prop-types */
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, onClose }) => {
  const links = [
    { text: "Home", link: "/" },
    { text: "Frames", link: "/photo-frames" },
    { text: "Hamper", link: "/hamper" },
    { text: "Wrapping Sheet", link: "/wrappingsheet" },
    { text: "Gift Box", link: "/gift-box" },
    { text: `Cart`, link: "/cart" },
    { text: "Contact Us", link: "/contact" },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="sm">
        <DrawerOverlay />
        <DrawerContent
          style={{
            width: "40vw", // Adjust the width here (50vw for 50% of the viewport width)
            minWidth: "250px", // Optionally, set a minimum width
          }}
        >
          <DrawerCloseButton />
          <DrawerBody>
            <Stack color="white" spacing="4" p="10">
              {links.map((link, index) => (
                <Box key={index}>
                  <Link to={link.link}>
                    <Text color="black" align="center">
                      {link.text}
                    </Text>
                  </Link>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
