import Chart from 'react-apexcharts';
import api from 'services/api';
import { SaleSum } from 'types/sale';

interface ChartData {
    labels: Array<string>;
    series: Array<number>;
}

const DonutChart = () => {
    let chartData: ChartData = {labels: [], series: []};

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    api.get('/sales/amount-by-seller')
        .then((response) => {
            const data = response.data as Array<SaleSum>;
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = {labels: myLabels, series: mySeries}
        })
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}

export default DonutChart;
