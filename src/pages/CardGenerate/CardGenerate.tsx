import React, { useState, Fragment } from "react";
import { Row, Col, Card, Form, Input, Upload, Space } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import "./CardGenerate.less";
import Button from "antd/es/button";
import html2canvas from 'html2canvas';

interface FileOptionConfig {
    name?: string;
    type?: string;
}

const stringToArray = (obj: any) => [obj];

const CardGenerate: React.FC<{}> = () => {
    const handleGenerate = () => {
        const a = document.getElementById('a');
        // await html2canvas(a);
    }
    return (
        <PageContainer content="卡片生成器，快速生成并下载卡片">
            <Row gutter={24}>
                <Col span={6}>
                    <Card id="a">
                        a
                    </Card>
                    <Button type="primary">下载</Button>
                </Col>
                <Col span={6}>
                    <Card>
                        a
                    </Card>
                    <Button type="primary">下载</Button>
                </Col>
            </Row>
            <Card>
                <strong>依赖项：</strong>
                <a href="https://github.com/vinta/pangu.js" target="_blank">
                    vinta/pangu.js
                </a>
            </Card>
        </PageContainer>
    );
};

export default CardGenerate;
