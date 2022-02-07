onscroll = function () {
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,

    document.body.offsetHeight,
    document.documentElement.offsetHeight,

    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (window.scrollY >= scrollHeight - innerHeight) alert('Конец прокрутки');
};
