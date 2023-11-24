import MessagePage from "@/components/MessagePage";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Our catalog | CarHub",
};

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Props) {
  const session = await getServerSession();

  return !session ? (
    <MessagePage
      title="Sign in to access our catalog."
      primaryText="Only logged users can access to our catalog."
      secondaryText="Please, use the sign in button at the top right corner."
      hasBackButton={false}
    />
  ) : (
    <main className="catalog-page">{children}</main>
  );
}

// export async function getServerSideProps(
//   _context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
// ) {
//   const session = await getServerSession();
//   return {
//     props: { session },
//   };
// }
