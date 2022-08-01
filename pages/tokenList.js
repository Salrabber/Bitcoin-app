import React from "react";
import { connect } from "react-redux";
import Token from "./token";
import { createToken } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokens } from "../redux/actions";

function TokenList(props) {
  const keys = Object.keys(props.tokens);
  function clickHandler() {
    props.createToken({ price: "$500" });
  }
  const dispatch = useDispatch();
  const serverData = useSelector((state) => state.tokens.fetchTokens);

  return (
    <ul>
      {keys.map((key, index) => {
        return (
          <Token token={props.tokens[key]} key={index + 1} index={index + 1} />
        );
      })}
      <button onClick={clickHandler}>
        <p>Add state</p>
      </button>
      <p>Data: {JSON.stringify(props.actualPrice)}</p>
      <button onClick={() => dispatch(fetchTokens())}>
        <p>Load server data</p>
      </button>
      {serverData.map((token) => {
        return (
          <p key={token.id}>{token.id + "  "}{token.title}</p>
        );
      })}
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
