import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navbar">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/createpost">
        <a>create</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/registration">
        <a>Registration</a>
      </Link>
    </div>
  );
}
