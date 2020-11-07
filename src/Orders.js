import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ basket, user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot( snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className={user ? 'orders' : 'guestOrders'}>
            <h1>{user ? 'Your orders' : 'No orders found'}</h1>
            {!user && (<p>You must sign in to view order history</p>)}
            <div className="orders__container">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
