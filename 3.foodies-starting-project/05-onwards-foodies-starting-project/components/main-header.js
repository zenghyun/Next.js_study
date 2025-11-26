import Link from "next/link";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img
          src={logoImage.src}
          alt="NextLevel Food"
          width={100}
          height={100}
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share Meals</Link>
          </li>
          <li>
            <Link href="/meals/something">Something</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
