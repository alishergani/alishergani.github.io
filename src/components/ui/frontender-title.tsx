import { Box, Flex, Text } from "@chakra-ui/react";

const styles = {};

export const FrontenderTitle = () => {
  return (
    <Flex
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      title="у меня беда с выбором цветов"
    >
      <Text
        color={"#8f00ff"}
        fontSize="64px"
        fontWeight="700"
        lineHeight="47px"
        bg={`radial-gradient(ellipse farthest-corner at center center,#4131cf 0%,#36ff28 100%)`}
        bgClip="text"
      >
        FRONTEND
      </Text>
      <Box>
        <Text
          fontSize={"34px"}
          fontWeight={"600"}
          lineHeight={"30px"}
          color={"#00ff08"}
        >
          DEVELOPER
        </Text>
        <Text
          fontSize={"34px"}
          fontWeight={"400"}
          lineHeight={"30px"}
          mt={"-14px"}
          color={"#00fdff"}
        >
          ENGINEER
        </Text>
      </Box>
    </Flex>
  );
};

{
  /* <Text>FRONTEND DEVELOPER/ENGINEER</Text>; */
}
