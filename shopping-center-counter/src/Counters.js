import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

export default function Counters() {
  const { id } = useParams();
  const [counts, setCounts] = useState([0, 0, 0, 0]); // Household,perfume, electro, toys
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [maxCount, setMaxCount] = useState(10);
  
  useEffect(() => {
    // Set the maximum count based on the shop ID
    if (id === '1') {
      setMaxCount(15);
    } else if (id === '2') {
      setMaxCount(12);
    } else if (id === '3') {
      setMaxCount(8);
    }
  }, [id]);

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleIncrement = (index, increment, shopName) => {
    if (total < maxCount) {
      const newCounts = [...counts];
      newCounts[index] += increment;
      setCounts(newCounts);
      setTotal(total + increment);
      console.log(`Added ${increment} shoppers to ${shopName} shop. New count is ${newCounts[index]}.`);
    }
  };
  
  const handleDecrement = (index, shopName) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
      setTotal(total - 1);
      console.log(`Removed shopper from ${shopName} shop. New count is ${newCounts[index]}.`);
    }
  };

  return (
    <div className="counter">
       <div className="counter-wrapper">
      <h2>Total count</h2>
      <p>Total count: <span style={{color: total > maxCount/3 ? "red" : "black"}}>{total}</span></p>
      </div>
      <p>Current time: {time}</p>
      <div>
      <PieChart
  data={[
    { title: 'Occupied', value: total, color: '#E38627' },
    { title: 'Free', value: maxCount - total, color: '#C13C37' },
  ]}
  style={{ width: '300px', height: '300px' }}
/>
    </div>
    <div className="counter-wrapper">
        <h2>Household counter</h2>
        <p>Current count: {counts[3]}</p>
        <button onClick={() => handleIncrement(3, 1, 'Household')}>
          Add shopper
        </button>
        <button onClick={() => handleDecrement(3, 'Household')}>
          Remove shopper
        </button>
      </div>
      <div className="counter-wrapper">
        <h2>Perfume counter</h2>
        <p>Current count: {counts[0]}</p>
        <button onClick={() => handleIncrement(0, 1, 'Perfume')}>
          Add shopper
        </button>
        <button onClick={() => handleDecrement(0, 'Perfume')}>
          Remove shopper
        </button>
      </div>
      <div className="counter-wrapper">
        <h2>Electronics counter</h2>
        <p>Current count: {counts[1]}</p>
        <button onClick={() => handleIncrement(1, 1, 'Electronics')}>
          Add shopper
        </button>
        <button onClick={() => handleDecrement(1, 'Electronics')}>
          Remove shopper
        </button>
      </div>
      <div className="counter-wrapper">
        <h2>Toys counter</h2>
        <p>Current count: {counts[2]}</p>
        <button onClick={() => handleIncrement(2, 1, 'Toys')}>
          Add shopper
        </button>
        <button onClick={() => handleDecrement(2, 'Toys')}>
          Remove shopper
        </button>
      </div>
    </div>
  );
}

