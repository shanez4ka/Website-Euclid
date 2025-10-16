(function(){
  const steps = [
    {
      title: "Проводим консультацию",
      text: `Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. <br>А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.`,
      img: "img/work-img-1.jpg"
    },
    {
      title: "Составляем смету",
      text: `Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.`,
      img: "img/work-img-2.jpg"
    },
    {
      title: "Привлекаем подрядчиков",
      text: `Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.`,
      img: "img/work-img-3.jpg"
    },
    {
      title: "Инспектируем все этапы работ",
      text: `Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.`,
      img: "img/work-img-4.jpg"
    }
  ];

  const links = Array.from(document.querySelectorAll('.work__link'));
  if (!links.length) return;

  const titleEl = document.querySelector('.work__info-title');
  const descEl  = document.querySelector('.work__info-description');
  const imgEl   = document.querySelector('.work__image');

  const FADE_DURATION = 350;

  function setDefaultActive() {
    links.forEach((l, i) => {
      l.dataset.stepIndex = i;
      l.setAttribute('role','button');
      l.setAttribute('tabindex','0');
      if (i === 0) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });
  }

  function changeTo(stepIndex) {
    const step = steps[stepIndex];
    if (!step) return;

    titleEl.classList.add('_is-hidden');
    descEl.classList.add('_is-hidden');
    imgEl.classList.add('_is-hidden');

    setTimeout(() => {
      titleEl.textContent = step.title;
      descEl.innerHTML = step.text;
      imgEl.src = step.img;
      imgEl.alt = step.title;

      requestAnimationFrame(() => {
        titleEl.classList.remove('_is-hidden');
        descEl.classList.remove('_is-hidden');
        imgEl.classList.remove('_is-hidden');
      });
    }, FADE_DURATION);
  }

  function setActiveLink(activeIndex) {
    links.forEach((l, i) => {
      if (i === activeIndex) l.classList.add('active');
      else l.classList.remove('active');
    });
  }

  function handleActivate(index) {
    const currentActive = links.findIndex(l => l.classList.contains('active'));
    if (currentActive === index) return;
    setActiveLink(index);
    changeTo(index);
  }

  links.forEach((link, i) => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      handleActivate(i);
    });

    link.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivate(i);
      }
    });
  });

  function initContent() {
    const first = steps[0];
    titleEl.textContent = first.title;
    descEl.innerHTML = first.text;
    imgEl.src = first.img;
    imgEl.alt = first.title;
  }

  setDefaultActive();
  initContent();
})();