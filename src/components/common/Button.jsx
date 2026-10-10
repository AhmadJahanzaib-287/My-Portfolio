const BUTTON_STYLES = String.raw`.button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 12px; padding: 0 20px; border: 1px solid transparent; border-radius: 8px; cursor: pointer; font-size: var(--text-sm); font-weight: 700; transition: transform 180ms ease, background 180ms ease, border-color 180ms ease; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--color-primary); color: var(--color-on-primary); }
.button-primary:hover { background: var(--color-text); }
.button-secondary { border-color: var(--color-border); background: var(--color-surface); color: var(--color-text); }
.button-secondary:hover { border-color: var(--color-primary); }`;

function Button({ children, href, variant = "primary", ...props }) {
  const className = `button button-${variant}`;
  return (
    <>
      <style>{BUTTON_STYLES}</style>
      {href ? <a className={className} href={href} {...props}>{children}</a> : <button className={className} {...props}>{children}</button>}
    </>
  );
}

export default Button;
