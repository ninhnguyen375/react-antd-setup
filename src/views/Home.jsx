import React from 'react';
import CommonLayout from '../layouts/CommonLayout';
import { Form, Input } from 'antd';
// import HelloCodeServer from '../components/HelloCodeServer';

export default props => {
  const handleSearch = e => {
    console.log(e.target.value);
  };

  return (
    <CommonLayout>
      <Form>
        <Input.Search onChange={handleSearch} />
      </Form>
    </CommonLayout>
  );
};
