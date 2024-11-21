
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import './Dashboard.css'; 

// const Dashboard = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-end"> 
//         <div className="col-md-5">
//           <div className="card shadow-sm no-hover">
//             <img 
//               src="https://t3.ftcdn.net/jpg/02/72/68/26/240_F_272682633_N0RjfWmIwNLNCoUePyYVrjJXPWBNuy97.jpg" 
//               className="card-img-top" 
//               alt="Products"
//             />
//             <div className="card-body">
//               <h1 className="card-title">PRODUCTS</h1>
//               <p className="card-text">
//                 Here is a list of all products available in the store.
//               </p>
//               <Link to="/products">
//                 <button className="  button-viewproducts">View Products</button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Users Section */}
//         <div className="col-md-5">
//           <div className="card shadow-sm no-hover">
//             <img 
//               src="https://imageio.forbes.com/specials-images/imageserve/5e4ac71aa854780006b199fb/0x0.jpg?format=jpg&crop=1378,775,x0,y298,safe&height=600&width=1200&fit=bounds" 
//               className="card-img-top" 
//               alt="Users"
//             />
//             <div className="card-body">
//               <h1 className="card-title">CONTRIBUTORS</h1>
//               <p className="card-text">
//                 View the details of all registered users.
//               </p>
//               <Link to="/userslist">
//                 <button className="button-viewusers">View Users</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Dashboard



// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

// export default function BasicPie() {
//   return (
//     <PieChart
//       series={[
//         {
//           data: [
//             { id: 0, value: 10, label: 'series A' },
//             { id: 1, value: 15, label: 'series B' },
//             { id: 2, value: 20, label: 'series C' },
//           ],
//         },
//       ]}
//       width={400}
//       height={200}
//     />
//   );
// }





// import React, { useEffect, useState } from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import api from '../axios/api';

// export default function BasicPie() {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [totalProductsResponse,totalDailyRevenue, totalRevenueResponse] = await Promise.all([
//                     api.get('/admin/totalp'), // Update with your actual API endpoint
//                     api.get('/admin/revenue'),
//                     api.get('/admin/daily')
//                 ]);
//                 console.log('totalProductsResponse',totalProductsResponse);
//                 setChartData([
//                     { id: 0, value: totalProductsResponse.data.total, label: 'Total Products' },
                   
                    
//                     { id: 1, value: totalRevenueResponse.data.totalamount[0]?.revenew || 0, label: 'Total Revenue' },
//                     {id:2,value:totalDailyRevenue.data.dailyRevenue,label: 'daily revenue' }
//                 ]);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <PieChart
//             series={[
//                 {
//                     data: chartData,
//                 },
//             ]}
            
//             width={400}
//             height={200}
//         />
//     );
// }




// import React, { useEffect, useState } from 'react'
// import { PieChart } from '@mui/x-charts/PieChart';
// import api from '../axios/api'

// import * as React from 'react';
// import { ChartContainer } from '@mui/x-charts/ChartContainer';
// import { BarPlot } from '@mui/x-charts/BarChart';



// function Dashboard() {
//   const [revenue,setRevenue]=useState(0)
//   const [dailyrevenue,setDailyrevenue]=useState(0)
//   const [products,setProducts]=useState(0)
//   const [users,setUsers]=useState([])

//   const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
//   const xLabels = [
//     'Page A',
//     'Page B',
//     'Page C',
//     'Page D',
//     'Page E',
//     'Page F',
//     'Page G',
//   ];
  


//   useEffect(()=>{
    
//      const fetchall=async ()=>{
//       try {
//         const response=await api.get('/admin/totalp')
//         console.log("responseprod",response);
        
//       setProducts(response.data.total)
//       const res=await api.get('/admin/revenue')
//       console.log("revenue",res);
      
//       setRevenue(res.data.totalamount[0].revenew)




//       const dailyresponse=await api.get('/admin/daily')
//       // console.log("dailyresponse",dailyresponse.data.
//       //   dailyRevenue[0].dailyRevenue
//       //   );

//       console.log("dailyresponse",dailyresponse);
      
      
//       setDailyrevenue(dailyresponse.data.data)



//         const userresponse=await api.get('/admin/all')
//         console.log("userresponseeeeeee",userresponse);
//         setUsers(userresponse?.data?.users?.length || 0)
        
//       } catch (error) {
//         console.log(error);
        
//       }
      
//     }
//     fetchall()
//   },[])
//   return (
// //     <>
// //     <div>
// //       <PieChart
// //       series={[
// //         {
// //           data: [
// //             { id: 0, value: revenue, label: 'Total Revenue' },
// //             { id: 1, value: dailyrevenue, label: 'Daily Revenue' },
// //             { id: 2, value: products, label: 'Total Products Parchased' },
// //           ],
// //         },
// //       ]}
// //       width={400}
// //       height={200}
// //     />
// //     </div>


// // <div class="bg-white shadow rounded-lg p-4">
// //           <h2 class="text-sm font-semibold">Today's Sales</h2>
// //           <p class="text-2xl font-bold">$53,000</p>
// //           <p class="text-green-500 text-sm">+30%</p>
// //         </div>
// //         </>

// <>
// <main className="p-8 bg-gray-100">
//   {/* Cards Section */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//     {/* Card */}
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//       <h2 className="text-gray-500 text-sm font-semibold uppercase">Today's Sales</h2>
//       <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{dailyrevenue}</p>
//       {/* <p className="text-green-500 text-sm mt-1">+30%</p> */}
//     </div>
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//       <h2 className="text-gray-500 text-sm font-semibold uppercase">Users</h2>
//       <p className="text-3xl font-extrabold text-gray-800 mt-2">{users}</p>
      
//     </div>
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//       <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Revenue</h2>
//       <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{revenue}</p>
      
//     </div>
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//       <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Products Parchased</h2>
//       <p className="text-3xl font-extrabold text-gray-800 mt-2">{products}</p>
      
//     </div>
//   </div>

//   {/* Charts Section */}
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//     {/* Bar Chart */}
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
      









//     <ChartContainer
//       width={500}
//       height={300}
//       series={[{ data: uData, label: 'uv', type: 'bar' }]}
//       xAxis={[{ scaleType: 'band', data: xLabels }]}
//     >
//       <BarPlot />
//     </ChartContainer>
 
//     </div>

//     {/* Line Chart */}
//     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//       <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">Sales Overview</h3>
//       <div className="h-40 bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg"></div>
//       <div className="mt-4 text-sm text-green-500 font-medium">+20% from last year</div>
//     </div>
//   </div>
// </main>

// </>
//   )
// }

// export default Dashboard




import React, { useEffect, useState } from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import api from '../axios/api';
import {LineChart} from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
function Dashboard() {
  const [revenue, setRevenue] = useState(0);
  const [dailyrevenue, setDailyrevenue] = useState();
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState([]);
  const[allproducts,setAllproducsts]=useState([])
const[order,setorder]=useState([])



  const [dailyRevenue, setDailyRevenue] = useState([]);
  // const [totalRevenue, setTotalRevenue] = useState(0);
//graph
  // const uData = [allproducts, users, revenue, dailyrevenue, products, order, 3490];
  // const xLabels = ['Products', 'Users', 'totalrevenue', 'dailyrevenue', 'totalproductspurchased', 'orders', 'Page G'];
//line
// const x1Labels = dailyRevenue&&dailyRevenue.map((item) => item.day);
//   const dailyData = dailyRevenue&&dailyRevenue.map((item) => item.revenue);




  const x1Labels = dailyRevenue?.map((item) => item.day) || [];
const dailyData = dailyRevenue?.map((item) => item.revenue) || [];
const data=[
  {label:'Total Products',value:allproducts},
  {label:'Customers',value:users},
  // {label:'Total Revenue',value:revenue},
  {label:'total products parchased',value:products},
  {label:'total orders',value:order}
]
  useEffect(() => {
    const fetchall = async () => {
      try {
        const responsee = await api.get('/admin/dailyandtotal'); // Replace with your API endpoint
      
        setDailyRevenue(responsee.data.dailyRevenue); // Array of objects with day and revenue
        // setTotalRevenue(responsee.data.totalRevenue); // Total revenue


const re=await api.get('/admin/totalorder')
setorder(re.data.orders.length)





        const response = await api.get('/admin/totalp');
        console.log("responseprod", response);
        setProducts(response.data.total);
        
        const res = await api.get('/admin/revenue');
        console.log("revenue", res);
        setRevenue(res.data.totalamount[0].revenew);

        const dailyresponse = await api.get('/admin/daily');
        console.log("dailyresponse", dailyresponse);
        setDailyrevenue(dailyresponse.data.data);

        const userresponse = await api.get('/admin/all');
        console.log("userresponseeeeeee", userresponse);
        setUsers(userresponse?.data?.users?.length || 0);


      const allresponse=await api.get('/admin/products')  
    console.log("allresponse",allresponse);
    
      setAllproducsts(allresponse.data.result.length)
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchall();
  }, []);
  
  return (
    <>
      <main className="p-8 bg-gray-100">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Today's Sales</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{dailyrevenue}</p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Users</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">{users}</p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Revenue</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{revenue}</p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Products Purchased</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">{products}</p>
          </div>
          {/* <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Orders</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">{order}</p>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Products</h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">{allproducts}</p>
          </div> */}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Bar Chart */}
          {/* <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300 ">
            <ChartContainer
              width={400}
              height={300}
              series={[{ data: uData, label: xLabels, type: 'bar' }]}
              xAxis={[{ scaleType: 'band', data: xLabels }]}
            >
              <BarPlot   />
            </ChartContainer>
          </div> */}




<PieChart
  series={[
    {
      data,
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>

          {/* Line Chart */}
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">Sales Overview</h3>
<h1 className="text-2xl font-bold">Total Revenue: ₹{revenue}</h1>
      


{dailyData.length > 0 ? (
  <LineChart
    width={400}
    height={300}
    series={[
      { data: dailyData, label: 'Daily Revenue' },
    ]}
    xAxis={[{ scaleType: 'point', data: x1Labels }]}
  />
) : (
  <p className="text-gray-500">No data available for the chart</p>
)}
    
          </div>
        </div>
      </main>
    </>


// {/* <>
//   <main className="p-4 md:p-8 bg-gray-100">
//     {/* Cards Section */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//       {/* Card 1 */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <h2 className="text-gray-500 text-sm font-semibold uppercase">Today's Sales</h2>
//         <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{dailyrevenue}</p>
//       </div>
//       {/* Card 2 */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <h2 className="text-gray-500 text-sm font-semibold uppercase">Users</h2>
//         <p className="text-3xl font-extrabold text-gray-800 mt-2">{users}</p>
//       </div>
//       {/* Card 3 */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Revenue</h2>
//         <p className="text-3xl font-extrabold text-gray-800 mt-2">₹{revenue}</p>
//       </div>
//       {/* Card 4 */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <h2 className="text-gray-500 text-sm font-semibold uppercase">Total Products Purchased</h2>
//         <p className="text-3xl font-extrabold text-gray-800 mt-2">{products}</p>
//       </div>
//     </div>

//     {/* Charts Section */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Bar Chart */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <ChartContainer
//           width={400}
//           height={300}
//           series={[{ data: uData, label: xLabels, type: 'bar' }]}
//           xAxis={[{ scaleType: 'band', data: xLabels }]}
//         >
//           <BarPlot
//             barWidth={0.6} // Adjust bar width
//             dataLabel={({ value }) => value} // Show data values on bars
//           />
//         </ChartContainer>
//       </div>

//       {/* Line Chart */}
//       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//         <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">Sales Overview</h3>
//         <h1 className="text-2xl font-bold mb-4">Total Revenue: ₹{revenue}</h1>
//         {dailyData.length > 0 ? (
//           <LineChart
//             width={400}
//             height={300}
//             series={[
//               { data: dailyData, label: 'Daily Revenue' },
//             ]}
//             xAxis={[{ scaleType: 'point', data: x1Labels }]}
//           />
//         ) : (
//           <p className="text-gray-500">No data available for the chart</p>
//         )}
//       </div>
//     </div>
//   </main>
// </> */}

  );
}

export default Dashboard;
