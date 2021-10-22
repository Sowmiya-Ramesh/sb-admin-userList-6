//mport FolderIcon from "@mui/icons-material/Folder";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";
// import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#!"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <EmojiEmotionsIcon />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <DashboardIcon />
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Profile</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/profiles">
            <PersonIcon />
            <span>Profiles</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/create-profile">
            <PersonAddIcon />
            <span>Create Profile</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Users</div>

        <li className="nav-item">
          <a className="nav-link " href="/users">
            <PeopleAltIcon />
            <span>Users</span>
            {/* <ArrowForwardIosIcon /> */}
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/create-user">
            <GroupAddIcon />
            <span>Create User</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="https://media.istockphoto.com/photos/cartoon-rocket-space-ship-picture-id491615068?b=1&k=20&m=491615068&s=170667a&w=0&h=85SFPdNHU5wxneb16YM2ipXvuBKokr2Jlmfn-r78OF4="
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
}
