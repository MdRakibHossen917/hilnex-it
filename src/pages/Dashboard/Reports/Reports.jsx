import React, { useState } from 'react';
import { 
  FiBarChart2, 
  FiPieChart, 
  FiTrendingUp, 
  FiDownload, 
  FiFilter, 
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiShoppingBag,
  FiEye,
  FiShare2,
  FiPrinter,
  FiRefreshCw,
  FiSettings,
  FiArrowUp,
  FiArrowDown,
  FiActivity,
  FiTarget,
  FiAward,
  FiClock
} from 'react-icons/fi';
import './Reports.css';

const Reports = () => {
  const [dateRange, setDateRange] = useState('last30');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for charts and reports
  const revenueData = [
    { month: 'Jan', revenue: 35000, profit: 28000, clients: 45 },
    { month: 'Feb', revenue: 42000, profit: 32000, clients: 52 },
    { month: 'Mar', revenue: 38000, profit: 29000, clients: 48 },
    { month: 'Apr', revenue: 51000, profit: 38000, clients: 65 },
    { month: 'May', revenue: 48000, profit: 35000, clients: 58 },
    { month: 'Jun', revenue: 55000, profit: 42000, clients: 72 },
    { month: 'Jul', revenue: 52000, profit: 39000, clients: 68 },
    { month: 'Aug', revenue: 61000, profit: 47000, clients: 80 },
    { month: 'Sep', revenue: 58000, profit: 44000, clients: 75 },
    { month: 'Oct', revenue: 65000, profit: 50000, clients: 85 },
    { month: 'Nov', revenue: 62000, profit: 48000, clients: 78 },
    { month: 'Dec', revenue: 72000, profit: 56000, clients: 92 }
  ];

  const kpiData = {
    revenue: {
      current: 72000,
      previous: 62000,
      change: 16.1,
      trend: 'up'
    },
    profit: {
      current: 56000,
      previous: 48000,
      change: 16.7,
      trend: 'up'
    },
    clients: {
      current: 92,
      previous: 78,
      change: 17.9,
      trend: 'up'
    },
    projects: {
      current: 24,
      previous: 18,
      change: 33.3,
      trend: 'up'
    }
  };

  const projectPerformance = [
    { name: 'Website Redesign', completion: 85, budget: 25000, spent: 21000, timeline: 'On Track' },
    { name: 'Mobile App', completion: 45, budget: 50000, spent: 22000, timeline: 'On Track' },
    { name: 'E-commerce Platform', completion: 100, budget: 75000, spent: 72000, timeline: 'Completed' },
    { name: 'Brand Identity', completion: 30, budget: 15000, spent: 4500, timeline: 'On Track' },
    { name: 'CRM System', completion: 25, budget: 100000, spent: 25000, timeline: 'At Risk' }
  ];

  const teamPerformance = [
    { name: 'John Smith', role: 'Senior Developer', projects: 12, completion: 94, rating: 4.8 },
    { name: 'Sarah Wilson', role: 'Engineering Manager', projects: 8, completion: 98, rating: 4.9 },
    { name: 'Mike Chen', role: 'UX Designer', projects: 6, completion: 88, rating: 4.6 },
    { name: 'Emily Davis', role: 'Product Manager', projects: 10, completion: 92, rating: 4.7 },
    { name: 'Alex Brown', role: 'DevOps Engineer', projects: 7, completion: 86, rating: 4.5 }
  ];

  const clientMetrics = [
    { name: 'TechCorp Inc.', projects: 12, revenue: 125000, satisfaction: 4.8, status: 'Active' },
    { name: 'Global Solutions', projects: 8, revenue: 98000, satisfaction: 4.9, status: 'Active' },
    { name: 'Innovate Labs', projects: 5, revenue: 65000, satisfaction: 4.7, status: 'Active' },
    { name: 'Digital Ventures', projects: 15, revenue: 185000, satisfaction: 4.6, status: 'Active' },
    { name: 'Enterprise Corp', projects: 3, revenue: 45000, satisfaction: 4.4, status: 'Active' }
  ];

  // Calculate metrics for charts
  const calculateMetrics = () => {
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
    const totalProfit = revenueData.reduce((sum, item) => sum + item.profit, 0);
    const totalClients = revenueData.reduce((sum, item) => sum + item.clients, 0);
    const avgRevenue = totalRevenue / revenueData.length;
    
    return { totalRevenue, totalProfit, totalClients, avgRevenue };
  };

  const metrics = calculateMetrics();

  // Generate report data based on selected metric
  const getChartData = () => {
    return revenueData.map(item => ({
      month: item.month,
      value: item[selectedMetric]
    }));
  };

  const chartData = getChartData();

  // Handle report generation
  const handleGenerateReport = () => {
    alert('Generating comprehensive report... This would typically download a PDF or CSV file.');
  };

  // Handle data export
  const handleExportData = (format) => {
    alert(`Exporting data as ${format.toUpperCase()}...`);
  };

  // Render custom chart (simplified for this example)
  const renderBarChart = () => {
    const maxValue = Math.max(...chartData.map(item => item.value));
    
    return (
      <div className="bar-chart">
        {chartData.map((item, index) => (
          <div key={index} className="bar-chart-item">
            <div className="bar-container">
              <div 
                className="bar" 
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  background: selectedMetric === 'revenue' 
                    ? 'linear-gradient(180deg, #ff8402, #ffb347)'
                    : selectedMetric === 'profit'
                    ? 'linear-gradient(180deg, #00ff88, #34d399)'
                    : 'linear-gradient(180deg, #3b82f6, #60a5fa)'
                }}
              ></div>
            </div>
            <span className="bar-label">{item.month}</span>
            <span className="bar-value">
              {selectedMetric === 'clients' ? item.value : `$${(item.value / 1000).toFixed(0)}K`}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Render pie chart (simplified)
  const renderPieChart = () => {
    const categories = [
      { name: 'Development', value: 45, color: '#ff8402' },
      { name: 'Design', value: 20, color: '#3b82f6' },
      { name: 'Marketing', value: 15, color: '#00ff88' },
      { name: 'Operations', value: 12, color: '#8b5cf6' },
      { name: 'Other', value: 8, color: '#6b7280' }
    ];

    return (
      <div className="pie-chart">
        <div className="pie-chart-visual">
          {categories.map((category, index) => {
            const percentage = category.value;
            const rotation = categories.slice(0, index).reduce((sum, cat) => sum + cat.value, 0) * 3.6;
            
            return (
              <div
                key={index}
                className="pie-segment"
                style={{
                  background: `conic-gradient(${category.color} 0% ${percentage}%, transparent ${percentage}% 100%)`,
                  transform: `rotate(${rotation}deg)`
                }}
              ></div>
            );
          })}
        </div>
        <div className="pie-legend">
          {categories.map((category, index) => (
            <div key={index} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="legend-label">{category.name}</span>
              <span className="legend-value">{category.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="reports-management">
      {/* Header Section */}
      <div className="reports-header">
        <div className="header-content">
          <h1 className="page-title">Analytics & Reports</h1>
          <p className="page-subtitle">Comprehensive insights and performance metrics</p>
        </div>
        <div className="header-actions">
          <button 
            className="action-btn generate-report-btn"
            onClick={handleGenerateReport}
          >
            <FiPrinter size={18} />
            Generate Report
          </button>
          <button 
            className="action-btn refresh-btn"
            onClick={() => window.location.reload()}
          >
            <FiRefreshCw size={18} />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Date Range and Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <div className="filter-item">
            <FiCalendar className="filter-icon" />
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="filter-select"
            >
              <option value="last7">Last 7 Days</option>
              <option value="last30">Last 30 Days</option>
              <option value="last90">Last 90 Days</option>
              <option value="ytd">Year to Date</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedMetric} 
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="filter-select"
            >
              <option value="revenue">Revenue</option>
              <option value="profit">Profit</option>
              <option value="clients">Clients</option>
            </select>
          </div>
        </div>

        <div className="export-actions">
          <button 
            className="action-btn export-btn"
            onClick={() => handleExportData('csv')}
          >
            <FiDownload size={16} />
            Export CSV
          </button>
          <button 
            className="action-btn export-btn"
            onClick={() => handleExportData('pdf')}
          >
            <FiDownload size={16} />
            Export PDF
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="reports-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <FiBarChart2 size={18} />
          Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <FiTarget size={18} />
          Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          <FiUsers size={18} />
          Team
        </button>
        <button 
          className={`tab-btn ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => setActiveTab('clients')}
        >
          <FiAward size={18} />
          Clients
        </button>
        <button 
          className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
          onClick={() => setActiveTab('financial')}
        >
          <FiDollarSign size={18} />
          Financial
        </button>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <div className="kpi-icon revenue">
              <FiDollarSign size={24} />
            </div>
            <div className="kpi-trend">
              <span className={`trend ${kpiData.revenue.trend}`}>
                {kpiData.revenue.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                {kpiData.revenue.change}%
              </span>
            </div>
          </div>
          <div className="kpi-content">
            <h3 className="kpi-value">${(kpiData.revenue.current / 1000).toFixed(0)}K</h3>
            <p className="kpi-title">Total Revenue</p>
            <p className="kpi-subtitle">Monthly Revenue</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <div className="kpi-icon profit">
              <FiTrendingUp size={24} />
            </div>
            <div className="kpi-trend">
              <span className={`trend ${kpiData.profit.trend}`}>
                {kpiData.profit.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                {kpiData.profit.change}%
              </span>
            </div>
          </div>
          <div className="kpi-content">
            <h3 className="kpi-value">${(kpiData.profit.current / 1000).toFixed(0)}K</h3>
            <p className="kpi-title">Net Profit</p>
            <p className="kpi-subtitle">Monthly Profit</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <div className="kpi-icon clients">
              <FiUsers size={24} />
            </div>
            <div className="kpi-trend">
              <span className={`trend ${kpiData.clients.trend}`}>
                {kpiData.clients.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                {kpiData.clients.change}%
              </span>
            </div>
          </div>
          <div className="kpi-content">
            <h3 className="kpi-value">{kpiData.clients.current}</h3>
            <p className="kpi-title">Active Clients</p>
            <p className="kpi-subtitle">Total Clients</p>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <div className="kpi-icon projects">
              <FiShoppingBag size={24} />
            </div>
            <div className="kpi-trend">
              <span className={`trend ${kpiData.projects.trend}`}>
                {kpiData.projects.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                {kpiData.projects.change}%
              </span>
            </div>
          </div>
          <div className="kpi-content">
            <h3 className="kpi-value">{kpiData.projects.current}</h3>
            <p className="kpi-title">Active Projects</p>
            <p className="kpi-subtitle">Ongoing Work</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="reports-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="charts-grid">
              <div className="chart-card large">
                <div className="chart-header">
                  <h3>Revenue Trend</h3>
                  <p>Monthly revenue performance</p>
                </div>
                <div className="chart-container">
                  {renderBarChart()}
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Revenue Distribution</h3>
                  <p>By service category</p>
                </div>
                <div className="chart-container">
                  {renderPieChart()}
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Performance Metrics</h3>
                  <p>Key performance indicators</p>
                </div>
                <div className="metrics-list">
                  <div className="metric-item">
                    <span className="metric-label">Revenue Growth</span>
                    <span className="metric-value positive">+16.1%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Profit Margin</span>
                    <span className="metric-value positive">77.8%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Client Growth</span>
                    <span className="metric-value positive">+17.9%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Project Success</span>
                    <span className="metric-value positive">94%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Team Utilization</span>
                    <span className="metric-value">87%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <div className="activity-header">
                <h3>Recent Activity</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon success">
                    {/* <FiCheckCircle size={16} /> */}
                  </div>
                  <div className="activity-content">
                    <p>Project "Website Redesign" completed successfully</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon info">
                    <FiDollarSign size={16} />
                  </div>
                  <div className="activity-content">
                    <p>New invoice paid by TechCorp Inc. ($15,000)</p>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon warning">
                    <FiClock size={16} />
                  </div>
                  <div className="activity-content">
                    <p>Project "CRM System" timeline adjustment needed</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon success">
                    <FiUsers size={16} />
                  </div>
                  <div className="activity-content">
                    <p>New client onboarding: Enterprise Solutions</p>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-tab">
            <div className="table-card">
              <div className="table-header">
                <h3>Project Performance</h3>
                <p>Detailed project metrics and progress</p>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Completion</th>
                      <th>Budget</th>
                      <th>Spent</th>
                      <th>Timeline</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectPerformance.map((project, index) => (
                      <tr key={index}>
                        <td className="project-name">
                          <strong>{project.name}</strong>
                        </td>
                        <td>
                          <div className="progress-cell">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{ width: `${project.completion}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">{project.completion}%</span>
                          </div>
                        </td>
                        <td className="budget">${project.budget.toLocaleString()}</td>
                        <td className="spent">${project.spent.toLocaleString()}</td>
                        <td>
                          <span className={`timeline-status ${project.timeline.toLowerCase().replace(' ', '-')}`}>
                            {project.timeline}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge ${project.completion === 100 ? 'completed' : 'in-progress'}`}>
                            {project.completion === 100 ? 'Completed' : 'In Progress'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <h4>Average Completion</h4>
                <div className="metric-value-large">
                  {Math.round(projectPerformance.reduce((sum, p) => sum + p.completion, 0) / projectPerformance.length)}%
                </div>
                <p>Across all projects</p>
              </div>
              <div className="metric-card">
                <h4>Budget Utilization</h4>
                <div className="metric-value-large">78%</div>
                <p>Of allocated budget</p>
              </div>
              <div className="metric-card">
                <h4>On-time Delivery</h4>
                <div className="metric-value-large">92%</div>
                <p>Projects delivered on schedule</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="team-tab">
            <div className="table-card">
              <div className="table-header">
                <h3>Team Performance</h3>
                <p>Individual contributions and metrics</p>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Team Member</th>
                      <th>Role</th>
                      <th>Projects</th>
                      <th>Completion Rate</th>
                      <th>Rating</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamPerformance.map((member, index) => (
                      <tr key={index}>
                        <td className="member-name">
                          <strong>{member.name}</strong>
                        </td>
                        <td className="role">{member.role}</td>
                        <td className="projects">{member.projects}</td>
                        <td>
                          <div className="completion-rate">
                            <span className="rate-value">{member.completion}%</span>
                            <div className="rate-bar">
                              <div 
                                className="rate-fill" 
                                style={{ width: `${member.completion}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating">
                            <FiStar className="star filled" />
                            <span>{member.rating}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`performance-badge ${
                            member.rating >= 4.8 ? 'excellent' :
                            member.rating >= 4.5 ? 'good' :
                            member.rating >= 4.0 ? 'average' : 'needs-improvement'
                          }`}>
                            {member.rating >= 4.8 ? 'Excellent' :
                             member.rating >= 4.5 ? 'Good' :
                             member.rating >= 4.0 ? 'Average' : 'Needs Improvement'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="team-stats">
              <div className="stat-card">
                <h4>Team Capacity</h4>
                <div className="stat-value">87%</div>
                <p>Current utilization rate</p>
              </div>
              <div className="stat-card">
                <h4>Avg. Rating</h4>
                <div className="stat-value">4.7</div>
                <p>Team performance score</p>
              </div>
              <div className="stat-card">
                <h4>Total Projects</h4>
                <div className="stat-value">43</div>
                <p>Active team projects</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="clients-tab">
            <div className="table-card">
              <div className="table-header">
                <h3>Client Analytics</h3>
                <p>Client performance and satisfaction metrics</p>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Projects</th>
                      <th>Revenue</th>
                      <th>Satisfaction</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientMetrics.map((client, index) => (
                      <tr key={index}>
                        <td className="client-name">
                          <strong>{client.name}</strong>
                        </td>
                        <td className="projects">{client.projects}</td>
                        <td className="revenue">${client.revenue.toLocaleString()}</td>
                        <td>
                          <div className="satisfaction">
                            <div className="satisfaction-stars">
                              {[1, 2, 3, 4, 5].map(star => (
                                <FiStar 
                                  key={star}
                                  className={`star ${star <= client.satisfaction ? 'filled' : ''}`}
                                />
                              ))}
                            </div>
                            <span className="satisfaction-value">{client.satisfaction}</span>
                          </div>
                        </td>
                        <td>
                          <span className="status-badge active">{client.status}</span>
                        </td>
                        <td className="actions">
                          <div className="action-buttons">
                            <button className="action-btn view-btn">
                              <FiEye size={14} />
                            </button>
                            <button className="action-btn share-btn">
                              <FiShare2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="client-insights">
              <div className="insight-card">
                <h4>Top Client</h4>
                <div className="insight-value">Digital Ventures</div>
                <p>$185K total revenue</p>
              </div>
              <div className="insight-card">
                <h4>Avg. Satisfaction</h4>
                <div className="insight-value">4.7/5.0</div>
                <p>Client rating</p>
              </div>
              <div className="insight-card">
                <h4>Retention Rate</h4>
                <div className="insight-value">94%</div>
                <p>Client retention</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="financial-tab">
            <div className="financial-overview">
              <div className="financial-card large">
                <h3>Revenue Breakdown</h3>
                <div className="revenue-chart">
                  {revenueData.map((month, index) => (
                    <div key={index} className="revenue-item">
                      <div className="revenue-bar">
                        <div 
                          className="revenue-fill"
                          style={{ height: `${(month.revenue / 80000) * 100}%` }}
                        ></div>
                      </div>
                      <span className="revenue-month">{month.month}</span>
                      <span className="revenue-amount">${(month.revenue / 1000).toFixed(0)}K</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="financial-stats">
                <div className="stat-card large">
                  <h4>Financial Summary</h4>
                  <div className="financial-metrics">
                    <div className="financial-metric">
                      <span className="metric-label">Total Revenue</span>
                      <span className="metric-value">${(metrics.totalRevenue / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="financial-metric">
                      <span className="metric-label">Net Profit</span>
                      <span className="metric-value">${(metrics.totalProfit / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="financial-metric">
                      <span className="metric-label">Profit Margin</span>
                      <span className="metric-value">
                        {((metrics.totalProfit / metrics.totalRevenue) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="financial-metric">
                      <span className="metric-label">Avg. Monthly Revenue</span>
                      <span className="metric-value">${(metrics.avgRevenue / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="expense-breakdown">
              <h3>Expense Distribution</h3>
              <div className="expense-categories">
                <div className="expense-category">
                  <span className="category-name">Salaries</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '45%' }}></div>
                  </div>
                  <span className="category-percent">45%</span>
                </div>
                <div className="expense-category">
                  <span className="category-name">Software & Tools</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '20%' }}></div>
                  </div>
                  <span className="category-percent">20%</span>
                </div>
                <div className="expense-category">
                  <span className="category-name">Marketing</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '15%' }}></div>
                  </div>
                  <span className="category-percent">15%</span>
                </div>
                <div className="expense-category">
                  <span className="category-name">Operations</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '12%' }}></div>
                  </div>
                  <span className="category-percent">12%</span>
                </div>
                <div className="expense-category">
                  <span className="category-name">Other</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '8%' }}></div>
                  </div>
                  <span className="category-percent">8%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;