import { Box, Flex, Text } from "@chakra-ui/react";

export const FrontenderTitle = () => {
  return (
    <Flex
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      title="у меня беда с выбором цветов"
    >
      <Text
        fontSize={"40px"}
        fontWeight={"700"}
        lineHeight={"46px"}
        color={"#8f00ff"}
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
