import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Upload, Space } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { useControllableValue } from "@umijs/hooks";
import pangu from "pangu";
import "./panguSpace.less";
import Button from "antd/es/button";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

interface FileOptionConfig {
    name?: string;
    type?: string;
}

const stringToArray = (obj: any) => [obj];

const PanguSpace: React.FC<{}> = () => {
    const [value, setValue] = useControllableValue<string>();
    const [resultValue, setResultValue] = useState<string>();
    const [fileOption, setFileOption] = useState<FileOptionConfig>();

    const getFileInfo = (file: any) => {
        console.log({ file });
        setFileOption(file);

        const render = new FileReader();
        render.readAsText(file);
        render.onload = (result) => {
            setValue(result.target?.result);
            setResultValue(pangu.spacing(result.target?.result));
        };
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setResultValue(pangu.spacing(event.target.value));
    };

    const handleDownload = () => {
        const resultBlob = new Blob(stringToArray(resultValue), {
            type: fileOption?.type,
        });
        const url = window.URL.createObjectURL(resultBlob);
        const aDom: any = document.createElement("a");
        aDom.download = fileOption?.name;
        aDom.href = url;
        aDom.click();
        window.URL.revokeObjectURL(url);
    };

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
                                        onChange={handleChange}
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
                                        <Button
                                            type="primary"
                                            onClick={handleDownload}
                                            disabled={!resultValue}
                                        >
                                            <DownloadOutlined /> 下载
                                        </Button>
                                    </span>
                                }
                            />
                            <Form>
                                <Form.Item>
                                    <Input.TextArea
                                        rows={24}
                                        placeholder="请复制优化后的文字"
                                        value={resultValue}
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
