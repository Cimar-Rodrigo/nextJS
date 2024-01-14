
interface ArticleComponentProps {
    title : string;
    imagen? : string;
    fechaDePublicacion : string;
    lugar: string;
    autor : string;
    children?: React.ReactNode;
}



export default function ArticleComponent({title, imagen, fechaDePublicacion, lugar, autor, children} : ArticleComponentProps) {
    return (<article>
        <h1>{title}</h1>
        <img src={imagen}/>
        <p>{fechaDePublicacion}</p>
        <p>{lugar}</p>
        <p>{autor}</p>
        {children} 
    </article>
)}