import React from "react"
import { Row, Col } from "antd"
import logincontainer from "../assets/logincontainer.png"
import "./SideLogin.css"
import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.css"
export default function SideLogin() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  return (
    <>
      <div>
        <Row>
          <Col md={24} lg={10} sm={24}>
            <div className="form-container">
              <div style={{ marginBottom: "20px" }}>
                <h2>
                  <b>LOGIN TO ESCROWBLOCK</b>
                </h2>
              </div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!"
                        }
                      ]}
                    >
                      <label>
                        <b>Your Phone or EMAIL</b>
                      </label>

                      <Input
                        // prefix={<UserOutlined className="site-form-item-icon" />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <label>
                      <b>Your Password</b>
                    </label>

                    <a
                      style={{ float: "right" }}
                      className="login-form-forgot"
                      href=""
                    >
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        }
                      ]}
                    >
                      <Input.Password size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button
                        block
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
                Or <a href="">register now!</a>
              </Form>
            </div>
          </Col>
          <Col lg={14}>
            <div className="overflow-hidden bg-blue-100 d-lg-block pl-0 h-100">
              <div className="login_container-2 d-flex align-items-center justify-content-center h-100 overflow-hidden">
                <img className="login_container_img" src={logincontainer}></img>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
