import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM Project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a
          href="https://github.com/efshinzarei"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        Learning Next.js | CRM Project &copy;{" "}
      </footer>
    </>
  );
}

export default Layout;
