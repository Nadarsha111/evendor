import { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  HStack,
  Spacer,
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useMediaQuery,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { BiUser, BiMenu } from "react-icons/bi";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";
import { Link } from "react-router-dom";
import SideDrawer from "../Home/SideDrawer";
import { Footer } from "../Home/Footer";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/slice/cartControl";
import { clearToken } from "../../redux/slice/authReducer";

const TopNav = ({ children }) => {
  const userData = useSelector((state) => state.auth.user);
  // console.log(userData);
  const products = useSelector((state) => state.cart.products);

  const loggedIn = !!Object.keys(userData).length;
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(clearToken());
    dispatch(resetCart());
  };

  // Media query to check if the device is mobile
  const [isBaseDevice] = useMediaQuery("(max-width: 767px)");

  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disclosure hook for the dropdown menu
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Ref to the menu button for click/touch outside handling
  const menuRef = useRef();

  useEffect(() => {
    // Event listener to close the menu when touched/clicked outside
    const handleTouchOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("touchstart", handleTouchOutside);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [isOpen, onClose]);

  // Pages for navigation
  const pages = [
    { text: "Home", link: "/" },
    { text: "Product", link: "/products" },
    { text: `Cart`, link: "/cart" },
    { text: "Contact Us", link: "/contact" },
  ];

  // Generate navigation links
  const generateLinks = () => {
    return pages.map((page) => (
      <Link
        key={page.text}
        to={page.link}
        color="black"
        fontWeight="400"
        fontSize="16px"
        _hover={{ color: "#8B9CA3" }}
      >
        {page.text === `Cart` ? (
          <Flex align={"baseline"} gap={"1"}>
            <Text fontWeight="400">Cart </Text>
            <Text as="span" fontSize="sm" fontWeight="semibold">
              {products.length}
            </Text>
          </Flex>
        ) : (
          page.text
        )}
      </Link>
    ));
  };

  // Toggle mobile menu visibility
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <Box bg="white" minHeight="100vh" display="flex" flexDirection="column">
      <Flex
        w="100%"
        backgroundColor="white"
        px={{ md: "8", "2xl": "250px" }}
        mx="auto"
        alignItems="center"
        flexDirection={{ base: "row", md: "row" }} // Align items horizontally for large devices
        h={{ base: "", md: "60px", xl: "80px" }}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        <HStack
          spacing={4}
          alignItems="center"
          justifyContent={{ base: "start" }}
        >
          {/* Mobile Hamburger Menu */}
          <HStack display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="Toggle mobile menu"
              icon={<Icon as={BiMenu} />}
              fontSize="xl"
              variant="ghost"
              onClick={handleMobileMenuToggle}
            />
          </HStack>
          <Box flex="1">
            <Link to="/">
              <ResponsiveImage>
                <ResponsiveImageSize
                  default
                  minWidth={0}
                  path={"/moblogo.png"}
                />
                <ResponsiveImageSize minWidth={768} path={"/moblogo.png"} />
                <ResponsiveImageSize minWidth={1000} path={"/logo.png"} />
              </ResponsiveImage>
            </Link>
          </Box>
        </HStack>

        {/* Desktop Navigation */}
        <HStack
          spacing={4}
          display={{ base: isMobileMenuOpen ? "block" : "none", md: "flex" }}
          flex="1"
          justifyContent="center"
        >
          {isBaseDevice ? (
            <SideDrawer
              isOpen={isMobileMenuOpen}
              onClose={handleMobileMenuToggle}
            />
          ) : (
            generateLinks()
          )}
        </HStack>

        <Spacer display={{ base: "flex", md: "none" }} />

        {/* Sign-in Button and Mobile Menu */}
        <HStack spacing={1}>
          {loggedIn ? (
            <Text fontSize={"xs"} as={"b"}>
              {userData.data.username}
            </Text>
          ) : (
            <Flex align="center" gap={2}>
              <BiUser />
              <Link to="/signin">
                <Text>Sign In</Text>
              </Link>
            </Flex>
          )}
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              variant="ghost"
              color="blackAlpha.900"
              _hover={{ color: "#8B9CA3" }}
              onMouseEnter={onOpen}
              px="1"
              ref={menuRef}
            >
              <HStack gap={0}>
                {isOpen ? (
                  <RiArrowDropUpLine size={25} />
                ) : (
                  <RiArrowDropDownLine size={25} />
                )}
              </HStack>
            </MenuButton>

            <MenuList onMouseLeave={onClose} onMouseEnter={onOpen}>
              {!loggedIn ? (
                <MenuItem as={Link} to="/signup">
                  New Customer
                </MenuItem>
              ) : null}

              {loggedIn ? (
                <>
                  <MenuItem>Orders</MenuItem>
                  <MenuItem>Support</MenuItem>
                  <MenuItem onClick={logOut}>Log Out</MenuItem>
                </>
              ) : null}
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      {children}
      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default TopNav;
