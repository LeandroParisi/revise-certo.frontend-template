import { button } from "shared-components/tailwind";

export function ExampleComponent({ test }) {
  return <h1 className="text-brand-primary">

    <button
      className={button({ color: 'primary' })}
    >
      Test button
    </button>


    <button
      className={button({ color: 'primary-tertiary' })}
    >
      Test button
    </button>

    <button
      className={button({ color: 'error' })}
    >
      Test button
    </button>
  </h1>
}
