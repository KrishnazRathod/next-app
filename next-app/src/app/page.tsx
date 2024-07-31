import Link from "next/link";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <>
      <ServerComponent />
      <Link href={"/blog/9"}>Click to got to blog page</Link>
      <ClientComponent />
    </>
  );
}
