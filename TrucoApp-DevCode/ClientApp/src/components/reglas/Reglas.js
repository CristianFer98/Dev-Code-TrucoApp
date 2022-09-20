import React from 'react';
import RuleSet from './RuleSet';
import './rules.css';
import data from './rules.json';
import { useState, useEffect } from 'react';

export function Reglas() {
  const [rules, setRules] = useState([]);

  // se ejecuta una vez asignando la variable data a tasks
  useEffect(() => {
    setRules(data);
  }, []);

  return (
    <div className="rules-container container-fluid text-center p-5">
      <div className="row">
        <div className="col">
          <h1 className="my-4">Reglas del Truco</h1>
          <p className="my-4">
            Truco is a card game played in Argentina, Brazil, Uruguay, Paraguay,
            and other countries in South America. It is also played in Spain,
            where it is called truco, and in Portugal, where it is called truc.
            It is a trick-taking game, similar to the French game belote, and
            the Italian game scopa. The game is played with a standard 40-card
            deck, with the 8s, 9s, and 10s removed. The game is played in three
            rounds, with the first two rounds being worth one point each, and
            the third round being worth two points. The first team to reach 12
            points wins the game.
          </p>
        </div>
      </div>
      <div className="row">
        {rules.map((ruleSet) => (
          <div className="col-12 col-xl-6 my-4">
            <RuleSet title={ruleSet.title} dataRules={ruleSet.rules} />
          </div>
        ))}
      </div>
    </div>
  );
}
