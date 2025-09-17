"use client";
import Image from "next/image";

//componente secundario para probar el paso de props al componente y al manejador de eventos

function ComponenteSecundario({ funcALlamar, txtBtn }) {
  return <button onClick={funcALlamar}>{txtBtn}</button>;
}

export default function Metaq3({dato}) {
  function funcALlamar() {
    alert(`${dato}`);
  }

  return (
    <>
      <div>
        <h1>Meta Quest 3</h1>
        <p>
          Con nuestras gafas de realidad mixta más potentes hasta la fecha
          podrás ver contenido, jugar y conectar con otras personas como nunca
          antes.
        </p>
        <ComponenteSecundario funcALlamar={funcALlamar} txtBtn={"Comprar"} />
      </div>
    </>
  );
}
