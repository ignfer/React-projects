import './ProjectDescription.css'
export default function ProjectDescription(){
  return(
    <>
      <section className="ProjectDescription">
        <img src="../../src/assets/IF_logo.png" height={'85'}></img>
        <h1>{'01 - ToDo list app - useState & useRef'}</h1>
        <p>The main objective of this small app is to get used to <strong>React</strong> and the
        concept of states, hooks, and reusable components. To spend time
        on the important things we will work the whole development of this
        project on <strong>stackblitz</strong> wich provide us with a
        pre-configurated envivorment for developing on react and using{' '}
        <strong>Vite</strong>. We acomplished the task of creating reusable and reactive items, 
        cycling throug an array of already declarated items, the next step is to be able to create 
        this components on demand and see if we could make the page react to that change</p>
      </section>
    </>
  );
}