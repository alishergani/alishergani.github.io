"use client";
import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react";
import AskModal from "../components/AskModal";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("role_modal_shown");
    if (!lastShown) {
      setShowModal(() => true);
      return;
    }

    const lastDate = new Date(lastShown);
    const now = new Date();

    // считаем разницу в днях
    const diffDays =
      (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays >= 2) {
      setShowModal(() => true);
    }
  }, []);

  const handleSelected = async (type: string) => {
    localStorage.setItem("role_modal_shown", new Date().toISOString());
    setShowModal(() => false);
    try {
      await addDoc(collection(db, "users"), {
        type,
        createdAt: new Date(),
      });
      alert("Сохранено ✅");
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} flexDir={"column"}>
        <Flex flexWrap={"wrap"}>
          <Box w={"15%"}></Box>
          <Box
            w={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" }}
            p={{ base: 4, md: 8, lg: 12 }}
          >
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "34px", md: "28px", xl: "34px" }}
              lineHeight={"34px"}
              mb={"25px"}
              color="brand.900"
            >
              Привет 👋 Я Алишер —{" "}
              <Text
                as={"span"}
                textTransform={"uppercase"}
                color={"#fff"}
                bg={"teal"}
              >
                Frontend Developer
              </Text>
            </Text>
            <Flex mb={"22px"} gap={"12px"} flexWrap={"wrap"}>
              <Button
                variant="brand"
                as={"a"}
                href="https://www.linkedin.com/in/alisher-meldebek-293099216/"
              >
                LinkedIn
              </Button>
              <Button
                variant="brand"
                as={"a"}
                href="https://t.me/alishermeldebek"
              >
                Telegram
              </Button>
              <Button
                variant="brand"
                as={"a"}
                href="https://wa.me/+77055544129"
              >
                WhatsApp
              </Button>

              <Button
                variant="brand"
                as={"a"}
                href="/resume.pdf"
                target="_blank"
              >
                CV
              </Button>
            </Flex>
            <Highlight
              query={[
                "финтехе",
                "e-commerce",
                "travel",
                "Tech Lead",
                "marketplace",
              ]}
              styles={{ px: "0.5", bg: "teal", color: "#fff" }}
            >
              Уже 6 лет я строю продукты в финтехе, e-commerce, travel,
              marketplace и даже в игровой индустрии. Сейчас я веду команду во
              фронтенде и двигаюсь к роли Tech Lead — хочу не только писать код,
              но и создавать условия, где команды растут и достигают большего.
            </Highlight>
          </Box>
        </Flex>

        <Flex
          w={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" }}
          p={{ base: 4, md: 8, lg: 12 }}
          flexWrap={"wrap"}
        >
          <Box w={"30%"}>
            <Text fontWeight={"bold"}>Обо мне:</Text>
          </Box>
          <Box w={"70%"}>
            <Highlight
              query={["финтехе", "e-commerce", "travel", "Tech Lead"]}
              styles={{ px: "0.5", bg: "teal", color: "#fff" }}
            >
              Мой путь начался с позиции junior, где я умудрился «прокачать» SPA
              под SEO и ускорить загрузку за счёт ISG + CDN и (code splitting
              e.t.c).
            </Highlight>
            <br />
            <Highlight
              query={["финтехе", "e-commerce", "travel", "Tech Lead"]}
              styles={{ px: "0.5", bg: "teal", color: "#fff" }}
            >
              Тогда я понял, что кайфую не просто от фич, а от системных
              улучшений. За эти годы я успел поработать в Alfa Bank, Kaspi
              Магазин, Jusan Магазин и других проектах. В каждом месте я брал на
              себя не только кодинг, но и ответственность за продуктовые
              решения.
            </Highlight>
            <br />
            <Highlight
              query={["финтехе", "e-commerce", "travel", "Tech Lead"]}
              styles={{ px: "0.5", bg: "teal", color: "#fff" }}
            >
              Сегодня я DevLead в travel-сервисе, и моя цель — стать Tech Lead,
              который помогает командам расти, а продуктам — летать. 🚀
            </Highlight>
          </Box>
        </Flex>

        <Flex
          w={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" }}
          p={{ base: 4, md: 8, lg: 12 }}
          flexWrap={"wrap"}
        >
          <Box w={"30%"}>
            <Text fontWeight={"bold"}>Моя философия:</Text>
          </Box>
          <Box w={"70%"}>
            <Text bg={"teal"} color={"#fff"}>
              Я верю, что сильные продукты рождаются там, где технологии и люди
              работают в синергии. Моя цель — создавать такую среду.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <AskModal
        isOpen={showModal}
        onClose={() => setShowModal(() => false)}
        handleSelected={handleSelected}
      />
    </>
  );
}
