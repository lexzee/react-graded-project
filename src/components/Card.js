import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const cardStyle = {
    borderRadius: ".5rem",
    bg: "white",
    color: 'black',
  }

  const cardBody = {
    p: "1rem",
    textAlign: "left",
    alignItems: "left", 
  }

  return (
    <Box sx={cardStyle} >
      <Image src={imageSrc} alt={title} sx={{borderRadius: 'inherit'}} />
      <VStack sx={cardBody} >
        <Heading as="h3" fontSize="md">
          {title}
        </Heading>
        <Text fontSize='11px' color="blue">{description}</Text>
        <HStack alignItems="center">
          <Text fontSize="sm" fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
