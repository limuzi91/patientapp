//////

import React from "react";
import { Card } from "antd";
//import Card from "antd/lib/card";
import echartTheme from "./echartTheme";
// import echarts from 'echarts'
//按需加载
import echarts from "echarts/lib/echarts";
// 导入柱形图
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
export default class BarChart extends React.Component {
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
          type: "bar",
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
      legend: {
        data: ["OFO", "摩拜", "小蓝"]
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
          name: "itemOne",
          type: "bar",
          data: [2000, 3000, 5500, 7000, 8000, 12000, 20000]
        },
        {
          name: "itemTwo",
          type: "bar",
          data: [1500, 3000, 4500, 6000, 8000, 10000, 15000]
        },
        {
          name: "itemThree",
          type: "bar",
          data: [1000, 2000, 2500, 4000, 6000, 7000, 8000]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <Card title="Bar Chart 1 (Scroll below to see other Bar Chart)">
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="Bar Chart 2" style={{ marginTop: 10 }}>
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
