import React, { useState } from 'react';
import { 
  FiSearch, 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiEye, 
  FiFilter, 
  FiDownload, 
  FiUpload, 
  FiMail,
  FiPhone,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiMapPin,
  FiBriefcase,
  FiAward,
  FiStar,
  FiClock,
  FiSettings,
  FiLinkedin,
  FiGithub,
  FiTwitter
} from 'react-icons/fi';
import './Employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Smith',
      position: 'Senior Developer',
      department: 'Engineering',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      hireDate: '2022-03-15',
      salary: 85000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      performance: 4.8,
      projects: 12,
      location: 'New York, NY',
      reportsTo: 'Sarah Wilson'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      position: 'Engineering Manager',
      department: 'Engineering',
      email: 'sarah.wilson@company.com',
      phone: '+1 (555) 987-6543',
      hireDate: '2020-08-10',
      salary: 120000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      skills: ['Leadership', 'Project Management', 'Agile', 'JavaScript'],
      performance: 4.9,
      projects: 8,
      location: 'San Francisco, CA',
      reportsTo: 'CTO'
    },
    {
      id: 3,
      name: 'Mike Chen',
      position: 'UX Designer',
      department: 'Design',
      email: 'mike.chen@company.com',
      phone: '+1 (555) 456-7890',
      hireDate: '2023-01-20',
      salary: 75000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      performance: 4.6,
      projects: 6,
      location: 'Remote',
      reportsTo: 'Sarah Wilson'
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'Product Manager',
      department: 'Product',
      email: 'emily.davis@company.com',
      phone: '+1 (555) 234-5678',
      hireDate: '2021-11-05',
      salary: 95000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      skills: ['Product Strategy', 'Roadmapping', 'Analytics', 'Scrum'],
      performance: 4.7,
      projects: 10,
      location: 'Boston, MA',
      reportsTo: 'Head of Product'
    },
    {
      id: 5,
      name: 'Alex Brown',
      position: 'DevOps Engineer',
      department: 'Engineering',
      email: 'alex.brown@company.com',
      phone: '+1 (555) 876-5432',
      hireDate: '2022-06-25',
      salary: 92000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      performance: 4.5,
      projects: 7,
      location: 'Austin, TX',
      reportsTo: 'Sarah Wilson'
    },
    {
      id: 6,
      name: 'Lisa Wang',
      position: 'Marketing Specialist',
      department: 'Marketing',
      email: 'lisa.wang@company.com',
      phone: '+1 (555) 345-6789',
      hireDate: '2023-03-01',
      salary: 65000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media'],
      performance: 4.4,
      projects: 4,
      location: 'Chicago, IL',
      reportsTo: 'Marketing Director'
    },
    {
      id: 7,
      name: 'David Kim',
      position: 'QA Engineer',
      department: 'Engineering',
      email: 'david.kim@company.com',
      phone: '+1 (555) 567-8901',
      hireDate: '2022-09-15',
      salary: 70000,
      status: 'On Leave',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      skills: ['Testing', 'Automation', 'Selenium', 'Jest'],
      performance: 4.3,
      projects: 5,
      location: 'Remote',
      reportsTo: 'Sarah Wilson'
    },
    {
      id: 8,
      name: 'Robert Garcia',
      position: 'Junior Developer',
      department: 'Engineering',
      email: 'robert.garcia@company.com',
      phone: '+1 (555) 678-9012',
      hireDate: '2023-07-10',
      salary: 60000,
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      skills: ['JavaScript', 'React', 'CSS', 'Git'],
      performance: 4.2,
      projects: 3,
      location: 'Miami, FL',
      reportsTo: 'John Smith'
    }
  ]);

  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    hireDate: new Date().toISOString().split('T')[0],
    salary: '',
    status: 'Active',
    skills: [],
    location: '',
    reportsTo: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const departments = ['All', 'Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
  const statuses = ['All', 'Active', 'On Leave', 'Terminated', 'Contract'];
  const positions = ['All', 'Senior Developer', 'Engineering Manager', 'UX Designer', 'Product Manager', 'DevOps Engineer', 'Marketing Specialist', 'QA Engineer', 'Junior Developer'];

  // Filter employees based on search and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'All' || employee.status === selectedStatus;
    const matchesPosition = selectedPosition === 'All' || employee.position === selectedPosition;
    
    return matchesSearch && matchesDepartment && matchesStatus && matchesPosition;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle skills input
  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setNewEmployee(prev => ({
      ...prev,
      skills
    }));
  };

  // Add new employee
  const handleAddEmployee = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing employee
      setEmployees(prev => prev.map(employee => 
        employee.id === newEmployee.id ? newEmployee : employee
      ));
    } else {
      // Add new employee
      const employeeToAdd = {
        ...newEmployee,
        id: Math.max(...employees.map(e => e.id)) + 1,
        salary: parseFloat(newEmployee.salary),
        performance: 4.0,
        projects: 0,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&${Math.random()}`,
        skills: newEmployee.skills
      };
      setEmployees(prev => [...prev, employeeToAdd]);
    }
    
    // Reset form
    setNewEmployee({
      name: '',
      position: '',
      department: '',
      email: '',
      phone: '',
      hireDate: new Date().toISOString().split('T')[0],
      salary: '',
      status: 'Active',
      skills: [],
      location: '',
      reportsTo: ''
    });
    setShowEmployeeForm(false);
    setIsEditing(false);
  };

  // Delete employee
  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(employee => employee.id !== id));
    }
  };

  // Edit employee
  const handleEditEmployee = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
    setShowEmployeeForm(true);
  };

  // View employee details
  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setShowEmployeeForm(false);
    setIsEditing(false);
    setSelectedEmployee(null);
    setNewEmployee({
      name: '',
      position: '',
      department: '',
      email: '',
      phone: '',
      hireDate: new Date().toISOString().split('T')[0],
      salary: '',
      status: 'Active',
      skills: [],
      location: '',
      reportsTo: ''
    });
  };

  // Calculate employee statistics
  const employeeStats = {
    total: employees.length,
    active: employees.filter(e => e.status === 'Active').length,
    engineering: employees.filter(e => e.department === 'Engineering').length,
    totalSalary: employees.reduce((sum, employee) => sum + employee.salary, 0),
    avgPerformance: (employees.reduce((sum, employee) => sum + employee.performance, 0) / employees.length).toFixed(1)
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#00ff88';
      case 'On Leave': return '#f59e0b';
      case 'Terminated': return '#ef4444';
      case 'Contract': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  // Get performance color
  const getPerformanceColor = (performance) => {
    if (performance >= 4.5) return '#00ff88';
    if (performance >= 4.0) return '#f59e0b';
    if (performance >= 3.5) return '#ef4444';
    return '#6b7280';
  };

  return (
    <div className="employees-management">
      {/* Header Section */}
      <div className="employees-header">
        <div className="header-content">
          <h1 className="page-title">Employee Management</h1>
          <p className="page-subtitle">Manage your team members and their information</p>
        </div>
        <button 
          className="add-employee-btn"
          onClick={() => setShowEmployeeForm(true)}
        >
          <FiPlus size={18} />
          Add Employee
        </button>
      </div>

      {/* Employee Statistics */}
      <div className="employees-stats">
        <div className="stat-card">
          <div className="stat-icon total-employees">
            <FiUser size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{employeeStats.total}</h3>
            <p className="stat-title">Total Employees</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon active-employees">
            <FiAward size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{employeeStats.active}</h3>
            <p className="stat-title">Active</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon engineering">
            <FiBriefcase size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{employeeStats.engineering}</h3>
            <p className="stat-title">Engineering</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon salary">
            <FiDollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">${(employeeStats.totalSalary / 1000).toFixed(0)}K</h3>
            <p className="stat-title">Monthly Salary</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon performance">
            <FiStar size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{employeeStats.avgPerformance}</h3>
            <p className="stat-title">Avg Performance</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search employees by name, position, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="filter-select"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedPosition} 
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="filter-select"
            >
              {positions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="view-actions">
          <div className="view-toggle">
            <button 
              className={`view-btn ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
            >
              Grid
            </button>
            <button 
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              List
            </button>
          </div>
          <div className="action-buttons">
            <button className="action-btn export-btn">
              <FiDownload size={16} />
              Export
            </button>
            <button className="action-btn import-btn">
              <FiUpload size={16} />
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Add Employee Form Modal */}
      {showEmployeeForm && (
        <div className="modal-overlay">
          <div className="modal-content large-modal">
            <div className="modal-header">
              <h3>{isEditing ? 'Edit Employee' : 'Add New Employee'}</h3>
              <button 
                className="close-btn"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleAddEmployee} className="employee-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter employee's full name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Position *</label>
                  <select
                    name="position"
                    value={newEmployee.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Position</option>
                    {positions.filter(pos => pos !== 'All').map(position => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Department *</label>
                  <select
                    name="department"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.filter(dept => dept !== 'All').map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={newEmployee.status}
                    onChange={handleInputChange}
                  >
                    {statuses.filter(status => status !== 'All').map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label>Hire Date</label>
                  <input
                    type="date"
                    name="hireDate"
                    value={newEmployee.hireDate}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Salary ($)</label>
                  <input
                    type="number"
                    name="salary"
                    value={newEmployee.salary}
                    onChange={handleInputChange}
                    placeholder="Enter annual salary"
                  />
                </div>
                
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={newEmployee.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                  />
                </div>
                
                <div className="form-group">
                  <label>Reports To</label>
                  <input
                    type="text"
                    name="reportsTo"
                    value={newEmployee.reportsTo}
                    onChange={handleInputChange}
                    placeholder="Enter manager's name"
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label>Skills (comma separated)</label>
                <input
                  type="text"
                  name="skills"
                  value={newEmployee.skills.join(', ')}
                  onChange={handleSkillsChange}
                  placeholder="e.g., React, Node.js, TypeScript"
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {isEditing ? 'Update Employee' : 'Add Employee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="modal-overlay">
          <div className="modal-content employee-details-modal">
            <div className="modal-header">
              <h3>Employee Details</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedEmployee(null)}
              >
                ×
              </button>
            </div>
            
            <div className="employee-details">
              <div className="employee-header">
                <img 
                  src={selectedEmployee.avatar} 
                  alt={selectedEmployee.name}
                  className="employee-avatar large"
                />
                <div className="employee-info">
                  <h2>{selectedEmployee.name}</h2>
                  <p className="employee-position">{selectedEmployee.position}</p>
                  <p className="employee-department">{selectedEmployee.department}</p>
                </div>
                <div className="employee-status">
                  <span 
                    className="status-badge"
                    style={{ 
                      backgroundColor: `${getStatusColor(selectedEmployee.status)}15`,
                      color: getStatusColor(selectedEmployee.status),
                      borderColor: getStatusColor(selectedEmployee.status)
                    }}
                  >
                    {selectedEmployee.status}
                  </span>
                </div>
              </div>
              
              <div className="details-grid">
                <div className="detail-section">
                  <h4>Contact Information</h4>
                  <div className="detail-item">
                    <FiMail className="detail-icon" />
                    <span>{selectedEmployee.email}</span>
                  </div>
                  <div className="detail-item">
                    <FiPhone className="detail-icon" />
                    <span>{selectedEmployee.phone}</span>
                  </div>
                  <div className="detail-item">
                    <FiMapPin className="detail-icon" />
                    <span>{selectedEmployee.location}</span>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>Employment Details</h4>
                  <div className="detail-item">
                    <FiCalendar className="detail-icon" />
                    <span>Hired: {new Date(selectedEmployee.hireDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-item">
                    <FiDollarSign className="detail-icon" />
                    <span>Salary: ${selectedEmployee.salary.toLocaleString()}/year</span>
                  </div>
                  <div className="detail-item">
                    <FiUser className="detail-icon" />
                    <span>Reports to: {selectedEmployee.reportsTo}</span>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>Performance</h4>
                  <div className="performance-rating">
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map(star => (
                        <FiStar 
                          key={star}
                          className={`star ${star <= Math.floor(selectedEmployee.performance) ? 'filled' : ''}`}
                          color={star <= selectedEmployee.performance ? getPerformanceColor(selectedEmployee.performance) : '#666'}
                        />
                      ))}
                    </div>
                    <span className="rating-value">{selectedEmployee.performance}/5.0</span>
                  </div>
                  <div className="detail-item">
                    <FiBriefcase className="detail-icon" />
                    <span>Projects: {selectedEmployee.projects}</span>
                  </div>
                </div>
              </div>
              
              <div className="skills-section">
                <h4>Skills & Expertise</h4>
                <div className="skills-list">
                  {selectedEmployee.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="social-links">
                <h4>Social Profiles</h4>
                <div className="social-icons">
                  <button className="social-btn linkedin">
                    <FiLinkedin size={18} />
                  </button>
                  <button className="social-btn github">
                    <FiGithub size={18} />
                  </button>
                  <button className="social-btn twitter">
                    <FiTwitter size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Employees Grid/List View */}
      <div className="employees-container">
        {view === 'grid' ? (
          <div className="employees-grid">
            {filteredEmployees.map(employee => (
              <div key={employee.id} className="employee-card">
                <div className="employee-header">
                  <img 
                    src={employee.avatar} 
                    alt={employee.name}
                    className="employee-avatar"
                  />
                  <div className="employee-info">
                    <h3 className="employee-name">{employee.name}</h3>
                    <p className="employee-position">{employee.position}</p>
                    <p className="employee-department">{employee.department}</p>
                  </div>
                  <div className="employee-actions">
                    <button 
                      className="action-btn view-btn"
                      onClick={() => handleViewEmployee(employee)}
                      title="View Details"
                    >
                      <FiEye size={14} />
                    </button>
                    <button 
                      className="action-btn edit-btn"
                      onClick={() => handleEditEmployee(employee)}
                      title="Edit Employee"
                    >
                      <FiEdit2 size={14} />
                    </button>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDeleteEmployee(employee.id)}
                      title="Delete Employee"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="employee-contact">
                  <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <span>{employee.email}</span>
                  </div>
                  <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <span>{employee.location}</span>
                  </div>
                </div>
                
                <div className="employee-stats">
                  <div className="stat-item">
                    <span className="stat-label">Performance</span>
                    <div className="performance">
                      <FiStar className="star filled" />
                      <span className="performance-value">{employee.performance}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Projects</span>
                    <span className="stat-value">{employee.projects}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Salary</span>
                    <span className="stat-value">${(employee.salary / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                
                <div className="employee-skills">
                  <div className="skills-list">
                    {employee.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {employee.skills.length > 3 && (
                      <span className="skill-more">+{employee.skills.length - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="employee-footer">
                  <span 
                    className="status-badge"
                    style={{ 
                      backgroundColor: `${getStatusColor(employee.status)}15`,
                      color: getStatusColor(employee.status),
                      borderColor: getStatusColor(employee.status)
                    }}
                  >
                    {employee.status}
                  </span>
                  <span className="hire-date">
                    <FiCalendar size={12} />
                    {new Date(employee.hireDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="employees-table-container">
            <table className="employees-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map(employee => (
                  <tr key={employee.id}>
                    <td className="employee-name-cell">
                      <div className="employee-info-cell">
                        <img 
                          src={employee.avatar} 
                          alt={employee.name}
                          className="employee-avatar small"
                        />
                        <div>
                          <strong>{employee.name}</strong>
                          <div className="employee-location">{employee.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="position">{employee.position}</td>
                    <td className="department">{employee.department}</td>
                    <td className="email">
                      <FiMail className="email-icon" />
                      {employee.email}
                    </td>
                    <td className="phone">{employee.phone}</td>
                    <td>
                      <span 
                        className="status-badge"
                        style={{ 
                          backgroundColor: `${getStatusColor(employee.status)}15`,
                          color: getStatusColor(employee.status),
                          borderColor: getStatusColor(employee.status)
                        }}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <div className="performance-cell">
                        <FiStar className="star filled" />
                        <span>{employee.performance}</span>
                      </div>
                    </td>
                    <td className="salary">${employee.salary.toLocaleString()}</td>
                    <td className="actions">
                      <div className="action-buttons">
                        <button 
                          className="action-btn view-btn"
                          onClick={() => handleViewEmployee(employee)}
                          title="View Details"
                        >
                          <FiEye size={14} />
                        </button>
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => handleEditEmployee(employee)}
                          title="Edit Employee"
                        >
                          <FiEdit2 size={14} />
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteEmployee(employee.id)}
                          title="Delete Employee"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {filteredEmployees.length === 0 && (
          <div className="empty-state">
            <FiUser size={48} className="empty-icon" />
            <h3>No employees found</h3>
            <p>Try adjusting your search or add a new employee.</p>
            <button 
              className="add-employee-btn empty-btn"
              onClick={() => setShowEmployeeForm(true)}
            >
              <FiPlus size={16} />
              Add Your First Employee
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;