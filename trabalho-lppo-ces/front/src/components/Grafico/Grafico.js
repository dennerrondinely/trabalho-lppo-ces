import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default class Grafico extends React.Component {
    render() {
        const data = [
            {name: 'Janeiro', total: 50},
            {name: 'Fevereiro', total: 40},
            {name: 'Marco', total: 80},
            {name: 'Abril', total: 30},
      ]
        return (
            <LineChart width={1000} height={200} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="total" stroke="#2C5364" activeDot={{r: 8}}/>
          </LineChart>
        );
    }
}
