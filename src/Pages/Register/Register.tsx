import { createStyles } from "@mantine/core";
import React, { useState } from "react";
import { FaRegistered } from "react-icons/fa";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { Link } from "react-router-dom";

const useStyle = createStyles(() => ({
  container__register: {
    padding: "32px",
    background:
      "url(https://tcdtist-tix-clone.vercel.app/static/media/backapp.b46ef3a1.jpg)",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  form__register: {
    width: "500px",
    backgroundColor: "white",
    transform: "translateX(60vh)",
    marginTop: "15vh !important",
    padding: "50px !important",
    borderRadius: "30px",
  },
}));

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const { classes, cx } = useStyle();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className={classes.container__register}>
        <Form
          className={classes.form__register}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <div className="header__form">
            <div className="logo" style={{textAlign:"center",fontSize:"30px", color:"#fb4226"}}>
              <FaRegistered />
              <p style={{fontWeight:"bold", color:"black"}}>Đăng kí</p>
            </div>
        
          </div>
          <Form.Item
            name="fullname"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>



          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#fb4226",
                border: "none",
              }}
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
          <Link to="/sign__in">Bạn đã có tài khoản ? Đăng nhập ngay</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
