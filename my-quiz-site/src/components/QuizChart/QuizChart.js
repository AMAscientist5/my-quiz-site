import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const QuizChart = ({quiz}) => {
  const {data} = quiz;
  console.log(data)

   
    return (
       <div>
         <div className='m-5'>
         <h1>This is a simple quiz chart</h1>
         </div>
         <div className=' d-flex justify-content-center'>
           <LineChart width={500}
           height={300}
           data={data}
           margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
           >
           <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           </LineChart>
         </div>
       </div>
    );
};

export default QuizChart;