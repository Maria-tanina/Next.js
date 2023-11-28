import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </header>
  );
};
