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