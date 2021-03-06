import * as React from 'react';

export interface NavbarButtonProps {
  accent: string;
  href: string;
  label: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ accent, href, label }) => (
  <p className="control">
    <a className={`button is-${accent}`} href={href} target="_new" data-testid={`navbutton-a`}>
      <strong>{label}</strong>
    </a>
  </p>
);

export default NavbarButton;
