import React, { useEffect, useState } from "react";
import api from "../axios/api";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
function Dashboard() {
  const [revenue, setRevenue] = useState(0);
  const [dailyrevenue, setDailyrevenue] = useState();
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState([]);
  const [allproducts, setAllproducsts] = useState([]);
  const [order, setorder] = useState([]);

  const [dailyRevenue, setDailyRevenue] = useState([]);

  const x1Labels = dailyRevenue?.map((item) => item.day) || [];
  const dailyData = dailyRevenue?.map((item) => item.revenue) || [];
  const data = [
    { label: "Total Products", value: allproducts },
    { label: "Customers", value: users },
    { label: "total products parchased", value: products },
    { label: "total orders", value: order },
  ];
  useEffect(() => {
    const fetchall = async () => {
      try {
        const responsee = await api.get("/admin/dailyandtotal");

        setDailyRevenue(responsee.data.dailyRevenue);

        const re = await api.get("/admin/totalorder");
        setorder(re.data.orders.length);

        const response = await api.get("/admin/totalp");
        console.log("responseprod", response);
        setProducts(response.data.total);

        const res = await api.get("/admin/revenue");
        console.log("revenue", res);
        setRevenue(res.data.totalamount[0].revenew);

        const dailyresponse = await api.get("/admin/daily");
        console.log("dailyresponse", dailyresponse);
        setDailyrevenue(dailyresponse.data.data);

        const userresponse = await api.get("/admin/all");
        console.log("userresponseeeeeee", userresponse);
        setUsers(userresponse?.data?.users?.length || 0);

        const allresponse = await api.get("/admin/products");
        console.log("allresponse", allresponse);

        setAllproducsts(allresponse.data.result.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchall();
  }, []);

  return (
    <>
      <main className="p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Today's Sales
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
              ₹{dailyrevenue}
            </p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Users
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
              {users}
            </p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Total Revenue
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
              ₹{revenue}
            </p>
          </div>
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Total Products Purchased
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
              {products}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              },
            ]}
          />

          {/* Line Chart */}
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
              Sales Overview
            </h3>
            <h1 className="text-2xl font-bold">Total Revenue: ₹{revenue}</h1>

            {dailyData.length > 0 ? (
              <LineChart
                width={400}
                height={300}
                series={[{ data: dailyData, label: "Daily Revenue" }]}
                xAxis={[{ scaleType: "point", data: x1Labels }]}
              />
            ) : (
              <p className="text-gray-500">No data available for the chart</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
