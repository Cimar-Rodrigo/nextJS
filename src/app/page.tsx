import ArticleComponent from './articleComponent'
import { data } from './funciones/baseDeDatos'



export default function Home() {
  
  
  
  return (

    <div>
      {data.map((item) => (
        <ArticleComponent title={item.titulo} fechaDePublicacion={item.fechaDePublicacion} lugar={item.lugar} autor={item.autor}>
          <p>{item.contenido}</p>
        </ArticleComponent>
      ))}

      <a href="/create"><button type='submit'>Crear</button></a>
    </div>    
    
    

  );
}
