  // scroll header
  window.addEventListener('scroll', () =>  {
    const header = document.querySelector('.navbar'),
          windowScroll = window.pageYOffset;

    
    if (windowScroll > 80) {
        header.classList.add('fixed-top');
    }  else {
        header.classList.remove('fixed-top');
    }   
}) ; 

(function () {
    'use strict'
  
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    const forms = document.querySelectorAll('.needs-validation');
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


//   mask phone

