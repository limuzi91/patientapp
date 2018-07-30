//////

import React from "react";
// import { Card } from "antd";
import Card from "antd/lib/card";
import echartTheme from "./echartTheme";
// import echarts from 'echarts'
//按需加载
import echarts from "echarts/lib/echarts";
// 导入饼图
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
export default class LineGraph extends React.Component {
  componentWillMount() {
    echarts.registerTheme("Imooc", echartTheme);
  }

  getOption = () => {
    let option = {
      title: {
        text: "Patient's Medical Info"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Amount",
          type: "line",
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
        }
      ]
    };
    return option;
  };

  getOption2 = () => {
    let option = {
      title: {
        text: "Patient's Medical Info"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["itemOne amount", "itemTwo amount"]
      },
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "itemOne amount",
          type: "line",
          data: [1200, 3000, 4500, 6000, 8000, 12000, 20000]
        },
        {
          name: "itemTwo amount",
          type: "line",
          data: [1000, 2000, 5500, 6000, 8000, 10000, 12000]
        }
      ]
    };
    return option;
  };

  getOption3 = () => {
    let option = {
      title: {
        text: "Patient's Medical Info"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Amount",
          type: "line",
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
          areaStyle: {}
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <Card title="Line Graph 1 (Scroll below to see other Line Graph)">
          <ReactEcharts
            option={this.getOption3()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="Line Graph 2" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="Line Graph 3" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
