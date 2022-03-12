import Link from "next/link";

const Gnb = () => (
  <nav className="gnb">
    <ul>
      <li>
        <Link href={"/"}>홈</Link>
      </li>
      <li>
        <Link href={"/products"}> 상품목록</Link>
      </li>
      <li>
        <Link href={"/cart"}> 장바구니</Link>
      </li>
    </ul>
  </nav>
);

export default Gnb;
