import { DatePicker, Space } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';


export default function AntdDate (props) {
const [birthDate, setBirthDate] = useState(0);

const dateFormat = 'DD-MMMM-YYYY';

function onChange(date, dateString) {
  console.log(date);
  console.log(dateString);
  const birthDateUser = moment(date).format(dateFormat);
  const currDate = moment();
  var diff = currDate.diff(birthDateUser,'years'); // calculates patient's age in years
  console.log('umurnya sekarang', diff)
  console.log('gue currDate',currDate)
  console.log(birthDateUser)
  console.log(typeof birthDateUser)
  setBirthDate(birthDateUser)
  props.handleChangeDates (diff)
}

return(
  <Space direction="vertical">
    <DatePicker onChange={onChange} defaultValue={birthDate} format={dateFormat} />
  </Space>
)
}


