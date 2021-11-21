$(document).ready(function () {
  Even.mobileNavbar();
  Even.toc();
});

Even.responsiveTable();

if (window.hljs) {
  hljs.initHighlighting();
  Even.highlight();
} else {
  Even.chroma();
}

