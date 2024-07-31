import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Blog Layout
      <Link href={"/"}>Click to got to Home page</Link>
      <br></br>
      {children}
    </>
  );
}
