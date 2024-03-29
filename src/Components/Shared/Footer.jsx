const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="" />
        <p>
          M M GROUP
          <br />
          Providing reliable tech since 2012
        </p>
      </aside>
      <nav className="">
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
        <aside className="footer footer-center p-4 bg-base-300 text-base-content">
    <p>Copyright © 2023 - All right reserved by M M GROUP</p>
  </aside>
    </div>
    
  );
};

export default Footer;
