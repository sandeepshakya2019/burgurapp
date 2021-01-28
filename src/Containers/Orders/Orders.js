import React, { useEffect, useState } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-order";
import Spinner from "../../Components/UI/Spinner/Spinner";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/orders.json")
      .then((res) => {
        let fetchOrder = [];
        for (let key in res.data) {
          fetchOrder.push({ ...res.data[key], id: key });
        }
        setOrders(fetchOrder);
        // alert("order fetch");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      {orders.map((order) => (
        <Order
          key={order.id}
          customer={order.customer}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))}
    </div>
  );
}

export default Orders;
