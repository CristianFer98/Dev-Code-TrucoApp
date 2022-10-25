export const capitalizarClavesObjeto = (objeto) => {
  let k = Object.entries(objeto);

  let l = k.map(function (t) {
    t[0] = t[0].charAt(0).toUpperCase() + t[0].slice(1);
    return t;
  });
  const a = Object.fromEntries(l);
  return a;
};

export const getSegundos = (horarioUno, horarioDos) => {
  var first = horarioUno;
  var second = horarioDos;

  var x = new Date(first);
  var y = new Date(second);

  const diffInSeconds = Math.floor((y - x) / 1000);
  return diffInSeconds >= 15 ? 0 : 15 - diffInSeconds;
};
