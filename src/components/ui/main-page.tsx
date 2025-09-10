"use client";
import { Box, Text } from "@chakra-ui/react";
import { FrontenderTitle } from "./frontender-title";
import Link from "next/link";

export default function MainPage() {
  return (
    <Box>
      <Text textAlign={"center"} fontWeight={"600"} fontSize={"34px"}>
        ALISHER MELDEBEK
      </Text>
      <FrontenderTitle />

      <Link href={"/experience"}>Experience</Link>
    </Box>
  );
}
