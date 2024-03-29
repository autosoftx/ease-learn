import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkTo = "https://yasser.is-a.dev";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2></h2>
            <p className="description"></p>
            <p className="small_text description"></p>
          </div>
        </div>

        <p className="copyright">
          © {year}, Developed by {" "}
          <a href={linkTo} target="_blank">
            Yasser Fedsi
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
