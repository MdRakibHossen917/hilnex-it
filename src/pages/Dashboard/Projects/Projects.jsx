import React, { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiFilter,
  FiDownload,
  FiUpload,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiPlayCircle,
  FiPauseCircle,
  FiFolder,
  FiBarChart2,
  FiUsers,
  FiSettings,
} from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      client: "TechCorp Inc.",
      status: "In Progress",
      priority: "High",
      startDate: "2024-01-15",
      deadline: "2024-03-15",
      progress: 75,
      budget: 25000,
      team: ["John Doe", "Sarah Wilson", "Mike Chen"],
      description: "Complete redesign of corporate website with modern UI/UX",
      tasks: {
        completed: 12,
        total: 16,
      },
    },
    {
      id: 2,
      name: "App Development",
      client: "Innovate Labs",
      status: "In Progress",
      priority: "High",
      startDate: "2024-02-01",
      deadline: "2024-04-30",
      progress: 45,
      budget: 50000,
      team: ["Emily Davis", "Alex Brown", "Mike Chen"],
      description: "Cross-platform mobile application for business management",
      tasks: {
        completed: 9,
        total: 20,
      },
    },
    {
      id: 3,
      name: "E-commerce Platform",
      client: "Global Solutions",
      status: "Completed",
      priority: "Medium",
      startDate: "2023-11-01",
      deadline: "2024-01-31",
      progress: 100,
      budget: 75000,
      team: ["John Doe", "Robert Brown", "Lisa Wang"],
      description: "Full-stack e-commerce solution with payment integration",
      tasks: {
        completed: 25,
        total: 25,
      },
    },
    {
      id: 4,
      name: "Brand Identity",
      client: "Digital Ventures",
      status: "In Progress",
      priority: "Medium",
      startDate: "2024-01-20",
      deadline: "2024-02-28",
      progress: 30,
      budget: 15000,
      team: ["Sarah Wilson", "David Kim"],
      description:
        "Complete brand identity package including logo and guidelines",
      tasks: {
        completed: 3,
        total: 10,
      },
    },
    {
      id: 5,
      name: "CRM System",
      client: "Enterprise Corp",
      status: "Planning",
      priority: "Regular",
      startDate: "2024-03-01",
      deadline: "2024-06-30",
      progress: 10,
      budget: 100000,
      team: ["Alex Brown", "Mike Chen", "Emily Davis"],
      description: "Custom CRM system with analytics and reporting",
      tasks: {
        completed: 2,
        total: 18,
      },
    },
    {
      id: 6,
      name: "Marketing Campaign",
      client: "StartUp XYZ",
      status: "On Hold",
      priority: "Medium",
      startDate: "2024-02-15",
      deadline: "2024-05-15",
      progress: 20,
      budget: 30000,
      team: ["Lisa Wang", "David Kim"],
      description: "Digital marketing campaign across multiple channels",
      tasks: {
        completed: 4,
        total: 15,
      },
    },
  ]);

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");
  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    status: "Planning",
    priority: "Medium",
    startDate: new Date().toISOString().split("T")[0],
    deadline: "",
    budget: "",
    description: "",
    team: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  const statuses = [
    "All",
    "Planning",
    "In Progress",
    "On Hold",
    "Completed",
    "Cancelled",
  ];
  const priorities = ["All", "Regular", "Medium", "High", "Urgent"];
  const clients = [
    "All",
    "TechCorp Inc.",
    "Innovate Labs",
    "Global Solutions",
    "Digital Ventures",
    "Enterprise Corp",
    "StartUp XYZ",
  ];
  const teamMembers = [
    "John Doe",
    "Sarah Wilson",
    "Mike Chen",
    "Emily Davis",
    "Alex Brown",
    "Robert Brown",
    "Lisa Wang",
    "David Kim",
  ];

  // Filter projects based on search and filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;
    const matchesPriority =
      selectedPriority === "All" || project.priority === selectedPriority;
    const matchesClient =
      selectedClient === "All" || project.client === selectedClient;

    return matchesSearch && matchesStatus && matchesPriority && matchesClient;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle team member selection
  const handleTeamChange = (member) => {
    setNewProject((prev) => ({
      ...prev,
      team: prev.team.includes(member)
        ? prev.team.filter((m) => m !== member)
        : [...prev.team, member],
    }));
  };

  // Add new project
  const handleAddProject = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing project
      setProjects((prev) =>
        prev.map((project) =>
          project.id === newProject.id ? newProject : project
        )
      );
    } else {
      // Add new project
      const projectToAdd = {
        ...newProject,
        id: Math.max(...projects.map((p) => p.id)) + 1,
        progress: 0,
        tasks: {
          completed: 0,
          total: 0,
        },
        budget: parseFloat(newProject.budget),
        team: newProject.team,
      };
      setProjects((prev) => [...prev, projectToAdd]);
    }

    // Reset form
    setNewProject({
      name: "",
      client: "",
      status: "Planning",
      priority: "Medium",
      startDate: new Date().toISOString().split("T")[0],
      deadline: "",
      budget: "",
      description: "",
      team: [],
    });
    setShowProjectForm(false);
    setIsEditing(false);
  };

  // Delete project
  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((project) => project.id !== id));
    }
  };

  // Edit project
  const handleEditProject = (project) => {
    setNewProject(project);
    setIsEditing(true);
    setShowProjectForm(true);
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setShowProjectForm(false);
    setIsEditing(false);
    setNewProject({
      name: "",
      client: "",
      status: "Planning",
      priority: "Medium",
      startDate: new Date().toISOString().split("T")[0],
      deadline: "",
      budget: "",
      description: "",
      team: [],
    });
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Planning":
        return <FiClock className="status-icon planning" />;
      case "In Progress":
        return <FiPlayCircle className="status-icon in-progress" />;
      case "On Hold":
        return <FiPauseCircle className="status-icon on-hold" />;
      case "Completed":
        return <FiCheckCircle className="status-icon completed" />;
      case "Cancelled":
        return <FiAlertCircle className="status-icon cancelled" />;
      default:
        return <FiClock className="status-icon planning" />;
    }
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "#00ff88";
      case "Medium":
        return "#f59e0b";
      case "High":
        return "#ef4444";
      case "Urgent":
        return "#dc2626";
      default:
        return "#6b7280";
    }
  };

  // Calculate project statistics
  const projectStats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "Completed").length,
    inProgress: projects.filter((p) => p.status === "In Progress").length,
    onHold: projects.filter((p) => p.status === "On Hold").length,
    planning: projects.filter((p) => p.status === "Planning").length,
    totalBudget: projects.reduce((sum, project) => sum + project.budget, 0),
  };

  return (
    <div className="projects-management">
      {/* Header Section */}
      <div className="projects-header">
        <div className="header-content">
          <h1 className="page-title">Project Management</h1>
          <p className="page-subtitle">Manage and track all your projects</p>
        </div>
        <button
          className="add-project-btn"
          onClick={() => setShowProjectForm(true)}
        >
          <FiPlus size={18} />
          New Project
        </button>
      </div>

      {/* Project Statistics */}
      <div className="projects-stats">
        <div className="stat-card">
          <div className="stat-icon total-projects">
            <FiFolder size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{projectStats.total}</h3>
            <p className="stat-title">Total Projects</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon in-progress">
            <FiPlayCircle size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{projectStats.inProgress}</h3>
            <p className="stat-title">In Progress</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon completed">
            <FiCheckCircle size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{projectStats.completed}</h3>
            <p className="stat-title">Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon budget">
            <FiDollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3 className="stat-value">
              ${(projectStats.totalBudget / 1000).toFixed(0)}K
            </h3>
            <p className="stat-title">Total Budget</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by name, client, description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="filter-select"
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="filter-select"
            >
              {clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="view-actions">
          <div className="view-toggle">
            <button
              className={`view-btn ${view === "grid" ? "active" : ""}`}
              onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button
              className={`view-btn ${view === "list" ? "active" : ""}`}
              onClick={() => setView("list")}
            >
              List
            </button>
          </div>
          <div className="action-buttons">
            <button className="action-btn export-btn">
              <FiDownload size={16} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Add Project Form Modal */}
      {showProjectForm && (
        <div className="modal-overlay">
          <div className="modal-content large-modal">
            <div className="modal-header">
              <h3>{isEditing ? "Edit Project" : "Create New Project"}</h3>
              <button className="close-btn" onClick={handleCloseModal}>
                ×
              </button>
            </div>

            <form onSubmit={handleAddProject} className="project-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Project Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newProject.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter project name"
                  />
                </div>

                <div className="form-group">
                  <label>Client *</label>
                  <select
                    name="client"
                    value={newProject.client}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Client</option>
                    {clients
                      .filter((client) => client !== "All")
                      .map((client) => (
                        <option key={client} value={client}>
                          {client}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={newProject.status}
                    onChange={handleInputChange}
                  >
                    {statuses
                      .filter((status) => status !== "All")
                      .map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Priority</label>
                  <select
                    name="priority"
                    value={newProject.priority}
                    onChange={handleInputChange}
                  >
                    {priorities
                      .filter((priority) => priority !== "All")
                      .map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={newProject.startDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Deadline *</label>
                  <input
                    type="date"
                    name="deadline"
                    value={newProject.deadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Budget ($)</label>
                  <input
                    type="number"
                    name="budget"
                    value={newProject.budget}
                    onChange={handleInputChange}
                    placeholder="Enter project budget"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Team Members</label>
                <div className="team-selection">
                  {teamMembers.map((member) => (
                    <label key={member} className="team-member-checkbox">
                      <input
                        type="checkbox"
                        checked={newProject.team.includes(member)}
                        onChange={() => handleTeamChange(member)}
                      />
                      <span className="checkmark"></span>
                      {member}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group full-width">
                <label>Project Description</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  placeholder="Describe the project scope and requirements..."
                  rows="4"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {isEditing ? "Update Project" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects Grid/List View */}
      <div className="projects-container">
        {view === "grid" ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-client">{project.client}</p>
                  </div>
                  <div className="project-actions">
                    <button
                      className="action-btn edit-btn"
                      onClick={() => handleEditProject(project)}
                      title="Edit Project"
                    >
                      <FiEdit2 size={14} />
                    </button>
                    <button
                      className="action-btn delete-btn"
                      onClick={() => handleDeleteProject(project.id)}
                      title="Delete Project"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-meta flex items-center justify-between text-sm text-gray-300">
                  {/* Project Status */}
                  <div className="meta-item flex items-center gap-2">
                    {getStatusIcon(project.status)}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : project.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Priority */}
                  <div className="meta-item flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: getPriorityColor(project.priority),
                      }}
                    ></div>
                    <span className="text-xs font-medium">
                      Priority: {project.priority}
                    </span>
                  </div>
                </div>

                <div className="progress-section">
                  <div className="progress-header">
                    <span>Progress</span>
                    <span className="progress-percent">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span>
                      {project.tasks.completed}/{project.tasks.total} tasks
                    </span>
                    <span className="deadline">
                      <FiCalendar size={12} />
                      {new Date(project.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="project-footer">
                  <div className="team-members">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div key={index} className="team-avatar" title={member}>
                        {member
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="team-more">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="project-budget">
                    <FiDollarSign size={14} />
                    {project.budget.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-table-container">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Progress</th>
                  <th>Deadline</th>
                  <th>Budget</th>
                  <th>Team</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id}>
                    <td className="project-name">
                      <strong>{project.name}</strong>
                      <div className="project-description">
                        {project.description}
                      </div>
                    </td>
                    <td className="client-name">{project.client}</td>
                    <td>
                      <div className="status-cell">
                        {getStatusIcon(project.status)}
                        <span
                          className={`status status-${project.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className="priority-badge"
                        style={{
                          backgroundColor: `${getPriorityColor(
                            project.priority
                          )}15`,
                          color: getPriorityColor(project.priority),
                          borderColor: getPriorityColor(project.priority),
                        }}
                      >
                        {project.priority}
                      </span>
                    </td>
                    <td>
                      <div className="progress-cell">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="deadline">
                      <FiCalendar size={14} />
                      {new Date(project.deadline).toLocaleDateString()}
                    </td>
                    <td className="budget">
                      <FiDollarSign size={14} />
                      {project.budget.toLocaleString()}
                    </td>
                    <td>
                      <div className="team-cell">
                        {project.team.slice(0, 2).map((member, index) => (
                          <div
                            key={index}
                            className="team-avatar small"
                            title={member}
                          >
                            {member
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        ))}
                        {project.team.length > 2 && (
                          <div className="team-more">
                            +{project.team.length - 2}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="actions">
                      <div className="action-buttons">
                        <button
                          className="action-btn view-btn"
                          title="View Details"
                        >
                          <FiEye size={14} />
                        </button>
                        <button
                          className="action-btn edit-btn"
                          onClick={() => handleEditProject(project)}
                          title="Edit Project"
                        >
                          <FiEdit2 size={14} />
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteProject(project.id)}
                          title="Delete Project"
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

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <FiFolder size={48} className="empty-icon" />
            <h3>No projects found</h3>
            <p>Try adjusting your search or create a new project.</p>
            <button
              className="add-project-btn empty-btn"
              onClick={() => setShowProjectForm(true)}
            >
              <FiPlus size={16} />
              Create Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
