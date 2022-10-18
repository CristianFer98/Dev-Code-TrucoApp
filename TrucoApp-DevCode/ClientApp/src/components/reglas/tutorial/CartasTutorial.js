const cards = [
    {
      id: 1,
      number: 1,
      suit: "espada",
      cardValueRank: 1,
      envidoCardValue: 1,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-1-minimalart.png",
    },
    {
      id: 2,
      number: 1,
      suit: "basto",
      cardValueRank: 2,
      envidoCardValue: 1,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-1-minimalart.png",
    },
    {
      id: 3,
      number: 7,
      suit: "espada",
      cardValueRank: 3,
      envidoCardValue: 7,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-7-minimalart.png",
    },
    {
      id: 4,
      number: 7,
      suit: "oro",
      cardValueRank: 4,
      envidoCardValue: 7,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-7-minimalart.png",
    },
    {
      id: 5,
      number: 3,
      suit: "espada",
      cardValueRank: 5,
      envidoCardValue: 3,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-3-minimalart.png",
    },
    {
      id: 6,
      number: 3,
      suit: "copa",
      cardValueRank: 5,
      envidoCardValue: 3,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-3-minimalart.png",
    },
    {
      id: 7,
      number: 3,
      suit: "basto",
      cardValueRank: 5,
      envidoCardValue: 3,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-3-minimalart.png",
    },
    {
      id: 8,
      number: 3,
      suit: "oro",
      cardValueRank: 5,
      envidoCardValue: 3,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-3-minimalart.png",
    },
    {
      id: 9,
      number: 2,
      suit: "espada",
      cardValueRank: 6,
      envidoCardValue: 2,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-2-minimalart.png",
    },
    {
      id: 10,
      number: 2,
      suit: "oro",
      cardValueRank: 6,
      envidoCardValue: 2,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-2-minimalart.png",
    },
    {
      id: 11,
      number: 2,
      suit: "copa",
      cardValueRank: 6,
      envidoCardValue: 2,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-2-minimalart.png",
    },
    {
      id: 12,
      number: 2,
      suit: "basto",
      cardValueRank: 6,
      envidoCardValue: 2,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-2-minimalart.png",
    },
    {
      id: 13,
      number: 1,
      suit: "oro",
      cardValueRank: 7,
      envidoCardValue: 1,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-1-minimalart.png",
    },
    {
      id: 14,
      number: 1,
      suit: "copa",
      cardValueRank: 7,
      envidoCardValue: 1,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-1-minimalart.png",
    },
    {
      id: 15,
      number: 12,
      suit: "espada",
      cardValueRank: 8,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-12-minimalart.png",
    },
    {
      id: 16,
      number: 12,
      suit: "oro",
      cardValueRank: 8,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-12-minimalart.png",
    },
    {
      id: 17,
      number: 12,
      suit: "copa",
      cardValueRank: 8,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-12-minimalart.png",
    },
    {
      id: 18,
      number: 12,
      suit: "basto",
      cardValueRank: 8,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-12-minimalart.png",
    },
    {
      id: 19,
      number: 11,
      suit: "espada",
      cardValueRank: 9,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-11-minimalart.png",
    },
    {
      id: 20,
      number: 11,
      suit: "oro",
      cardValueRank: 9,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-11-minimalart.png",
    },
    {
      id: 21,
      number: 11,
      suit: "copa",
      cardValueRank: 9,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-11-minimalart.png",
    },
    {
      id: 22,
      number: 11,
      suit: "basto",
      cardValueRank: 9,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-11-minimalart.png",
    },
    {
      id: 23,
      number: 10,
      suit: "espada",
      cardValueRank: 10,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-10-minimalart.png",
    },
    {
      id: 24,
      number: 10,
      suit: "oro",
      cardValueRank: 10,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-10-minimalart.png",
    },
    {
      id: 25,
      number: 10,
      suit: "copa",
      cardValueRank: 10,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-10-minimalart.png",
    },
    {
      id: 26,
      number: 10,
      suit: "basto",
      cardValueRank: 10,
      envidoCardValue: 0,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-10-minimalart.png",
    },
    {
      id: 27,
      number: 7,
      suit: "copa",
      cardValueRank: 11,
      envidoCardValue: 7,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-7-minimalart.png",
    },
    {
      id: 28,
      number: 7,
      suit: "basto",
      cardValueRank: 11,
      envidoCardValue: 7,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-7-min.png",
    },
    {
      id: 29,
      number: 6,
      suit: "espada",
      cardValueRank: 12,
      envidoCardValue: 6,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-6-minimalart.png",
    },
    {
      id: 30,
      number: 6,
      suit: "oro",
      cardValueRank: 12,
      envidoCardValue: 6,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-6-minimalart.png",
    },
    {
      id: 31,
      number: 6,
      suit: "copa",
      cardValueRank: 12,
      envidoCardValue: 6,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-6-minimalart.png",
    },
    {
      id: 32,
      number: 6,
      suit: "basto",
      cardValueRank: 12,
      envidoCardValue: 6,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-6-min.png",
    },
    {
      id: 33,
      number: 5,
      suit: "espada",
      cardValueRank: 13,
      envidoCardValue: 5,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-5-minimalart.png",
    },
    {
      id: 34,
      number: 5,
      suit: "oro",
      cardValueRank: 13,
      envidoCardValue: 5,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-5-minimalart.png",
    },
    {
      id: 35,
      number: 5,
      suit: "copa",
      cardValueRank: 13,
      envidoCardValue: 5,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-5-minimalart.png",
    },
    {
      id: 36,
      number: 5,
      suit: "basto",
      cardValueRank: 13,
      envidoCardValue: 5,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-5-min.png",
    },
    {
      id: 37,
      number: 4,
      suit: "espada",
      cardValueRank: 14,
      envidoCardValue: 4,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-espadas-4-minimalart.png",
    },
    {
      id: 38,
      number: 4,
      suit: "oro",
      cardValueRank: 14,
      envidoCardValue: 4,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-oros-4-minimalart.png",
    },
    {
      id: 39,
      number: 4,
      suit: "copa",
      cardValueRank: 14,
      envidoCardValue: 4,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-copas-4-minimalart.png",
    },
    {
      id: 40,
      number: 4,
      suit: "basto",
      cardValueRank: 14,
      envidoCardValue: 4,
      image:
        "https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-bastos-4-minimalart.png",
    },
  ];
  
  export function barajarCartasParaEnvidoJugador (){
    let manos = []
    let manoUnoJugador = []
    let manoDosJugador = []
    let manoTresJugador = []

    //DEFINO LAS CARTAS PARA LA PRIMERA MANO
    manoUnoJugador.push(cards.find(card => card.id == 9));
    manoUnoJugador.push(cards.find(card => card.id == 3));
    manoUnoJugador.push(cards.find(card => card.id == 18));

    //DEFINO LAS CARTAS PARA LA SEGUNDA MANO
    manoDosJugador.push(cards.find(card => card.id == 30));
    manoDosJugador.push(cards.find(card => card.id == 38));
    manoDosJugador.push(cards.find(card => card.id == 13));

    //DEFINO LAS CARTAS PARA FLOR
    manoTresJugador.push(cards.find(card => card.id == 13))
    manoTresJugador.push(cards.find(card => card.id == 4))
    manoTresJugador.push(cards.find(card => card.id == 34))

    manos.push(manoUnoJugador);
    manos.push(manoDosJugador);
    manos.push(manoTresJugador);

    return manos;
  }
  
  export function barajarCartasParaEnvidoMaquina (){
    let manos = []
    let manoUnoMaquina = []
    let manoDosMaquina = []
    let manoTresMaquina = []

    //DEFINO LAS CARTAS PARA LA PRIMERA MANO
    manoUnoMaquina.push(cards.find(card => card.id == 1));
    manoUnoMaquina.push(cards.find(card => card.id == 6));
    manoUnoMaquina.push(cards.find(card => card.id == 35));

    //DEFINO LAS CARTAS PARA LA SEGUNDA MANO
    manoDosMaquina.push(cards.find(card => card.id == 32));
    manoDosMaquina.push(cards.find(card => card.id == 28));
    manoDosMaquina.push(cards.find(card => card.id == 1));

    //DEFINO LAS CARTAS PARA FLOR
    manoTresMaquina.push(cards.find(card => card.id == 13))
    manoTresMaquina.push(cards.find(card => card.id == 4))
    manoTresMaquina.push(cards.find(card => card.id == 34))

    manos.push(manoUnoMaquina);
    manos.push(manoDosMaquina);
    manos.push(manoTresMaquina);

    return manos;
  }
  
  
  