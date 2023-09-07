import { useState } from 'react';
export function ToDoItem({ tittle, description }) {
  const [isReady, setIsReady] = useState(false);

  const buttonClassName = isReady ? 'tdi-state ready' : 'tdi-state';
  const sectionClassName = isReady ? 'tdi-section ready' : 'tdi-section';

  const handleClick = () => {
    setIsReady(!isReady);
  };

  return (
    <>
      <section className={sectionClassName} onClick={handleClick}>
        <main className="tdi-main">
          <h3 className="tdi-tittle">{tittle}</h3>
          <p className="tdi-description">{description}</p>
        </main>

        <aside className="tdi-aside">
          <button className={buttonClassName} onClick={handleClick}></button>
        </aside>
      </section>
    </>
  );
}
