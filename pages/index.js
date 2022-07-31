import Token from "./token";
import classes from "../styles/index.module.scss";
import { useState, useEffect } from "react";
import TokenList from "./tokenList";
import MainLayout from "../layouts/MainLayout";

export default function Index(info) {
    const state = {}
  const tokeninfo = info.info
  return (
    <div className={classes.wrapper}>
      <MainLayout>
        <h1>Hello there</h1>
        <TokenList tokens={tokeninfo} />
      </MainLayout>
    </div>
  );
}

Index.getInitialProps = async () => {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const tokens = await response.json();
  const obj = tokens.bpi;
  return {
    info: obj,
  };
};
