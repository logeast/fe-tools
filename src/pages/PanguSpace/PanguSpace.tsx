import React, { useState, Fragment, useEffect } from "react";
import { Row, Col, Card, Form, Input, Upload, Space } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { useControllableValue } from "@umijs/hooks";
import pangu from "pangu";
import "./panguSpace.less";
import Button from "antd/es/button";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

const PanguSpace: React.FC<{}> = () => {
    const [state, setState] = useControllableValue();
    const [value, setVlaue] = useState();

    const getFileInfo = (file) => {
        const render = new FileReader();
        render.readAsText(file);
        render.onload = (result) => {
            const a = result.target?.result
            setVlaue(a)
        }
        // console.log(file);
    }

    useEffect(() => {
        pangu.spacing(value)
    })

    return (
        <PageContainer>
            <Row gutter={24}>
                <Col span={12}>
                    <Card>
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{ width: "100%" }}
                        >
                            <Card.Meta
                                description={
                                    <span className="control-inline">
                                        <span>
                                            将文档内容复制到下面的文本框中或者：
                                        </span>
                                        <Upload
                                            style={{ display: "inline-block" }}
                                            showUploadList={false}
                                            beforeUpload={getFileInfo}
                                        >
                                            <Button type="primary">
                                                <UploadOutlined />
                                                点击上传
                                            </Button>
                                        </Upload>
                                    </span>
                                }
                            />
                            <Form>
                                <Form.Item>
                                    <Input.TextArea
                                        rows={24}
                                        placeholder="请输入需要格式化的内容"
                                        value={value}
                                        onChange={(e) =>
                                            setState(
                                                pangu.spacing(e.target.value),
                                            )
                                        }
                                    />
                                </Form.Item>
                            </Form>
                        </Space>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{ width: "100%" }}
                        >
                            <Card.Meta
                                description={
                                    <span className="control-inline">
                                        <span>处理后的文本如下：</span>
                                        <Upload
                                            style={{ display: "inline-block" }}
                                        >
                                            <Button type="primary">
                                                <DownloadOutlined /> 下载
                                            </Button>
                                        </Upload>
                                    </span>
                                }
                            />
                            <Form>
                                <Form.Item>
                                    <Input.TextArea
                                        rows={24}
                                        placeholder="请复制优化后的文字"
                                        value={state}
                                    />
                                </Form.Item>
                            </Form>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </PageContainer>
    );
};

export default PanguSpace;
