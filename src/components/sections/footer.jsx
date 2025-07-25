function Footer() {
  const aboutLinks = [
    {
      link: "About MyFeedback",
      href: "#",
    },
    {
      link: "Investor Relations",
      href: "#",
    },
    {
      link: "Trust & Safety",
      href: "#",
    },
    {
      link: "Content Guidelines",
      href: "#",
    },
    {
      link: "Terms of Service",
      href: "#",
    },
    {
      link: "Privacy Policy",
      href: "#",
    },
    {
      link: "Your  Privacy Choices",
      href: "#",
    },
  ];
  const MyFeedbackLinks = [
    {
      link: "MyFeedback for business",
      href: "#",
    },
    {
      link: "Collections",
      href: "#",
    },
    {
      link: "Talk",
      href: "#",
    },
    {
      link: "Events",
      href: "#",
    },
    {
      link: "MyFeedback blog",
      href: "#",
    },
    {
      link: "Support",
      href: "#",
    },
    {
      link: "Developers",
      href: "#",
    },
  ];
  return (
    <>
      <footer>
        <div className="container mx-auto ">
          {/* grid container */}
          <div className="grid  px-4 xl:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 md:py-16">
            {/* about column */}
            <div>
              <h4 className="font-bold text-lg tracking-tight text-gray-900">
                About
              </h4>
              <ul>
                {aboutLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="hover:underline text-gray-500"
                      href={data.href}>
                      {data.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* MyFeedback  column */}
            <div>
              <h4 className="font-bold text-lg tracking-tight text-gray-900">
                MyFeedback
              </h4>
              <ul>
                {MyFeedbackLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      className="hover:underline text-gray-500"
                      href={data.href}>
                      {data.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* languages column */}
            <div>
              <h5 className="font-bold text-lg tracking-tight text-gray-900">
                Languages
              </h5>
              <p className="text-gray-500">English &#8609;</p>
              <h5 className="font-bold text-lg tracking-tight text-gray-900">
                Countries
              </h5>
              <p className="text-gray-500">Singapore &#8609;</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
