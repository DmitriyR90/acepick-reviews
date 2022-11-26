(() => {
  // open modal window
  const refs = {
    openModalBtn: document.querySelector('.header__burger'),
    modal: document.querySelector('.header__menu'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('active');
    refs.openModalBtn.classList.toggle('active');
    document.body.classList.toggle('lock');
  }

  //banking accordion menu
  document.querySelectorAll('.nav-item__btn').forEach((el) => {
    el.addEventListener('click', () => {
      let content = el.nextElementSibling;

      if (content.style.maxHeight) {
        document
          .querySelectorAll('.nav-item__list')
          .forEach((el) => (el.style.maxHeight = null));
        el.classList.remove('opened-list');
      } else {
        document
          .querySelectorAll('.nav-item__list')
          .forEach((el) => (el.style.maxHeight = null));

        document.querySelectorAll('.nav-item__btn').forEach((btn) => {
          btn.classList.remove('opened-list');
        });

        content.style.maxHeight = content.scrollHeight + 'px';
        el.classList.add('opened-list');
      }
    });
  });

  //faq accordion menu
  document.querySelectorAll('.faq-open__btn').forEach((el) => {
    el.addEventListener('click', () => {
      let content = el.nextElementSibling;

      if (content.style.maxHeight) {
        document
          .querySelectorAll('.faq-item')
          .forEach((el) => (el.style.maxHeight = null));
        el.classList.remove('opened-faq-list');
      } else {
        document
          .querySelectorAll('.faq-item')
          .forEach((el) => (el.style.maxHeight = null));

        document.querySelectorAll('.faq-open__btn').forEach((btn) => {
          btn.classList.remove('opened-faq-list');
        });

        content.style.maxHeight = content.scrollHeight + 'px';
        el.classList.add('opened-faq-list');
      }
    });
  });
})();
