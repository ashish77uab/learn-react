import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';
import { flushSync } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useNetworkStatus from '../../component/useNetwork';

const Home = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
    const [count, setCount] = useState(1);
    const [firstName, setFirstName] = useState('Ashish');
    const [lastName, setLastName] = useState('lastName');

    const addItem = () => {
        setItems([...items, "New Fruit"]);
    };
    const removeItem = (indexN) => {
        setItems(items?.filter((item, index) => index !== indexN));
    };
    const handleClick = (e) => {
        // flushSync(() => {
        //     setLastName('didi')
        // })
        setCount(1)
        setFirstName('Pramod')
        setTimeout(() => {
            setLastName('singh')
        }, 2000)
    };

    const navigate = useNavigate();
    const location = useLocation();
    const { isOnline } = useNetworkStatus()
    console.log('isOnline', isOnline)
    return (
        <div className=' p-4'>
            <div>
                {/* <button className='px-4 py-1 bg-red-500 mb-4' onClick={addItem}>Add Item</button>
                <button className='px-4 py-1 bg-blue-500 mb-4' onClick={handleClick}>Click here</button> */}
                <button onClick={() => navigate("/signin", { state: { pathname: location?.pathname } })}>
                    Open Sign In
                </button>
                <button onClick={() => navigate("/register", { state: { pathname: location?.pathname } })}>
                    Open Register
                </button>
                {/* <ul className='space-y-2'>
                    {items.map((item, index) => (
                        <ListItem key={item} item={item} removeItem={removeItem} index={index} />
                    ))}
                </ul> */}
            </div>





        </div>
    )
}

export default Home