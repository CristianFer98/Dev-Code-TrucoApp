import './rules.css';
import Cartas from './Cartas';

export function Reglas() {
  return (
    <div className="rules-container container-fluid text-center p-5">
      <div className="container">
        {' '}
        <div className="row">
          <div className="col">
            <h1 className="my-4 text-center">Reglas del Truco</h1>
            <p className="my-4">
              El juego consiste de una partida en la cual los jugadores se
              enfrentan, y gana el primer jugador o equipo de jugadores que
              llega a los 30 puntos. Un partido de truco consta de varias rondas
              de 3 manos, en las cuales las cartas se reparten, los jugadores
              suman puntos y luego las cartas se vuelven a mezclar y repartir.
              <br />
              Los puntos se suman venciendo al rival en cada mano o bien
              logrando que el rival rechace un desafío, ya que el juego se basa
              en jugar las cartas y a la vez desafiarse mutuamente y así acordar
              cuántos puntos estarán en juego en cada enfrentamiento.
            </p>
          </div>
        </div>
        <h2 className="text-center ">Los valores de las cartas</h2>
        <Cartas />
        <h2>El envido o tantos</h2>
        <p>
          El envido consiste en sumar los valores de las cartas del mismo palo
          que tiene cada jugador, el equipo que tiene el jugador que logre sumar
          más puntos de este modo, gana el desafío. Los jugadores pueden optar
          por no revelar la sumatoria de sus cartas pero no estarán compitiendo
          para ganar.
          <br />
          Antes de que pase la primera mano, el último jugador de cada, antes de
          tirar una carta, puede desafiar al equipo contrario a jugar el envido.
          Diciendo la palabra pertinente al deafío elegido.
        </p>
        <h3 className="text-center text-dark">Desafíos del Envido</h3>
        <div className="row">
          <div className="col-12 my-4">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExampleEnvido"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOneEnvido">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOneEnvido"
                    aria-expanded="false"
                    aria-controls="flush-collapseOneEnvido"
                  >
                    Envido
                  </button>
                </h2>
                <div
                  id="flush-collapseOneEnvido"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOneEnvido"
                  data-bs-parent="#accordionFlushExampleEnvido"
                >
                  <div className="accordion-body">
                    En el caso de desafiar al equipo contrario a jugar el
                    envido, el jugador que esta jugando su turno puede decir la
                    palabra "envido" y el equipo contrario debe aceptar o
                    rechazar el desafío. En este desafío se juega por dos puntos
                    si es aceptado y vale un punto si es rechazado. El jugador
                    oponente puede optar por una tercera opción también que es
                    cantar "envido" nuevamente por lo que se estaría jugando por
                    2 puntos más, es decir 4 puntos en total si el equipo
                    contrario acepta, ya que el primer envido fué aceptado
                    implicitamente y el segundo está por verse. Si se rechaza el
                    desafío en este caso el equipo desafiante ganaría 3 puntos.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwoEnvido">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwoEnvido"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwoEnvido"
                  >
                    Real Envido
                  </button>
                </h2>
                <div
                  id="flush-collapseTwoEnvido"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwoEnvido"
                  data-bs-parent="#accordionFlushExampleEnvido"
                >
                  <div className="accordion-body">
                    Un jugador puede optar por cantar "real envido" en vez de
                    "envido", si el equipo contrario acepta el desafío se juega
                    por 3 puntos. Si se rechaza es un punto el que se pierde. El
                    "real envido" no se puede cantar nuevamente. Es decir se
                    puede aceptar o rechazar únicamente (a excepción de que se
                    cante "falta envido"). El "real envido" también puede
                    cantarse a continuación de un desafío de "envido", por lo
                    que se estarían sumando todos los puntos que ya se están
                    jugando más lo que se juegue en el "real envido". Por
                    ejemplo si se canta, "envido", luego "envido" y luego "real
                    envido", se estarían jugando 7 puntos en total. Si se
                    rechaza esa sucesión de desafíos, serían 5 puntos los que se
                    perderían.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThreeEnvido">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThreeEnvido"
                    aria-expanded="false"
                    aria-controls="flush-collapseThreeEnvido"
                  >
                    Falta Envido
                  </button>
                </h2>
                <div
                  id="flush-collapseThreeEnvido"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThreeEnvido"
                  data-bs-parent="#accordionFlushExampleEnvido"
                >
                  <div className="accordion-body">
                    La última herramienta que se tiene a disposición a la hora
                    del envido, es el "falta envido". Se puede cantar como
                    primer desafío cuando es el momento de los tantos ó a
                    continuación de que se haya cantado "envido" o "real
                    envido". Si el equipo contrario acepta y todavía no se han
                    llegado a los 15 puntos por parte de ninguno de los dos
                    equipos, se juega la partida, es decir quien gane el "falta
                    envido" llega a los 30 puntos. Si se rechaza el desafío, se
                    pierde un punto más todo lo que se haya apostado antes.
                    <br />
                    Si cualquiera de los dos equipos llegó a los 15 puntos (lo
                    que se dicen "las buenas"), el "falta envido" equivale a lo
                    que le falta a el equipo contrario para ganar la partida. Es
                    decir quien gane, ganará los puntos que le faltan al
                    contrario para llegar a los 30.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>El Truco</h2>
          <p>
            El truco consiste en ganar dos de las tres manos que se juegan en el
            juego. En cada mano cada equipo juega una carta, y al final de la
            mano gana esa ronda el equipo que haya tirado la carta mas alta en
            valor. Si en la primera mano hay empate, en la siguiente ronda, se
            desempata y gana la equipo que haya tirado la carta mas alta en
            valor. En caso de que se haya empatado en la segunda mano, se juega
            una tercera mano para desempatar. En caso de que se empate
            nuevamente en la tercera mano, gana el equipo que haya ganado la
            primera mano. En caso de que un equipo haya ganado la primera mano,
            otro equipo haya ganado la segunda y luego en la tercera mano se
            empata, gana el equipo que haya ganado la primera mano.
          </p>
          <h3 className="text-center text-dark">Desafíos del Truco</h3>
          <div className="col-12 my-4">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExampleTruco"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOneTruco">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOneTruco"
                    aria-expanded="false"
                    aria-controls="flush-collapseOneTruco"
                  >
                    Truco
                  </button>
                </h2>
                <div
                  id="flush-collapseOneTruco"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOneTruco"
                  data-bs-parent="#accordionFlushExampleTruco"
                >
                  <div className="accordion-body">
                    En cualquier momento del una ronda, se puede cantar "truco"
                    y se estaría desafiando al equipo contrario a jugar por 2
                    puntos. En caso de que se rechace el desafío el equipo
                    desafiante gana 1 punto, los equipos devuelven las cartas al
                    mazo y se reparte nuevamente para otra ronda.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwoTruco">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwoTruco"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwoTruco"
                  >
                    Retruco
                  </button>
                </h2>
                <div
                  id="flush-collapseTwoTruco"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwoTruco"
                  data-bs-parent="#accordionFlushExampleTruco"
                >
                  <div className="accordion-body">
                    Cuando un equipo cantó "truco", el equipo contrario está en
                    condiciones de aumentar la apuesta de puntos cantando
                    "retruco", en este caso si es aceptado se estarían jugando 3
                    puntos y si es rechazado el equipo desafiante gana 2 puntos.
                    Si es rechazado, los equipos devuelven las cartas al mazo y
                    se reparte nuevamente para otra ronda.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThreeTruco">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThreeTruco"
                    aria-expanded="false"
                    aria-controls="flush-collapseThreeTruco"
                  >
                    Vale 4
                  </button>
                </h2>
                <div
                  id="flush-collapseThreeTruco"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThreeTruco"
                  data-bs-parent="#accordionFlushExampleTruco"
                >
                  <div className="accordion-body">
                    Cuando un equipo cantó "retruco", el equipo contrario está
                    en condiciones de aumentar la apuesta de puntos cantando
                    "vale 4", en este caso si es aceptado se estarían jugando 4
                    puntos y si es rechazado el equipo desafiante gana 3 puntos.
                    Si es rechazado, los equipos devuelven las cartas al mazo y
                    se reparte nuevamente para otra ronda. En caso de que sea
                    aceptado se juega hasta que un equipo gane 2 manos y se
                    termina la ronda.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reglas;
