import React, { useEffect, useState } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-order";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // let redirect = null;
    if (!props.token) {
      props.history.push("/");
    } else {
      setLoading(true);
      axios
        .get("/orders.json?auth=" + props.token)
        .then((res) => {
          let fetchOrder = [];
          for (let key in res.data) {
            // console.log(res.data[key]);
            // console.log(res.data[key].customer.email);
            // console.log(props.email);
            // console.log(props.userId);
            if (res.data[key].customer.userId === props.userId) {
              fetchOrder.push({ ...res.data[key], id: key });
            }
            // fetchOrder.push({ ...res.data[key], id: key });
          }
          setOrders(fetchOrder);
          // alert("order fetch");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(err.message);
        });
    }
  }, []);
  if (loading) {
    return <Spinner />;
  }

  // if (props.isAuth) {
  //   redirect = <Redirect to="/login" />;
  // }
  return (
    <div className="container">
      {/* {redirect} */}
      {orders.map((order) => (
        <Order
          key={order.id}
          del={order.deliveryMethod}
          customer={order.customer}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    email: state.auth.email,
    // userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(Orders);
