import React from 'react';
import Mentor from './Components/Mentor';
import Pagi from './Components/Pagi';
import SearchForm from './Components/SearchForm';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Card, Space, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

const App = () => (
  <>
    <div></div>
    <Layout>
      <Header>
        <SearchForm />
      </Header>
      <Content>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Mentor />

          <Mentor />
          <Mentor />
          <Mentor />
        </Space>
      </Content>
      <Footer>
        <Row align="middle" justify="center">
          <Col span={24}>
            <Pagi />
          </Col>
        </Row>
      </Footer>
    </Layout>
  </>
);

export default App;
