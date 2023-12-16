import './ProjectDescription.css'
export default function ProjectDescription(){
  return(
    <>
      <section className="ProjectDescription">
        <img src="../../src/assets/IF_logo.png" height={'85'}></img>
        <h1>{'03 - Fetching data and useEffect'}</h1>
          <p>The main purpose of this small project was to <strong>retrieve data from a REST API hosted on Heroku</strong>, the JSON response obtained
          from this API contains <strong>Legal Advisors and their respective clients.</strong>Throughout the development process,
          I delved into various tools and concepts, most notably the <strong>useEffect</strong> hook a skill I had long 
          aspired to acquire. Additionally, I gained proficiency in working with <strong>promises and the fetch API</strong>,
          augmenting my ability to seamlessly <strong>connect the frontend with external services or my own backend.</strong>
          This <strong>hands-on experience</strong> not only broadened my understanding of these technologies but also enhanced my 
          capacity to navigate and integrate external data into my projects effectively.</p>
      </section>
    </>
  );
}