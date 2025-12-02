"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  // usePathname 훅도 use client 컴포넌트 안에서 사용해야 함
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
