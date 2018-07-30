/////////

import React from "react";
// import { Card } from "antd";
import Card from "antd/lib/card";
import echartTheme from "./themeLight";
// import echarts from 'echarts'
//按需加载
import echarts from "echarts/lib/echarts";
// 导入饼图
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
export default class PieChart extends React.Component {
  componentWillMount() {
    echarts.registerTheme("Imooc", echartTheme);
  }

  getOption = () => {
    let option = {
      title: {
        text: "Patient's Medical Info",
        x: "center"
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ]
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}({d}%)"
      },
      series: [
        {
          name: "Amount",
          type: "pie",
          data: [
            {
              value: 1000,
              name: "Monday"
            },
            {
              value: 1000,
              name: "Tuesday"
            },
            {
              value: 2000,
              name: "Wednesday"
            },
            {
              value: 1500,
              name: "Thursday"
            },
            {
              value: 3000,
              name: "Friday"
            },
            {
              value: 2000,
              name: "Saturday"
            },
            {
              value: 1200,
              name: "Sunday"
            }
          ]
        }
      ]
    };
    return option;
  };

  getOption2 = () => {
    let option = {
      title: {
        text: "Patient's Medical Info",
        x: "center"
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ]
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}({d}%)"
      },
      series: [
        {
          name: "Amount",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "60%"],
          data: [
            {
              value: 1000,
              name: "Monday"
            },
            {
              value: 1000,
              name: "Tuesday"
            },
            {
              value: 2000,
              name: "Wednesday"
            },
            {
              value: 1500,
              name: "Thursday"
            },
            {
              value: 3000,
              name: "Friday"
            },
            {
              value: 2000,
              name: "Saturday"
            },
            {
              value: 1200,
              name: "Sunday"
            }
          ]
        }
      ]
    };
    return option;
  };

  getOption3 = () => {
    let option = {
      title: {
        text: "Patient's Medical Info",
        x: "center"
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ]
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}({d}%)"
      },
      series: [
        {
          name: "Amount",
          type: "pie",
          data: [
            {
              value: 1000,
              name: "Monday"
            },
            {
              value: 1000,
              name: "Tuesday"
            },
            {
              value: 2000,
              name: "Wednesday"
            },
            {
              value: 1500,
              name: "Thursday"
            },
            {
              value: 3000,
              name: "Friday"
            },
            {
              value: 2000,
              name: "Saturday"
            },
            {
              value: 1200,
              name: "Sunday"
            }
          ].sort((a, b) => {
            return a.value - b.value;
          }),
          roseType: "radius",
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <Card title="Pie Chart 1 (Scroll below to see other Pie Chart)">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="Pie Chart 2" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="Pie Chart 3" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption3()}
            theme="Imooc"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
