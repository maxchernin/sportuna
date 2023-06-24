function MegaMenu({ label, link, children }) {
    return (
      <li className="kf_megamenu">
        <a href={link}>{label}</a>
        <div className="megamenu_dec container">
          {/* ... rest of mega menu structure ... */}
          {children}
          {/* ... rest of mega menu structure ... */}
        </div>
      </li>
    );
  }
  export default MegaMenu;