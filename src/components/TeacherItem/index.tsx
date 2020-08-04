import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/29512437?s=460&u=dc8ef0d6f9268a74b9a81eaa51ad65538d61bf54&v=4"
          alt="Myke Albuquerque"
        />
        <div>
          <strong>Myke Albuquerque</strong>
          <span>Artes Jedi</span>
        </div>
      </header>
      <p>
        Bacon ipsum dolor amet short loin bresaola pork, pig shankle sausage turducken short ribs cow ball tip prosciutto. Corned beef meatloaf ribeye drumstick shoulder porchetta prosciutto venison biltong ham hock buffalo pork belly ground round salami cow.
          <br /><br />
          Doner meatball pork belly flank. Pig fatback pork loin pork belly shankle buffalo swine frankfurter kielbasa short ribs tri-tip chuck bresaola ribeye. Jowl pork hamburger, doner swine ham hock pastrami chislic landjaeger. Bacon ribeye chislic ground round porchetta ham fatback hamburger chuck alcatra bresaola venison. Hamburger leberkas swine chicken.
          </p>
      <footer>
        <p>
          Preço/hora: <strong>R$ 32,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;