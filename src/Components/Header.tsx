import { createStyles, Group } from "@mantine/core";
import IMG from "./../img/download.png";

interface Props {
  className?: string;
}
const useStyle = createStyles(() => ({
  link__a: {
    marginRight:"30px",
    color: "black",
    fontWeight:"bold",
    hover:{
    textDecoration:"none",
    }
  },
  div__link: {
    justifyContent: "center",
  },
  navbar: {
    margin: "auto",
    listStyle:"none",
    display: "flex",
    marginLeft:"70vh",
  },
}));
const Header = ({ className }: Props) => {
  const { classes, cx } = useStyle();
  return (
    <Group className={className} style={{display:"block", backgroundColor:"transparent"}}>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"rgba(255,255,255,.95) !important"}}>
        <a className="navbar-brand" href="#">
          <img src={IMG} width={"50px"} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={cx(classes.navbar)} >
            <li className="nav-item ">
              <a className={cx(classes.link__a)}  href="#">
                Lịch chiếu 
              </a>
            </li>
            <li className="nav-item">
              <a className={cx(classes.link__a)} href="#">
                Cụm rạp
              </a>
            </li>
            <li >
              <a
                className={cx(classes.link__a)} 
                href="#"
              >
                Tin tức
              </a>
 
            </li>
            <li className="nav-item">
              <a className={cx(classes.link__a)}  href="#">
                Ứng dụng
              </a>
            </li>
          </ul>
        <div className="signin__regester d-flex">
            <div className="sign__in mr-3">
                <a  className={cx(classes.link__a)} href="#">Đăng nhập</a>
            </div>
            <div className="regester">
                <a className={cx(classes.link__a)}  href="#">Đăng ký</a>
            </div>
        </div>
        </div>
      </nav>
    </Group>
  );
};

export default Header;
