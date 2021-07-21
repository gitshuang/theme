import { Button, Steps } from "antd";
import ReactECharts from 'echarts-for-react';
import defaultTheme from './default-theme'
import './App.less';
//import './App.css'
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
        color: defaultTheme.primaryColor
      }
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};
function App() {
  const change = () => {
    var color = colors[n%4]
    n++
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
        <ReactECharts option={options} />
    </div>
  );
}

export default App;
