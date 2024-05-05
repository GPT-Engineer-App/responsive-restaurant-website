import React from "react";
import { Box, Container, Flex, Heading, Link, Stack, Text, Image, Button, VStack, HStack, IconButton, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const [display, changeDisplay] = React.useState("none");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={8} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
        <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<FaBars />} display={useBreakpointValue({ base: "flex", md: "none" })} onClick={() => changeDisplay("flex")} />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Heading as="h1" size="lg">
              Restaurant Name
            </Heading>
          </Box>
          <HStack as="nav" spacing={4} display={useBreakpointValue({ base: "none", md: "flex" })}>
            <Link href="#">Home</Link>
            <Link href="https://example.com/about">About</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </HStack>
        <Box display={useBreakpointValue({ base: "none", md: "flex" })}>
          <Button bg="teal.400" color="white">
            Book a Table
          </Button>
        </Box>
      </Flex>

      <Flex w="100vw" bgColor="gray.200" zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" display={display}>
        <Flex justify="flex-end">
          <IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" icon={<FaTimes />} onClick={() => changeDisplay("none")} />
        </Flex>
        <VStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="https://example.com/about">About</Link>
          <Link href="#">Menu</Link>
          <Link href="#">Contact</Link>
        </VStack>
      </Flex>

      <VStack>
        <Text fontSize="2xl" p={5}>
          Welcome to Our Restaurant
        </Text>
        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzE0OTI3MTcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Restaurant Interior" boxSize="300px" />
        <Text p={5}>Enjoy our finest dishes in a great atmosphere.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
