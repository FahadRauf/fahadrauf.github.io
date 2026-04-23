import {
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import TableauIcon from "../components/icons/TableauIcon.jsx";

export const EMAIL = "fahadrauf1997@gmail.com";

export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/FahadRauf",
    Icon: FaGithub,
  },
  {
    id: "tableau",
    label: "Tableau Public",
    href: "https://public.tableau.com/app/profile/fahad.rauf/vizzes",
    Icon: TableauIcon,
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/FahadRauf3",
    Icon: FaXTwitter,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/fahadrauf_1/",
    Icon: FaInstagram,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
    Icon: FaEnvelope,
  },
];
