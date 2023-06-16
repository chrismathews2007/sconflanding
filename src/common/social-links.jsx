const social_links = [
  {
    link: "https://www.youtube.com/channel/UCeWHzNFD65_w0IwqWuJ3SQg",
    target: "_blank",
    icon: "fab fa-youtube",
    color: "tp-f-youtube",
  },
  {
    link: "https://twitter.com/starconfs",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "tp-f-twitter",
  },
  {
    link: "https://www.facebook.com/starconfs",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "tp-f-fb",
  },
  {
    link: "https://www.instagram.com/starconfs/",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "tp-f-skype",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
