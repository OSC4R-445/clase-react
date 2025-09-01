import Image from "next/image"

export default function Header() {
    return(
        <>
            <header>
                <div>
                    <Image 
                        src="https://static.xx.fbcdn.net/rsrc.php/y3/r/y6QsbGgc866.svg"
                        width={70}
                        height={17}
                        alt="Meta"
                        className="logoMeta"
                    />
                    <span>Meta Quest</span>
                    <span>Ray-Ban Meta</span>
                    <span>Aplicaciones y Juegos</span>
                </div>
                <div>
                    <span>Informacion sobre Meta</span>
                    <span>Asistencia</span>
                    <input placeholder="Buscar"/>
                </div>
            </header>
        </>
    )
}