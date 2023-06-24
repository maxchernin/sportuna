function SubMenu({ label, link, children }) {
    return (
      <li>
        <a href={link}>{label}</a>
        <ul>
          {children}
        </ul>
      </li>
    );
  }
  export default SubMenu;