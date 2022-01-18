let form = document.querySelector('.form');
let formClose = document.querySelector('.form__close');
let loginBtn = document.querySelector('.hero__login-btn');

let overlay = document.createElement('div');

// open modal login-form

loginBtn.addEventListener('click', (e) => {
  form.style.display = 'block';
  overlay.classList.add('overlay');
  document.body.style = `
        overflow: hidden;
    `;
  document.body.append(overlay);
});

// close modal login-form

formClose.addEventListener('click', (e) => {
  if (e.target.classList.contains('form__close')) {
    form.style.display = 'none';
  }
  document.body.style = `
    overflow: none;
  `;
  overlay.remove();
});

// close modal login-form when user clicks on overlay

overlay.addEventListener('click', (e) => {
  form.style.display = 'none';
  overlay.remove();
  document.body.style = `
    overflow: none;
  `;
});

// Back to top

let backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', topFunction);
window.onscroll = function () {
  back();
};

function back() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
