import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

export default function TokenPage(tokens) {
  const router = useRouter();
  const id = router.query.id;
  //   const [info, setInfo] = useState({});
  const obj = tokens.tokens;
  const keys = Object.keys(obj);
  const key = keys[id - 1];
  const infotoken = obj[key];
  if (infotoken) {
    return (
      <>
        <MainLayout>
          <h1>More Info</h1>
          <ul>
            {Object.keys(infotoken).map((key, index) => {
              return (
                <li key={index}>
                  {key} : {infotoken[key]}
                </li>
              );
            })}
          </ul>
          <Link href="/">Back to Front-page</Link>
        </MainLayout>
      </>
    );
  } else {
    return (
      <>
        <h1>This token-page does not exist yet</h1>
        <Link href="/">Back to Front-page</Link>
      </>
    );
  }
}

TokenPage.getInitialProps = async () => {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const tokens = await response.json();
  const obj = tokens.bpi;
  console.log(obj);
  return {
    tokens: obj,
  };
};
