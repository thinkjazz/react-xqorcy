import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import { PageHeader, Row, Tag, Typography } from 'antd';
import { CompassOutlined, UserOutlined, CodeTwoTone } from '@ant-design/icons';
const { Paragraph, Text, Link } = Typography;

const content = (
  <>
    <Paragraph>
      <CodeTwoTone twoToneColor="#1abc9c" />
      <Text>Rookie JavaScript Developer</Text>
    </Paragraph>
    <Paragraph>
      Опыт работы в IT - более 10 лет. Успешно прошёл несколько десятков
      собеседований и сам провёл более сотни, проверил множество тестовых
      заданий.
    </Paragraph>
    <Paragraph>
      Глубоко изучил весь процесс разработки ПО, поработав на различных позициях
      (Support, Frontend, Fullstack, Аналитик, PM, Teamlead) как на стороне
      исполнителя, так и на стороне заказчика. Работал как с огромными
      enterprise-проектами, так и создавал небольшие проекты с нуля.
    </Paragraph>
  </>
);

const Content = ({ children }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
  </Row>
);

const Mentor = () => (
  <PageHeader
    title="Ройч Бартмосс"
    subTitle="Night City, USA"
    className="site-page-header"
    tags={[
      <Tag icon={<UserOutlined />} color="cyan">
        Свободен
      </Tag>,
    ]}
    extra={[]}
  >
    <Content>{content}</Content>
    <Tag color="blue">TypeScript</Tag>
    <Tag color="yellow">Javascript</Tag>
    <Tag color="green">Vue</Tag>
    <Tag color="blue">React</Tag>
    <Tag color="red">Angular</Tag>
    <Tag color="volcano">Svelte</Tag>
    <Tag color="default">Управление командой</Tag>
    <Tag color="default">Процессы разработки и тестирования</Tag>
    <Tag color="default">Прохождение собеседований</Tag>
    <Tag color="default">Мотивация команды</Tag>
    <Tag color="default">Управление продуктом</Tag>
    <Tag color="default">Customer development</Tag>
    <Tag color="default">Управление проектами</Tag>
    <Tag color="default">Распределённая команда</Tag>
    <Tag color="default">Управление знаниями в команде</Tag>
  </PageHeader>
);

export default Mentor;
