import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our catalog | CarHub",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <div className="catalog-page">{children}</div>;
}
