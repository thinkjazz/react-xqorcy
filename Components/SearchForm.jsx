import { Card, Typography, Input, Space } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;
const SearchForm = () => (
  <>
    <div>
      <Title level={2}> Поиск наставника</Title>
    </div>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);

export default SearchForm;
