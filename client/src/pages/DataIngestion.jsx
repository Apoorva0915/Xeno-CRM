import { useState, useEffect } from "react";
import axios from "axios";

const DataIngestion = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "", address: "" });
  const [order, setOrder] = useState({ customerId: "", orderDetails: "", amount: "" });
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/customers`, {
          withCredentials: true,
        });
        setCustomers(response.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    fetchCustomers();
  }, []);

  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const submitCustomer = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/customers`,
        customer,
        { withCredentials: true }
      );
      alert("Customer Added Successfully!");
      setCustomer({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      setError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrderChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders`,
        order,
        { withCredentials: true }
      );
      alert("Order Added Successfully!");
      setOrder({ customerId: "", orderDetails: "", amount: "" });
    } catch (error) {
      setError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#002d9c]">Data Ingestion</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Customer Form */}
        <form
          onSubmit={submitCustomer}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Add Customer</h2>
          {error && <p className="text-red-500 mb-4 font-medium">{error}</p>}
          <div className="space-y-5">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
              name="name"
              placeholder="Name"
              value={customer.name}
              onChange={handleCustomerChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleCustomerChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
              name="phone"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleCustomerChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
              name="address"
              placeholder="Address"
              value={customer.address}
              onChange={handleCustomerChange}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r bg-[#002d9c] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Customer"}
          </button>
        </form>

        {/* Order Form */}
        <form
          onSubmit={submitOrder}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Add Order</h2>
          {error && <p className="text-red-500 mb-4 font-medium">{error}</p>}
          <div className="space-y-5">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-150"
              name="customerId"
              value={order.customerId}
              onChange={handleOrderChange}
            >
              <option value="">Select Customer</option>
              {customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-150"
              name="orderDetails"
              placeholder="Order Details"
              value={order.orderDetails}
              onChange={handleOrderChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-150"
              name="amount"
              placeholder="Amount"
              type="number"
              value={order.amount}
              onChange={handleOrderChange}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 mt-24 rounded-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataIngestion;
