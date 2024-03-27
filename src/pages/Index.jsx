import React from "react";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Center bg="gray.100" py={8}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            3D Laptop Viewer
          </Heading>
          <Box borderWidth={1} borderRadius="lg" overflow="hidden" w="80%" h="500px">
            <model-viewer src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjAzZCUyMG1vZGVsfGVufDB8fHx8MTcxMTUwMjk4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Laptop 3D Model" auto-rotate camera-controls ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" style={{ width: "100%", height: "100%" }}></model-viewer>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default Index;
