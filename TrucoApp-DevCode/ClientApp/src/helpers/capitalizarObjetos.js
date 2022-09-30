export const capitalizarClavesObjeto = (objeto) => {
  let k = Object.entries(objeto);

  let l = k.map(function (t) {
    t[0] = t[0].charAt(0).toUpperCase() + t[0].slice(1);
    return t;
  });
  const a = Object.fromEntries(l);
  return a;
};
