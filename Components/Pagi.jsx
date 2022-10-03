import { Pagination } from 'antd';
import React, { useState } from 'react';

const Pagi = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={80} />;
};

export default Pagi;
