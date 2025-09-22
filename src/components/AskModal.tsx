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

const roles = ["Просто", "HR", "Recruiter", "Frontend dev", "Backend dev"];

const AskModal = ({ isOpen, onClose, handleSelected }: any) => {
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
            {roles.map((role: string) => (
              <Button size="lg" key={role} onClick={() => handleSelected(role)}>
                {role}
              </Button>
            ))}
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
