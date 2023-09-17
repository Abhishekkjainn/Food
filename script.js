let videoback = document.getElementById('mainvid');
let header = document.getElementById('mainheader');

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunctionvidintitial();
  scrollFunctionvidback();
};

function scrollFunctionvidintitial() {
  //   if (
  //     document.body.scrollTop > 500 ||
  //     document.documentElement.scrollTop > 500
  //   ) {
  //     document.getElementById('mainvid').style.opacity = '0.1';
  //   }
  if (window.scrollY > 50) {
    document.getElementById('mainvid').style.opacity = '0';

    document.getElementById('page2').style.opacity = '1';

    document.getElementById('companynameheader').style.color = 'black';
    document.getElementById('aboutheader').style.color = 'rgba(97, 122, 85, 1)';
    videoback.style.transition = '0.5s all';
  }
}

function scrollFunctionvidback() {
  if (window.scrollY < 400) {
    document.getElementById('mainvid').style.opacity = '1';
    document.getElementById('page2').style.opacity = '0';
    document.getElementById('companynameheader').style.color = 'white';
    document.getElementById('aboutheader').style.color = 'white';
  }
}
