import React, { useState } from 'react';
import './AddServiceForm.css'; // Importing CSS for the form

const AddServiceForm = ({ onAdd }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert('All fields are required!');
      return;
    }
    onAdd(service);
    setService({ name: '', description: '', price: '' }); // Reset form
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
       <h2 className="hiii">Add New Service</h2>
       <input
        type="text"
        placeholder="Service Name"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Description"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Price"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
        className="input-field"
      />
      <button className="btn add-btn" type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
