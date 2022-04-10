import React from "react"
import { Row, Col } from "antd"
import { Tabs } from "antd"
import logincontainer from "../assets/logincontainer.png"
import "./SideLogin.css"
import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useState } from "react"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.css"
export default function SideRegister() {
  const { TabPane } = Tabs
  const [email, setemail] = useState(false)
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  const handlEmail = () => {
    setemail(!email)
  }
  return (
    <>
      <div>
        <Row>
          <Col md={24} lg={10} sm={24}>
            <div className="form-container">
              <div style={{ marginBottom: "20px" }}>
                <h2>
                  <b>Create Your Account</b>
                </h2>
              </div>
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1" onChange={handlEmail}>
                    <TabPane tab="Phone Number" key="1"></TabPane>
                    <TabPane tab="Email" key="2"></TabPane>
                  </Tabs>
                </Col>
              </Row>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                {email ? (
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email"
                          }
                        ]}
                      >
                        <label>
                          <b>Email</b>
                        </label>

                        <Input
                          // prefix={<UserOutlined className="site-form-item-icon" />}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        name="phone number"
                        rules={[
                          {
                            required: true,
                            message: "Please input your number"
                          }
                        ]}
                      >
                        <label>
                          <b>Phone Number</b>
                        </label>

                        <Input
                          type="text"
                          // prefix={<UserOutlined className="site-form-item-icon" />}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col span={24}>
                    <label>
                      <b>Create Password</b>
                    </label>
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
                        Create Account
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div className="d-flex py-3 border-top mt-4">
                      <t>Already Account?</t>
                      <a href="#">Login</a>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col lg={14}>
            <div className="login_container-2">
              <img className="login_container_img" src={logincontainer}></img>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
