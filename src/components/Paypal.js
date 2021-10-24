import React, { useRef, useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";

export default function Paypal() {
  const paypal = useRef();
  const [paid, setPaid] = useState(false);
  const [info, setInfo] = useState('no info')
  const { currentUser } = useAuth()

  console.log(currentUser)

  if (currentUser !== null) {
    console.log(currentUser.getIdTokenResult())
  }

  useEffect(() => {

    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Lucid Trading Course",
                amount: {
                  currency_code: "EUR",
                  value: 1,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          setPaid(true)
          console.log("Customer paid, now this needs to be sent to the server somehow and the course needs to be unlocked")

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  if (paid) {
    console.log(info)
    return <Redirect to={{
      pathname: '/confirm-payment',
      state: { info }
  }}/>
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}