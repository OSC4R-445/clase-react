import Image from "next/image";
import styleProduct from "./products.module.css";

//En la definicion del componente podemos definir props con valores por defecto en caso de no recibir de algun componente padre la informacion requerida
//En este caso, de declara la prop titleSize con un valor por defecto.
export default function Products({ titleSize = "2em" }) {
  const products = {
    title: "Amplía tu mundo con Meta Quest 3",
    productsArray: [
      {
        name: "Meta Quest 3",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1212867420030268&version=1752567331&transcode_extension=webp",
        qty: 10,
      },
      {
        name: "Meta Quest Pro",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=482278464759507&version=1742998958&transcode_extension=webp",
        qty: 5,
      },
      {
        name: "Compara las gafas",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1069558337847743&version=1730103018&transcode_extension=webp",
        qty: 0,
      },
    ],
  };

  return (
    <>
      <div className={styleProduct.containerProducts}>
        <h1 style={{ fontSize: titleSize }}>{products.title}</h1>
        <div className={styleProduct.containerCards}>
          {products.productsArray[0].qty > 0 ? (
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
          ) : null}
        </div>
      </div>
    </>
  );
}
