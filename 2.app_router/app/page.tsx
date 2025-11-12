import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("hello!");
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          {/* 
            이렇게 이동하면 백엔드에서 새로운 페이지를 요청하기 때문에 이렇게 사용하면 안됨s 
            현재 페이지를 벗어나 새로운 페이지를 요청함 

            즉, SPA (Single Page Application)가 아니게 됨 
          */}
          <a href="/about">About us</a>
          {/* 이렇게 사용해야 함 */}
          <Link href="/about">About us</Link>
        </div>
      </div>
    </main>
  );
}
