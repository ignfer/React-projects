import { useState } from 'react';
import './ToDoItem.css'

export default function ToDoItem({ tittle, description, index}) {
  const [status, setStatus] = useState(0);
  const [statusString, setStatusString] = useState('');
  const [badgeContent, setBadgeContent] = useState('not started');

  const buttonClassName = 'tdi-state';
  const sectionClassName = 'tdi-section';
  const badgeClassname = 'tdi-badge';

  const handleClick = () => {
    console.log('prev: ' + status);
    status >= 2 ? setStatus(0) : setStatus((status) => status += 1);
    console.log('post: ' + status);

    switch(status){
      case 0:
        setStatusString('');
        setBadgeContent('not started');
      break;
      case 1:
        setStatusString(' inprogress');
        setBadgeContent('in progress');
      break;
      case 2:
        setStatusString(' ready');
        setBadgeContent('done');
      break;
    }
  }

  return (
    <>
      <section className={sectionClassName + statusString} onClick={handleClick}>
        <main className="tdi-main">
          <h3 className="tdi-tittle">{index} - {tittle}</h3>
          <span className={badgeClassname + statusString}>{badgeContent}</span>
          <p className="tdi-description">{description}</p>
        </main>

        <aside className="tdi-aside">
          <button className={buttonClassName + statusString}></button>
        </aside>
      </section>
    </>
  );
}
