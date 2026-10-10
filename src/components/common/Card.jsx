const CARD_STYLES = String.raw`.card { border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); box-shadow: var(--shadow-card); transition: transform 200ms ease, box-shadow 200ms ease; }
.card:hover { transform: translateY(-2px); box-shadow: 0 16px 38px rgba(31, 41, 51, 0.1); }`;

function Card({ children, className = "" }) {
  return (
    <>
      <style>{CARD_STYLES}</style>
      <article className={`card ${className}`}>{children}</article>
    </>
  );
}

export default Card;
