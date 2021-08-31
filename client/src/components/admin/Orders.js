import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, deliver } from "../../actions/orderActions";
import Loading from "../Loading";
import Error from "../Error";

const Orders = () => {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.getAllOrders);
  const { loading, error, orders } = orderstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      <h4 className="mt-1 text-center bg-primary text-white p-2 w-100">
        Customer Orders
      </h4>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-responsive">
        <thead>
          <tr>
            <th>
              Order Id <br /> UserId
            </th>
            <th>Email</th>
            <th>Amount</th>
            <th>
              Date <br /> Time
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>
                    {order._id}
                    <br />
                    {order.userId}
                  </td>
                  <td>{order.email}</td>
                  <td>{order.amount}</td>
                  <td>
                    {order.createdAt.substring(0, 10)}
                    <br />
                    {order.createdAt.substring(11, 19)}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      <p className="btn btn-primary p-1" disabled>
                        Delivered
                      </p>
                    ) : (
                      <p
                        className="btn btn-success p-1"
                        onClick={() => dispatch(deliver(order._id))}
                      >
                        Deliver
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
