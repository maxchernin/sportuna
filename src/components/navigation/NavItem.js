function NavItem({ label, link }) {
    return (
      <li>
        <a href={link}>{label}</a>
      </li>
    );
  }
  export default NavItem;