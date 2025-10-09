import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ALISHER M",
  description: "Alisher Meldebek",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
