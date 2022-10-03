import { Card, Typography, Input, Space } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchForm = () => (
  <>
    <div>
      <Title level={2}> Поиск наставника</Title>
    </div>
    <Card>
      <Search placeholder="Поиск наставника" onSearch={onSearch} enterButton />
      {/* <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    /> */}
    </Card>
  </>
);

export default SearchForm;
