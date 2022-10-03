import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import {
  PageHeader,
  Tag,
  Typography,
  Row,
  Col,
  Card,
  Divider,
  Menu,
  Button,
  Dropdown,
} from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { CompassOutlined, UserOutlined, CodeTwoTone } from '@ant-design/icons';
const { Paragraph, Text, Link, Title } = Typography;

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const content = (
  <>
    <Paragraph>
      <Title level={2}>Ройч Бартмосс</Title>
      <Text type="secondary">Night City, USA / UTM: 10:00</Text>
    </Paragraph>
    <Paragraph>
      <Text strong>JavaScript Developer — </Text>
      <Link href="https://yandex.ru" target="_blank">
        Yandex LLC
      </Link>
    </Paragraph>
    <Paragraph>
      <Text keyboard>👨‍🎓 Занятий проведено: 100</Text>
    </Paragraph>
    Поможет с:
    <Tag color="green">Новичкам</Tag>
    <Tag color="green">обучающимся самостоятельно</Tag>
    <Tag color="green">прошедшим курсы</Tag>
    <Tag color="default">Junior</Tag>
    <Tag color="default">Middle</Tag>
    <Paragraph>
      Глубоко изучил весь процесс разработки ПО, поработав на различных позициях
      (Support, Frontend, Fullstack, Аналитик, PM, Teamlead) как на стороне
      исполнителя, так и на стороне заказчика. Работал как с огромными
      enterprise-проектами, так и создавал небольшие проекты с нуля.
    </Paragraph>
    <Paragraph>
      <Tag color="blue">TypeScript</Tag>
      <Tag color="yellow">Javascript</Tag>
      <Tag color="green">Vue</Tag>
      <Tag color="blue">React</Tag>
      <Tag color="red">Angular</Tag>
      <Tag color="volcano">Svelte</Tag>
    </Paragraph>
    <Paragraph>
      <Divider>Стоимость занятий</Divider>
      <p>Часовое занятие с ментором 1871₽/ час</p>
      <p>Пробные 15 минут Бесплатно</p>
      <p>Дополнительные услуги Разбор проекта по запросу</p>

      <p>Первое занятие-5%</p>
      <p>Пакет 5 занятий-5%</p>
      <p>Пакет 10 занятий-10%</p>
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
  <div>
    <Row justify="start">
      <Col>
        <Card>
          <PageHeader
            title="Ройч Бартмосс"
            subTitle="Денпасар, Индонезия / GMT+08"
            avatar={{
              src: 'https://i1.sndcdn.com/avatars-000288873036-ix0cdf-t500x500.jpg',
            }}
            className="site-page-header"
            tags={[
              <Tag icon={<UserOutlined />} color="cyan">
                Свободен
              </Tag>,
            ]}
            extra={[
              <Button key="more">Узнать подробнее</Button>,

              <Button key="apply" type="primary">
                Оставить заявку
              </Button>,

              // <DropdownMenu key="more" />,
            ]}
          >
            <Content>{content}</Content>
          </PageHeader>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Mentor;
