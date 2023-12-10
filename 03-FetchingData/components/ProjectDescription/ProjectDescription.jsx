import './ProjectDescription.css'
export default function ProjectDescription(){
  return(
    <>
      <section className="ProjectDescription">
        <p>The purpose of this small project is to <strong>fetch data from a Rest API published on Heroku</strong>, the JSON response contains
        Legal Advisors and Clients asesored by Legal Advisors. In the process of building this small project I learned a lot
        of new tools and concepts such as <strong>useEffect (which I wanted to learn for a long time), promises, the fetch
        function</strong> among others things that makes me more familiar at the time of connecting the <strong>frontend with
        external services or my own backend.</strong></p>
      </section>
    </>
  );
}