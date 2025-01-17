'use client';
import { useEffect, useState } from 'react';
import FilterableCustomerTable from './FilterableCustomerTable';

const fetchCustomers = async () => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const fetchedCustomers = await fetchCustomers();
    setCustomers(fetchedCustomers);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <FilterableCustomerTable
          customers={customers}
          fetchCustomers={fetchData}
        />
      )}
    </div>
  );
};

export default CustomerPage;
