import { useForm } from "react-hook-form";
import { createStyles } from "@mantine/core";
import { Form, Button, Input } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { defaultShouldCreate } from "@mantine/core/lib/components/Select/Select";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./../../store";
import {login} from './../../slices/auth'
interface LoginValue {
  taiKhoan: string;
  matKhau: string;
}
const useStyle = createStyles(() => ({
  container__signin: {
    padding: "32px",
    background:
      "url(https://tcdtist-tix-clone.vercel.app/static/media/backapp.b46ef3a1.jpg)",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  form__signin: {
    width: "20%",
    display: "block",
    boxSizing: "border-box",
    marginLeft: "80vh !important",
    marginRight: "auto",
    transform: "translateY(30vh)",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "30px",
  },
}));
const LogIn = () => {
  const { register, handleSubmit,formState:{errors}, } = useForm<LoginValue>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    // mode: cách để trigger validation, default mặc định là onSubmit
    mode:"onTouched",
  });
  const onError=(errors:any)=>{
    console.log(errors);
  }
  const dispatch = useDispatch<AppDispatch>()
  const {currentUser,isLoading,error}= useSelector((state:RootState)=>state.auth)
  const [, forceUpdate] = useState({});
  // const taiKhoan = register('taiKhoan');
  // console.log(taiKhoan);

  useEffect(() => {
    forceUpdate({});
  }, []);
  const onSubmit = (values: LoginValue) => {
    
  }
  const onFinish = (values: LoginValue) => {
    console.log(values);
    dispatch(login(values))
  };


  const { classes, cx } = useStyle();
  return (
    <div>
      <div className={classes.container__signin}>
        <Form
        
          name="normal_login"
          className={classes.form__signin}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onError={onError}
        >
          <div className="container__form" style={{ padding: "50px" }}>
            <div className="header__form">
              <div
                className="logo"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#fb4226",
                }}
              >
                <FaUserCircle />
                <p style={{ fontWeight: "bold", color: "black" }}>Đăng nhập</p>
              </div>
            </div>
            <Form.Item
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Tài khoản không được để trống!",
                },
              ]}
            >
              <Input placeholder="Username" {...register("taiKhoan")} />
            </Form.Item>
            <Form.Item
              name="matKhau"
              rules={[
                { required: true, message: "Mật khẩu không được để trống!" },
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "có ít nhất 8 ký tự, trong đó có 1 kí tự số và 1 kí tự chữ",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="mật khẩu"
                {...register("matKhau")}
              />
            </Form.Item>
            <Form.Item>
              <div>
                <Button
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    backgroundColor: "#fb4226",
                    border: "none",
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Đăng nhập
                </Button>
              </div>

              <Link to="/register">Bạn chưa có tài khoản? Đăng kí ngay!</Link>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
