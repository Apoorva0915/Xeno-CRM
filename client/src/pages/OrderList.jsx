import { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
          withCredentials: true, 
        });
        setOrders(response.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    fetchOrders();
  }, []);


  return (
    <div className="p-6 md:p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Orders List</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="p-4 text-left text-sm font-medium">Order Details</th>
              <th className="p-4 text-left text-sm font-medium">Amount</th>
              <th className="p-4 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="p-4 text-sm">{order.orderDetails}</td>
                <td className="p-4 text-sm">₹{order.amount}</td>
                <td className="p-4 text-sm capitalize">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
