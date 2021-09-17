import React, { useState } from 'react';
import { Button, Steps } from "antd";
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from './default-theme'
import './App.less';
echarts.registerTheme('red', {
  backgroundColor: 'red',
  //color: 'white',
});
echarts.registerTheme('blue', {
  backgroundColor: 'blue'
});
echarts.registerTheme('yellow', {
  backgroundColor: 'yellow'
});
echarts.registerTheme('green', {
  backgroundColor: 'green'
});
const colors = ['red','blue','yellow','green']
const { Step } = Steps;
var n = 0
const options = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      itemStyle:{
        color: document.body.style.getPropertyValue('--PC')||defaultTheme.primaryColor
      }
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};
function App() {
  const [theme, setTheme] = useState();
  const change = () => {
    var color = colors[n%4]
    n++
    setTheme(color)
    window.globalColor = color
    window.less
      .modifyVars({
        '@primary-color': color,
        '@layout-header-padding': '0px'
      })
      .then(() => {
        console.log(color);
      })
      .catch(error => {
        console.log(error);
      });
      document.body.setAttribute("style",`--PC:${color};--aa:#567`);
  }
  return (
    <div className="app">
        <Button onClick={change} type="primary">换肤</Button>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <div className="selfDefineCom">这是自定义组件</div>
        <ReactECharts option={options} theme={theme}/>
    </div>
  );
}

export default App;
