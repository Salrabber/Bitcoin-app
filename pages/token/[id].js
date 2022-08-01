import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";
import classes from "./tokenpage.module.scss";

export default function TokenPage(tokens) {
  const router = useRouter();
  const id = router.query.id;
  console.log(tokens);
  const obj = tokens.tokens;
  const keys = Object.keys(obj);
  const key = keys[id - 1];
  const infotoken = obj[key];
  if (infotoken) {
    return (
      <>
        <MainLayout>
          <div className={classes.wrapper}>
            <h1>More Info</h1>
            <ul className={'list-group'}>
              {Object.keys(infotoken).map((key, index) => {
                return (
                  <li className='list-group-item' key={index}>
                    {key} : {infotoken[key]}
                  </li>
                );
              })}
            </ul>
            <Link href="/"><a className='link-primary'>Back to Front-page</a></Link>
          </div>
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
