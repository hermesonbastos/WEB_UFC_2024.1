import { hero_img, vilain_img } from "./Imagens";
import "../App.css";
import React from "react";

export function Hero({ name, img, arena }) {
  return (
    <div>
      <h2 className="hero-name">{name}</h2>
      <img src={img} alt={name} />
      <p>{arena}</p>
    </div>
  );
}

export function Enemy({ name, img, arena }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      {arena}
    </div>
  );
}

export function Arena({ children, arena }) {
  return (
    <div className="arena">
      {React.cloneElement(children[0], {
        arena,
      }, <p>{arena}</p>)}
      <span>
        <strong>VS</strong>
      </span>
      {React.cloneElement(children[1], {
        arena,
      }, <p>{arena}</p>)}
    </div>
  );
}

export function World(props) {
  return <div style={{ display: "flex", gap: "1rem", margin: "0 1rem" }}>{props.children}</div>;
}
