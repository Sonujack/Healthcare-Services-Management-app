import React, { useState, useEffect } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import './App.css';

const App = () => {
  // Retrieve services from local storage, or set an empty array if nothing is found
  const getInitialServices = () => {
    const savedServices = localStorage.getItem('services');
    return savedServices ? JSON.parse(savedServices) : [];
  };

  const [services, setServices] = useState(getInitialServices());

  // Save the updated services list to localStorage whenever the services state changes
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  // Function to add a new service
  const addService = (service) => {
    setServices([...services, service]);
  };

  // Function to delete a service
  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  // Function to update an existing service
  const updateService = (index, updatedService) => {
    const updatedServices = services.map((service, i) =>
      i === index ? updatedService : service
    );
    setServices(updatedServices);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services Management</h1>
      <AddServiceForm onAdd={addService} />
      <ServiceList services={services} onDelete={deleteService} onEdit={updateService} />
    </div>
  );
};

export default App;
