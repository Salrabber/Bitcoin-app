import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import Token from "./token";
import { createToken } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokens } from "../redux/actions";
import Loader from "./loader";
import classes from "../styles/tokenlist.module.scss";

function TokenList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function load() {
      dispatch(fetchTokens());
    }
    load();
  }, []);
  const serverData = useSelector((state) => state.tokens.fetchTokens.bpi);
  const loading = useSelector((state) => state.app.loading);
  function clickHandler() {
    props.createToken({ price: "$500" });
  }
  return (
    <ul className='list-group'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <button
            type="Button"
            className={"btn btn-primary"}
            onClick={() => dispatch(fetchTokens())}
          >
            <p>Load server data</p>
          </button>
          {Object.keys(props.tokens).map((key, index) => {
            return (
              <>
                <Token
                  className='list-group-item'
                  token={props.tokens[key]}
                  key={index}
                  index={index + 1}
                />
              </>
            );
          })}
        </>
      )}

      {/* <button onClick={clickHandler}>
        <p>Add state</p>
      </button>
      <p>Data: {JSON.stringify(props.actualPrice)}</p> */}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    actualPrice: state.tokens.tokens,
  };
};

const mapDispatchToProps = {
  createToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenList);
