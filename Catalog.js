import React from 'react';
import Mentor from '../Components/Mentor';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>
        <Mentor />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
