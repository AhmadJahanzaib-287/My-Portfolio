const TAG_STYLES = String.raw`.tag { display: inline-flex; min-height: 31px; align-items: center; padding: 0 11px; border: 1px solid var(--color-border); border-radius: 999px; color: var(--color-text-muted); font-size: 11px; }
.tag { min-height: 26px; padding-inline: 9px; font-size: 10px; }`;

function Tag({ children }) {
  return (
    <>
      <style>{TAG_STYLES}</style>
      <span className="tag">{children}</span>
    </>
  );
}

export default Tag;
