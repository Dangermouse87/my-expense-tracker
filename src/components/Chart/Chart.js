import './Chart.css'
import ChartBar from './Chartbar';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  
  return <div className='chart'>
    {props.dataPoints.map(dataPoint => <ChartBar 
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={maximumValue} 
      label={dataPoint.label}
      />)}
  </div>
};

export default Chart;