
import classes from "../styles/index.module.scss";
import TokenList from "./tokenList";
import MainLayout from "../layouts/MainLayout";


export default function Index(info) {
  

  return (

     

    <div className={classes.wrapper}>
      <MainLayout>
        <h1>Hello there</h1>
        <TokenList tokens={info.info} />
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



