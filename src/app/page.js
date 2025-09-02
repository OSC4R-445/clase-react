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
  //valor de variable prop que se enviará al componente hijo 'products'
  let titleProductSize = "3em";
  return (
    <>
      <Adsbar />
      <Header />
      {/* Se envia el valor de la proiedad titleProductSize al componente Products */}
      <Products titleSize={titleProductSize} />
      <Example />
    </>
  );
}
