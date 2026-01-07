import React, { useState } from 'react';
import logo from "../../assets/logoBlack.png";
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiFolder, 
  FiUser, 
  FiDollarSign, 
  FiFile, 
  FiBarChart2,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSettings,
  FiBell,
  FiMessageSquare,
  FiTrendingUp,
  FiTrendingDown,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiPlayCircle,
  FiAlertCircle
} from 'react-icons/fi';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/dashboard', icon: <FiHome size={22} /> },
    { id: 2, name: 'Clients', path: '/dashboard/clients', icon: <FiUsers size={22} /> },
    { id: 3, name: 'Projects', path: '/dashboard/projects', icon: <FiFolder size={22} /> },
    { id: 4, name: 'Employees', path: '/dashboard/employees', icon: <FiUser size={22} /> },
    { id: 5, name: 'Finance', path: '/dashboard/finance', icon: <FiDollarSign size={22} /> },
    { id: 6, name: 'Files', path: '/dashboard/files', icon: <FiFile size={22} /> },
    { id: 7, name: 'Reports', path: '/dashboard/reports', icon: <FiBarChart2 size={22} /> },
    { id: 8, name: 'Messages', path: '/dashboard/messages', icon: <FiMessageSquare size={22} /> },
    { id: 9, name: 'Settings', path: '/dashboard/settings', icon: <FiSettings size={22} /> }
  ];

  // Top Row Stats Data
  const topStats = [
    {
      id: 1,
      title: 'Total Clients',
      value: '1,248',
      change: '+8%',
      trend: 'up',
      icon: <FiUsers size={24} />,
      color: '#6366f1',
      subtitle: 'From last month'
    },
    {
      id: 2,
      title: 'Active Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: <FiPlayCircle size={24} />,
      color: '#10b981',
      subtitle: 'Currently in progress'
    },
    {
      id: 3,
      title: 'Complete Projects',
      value: '156',
      change: '+5%',
      trend: 'up',
      icon: <FiCheckCircle size={24} />,
      color: '#f59e0b',
      subtitle: 'Total completed'
    },
    {
      id: 4,
      title: 'Revenue This Month',
      value: '$45.2K',
      change: '+23%',
      trend: 'up',
      icon: <FiDollarSign size={24} />,
      color: '#ef4444',
      subtitle: 'Monthly revenue'
    }
  ];

  // Chart Data - New Clients per Month
  const newClientsData = [
    { month: 'Jan', clients: 45 },
    { month: 'Feb', clients: 52 },
    { month: 'Mar', clients: 48 },
    { month: 'Apr', clients: 65 },
    { month: 'May', clients: 58 },
    { month: 'Jun', clients: 72 },
    { month: 'Jul', clients: 68 },
    { month: 'Aug', clients: 80 },
    { month: 'Sep', clients: 75 },
    { month: 'Oct', clients: 85 },
    { month: 'Nov', clients: 78 },
    { month: 'Dec', clients: 92 }
  ];

  // Revenue Growth Data
  const revenueData = [
    { month: 'Jan', revenue: 35 },
    { month: 'Feb', revenue: 38 },
    { month: 'Mar', revenue: 42 },
    { month: 'Apr', revenue: 45 },
    { month: 'May', revenue: 48 },
    { month: 'Jun', revenue: 52 },
    { month: 'Jul', revenue: 50 },
    { month: 'Aug', revenue: 55 },
    { month: 'Sep', revenue: 58 },
    { month: 'Oct', revenue: 62 },
    { month: 'Nov', revenue: 65 },
    { month: 'Dec', revenue: 68 }
  ];

  // Ongoing Projects Table Data
  const ongoingProjects = [
    {
      id: 1,
      name: 'Website Redesign',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      deadline: '2024-02-15',
      progress: 85,
      priority: 'High'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'Innovate Labs',
      status: 'In Progress',
      deadline: '2024-03-01',
      progress: 45,
      priority: 'High'
    },
    {
      id: 3,
      name: 'E-commerce Platform',
      client: 'Global Solutions',
      status: 'In Progress',
      deadline: '2024-02-28',
      progress: 60,
      priority: 'Medium'
    },
    {
      id: 4,
      name: 'Brand Identity',
      client: 'Digital Ventures',
      status: 'In Progress',
      deadline: '2024-02-20',
      progress: 30,
      priority: 'Medium'
    },
    {
      id: 5,
      name: 'CRM System',
      client: 'Enterprise Corp',
      status: 'In Progress',
      deadline: '2024-03-15',
      progress: 25,
      priority: 'Low'
    }
  ];

  // Recent Activity Data
  const recentActivities = [
    {
      id: 1,
      project: 'Website Redesign',
      action: 'Project updated',
      description: 'Added new features to homepage',
      time: '2 hours ago',
      type: 'update',
      user: 'John Doe'
    },
    {
      id: 2,
      project: 'Mobile App',
      action: 'Milestone completed',
      description: 'Completed user authentication module',
      time: '5 hours ago',
      type: 'completion',
      user: 'Sarah Wilson'
    },
    {
      id: 3,
      project: 'E-commerce Platform',
      action: 'Client feedback',
      description: 'Received client approval for design',
      time: '1 day ago',
      type: 'feedback',
      user: 'Mike Johnson'
    },
    {
      id: 4,
      project: 'Brand Identity',
      action: 'Project started',
      description: 'Kicked off new brand identity project',
      time: '2 days ago',
      type: 'start',
      user: 'Emily Chen'
    },
    {
      id: 5,
      project: 'CRM System',
      action: 'Bug fixed',
      description: 'Resolved dashboard loading issue',
      time: '3 days ago',
      type: 'fix',
      user: 'Alex Brown'
    }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
    setSidebarOpen(false);
  };

  // Function to get current page title from URL
  const getCurrentPageTitle = () => {
    const path = location.pathname;
    const currentItem = menuItems.find(item => item.path === path);
    if (currentItem) return currentItem.name;
    
    const pathParts = path.split('/').filter(part => part);
    if (pathParts.length > 1) {
      const lastPart = pathParts[pathParts.length - 1];
      return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
    }
    
    return 'Dashboard';
  };

  // Function to get breadcrumb items
  const getBreadcrumbItems = () => {
    const path = location.pathname;
    const pathParts = path.split('/').filter(part => part);
    
    if (pathParts.length === 0) return [{ name: 'Dashboard', path: '/dashboard' }];
    
    const breadcrumbs = [{ name: 'Dashboard', path: '/dashboard' }];
    
    if (pathParts.length > 1) {
      const currentPath = `/${pathParts[0]}/${pathParts[1]}`;
      const currentItem = menuItems.find(item => item.path === currentPath);
      if (currentItem) {
        breadcrumbs.push({ name: currentItem.name, path: currentItem.path });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbItems = getBreadcrumbItems();
  const currentPageTitle = getCurrentPageTitle();
  const isDashboardHome = location.pathname === '/dashboard';

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return '#f59e0b';
      case 'Completed': return '#10b981';
      case 'Pending': return '#6b7280';
      default: return '#6b7280';
    }
  };

  // Function to get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  // Function to get activity icon
  const getActivityIcon = (type) => {
    switch (type) {
      case 'update': return <FiAlertCircle className="activity-icon update" />;
      case 'completion': return <FiCheckCircle className="activity-icon completion" />;
      case 'feedback': return <FiMessageSquare className="activity-icon feedback" />;
      case 'start': return <FiPlayCircle className="activity-icon start" />;
      case 'fix': return <FiCheckCircle className="activity-icon fix" />;
      default: return <FiAlertCircle className="activity-icon update" />;
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="mobile-overlay" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container" onClick={handleLogoClick}>
            <img src={logo} alt="Company Logo" className="sidebar-logo" />
          </div>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="section-label">MAIN MENU</span>
            <ul className="sidebar-menu">
              {menuItems.slice(0, 6).map(item => (
                <li key={item.id} className="menu-item">
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-text">{item.name}</span>
                    <div className="active-indicator"></div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <span className="section-label">TOOLS</span>
            <ul className="sidebar-menu">
              {menuItems.slice(6).map(item => (
                <li key={item.id} className="menu-item">
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-text">{item.name}</span>
                    <div className="active-indicator"></div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FiMenu size={24} />
            </button>
            <div className="breadcrumb">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.path}>
                  {index > 0 && <span className="breadcrumb-separator">/</span>}
                  <span 
                    className={`breadcrumb-item ${index === breadcrumbItems.length - 1 ? 'active' : ''}`}
                    onClick={() => index < breadcrumbItems.length - 1 && navigate(item.path)}
                  >
                    {item.name}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="header-right">
            <div className="header-actions">
              <button className="action-btn notification-btn">
                <FiBell size={20} />
                {notifications > 0 && (
                  <span className="notification-badge">{notifications}</span>
                )}
              </button>
              
              <div className="user-profile">
                <div className="user-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=45&h=45&fit=crop&crop=face&auto=format" 
                    alt="User Avatar" 
                    className="avatar-img"
                  />
                  <div className="online-indicator"></div>
                </div>
                <div className="user-info">
                  <span className="user-name">John Doe</span>
                  <span className="user-role">Administrator</span>
                </div>
                <FiChevronDown className="dropdown-arrow" size={16} />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="page-header">
            <h1 className="page-title">{currentPageTitle}</h1>
            <p className="page-subtitle">Welcome to your {currentPageTitle.toLowerCase()} dashboard</p>
          </div>
          
          <div className="content-wrapper">
            {isDashboardHome ? (
              <div className="dashboard-overview">
                {/* Top Row - Stats Cards */}
                <div className="stats-grid top-row">
                  {topStats.map(stat => (
                    <div key={stat.id} className="stat-card">
                      <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                        {stat.icon}
                      </div>
                      <div className="stat-content">
                        <h3 className="stat-value">{stat.value}</h3>
                        <p className="stat-title">{stat.title}</p>
                        <div className="stat-trend">
                          <span className={`trend ${stat.trend}`}>
                            {stat.trend === 'up' ? <FiTrendingUp size={14} /> : <FiTrendingDown size={14} />}
                            {stat.change}
                          </span>
                          <span className="stat-subtitle">{stat.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle Row - Charts */}
                <div className="charts-row">
                  {/* New Clients Bar Chart */}
                  <div className="chart-card">
                    <div className="chart-header">
                      <h3 className="chart-title">New Clients per Month</h3>
                      <span className="chart-subtitle">Monthly client acquisition</span>
                    </div>
                    <div className="chart-container">
                      <div className="bar-chart">
                        {newClientsData.map((item, index) => (
                          <div key={index} className="bar-chart-item">
                            <div className="bar-container">
                              <div 
                                className="bar" 
                                style={{ height: `${(item.clients / 100) * 100}%` }}
                                title={`${item.clients} clients`}
                              ></div>
                            </div>
                            <span className="bar-label">{item.month}</span>
                            <span className="bar-value">{item.clients}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Revenue Growth Line Chart */}
                  <div className="chart-card">
                    <div className="chart-header">
                      <h3 className="chart-title">Revenue Growth Trend</h3>
                      <span className="chart-subtitle">Monthly revenue in thousands</span>
                    </div>
                    <div className="chart-container">
                      <div className="line-chart">
                        <div className="line-chart-grid">
                          {[0, 20, 40, 60, 80].map((value) => (
                            <div key={value} className="grid-line">
                              <span className="grid-label">${value}K</span>
                            </div>
                          ))}
                        </div>
                        <div className="line-chart-path">
                          {revenueData.map((item, index) => (
                            <div
                              key={index}
                              className="data-point"
                              style={{ 
                                left: `${(index / (revenueData.length - 1)) * 100}%`,
                                bottom: `${(item.revenue / 80) * 100}%`
                              }}
                              title={`${item.month}: $${item.revenue}K`}
                            >
                              <div className="point-tooltip">
                                ${item.revenue}K
                              </div>
                            </div>
                          ))}
                          <div className="line"></div>
                        </div>
                        <div className="line-chart-labels">
                          {revenueData.map((item, index) => (
                            <span key={index} className="chart-label">
                              {item.month}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Tables */}
                <div className="tables-row">
                  {/* Ongoing Projects Table */}
                  <div className="table-card">
                    <div className="table-header">
                      <h3 className="table-title">Ongoing Projects</h3>
                      <button className="view-all-btn" onClick={() => navigate('/dashboard/projects')}>
                        View All
                      </button>
                    </div>
                    <div className="table-container">
                      <table className="projects-table">
                        <thead>
                          <tr>
                            <th>Project Name</th>
                            <th>Client</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ongoingProjects.map(project => (
                            <tr key={project.id}>
                              <td className="project-name">
                                <strong>{project.name}</strong>
                              </td>
                              <td className="client-name">{project.client}</td>
                              <td>
                                <span 
                                  className="status-badge"
                                  style={{ backgroundColor: `${getStatusColor(project.status)}15`, color: getStatusColor(project.status) }}
                                >
                                  {project.status}
                                </span>
                              </td>
                              <td>
                                <div className="progress-container">
                                  <div className="progress-bar">
                                    <div 
                                      className="progress-fill" 
                                      style={{ width: `${project.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="progress-text">{project.progress}%</span>
                                </div>
                              </td>
                              <td className="deadline">
                                <FiCalendar size={14} />
                                {new Date(project.deadline).toLocaleDateString()}
                              </td>
                              <td>
                                <span 
                                  className="priority-badge"
                                  style={{ backgroundColor: `${getPriorityColor(project.priority)}15`, color: getPriorityColor(project.priority) }}
                                >
                                  {project.priority}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Recent Activity Table */}
                  <div className="table-card">
                    <div className="table-header">
                      <h3 className="table-title">Recent Activity</h3>
                      <button className="view-all-btn" onClick={() => navigate('/dashboard/projects')}>
                        View All
                      </button>
                    </div>
                    <div className="table-container">
                      <div className="activity-list">
                        {recentActivities.map(activity => (
                          <div key={activity.id} className="activity-item">
                            <div className="activity-icon">
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="activity-content">
                              <div className="activity-header">
                                <span className="activity-project">{activity.project}</span>
                                <span className="activity-time">
                                  <FiClock size={12} />
                                  {activity.time}
                                </span>
                              </div>
                              <p className="activity-action">{activity.action}</p>
                              <p className="activity-description">{activity.description}</p>
                              <span className="activity-user">By {activity.user}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;