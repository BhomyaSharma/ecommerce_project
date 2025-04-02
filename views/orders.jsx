import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders")
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>
      {orders.length === 0 ? <p>No orders placed yet.</p> : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              Order #{order.id} - ${order.totalAmount} - {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
