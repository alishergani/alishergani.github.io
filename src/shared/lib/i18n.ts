import ru from "@/locales/ru.json";
import en from "@/locales/en.json";

const dictionaries: Record<string, any> = {
  en,
  ru,
};

export function getDictionary(locale: string) {
  return dictionaries[locale] || dictionaries.ru;
}
