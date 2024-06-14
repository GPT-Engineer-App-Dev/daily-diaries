import { Box, Container, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.700" color="white" py={4}>
    <Container maxW="container.lg">
      <HStack justifyContent="space-between">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </HStack>
    </Container>
  </Box>
);

const BlogPost = ({ title, date, excerpt }) => (
  <Box as="article" mb={8}>
    <Heading as="h2" size="md" mb={2}>{title}</Heading>
    <Text fontSize="sm" color="gray.500" mb={2}>{date}</Text>
    <Text>{excerpt}</Text>
    <Divider mt={4} />
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
    <Container maxW="container.lg">
      <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  const blogPosts = [
    {
      title: "My First Blog Post",
      date: "January 1, 2023",
      excerpt: "This is the excerpt for my first blog post. It's a brief summary of the content."
    },
    {
      title: "Another Day, Another Post",
      date: "February 15, 2023",
      excerpt: "Here's a short excerpt for another blog post. Stay tuned for more updates!"
    }
  ];

  return (
    <Box>
      <Header />
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} title={post.title} date={post.date} excerpt={post.excerpt} />
          ))}
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;