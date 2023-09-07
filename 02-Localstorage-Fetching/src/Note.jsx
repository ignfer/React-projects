export default function Note({tittle, description}){
    return(
      <>
        <article className="n-article">
          <header>{tittle}</header>
          <p>{description}</p>
        </article>
      </>
    );
}