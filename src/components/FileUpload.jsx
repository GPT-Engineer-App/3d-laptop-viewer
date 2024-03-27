import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const FileUpload = ({ onFileUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    onFileUpload(fileUrl);
  };

  return (
    <FormControl>
      <FormLabel>Upload 3D Model</FormLabel>
      <Input type="file" onChange={handleFileUpload} />
    </FormControl>
  );
};

export default FileUpload;
