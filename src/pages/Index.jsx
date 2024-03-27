import React, { useState } from "react";
import { Box, Center, Heading, VStack, Button } from "@chakra-ui/react";
import FileUpload from "../components/FileUpload";

const Index = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [showModel, setShowModel] = useState(false);

  return (
    <Box>
      <Center bg="gray.100" py={8}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            3D Laptop Viewer
          </Heading>
          <FileUpload onFileUpload={setFileUrl} />
          <Button onClick={() => setShowModel(true)} isDisabled={!fileUrl}>
            View Model
          </Button>
          {showModel && fileUrl && (
            <Box borderWidth={1} borderRadius="lg" overflow="hidden" w="80%" h="500px">
              <model-viewer src={fileUrl} alt="3D Model" auto-rotate camera-controls ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" style={{ width: "100%", height: "100%" }}></model-viewer>
            </Box>
          )}
        </VStack>
      </Center>
    </Box>
  );
};

export default Index;
