import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../styles/layout.module.scss";

export default function MainLayout({ children }) {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <nav className={classes.nav}>
        <Link href={"/token/1"}>USD</Link>
        <Link href={"/token/2"}>GBP</Link>
        <Link href={"/token/3"}>EURO</Link>
      </nav>
      <main className={classes.main}>{children}</main>
    </>
  );
}
