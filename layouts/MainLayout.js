import Link from "next/link";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Navigation</h1>
      <nav>
        <Link href={'/token/1'}>USD</Link>
        <Link href={'/token/2'}>GBP</Link>
        <Link href={'/token/3'}>EURO</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
