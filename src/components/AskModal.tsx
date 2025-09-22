import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const AskModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg={`radial-gradient(circle, rgba(42, 123, 155, 0) 0%, #2A7B9B, rgba(237, 221, 83, 0) 100%)`}
      >
        <ModalHeader>
          <Text color={"#fff"}>Вы зашли как ....</Text>
        </ModalHeader>
        <ModalBody>
          <Flex w={"100%"} gap={"20px"} flexWrap={"wrap"} m={"40px 0"}>
            <Button size="lg">Просто</Button>
            <Button size="lg">HR</Button>
            <Button size="lg">Recruiter</Button>
            <Button size="lg">Frontend dev</Button>
            <Button size="lg">Backend dev</Button>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button w={"100%"} size="lg" onClick={() => onClose()}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AskModal;
