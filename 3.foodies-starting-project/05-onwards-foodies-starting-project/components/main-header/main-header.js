import Link from "next/link";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";
export default function MainHeader() {
  // Image Component
  /**
   * This API reference will help you understand how to use props and configuration options available for the Image Component.
   * For features and usage, please see the Image Component Page
   * 레이지 로딩이 가능하게 해줌
   * https://nextjs.org/docs/app/api-reference/components/image
   */
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* 
        Image Component는 레이지 로딩이 가능하게 해주지만, 
        항상 보일 때는 레이지 로딩을 할 필요가 없으므로 priority 옵션을 추가해줌
      */}
        <Image
          src={logoImage}
          alt="NextLevel Food"
          width={100}
          height={100}
          priority
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
