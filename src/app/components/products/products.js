import Image from "next/image";
import styleProduct from "./products.module.css";

export default function Products() {
  const products = {
    title: "Amplía tu mundo con Meta Quest 3",
    productsArray: [
      {
        name: "Meta Quest 3",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1212867420030268&version=1752567331&transcode_extension=webp",
      },
      {
        name: "Meta Quest Pro",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=482278464759507&version=1742998958&transcode_extension=webp",
      },
      {
        name: "Compara las gafas",
        img: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1069558337847743&version=1730103018&transcode_extension=webp",
      },
    ],
  };

  return (
    <>
      <div className={styleProduct.containerProducts}>
        <h1>{products.title}</h1>
        <div className={styleProduct.containerCards}>
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
        </div>
      </div>
    </>
  );
}
