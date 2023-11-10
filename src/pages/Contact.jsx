import TopNav from "../components/TopNav/TopNav";
import Card from "../components/Card";
import { VStack } from "@chakra-ui/react";
const Contact = () => {
  return <TopNav>
   <Card>

<VStack>
  <h1>Contact</h1>
  <p>Phone: 555-555-5555</p>
  <p>Email:
    <a href="mailto:" target="_blank" rel="noopener noreferrer">
      {" "}
              </a>
  </p>
</VStack>
   </Card>

  </TopNav>;
};

export default Contact;
