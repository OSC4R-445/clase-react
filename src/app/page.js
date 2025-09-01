import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Products from "./components/products/products";

function Adsbar() {
  return (
    <>
      <div id="adsBar">
        <span>Envio gratis</span>
        <span>Prueba sin compromiso</span>
        <span>Garantia</span>
      </div>
    </>
  );
}

function Example() {
  return <div style={{ height: "1500px" }}></div>;
}

export default function Home() {
  return (
    <>
      <Adsbar />
      <Header />
      <Products />
      <Example />
    </>
  );
}
