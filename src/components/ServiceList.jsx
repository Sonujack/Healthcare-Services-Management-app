import React, { useState } from 'react';
import './ServiceList.css'; // Importing CSS for the service list

const ServiceList = ({ services, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editableService, setEditableService] = useState({ name: '', description: '', price: '' });

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditableService(services[index]);
  };

  const handleUpdate = (index) => {
    onEdit(index, editableService);
    setIsEditing(null);
  };

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="service-item">
            {isEditing === index ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editableService.name}
                  onChange={(e) => setEditableService({ ...editableService, name: e.target.value })}
                  className="input-field"
                />
                <input
                  type="text"
                  value={editableService.description}
                  onChange={(e) => setEditableService({ ...editableService, description: e.target.value })}
                  className="input-field"
                />
                <input
                  type="number"
                  value={editableService.price}
                  onChange={(e) => setEditableService({ ...editableService, price: e.target.value })}
                  className="input-field"
                />
                <button className="btn update-btn" onClick={() => handleUpdate(index)}>Update</button>
              </div>
            ) : (
              <div className="service-details">
                <strong>{service.name}</strong>: {service.description} (${service.price})
                <button className="btn edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn delete-btn" onClick={() => onDelete(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
