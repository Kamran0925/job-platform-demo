import BellIcon from "../../../public/assets/icons/bell";
import BriefcaseIcon from "../../../public/assets/icons/briefcase";
import BulbIcon from "../../../public/assets/icons/buld";
import ChartIcon from "../../../public/assets/icons/chart";
import ContactIcon from "../../../public/assets/icons/contact";
import FileIcon from "../../../public/assets/icons/file";
import HomeIcon from "../../../public/assets/icons/home";
import MapIcon from "../../../public/assets/icons/map";
import MessageIcon from "../../../public/assets/icons/message";
import PaymentIcon from "../../../public/assets/icons/payment";
import PieIcon from "../../../public/assets/icons/pie";
import UserGroupIcon from "../../../public/assets/icons/users-group";

export const NAV_LINKS = [
  {
    route: "/dashboard",
    icon: HomeIcon,
    label: "Dashboard",
  },
  {
    route: "/explore",
    icon: MapIcon,
    label: "Explore",
  },
  {
    route: "/job-listings",
    icon: FileIcon,
    label: "Job Listings",
  },
  {
    route: "/participants",
    icon: UserGroupIcon,
    label: "Participants",
  },
  {
    route: "/companies",
    icon: BriefcaseIcon,
    label: "Companies",
  },
  {
    route: "/orders",
    icon: ChartIcon,
    label: "Orders",
  },
  {
    route: "/work-match-tasks",
    icon: BulbIcon,
    label: "WorkMatch Tasks",
  },
  {
    route: "/analytics",
    icon: PieIcon,
    label: "Analytics",
  },
  {
    route: "/calender",
    icon: ChartIcon,
    label: "Calender",
  },
  {
    route: "/payments",
    icon: PaymentIcon,
    label: "Payments",
  },
  {
    route: "/messages",
    icon: MessageIcon,
    label: "Messages",
  },
  {
    route: "/notifications",
    icon: BellIcon,
    label: "Notifications",
  },
  {
    route: "/contact-us",
    icon: ContactIcon,
    label: "Contact Us",
  },
];
