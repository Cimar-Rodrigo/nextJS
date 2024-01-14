export default function CrearArticulo(){
    
    
    return(
        <form action="POST">
            <input name="titulo"type="text" placeholder="Titulo" /> <br />
            <input type="text" placeholder="Imagen" /> <br />
            <input type="text" placeholder="Fecha de publicacion" /> <br />
            <input type="text" placeholder="Lugar" /> <br />
            <input type="text" placeholder="Autor" /> <br /> 
            <input type="text" placeholder="Contenido" /> <br />
            <button>Enviar</button>
        </form>

    )
}