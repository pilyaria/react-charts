import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Badge, Menu, Dropdown, Space, TreeSelect, Tree, DatePicker, ConfigProvider, Select, Button, Checkbox, Tooltip, Breadcrumb, Tabs, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment';
import {  
  UserOutlined,
  FullscreenOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
import React, { Component } from 'react';

// const menu = (
//   <Menu>
//     <Menu.Item>Action 1</Menu.Item>
//     <Menu.Item>Action 2</Menu.Item>
//   </Menu>
// );

//для вкладок с графиками
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

//для селекта 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

//Табличка с раскрывающейся подтабличкой
function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Номер', dataIndex: 'date', key: 'date' },
      { title: 'Наименование', dataIndex: 'name', key: 'name' },
      // {
      //   title: 'Status',
      //   key: 'state',
      //   render: () => (
      //     <span>
      //       <Badge status="success" />
      //       Finished
      //     </span>
      //   ),
      // },
      { title: 'Тепло', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: '',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        render: () => (
          <Space size="middle">
            {/* <a>Ведомость</a> */}
            <Button size="small">Ведомость</Button>
            {/* <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown> */}
          </Space>
        ),
      },
    ];

    const data = [
      {
        key:1,
        date: 'ДОМ №9 ЦО',
        name: 'ДОМ №9 ЦО',
        upgradeNum: '0', 
      },
      {
        key:2,
        date: 'ДОМ №7 ГВС',
        name: 'ДОМ №7 ГВС',
        upgradeNum: '3,7', 
      },
      {
        key:3,
        date: 'ДОМ №2 ГВС',
        name: 'ДОМ №2 ГВС',
        upgradeNum: '3,2', 
      },
      {
        key:4,
        date: 'ДОМ №1 ГВС',
        name: 'ДОМ №1 ГВС',
        upgradeNum: '2,3', 
      }


    ];

    // for (let i = 0; i < 3; ++i) {
    //   data.push({
    //     key: i,
    //     date: '2014-12-24 23:12:00',
    //     name: 'This is production name',
    //     upgradeNum: 'Upgraded: 56',
    //   });
    // }
    return <Table columns={columns} dataSource={data} pagination={false} bordered style={{ width: '700px' }}/>;
  };

  const columns = [
    { title: 'Тепло', dataIndex: 'name', key: 'name' },
    { title: 'Количество ТУ', dataIndex: 'platform', key: 'platform', align: 'center' },
    // { title: 'Пока', dataIndex: 'version', key: 'version' },
    // { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    // { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    // { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: '', key: 'view', render: () => <a>Показать</a>, align: 'center' },
    { title: '', key: 'operation', render: () => <Button size="small">Сохранить</Button>, align: 'center' },
  ];

  const data = [
    {
      key: 1,
      name: 'Тепло = 0',
      platform: '9',
    },
    {
      key: 2,
      name: '0 < Тепло < 20',
      platform: '8',
    },
    {
      key: 3,
      name: 'Недостоверно',
      platform: '7',
    },
    {
      key: 4,
      name: 'Всего',
      platform: '25',
    }
  ];
  // for (let i = 0; i < 3; ++i) {
  //   data.push({
  //     key: i,
  //     name: 'Screem',
  //     platform: 'iOS',
  //     version: '10.3.4.5654',
  //     upgradeNum: 500,
  //     creator: 'Jack',
  //     createdAt: '2014-12-24 23:12:00',
  //   });
  // }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
      style={{ width: '700px' }}
      //bordered
    />
  );
}

const treeData1 = [
  {
    title: 'Точка учёта',
    key: '0-0',
    value: '0-0',
    children: [
      {
        title: 'Договор',
        key: '0-0-0',
        value: '0-0-0',
        children: [
          {
            title: 'ЖК_Гарден Парк',
            key: '0-0-0-0',
            value: '0-0-0-0',
          },
          {
            title: 'ЖК_Легенда',
            key: '0-0-0-1',
            value: '0-0-0-1',
          },
          {
            title: 'ЖК_Эдальго',
            key: '0-0-0-2',
            value: '0-0-0-2',
          },
        ],
      },
      {
        title: 'Электрогорск',
        key: '0-0-1',
        value: '0-0-1',
        children: [
          {
            title: 'ЦДО "Истоки"',
            key: '0-0-1-0',
            value: '0-0-1-0',
          },
          {
            title: 'ЦДО"Истоки"',
            key: '0-0-1-1',
            value: '0-0-1-1',
          },
        ],
      },
      {
      title: 'ЛК МОЭК',
      key: '0-0-2',
      value: '0-0-2',
      children: [
        {
          title: '0150/004',
          key: '0-0-2-0',
          value: '0-0-2-0',
        },
        {
          title: '0303/047',
          key: '0-0-2-1',
          value: '0-0-2-1',
        },
        {
          title: 'ЦСКА',
          key: '0-0-2-3',
          value: '0-0-2-3',
        },
      ],
      },
      {
        title: '0003/004',
        key: '0-0-3',
        value: '0-0-3',
      },
    ],
  },
];

//Выбор групп
class Groups extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData1}
        placeholder="Выберите группу"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
        size="small"
       
      />
    );
  }
}

//Выбор ресурсов
class Resources extends React.Component {
  state = {
     value: ['0-0'],
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData2}
        placeholder="Выберите ресурс"
        //treeDefaultExpandAll
        onChange={this.onChange}
        treeCheckable
        maxTagCount={1}
        size="small"
       
      />
    );
  }
}

const treeData2 = [
  {
    title: 'Ресурсы',
    key: '0-0',
    children: [
      {
        title: 'ТЭ',
        key: '0-0-0',
      },
       {
        title: 'ЦО',
        key: '0-0-1',
      },
       {
        title: 'ГВС',
        key: '0-0-2',
      },
       {
        title: 'Вент',
        key: '0-0-3',
      },
       {
        title: 'ХВС',
        key: '0-0-4',
      },
       {
        title: 'ЭЭ',
        key: '0-0-5',
      },
       {
        title: 'Газ',
        key: '0-0-6',
      },
       {
        title: 'Пар',
        key: '0-0-7',
      },
    ],  
  },    
];

const { RangePicker } = DatePicker;

function onChangeData(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

function onChangeCheckbox(e) {
  console.log(`checked = ${e.target.checked}`);
}


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Настройки
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Выход
      </a>
    </Menu.Item>
  </Menu>
);


//для первого графика
const data = {
  labels: ['01.01.2021', '02.01.2021', '03.01.2021', '04.01.2021', '05.01.2021', '06.01.2021'],
  datasets: [
    {
      label: 't1',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 't2',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'p1',
      data: [1, 3, 2, 3, 1, 2],
      fill: false,
      backgroundColor: 'rgb(200, 200, 200)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'p2',
      data: [7, 5, 4, 3, 4, 5],
      fill: false,
      backgroundColor: 'rgb(100, 100, 100)',
      borderColor: 'rgba(54, 162, 200, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: 'M1',
      data: [2, 1, 0, 2, 1, 1],
      fill: false,
      backgroundColor: 'rgb(255,10, 235)',
      borderColor: 'rgba(255, 10, 235, 0.2)',
      yAxisID: 'y-axis-3',
    },
    {
      label: 'M2',
      data: [2, 2, 3, 2, 1, 2],
      fill: false,
      backgroundColor: 'rgb(54, 10, 235)',
      borderColor: 'rgba(54, 10, 235, 0.2)',
      yAxisID: 'y-axis-3',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
      
    ],
  },
  responsive: true,
  // отображение всех переменных в всплывающем окне
  interaction: {
     mode: 'index',
     intersect: false,
  },
  stacked: false,
  plugins: {
     title: {
       display: true,
       text: 'Точка учёта "Дом №1"'
     }
  },
};

const MultiAxisLine = () => (
  <>
    <div className='header'>
      <h2 className='title'>Типовой график</h2>
      <div className='links'>
        {/* <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/MultiAxisLine.js'
        >
          Github Source
        </a> */}
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

//для второго графика
let lineData;

const lineDataSpend = {
  labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Spend - Account 1',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'green',
      borderColor: 'green',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'green',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Spend - Account 2',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'blue',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [25, 5, 8, 53, 96, 35, 20]
    }
  ]
};

const lineDataRev = {
  labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Revenue - Account 1',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: 'red',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [27, 9, 37, 31, 102, 42, 19]
    },
    {
      label: 'Revenue - Account 2',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'yellow',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 29, 4, 112, 26, 49, 81]
    }
  ]
};

lineData = lineDataSpend; //init the graph data to 'Spend'

class App extends Component {

  constructor(props) {
    super(props);
    this.changeMetric = this.changeMetric.bind(this);

    this.state = {
      selectedMetric: 'Spend'
    };
  }

  changeMetric(event) {

    this.setState({
      selectedMetric: event.target.value
    });

    switch (event.target.value) {
      case 'Spend':
        lineData = lineDataSpend;
        break;
      case 'Revenue':
        lineData = lineDataRev;
        break;
      default:
    }
  }

  render() {
    const lineOptions = {
      title: {
        display: true,
        text: 'Account 1 vs Account 2'
      },
      tooltips: {
        enabled: true,
        callbacks: {
          label: function (value, data) {
            console.log('data', data)
            const currentLabel = data.datasets[value.datasetIndex].label;
            return currentLabel + ': ' + '$' + value.yLabel;
          }
        }
      },
      legend: {
        display: true
      },
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            callback: function (value) {
              return '$' + parseFloat(value.toFixed(2));
            }
          },
          stacked: false,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }

    };

    return (
      <div>


        <select onChange={this.changeMetric} value={this.state.selectedMetric}>
          <option value="Spend">Spend</option>
          <option value="Revenue">Revenue</option>
        </select>

        <div className="row">
          <div className="col-xl-10">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify" />
              </div>
              <div className="card-block">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>
          </div>
        </div>

      </div>

    )

  }
}

ReactDOM.render(
  
  <ConfigProvider locale={ruRU}>
  <Space direction="vertical" size="middle" align="center">
    {/* Меню-фильтр-шапка */}
    <Space>
      <Space direction="vertical" align="center">
        Точка учёта
        <Groups style={{ width: '150px' }}/>
      </Space>
      {/* <Space direction="vertical" align="center">
        Ресурсы
        <Resources />
      </Space> */}
      {/* <Space direction="vertical" align="center">
          Точка учёта
          <Select defaultValue="ДОМ1" size="small" onChange={handleChange}>
            <Option value="sms">ДОМ1</Option>
            <Option value="e-mail">ДОМ2</Option>
            <Option value="e-mail">ДОМ3</Option>
            <Option value="e-mail">ДОМ4</Option>
          </Select>
        </Space> */}
      <Space direction="vertical" align="center">
        Тип данных
        <Select defaultValue="Суточные" size="small" onChange={handleChange} style={{ width: '100px' }}>
          <Option value="sms">Суточные</Option>
          <Option value="sms">Часовые</Option>
          <Option value="e-mail">Текущие</Option>
        </Select>
      </Space>
      
      
      <Space direction="vertical" align="center" size="small">
        <Button type="primary" shape="round"  size="small">Сбор данных</Button>        
      </Space>
      <Space direction="vertical" align="center" size="small">
        <Button type="primary" shape="round"  size="small">Печать</Button>        
      </Space>

      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Tooltip title={<a href="">Пользователь: БИАТ</a>}>
        <UserOutlined />БИАТ
      </Tooltip><DownOutlined />
        </a>
      </Dropdown>
      </Space>
      <Space>
        <Space direction="vertical" align="center" size="small"> 
          Диапазон дат
          <RangePicker
            ranges={{
              Сегодня: [moment(), moment()],
              'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
            }}
            showTime
            format="DD.MM.YYYY HH:mm:ss"
            // format="DD.MM.YYYY"
            size="small"
            style={{ width: '250px' }}
            onChange={onChangeData}
          />
        </Space>
        <Space direction="vertical" align="center" size="small">
        <Button type="primary" shape="round"  size="small">Обновить</Button>        
      </Space>
        <Space direction="vertical" align="center">
        Отображать
        <Space>
          <Checkbox onChange={onChangeCheckbox}><Tooltip placement="top" title={'Отображать ПДЗ на графике.'}>ПДЗ</Tooltip></Checkbox>
          <Checkbox onChange={onChangeCheckbox}><Tooltip placement="top" title={'Обновлять информацию на графике в соответствии с выбранным периодом обновления экрана.'}>Тренды</Tooltip></Checkbox>
          <Checkbox onChange={onChangeCheckbox}><Tooltip placement="top" title={'Отображать температурный график (должен быть добавлен с помощью Конфигуратора для ТУ индивидуально)'}>Темп. гр-к</Tooltip></Checkbox>
          <Checkbox onChange={onChangeCheckbox} defaultChecked><Tooltip placement="top" title={'Отображать все типы данных на одном графике'}>Общий график</Tooltip></Checkbox>
        </Space>
      </Space>
        {/* <Space direction="vertical" align="center" size="small">
        <Button type="primary" shape="round"  size="large">Настройка графиков</Button>
    
      </Space> */}
       {/* <Switch checkedChildren="Типовой график" unCheckedChildren="Пользовательский график" defaultChecked size="large"/> 
      <Tooltip placement="top" title={'Настройка графиков'}>
        <Button shape="circle" icon={<MenuOutlined />} />
      </Tooltip> */}
      <Tooltip placement="top" title={'На весь экран'}>
        <Button shape="circle" icon={<FullscreenOutlined />} />
      </Tooltip>
    </Space>
    {/* <Space>
    <MultiAxisLine />
      <Tabs onChange={callback} type="card">
        <TabPane tab="Типовой график" key="1">
          <MultiAxisLine />
        </TabPane>
        <TabPane tab="Пользовательский график" key="2">
          <App />
        </TabPane>

      </Tabs> 
    </Space> */}

    {/* <Space direction="vertical" align="center">

    Для проведения анализа необходимо выбрать условие анализа и нажать на кнопку «Провести анализ».
    <a>Сохранить в формате Excel</a>
    </Space> */}
    {/* <NestedTable /> */}

    {/* <Space direction="vertical" size="middle" align="center">
      Результат анализа учетных данных c 02.06.2021 по 02.06.2021
      <a>Сохранить в формате Excel</a>
      <NestedTable />
    </Space> */}
  </Space>
  <MultiAxisLine />
  {/* <Space>
  <Tabs onChange={callback} type="card">
        <TabPane tab="Типовой график" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Пользовательский график" key="2">
          Content of Tab Pane 2
        </TabPane>

  </Tabs>
  </Space> */}
  </ConfigProvider>
  ,
 
document.getElementById('container'));