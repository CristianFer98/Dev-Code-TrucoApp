import React from 'react';
import { useState, useEffect } from 'react';

function RuleSet({ title, dataRules }) {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    setRules(dataRules);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div
        class="accordion accordion-flush"
        id={'accordionFlushExample' + title}
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id={'flush-headingOne' + title}>
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={'#flush-collapseOne' + title}
              aria-expanded="false"
              aria-controls={'flush-collapseOne' + title}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id={'flush-collapseOne' + title}
            class="accordion-collapse collapse"
            aria-labelledby={'flush-headingOne' + title}
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RuleSet;
