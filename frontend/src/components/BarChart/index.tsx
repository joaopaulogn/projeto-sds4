import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import api from 'services/api';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

interface SeriesData {
    name: string;
    data: Array<number>;
}

interface ChartData {
    labels: {
        categories: Array<string>;
    };
    series: Array<SeriesData>;
}

const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

const BarChart = () => {
    const [chartData, setChartData] = useState<ChartData>({labels: {categories: []}, series: [{name: '', data: []}]});

    useEffect(() => {
        api.get('/sales/success-by-seller')
            .then((response) => {
                const data = response.data as Array<SaleSuccess>;
                const categories = data.map(x => x.sellerName);
                const series = data.map(x => round(100 * x.deals / x.visited, 1));

                setChartData({labels: {categories}, series: [{name: '% Sucesso', data: series}]})
            })
    }, []);

    return (
            <Chart
                options={{...options, xaxis: chartData.labels}}
                series={chartData.series}
                type="bar"
                height="240"
            />
    )
}

export default BarChart;
