import React, { useState, useEffect } from "react";
import { FaTimes, FaCalendarAlt, FaClock, FaCheck } from "react-icons/fa";
import "./ScheduleModal.css";

const ScheduleModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate available dates (next 20 days excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 20; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    return dates;
  };

  // Generate time slots (9 AM to 6 PM)
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const availableDates = generateAvailableDates();
  const availableTimes = generateTimeSlots();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedDate && selectedTime && name && email && phone) {
      const scheduleData = {
        date: selectedDate,
        time: selectedTime,
        name,
        email,
        phone,
        company,
        message
      };
      
      console.log("Schedule Data:", scheduleData);
      setIsSubmitted(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        resetForm();
      }, 2000);
    }
  };

  const resetForm = () => {
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">
              <FaCheck />
            </div>
            <h3>Schedule Confirmed!</h3>
            <p>Thank you for scheduling with us. We'll contact you soon to confirm your appointment.</p>
            <div className="schedule-details">
              <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Name:</strong> {name}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Schedule a Consultation</h2>
              <p>Choose a date and time that works for you</p>
            </div>

            <form onSubmit={handleSubmit} className="schedule-form">
              {/* Date Selection */}
              <div className="form-group">
                <label htmlFor="date">
                  <FaCalendarAlt className="icon" />
                  Select Date
                </label>
                <select
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                >
                  <option value="">Choose a date</option>
                  {availableDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Selection */}
              <div className="form-group">
                <label htmlFor="time">
                  <FaClock className="icon" />
                  Select Time
                </label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Choose a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Information */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details (Optional)</label>
                <textarea
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Schedule Consultation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleModal;