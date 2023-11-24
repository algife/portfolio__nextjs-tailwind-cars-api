import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our catalog | CarHub",
};

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: PageProps) {
  const session = await getServerSession();

    <main className="flex search-results-container">{children}</main>
}

// export async function getServerSideProps(
//   _context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
// ) {
//   const session = await getServerSession();
//   return {
//     props: { session },
//   };
// }
