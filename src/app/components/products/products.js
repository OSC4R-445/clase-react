"use client";
import { useState } from "react";
import Image from "next/image";
import styleProduct from "./products.module.css";

//En la definicion del componente podemos definir props con valores por defecto en caso de no recibir de algun componente padre la informacion requerida
//En este caso, de declara la prop titleSize con un valor por defecto.
export default function Products({ titleSize = "2em" }) {
  //variables de estado para practicar el cap 10
  const [cantidadAComprar, setCantidadAComprar] = useState(0);
  //varialbe de estado que almacena el nombre del comprador
  const [nombreComprador, setNombreComprador] = useState("");
  //variable de estado que almacena si el usuario es vip o no
  const [esVip, setEsVip] = useState(false);

  const products = {
    title: "Amplía tu mundo con Meta Quest 3",
    productsArray: [
      {
        id: 1,
        name: "Meta Quest 3",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1212867420030268&version=1752567331&transcode_extension=webp",
        qty: 10,
        price: 500,
      },
      {
        id: 2,
        name: "Meta Quest Pro",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=482278464759507&version=1742998958&transcode_extension=webp",
        qty: 5,
        price: 300,
      },
      {
        id: 3,
        name: "Compara las gafas",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1069558337847743&version=1730103018&transcode_extension=webp",
        qty: 0,
        price: 0,
      },
      {
        id: 4,
        name: "Accsesorios",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=506273455145033&version=1751921873&transcode_extension=webp",
        qty: 7,
        price: 250,
      },
      {
        id: 5,
        name: "Aplicaciones y juegos",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=492080576853052&version=1731932226&transcode_extension=webp",
        qty: 0,
        price: 100,
      },
      {
        id: 6,
        name: "Tarjetas de regalo",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1529671570979745&version=1738831591&transcode_extension=webp",
        qty: 4,
        price: 0,
      },
    ],
  };

  function sumarCompra() {
    setCantidadAComprar(cantidadAComprar + 1);
  }

  //Ejemplo de filtrado por price
  const filteredProducts = products.productsArray.filter(
    (product) => product.price > 0
  );

  //Ejemplo de mapeo de los datos
  const productsArrayMapped = filteredProducts.map((product) =>
    product.qty > 0 ? (
      <div key={product.id} onClick={sumarCompra}>
        <Image src={product.img} alt={product.name} width={150} height={85} />
        <figcaption>{product.name}</figcaption>
        <figcaption>Quantity : {product.qty}</figcaption>
      </div>
    ) : null
  );

  function SearchForm() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    // "typing", "submitting", "success"
    const [status, setStatus] = useState("typing");

    async function manejadorSubmit(e) {
      e.preventDefault();
      setStatus("submitting");
      try {
        await submitForm(answer);
        setStatus("success");
        setError(null);
      } catch (error) {
        setStatus("typing");
        setError(error);
      }
    }

    function manejadorCambioTexto(e) {
      setAnswer(e.target.value);
    }

    function submitForm(answer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let verificarError = answer.toLowerCase() !== "si lo se";
          if (verificarError) {
            reject(
              new Error("Buen intento pero no es la opcion correcta, Reintenta")
            );
          } else {
            resolve();
          }
        }, 2000);
      });
    }

    return (
      <>
        <form onSubmit={manejadorSubmit}>
          <textarea
            name=""
            id=""
            value={answer}
            onChange={manejadorCambioTexto}
            disabled={status === "submitting" || status === "success"}
            placeholder="Ingreas tu respuesta"
          ></textarea>
          <button className="btn btn-success" disabled={answer.length === 0 || status === "submitting"}>
            Enviar
          </button>
          {status=== "success" &&<p className="">Respuesta correcta</p>}
          {error !== null && <p className="Error">{error.message}</p>}
        </form>
      </>
    );
  }

  return (
    <>
      <div className={styleProduct.containerProducts}>
        <h1 style={{ fontSize: titleSize }}>{products.title}</h1>
        <SearchForm />
        <div className={styleProduct.containerCards}>
          {productsArrayMapped}
          {/* {products.productsArray[0].qty > 0 ? (
            <div className={styleProduct.card}>
              <Image
                className={styleProduct.imgProduct}
                src={products.productsArray[0].img}
                alt=""
                width={300}
                height={170}
              />
              <p className={styleProduct.nameProduct}>
                {products.productsArray[0].name}
              </p>
            </div>
          ) : null} */}
        </div>
        <div className={styleProduct.boxCantidadAComprar}>
          cantidadAComprar: {cantidadAComprar}
        </div>
      </div>
    </>
  );
}
