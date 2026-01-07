import React, { useState } from 'react';
import { 
  FiSearch, 
  FiPlus, 
  FiDownload, 
  FiUpload, 
  FiTrash2, 
  FiEdit2, 
  FiEye,
  FiFolder,
  FiFile,
  FiImage,
  FiVideo,
  FiMusic,
  FiArchive,
  FiCode,
  FiFilter,
  FiShare2,
  FiCopy,
  FiStar,
  FiClock,
  FiUser,
  FiHardDrive,
  FiGrid,
  FiList,
  FiFolderPlus,
  FiCheckCircle
} from 'react-icons/fi';
import './Files.css';

const Files = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Project Proposal.pdf',
      type: 'pdf',
      size: 2457600, // 2.45 MB
      uploadedBy: 'John Smith',
      uploadDate: '2024-01-15',
      lastModified: '2024-01-20',
      folder: 'Projects',
      starred: true,
      shared: true,
      downloadCount: 12
    },
    {
      id: 2,
      name: 'Company Logo.png',
      type: 'image',
      size: 512000, // 512 KB
      uploadedBy: 'Sarah Wilson',
      uploadDate: '2024-01-10',
      lastModified: '2024-01-10',
      folder: 'Assets',
      starred: false,
      shared: false,
      downloadCount: 8
    },
    {
      id: 3,
      name: 'Quarterly Report.xlsx',
      type: 'spreadsheet',
      size: 1048576, // 1 MB
      uploadedBy: 'Mike Chen',
      uploadDate: '2024-01-18',
      lastModified: '2024-01-25',
      folder: 'Reports',
      starred: true,
      shared: true,
      downloadCount: 15
    },
    {
      id: 4,
      name: 'Product Demo.mp4',
      type: 'video',
      size: 52428800, // 50 MB
      uploadedBy: 'Emily Davis',
      uploadDate: '2024-01-22',
      lastModified: '2024-01-22',
      folder: 'Videos',
      starred: false,
      shared: true,
      downloadCount: 23
    },
    {
      id: 5,
      name: 'Source Code.zip',
      type: 'archive',
      size: 15728640, // 15 MB
      uploadedBy: 'Alex Brown',
      uploadDate: '2024-01-12',
      lastModified: '2024-01-19',
      folder: 'Development',
      starred: false,
      shared: false,
      downloadCount: 5
    },
    {
      id: 6,
      name: 'Meeting Notes.docx',
      type: 'document',
      size: 307200, // 300 KB
      uploadedBy: 'Lisa Wang',
      uploadDate: '2024-01-24',
      lastModified: '2024-01-24',
      folder: 'Meetings',
      starred: true,
      shared: false,
      downloadCount: 7
    },
    {
      id: 7,
      name: 'Background Music.mp3',
      type: 'audio',
      size: 4194304, // 4 MB
      uploadedBy: 'David Kim',
      uploadDate: '2024-01-08',
      lastModified: '2024-01-08',
      folder: 'Media',
      starred: false,
      shared: true,
      downloadCount: 18
    },
    {
      id: 8,
      name: 'Website Design.fig',
      type: 'design',
      size: 7340032, // 7 MB
      uploadedBy: 'Robert Garcia',
      uploadDate: '2024-01-30',
      lastModified: '2024-02-01',
      folder: 'Design',
      starred: true,
      shared: true,
      downloadCount: 9
    },
    {
      id: 9,
      name: 'Database Schema.sql',
      type: 'code',
      size: 204800, // 200 KB
      uploadedBy: 'John Smith',
      uploadDate: '2024-01-28',
      lastModified: '2024-01-29',
      folder: 'Development',
      starred: false,
      shared: false,
      downloadCount: 3
    },
    {
      id: 10,
      name: 'Team Photo.jpg',
      type: 'image',
      size: 2097152, // 2 MB
      uploadedBy: 'Sarah Wilson',
      uploadDate: '2024-01-05',
      lastModified: '2024-01-05',
      folder: 'Assets',
      starred: true,
      shared: true,
      downloadCount: 25
    }
  ]);

  const [folders, setFolders] = useState([
    {
      id: 1,
      name: 'Projects',
      fileCount: 12,
      size: 156432128, // 149 MB
      lastModified: '2024-01-20',
      color: '#ff8402'
    },
    {
      id: 2,
      name: 'Assets',
      fileCount: 8,
      size: 7340032, // 7 MB
      lastModified: '2024-01-10',
      color: '#3b82f6'
    },
    {
      id: 3,
      name: 'Reports',
      fileCount: 15,
      size: 52428800, // 50 MB
      lastModified: '2024-01-25',
      color: '#00ff88'
    },
    {
      id: 4,
      name: 'Videos',
      fileCount: 6,
      size: 314572800, // 300 MB
      lastModified: '2024-01-22',
      color: '#ef4444'
    },
    {
      id: 5,
      name: 'Development',
      fileCount: 9,
      size: 36700160, // 35 MB
      lastModified: '2024-01-29',
      color: '#8b5cf6'
    },
    {
      id: 6,
      name: 'Meetings',
      fileCount: 7,
      size: 2097152, // 2 MB
      lastModified: '2024-01-24',
      color: '#f59e0b'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedFolder, setSelectedFolder] = useState('All');
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [newFolderName, setNewFolderName] = useState('');

  const fileTypes = ['All', 'Document', 'Image', 'Video', 'Audio', 'Spreadsheet', 'Archive', 'Code', 'Design', 'PDF'];
  const folderList = ['All', 'Projects', 'Assets', 'Reports', 'Videos', 'Development', 'Meetings', 'Media', 'Design'];

  // Get file icon based on type
  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return <FiFile className="file-icon pdf" />;
      case 'image': return <FiImage className="file-icon image" />;
      case 'video': return <FiVideo className="file-icon video" />;
      case 'audio': return <FiMusic className="file-icon audio" />;
      case 'spreadsheet': return <FiFile className="file-icon spreadsheet" />;
      case 'archive': return <FiArchive className="file-icon archive" />;
      case 'code': return <FiCode className="file-icon code" />;
      case 'design': return <FiFile className="file-icon design" />;
      case 'document': return <FiFile className="file-icon document" />;
      default: return <FiFile className="file-icon default" />;
    }
  };

  // Get file type color
  const getFileTypeColor = (type) => {
    switch (type) {
      case 'pdf': return '#ef4444';
      case 'image': return '#00ff88';
      case 'video': return '#8b5cf6';
      case 'audio': return '#f59e0b';
      case 'spreadsheet': return '#00ff88';
      case 'archive': return '#6b7280';
      case 'code': return '#3b82f6';
      case 'design': return '#ec4899';
      case 'document': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Filter files based on search and filters
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || file.type === selectedType.toLowerCase();
    const matchesFolder = selectedFolder === 'All' || file.folder === selectedFolder;
    const inCurrentFolder = !currentFolder || file.folder === currentFolder.name;
    
    return matchesSearch && matchesType && matchesFolder && inCurrentFolder;
  });

  // Get files for current folder
  const currentFolderFiles = currentFolder 
    ? files.filter(file => file.folder === currentFolder.name)
    : files;

  // Calculate storage statistics
  const storageStats = {
    total: files.reduce((sum, file) => sum + file.size, 0),
    used: files.reduce((sum, file) => sum + file.size, 0),
    available: 1073741824 - files.reduce((sum, file) => sum + file.size, 0), // 1GB - used
    fileCount: files.length,
    folderCount: folders.length
  };

  // Handle file selection
  const handleFileSelect = (fileId) => {
    setSelectedFiles(prev => 
      prev.includes(fileId) 
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map(file => file.id));
    }
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    
    uploadedFiles.forEach((file, index) => {
      const fileId = Date.now() + index;
      const fileType = getFileTypeFromName(file.name);
      
      // Simulate upload progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(progressInterval);
          
          // Add file to state after upload completes
          setTimeout(() => {
            const newFile = {
              id: fileId,
              name: file.name,
              type: fileType,
              size: file.size,
              uploadedBy: 'You',
              uploadDate: new Date().toISOString().split('T')[0],
              lastModified: new Date().toISOString().split('T')[0],
              folder: currentFolder?.name || 'Projects',
              starred: false,
              shared: false,
              downloadCount: 0
            };
            
            setFiles(prev => [...prev, newFile]);
            setUploadProgress(prev => {
              const newProgress = { ...prev };
              delete newProgress[fileId];
              return newProgress;
            });
          }, 500);
        }
        
        setUploadProgress(prev => ({
          ...prev,
          [fileId]: progress
        }));
      }, 200);
    });
    
    setShowUploadModal(false);
  };

  // Get file type from filename
  const getFileTypeFromName = (filename) => {
    const extension = filename.split('.').pop().toLowerCase();
    const typeMap = {
      'pdf': 'pdf',
      'jpg': 'image', 'jpeg': 'image', 'png': 'image', 'gif': 'image', 'svg': 'image',
      'mp4': 'video', 'avi': 'video', 'mov': 'video', 'wmv': 'video',
      'mp3': 'audio', 'wav': 'audio', 'aac': 'audio',
      'xlsx': 'spreadsheet', 'csv': 'spreadsheet',
      'zip': 'archive', 'rar': 'archive', 'tar': 'archive',
      'js': 'code', 'ts': 'code', 'py': 'code', 'java': 'code', 'cpp': 'code', 'sql': 'code',
      'fig': 'design', 'sketch': 'design', 'xd': 'design',
      'doc': 'document', 'docx': 'document', 'txt': 'document'
    };
    return typeMap[extension] || 'document';
  };

  // Handle create folder
  const handleCreateFolder = (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    const newFolder = {
      id: folders.length + 1,
      name: newFolderName,
      fileCount: 0,
      size: 0,
      lastModified: new Date().toISOString().split('T')[0],
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    };

    setFolders(prev => [...prev, newFolder]);
    setNewFolderName('');
    setShowCreateFolderModal(false);
  };

  // Handle file download
  const handleDownload = (file) => {
    // Simulate download
    alert(`Downloading ${file.name}...`);
    setFiles(prev => prev.map(f => 
      f.id === file.id ? { ...f, downloadCount: f.downloadCount + 1 } : f
    ));
  };

  // Handle file delete
  const handleDelete = (fileId) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setFiles(prev => prev.filter(file => file.id !== fileId));
      setSelectedFiles(prev => prev.filter(id => id !== fileId));
    }
  };

  // Handle toggle star
  const handleToggleStar = (fileId) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, starred: !file.starred } : file
    ));
  };

  // Handle file share
  const handleShare = (file) => {
    const shareUrl = `${window.location.origin}/share/${file.id}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Share link copied to clipboard!');
  };

  return (
    <div className="files-management">
      {/* Header Section */}
      <div className="files-header">
        <div className="header-content">
          <h1 className="page-title">File Manager</h1>
          <p className="page-subtitle">
            {currentFolder ? `Folder: ${currentFolder.name}` : 'All Files'}
          </p>
        </div>
        <div className="header-actions">
          <button 
            className="action-btn create-folder-btn"
            onClick={() => setShowCreateFolderModal(true)}
          >
            <FiFolderPlus size={18} />
            New Folder
          </button>
          <button 
            className="action-btn upload-btn"
            onClick={() => setShowUploadModal(true)}
          >
            <FiUpload size={18} />
            Upload Files
          </button>
        </div>
      </div>

      {/* Storage Statistics */}
      <div className="storage-stats">
        <div className="storage-overview">
          <div className="storage-info">
            <FiHardDrive className="storage-icon" />
            <div className="storage-details">
              <h3>Storage Overview</h3>
              <p>{formatFileSize(storageStats.used)} used of {formatFileSize(storageStats.total + storageStats.available)}</p>
            </div>
          </div>
          <div className="storage-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${(storageStats.used / (storageStats.total + storageStats.available)) * 100}%` 
                }}
              ></div>
            </div>
            <span className="storage-percent">
              {((storageStats.used / (storageStats.total + storageStats.available)) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="storage-metrics">
          <div className="metric">
            <span className="metric-value">{storageStats.fileCount}</span>
            <span className="metric-label">Files</span>
          </div>
          <div className="metric">
            <span className="metric-value">{storageStats.folderCount}</span>
            <span className="metric-label">Folders</span>
          </div>
          <div className="metric">
            <span className="metric-value">{files.filter(f => f.starred).length}</span>
            <span className="metric-label">Starred</span>
          </div>
          <div className="metric">
            <span className="metric-value">{files.filter(f => f.shared).length}</span>
            <span className="metric-label">Shared</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      {currentFolder && (
        <div className="breadcrumb">
          <button 
            className="breadcrumb-item"
            onClick={() => setCurrentFolder(null)}
          >
            All Files
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">{currentFolder.name}</span>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              {fileTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-item">
            <FiFilter className="filter-icon" />
            <select 
              value={selectedFolder} 
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="filter-select"
            >
              {folderList.map(folder => (
                <option key={folder} value={folder}>{folder}</option>
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
              <FiGrid size={16} />
            </button>
            <button 
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              <FiList size={16} />
            </button>
          </div>
          
          {selectedFiles.length > 0 && (
            <div className="selection-actions">
              <span className="selection-count">{selectedFiles.length} selected</span>
              <button className="action-btn download-btn">
                <FiDownload size={16} />
              </button>
              <button className="action-btn delete-btn">
                <FiTrash2 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Folders Grid */}
      {!currentFolder && (
        <div className="folders-section">
          <h3 className="section-title">Folders</h3>
          <div className="folders-grid">
            {folders.map(folder => (
              <div 
                key={folder.id} 
                className="folder-card"
                onClick={() => setCurrentFolder(folder)}
              >
                <div 
                  className="folder-icon"
                  style={{ backgroundColor: `${folder.color}15` }}
                >
                  <FiFolder size={24} style={{ color: folder.color }} />
                </div>
                <div className="folder-info">
                  <h4 className="folder-name">{folder.name}</h4>
                  <p className="folder-stats">
                    {folder.fileCount} files • {formatFileSize(folder.size)}
                  </p>
                  <p className="folder-date">
                    Modified {new Date(folder.lastModified).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files Section */}
      <div className="files-section">
        <div className="section-header">
          <h3 className="section-title">
            {currentFolder ? `Files in ${currentFolder.name}` : 'Recent Files'}
          </h3>
          <div className="section-actions">
            <button 
              className="action-btn select-all-btn"
              onClick={handleSelectAll}
            >
              {selectedFiles.length === filteredFiles.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        </div>

        {view === 'grid' ? (
          <div className="files-grid">
            {filteredFiles.map(file => (
              <div 
                key={file.id} 
                className={`file-card ${selectedFiles.includes(file.id) ? 'selected' : ''}`}
                onClick={() => handleFileSelect(file.id)}
              >
                <div className="file-header">
                  <div className="file-icon-container">
                    {getFileIcon(file.type)}
                    {file.starred && <FiStar className="star-icon" />}
                  </div>
                  <div className="file-actions">
                    <button 
                      className="action-btn star-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleStar(file.id);
                      }}
                    >
                      <FiStar className={file.starred ? 'starred' : ''} />
                    </button>
                    <button 
                      className="action-btn more-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      •••
                    </button>
                  </div>
                </div>
                
                <div className="file-info">
                  <h4 className="file-name" title={file.name}>{file.name}</h4>
                  <p className="file-size">{formatFileSize(file.size)}</p>
                  <p className="file-date">
                    Modified {new Date(file.lastModified).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="file-footer">
                  <div className="file-meta">
                    <span className="file-type" style={{ color: getFileTypeColor(file.type) }}>
                      {file.type.toUpperCase()}
                    </span>
                    {file.shared && <FiShare2 className="shared-icon" />}
                  </div>
                  <div className="file-actions-horizontal">
                    <button 
                      className="action-btn download-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(file);
                      }}
                    >
                      <FiDownload size={14} />
                    </button>
                  </div>
                </div>

                {uploadProgress[file.id] !== undefined && (
                  <div className="upload-progress">
                    <div 
                      className="progress-bar"
                      style={{ width: `${uploadProgress[file.id]}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="files-table-container">
            <table className="files-table">
              <thead>
                <tr>
                  <th className="select-column">
                    <input
                      type="checkbox"
                      checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Folder</th>
                  <th>Last Modified</th>
                  <th>Uploaded By</th>
                  <th>Downloads</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFiles.map(file => (
                  <tr 
                    key={file.id} 
                    className={selectedFiles.includes(file.id) ? 'selected' : ''}
                  >
                    <td className="select-column">
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => handleFileSelect(file.id)}
                      />
                    </td>
                    <td className="file-name-cell">
                      <div className="file-info-cell">
                        {getFileIcon(file.type)}
                        <div>
                          <strong>{file.name}</strong>
                          {file.starred && <FiStar className="star-icon inline" />}
                          {file.shared && <FiShare2 className="shared-icon inline" />}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span 
                        className="file-type-badge"
                        style={{ 
                          backgroundColor: `${getFileTypeColor(file.type)}15`,
                          color: getFileTypeColor(file.type)
                        }}
                      >
                        {file.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="file-size">{formatFileSize(file.size)}</td>
                    <td className="file-folder">{file.folder}</td>
                    <td className="file-date">
                      {new Date(file.lastModified).toLocaleDateString()}
                    </td>
                    <td className="file-uploader">{file.uploadedBy}</td>
                    <td className="file-downloads">{file.downloadCount}</td>
                    <td className="actions">
                      <div className="action-buttons">
                        <button 
                          className="action-btn star-btn"
                          onClick={() => handleToggleStar(file.id)}
                        >
                          <FiStar className={file.starred ? 'starred' : ''} />
                        </button>
                        <button 
                          className="action-btn download-btn"
                          onClick={() => handleDownload(file)}
                        >
                          <FiDownload size={14} />
                        </button>
                        <button 
                          className="action-btn share-btn"
                          onClick={() => handleShare(file)}
                        >
                          <FiShare2 size={14} />
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(file.id)}
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
        
        {filteredFiles.length === 0 && (
          <div className="empty-state">
            <FiFolder size={48} className="empty-icon" />
            <h3>No files found</h3>
            <p>Try adjusting your search or upload some files.</p>
            <button 
              className="upload-btn empty-btn"
              onClick={() => setShowUploadModal(true)}
            >
              <FiUpload size={16} />
              Upload Files
            </button>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Upload Files</h3>
              <button 
                className="close-btn"
                onClick={() => setShowUploadModal(false)}
              >
                ×
              </button>
            </div>
            <div className="upload-area">
              <FiUpload size={48} className="upload-icon" />
              <p>Drag and drop files here or click to browse</p>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="file-input"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="browse-btn">
                Browse Files
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Create Folder Modal */}
      {showCreateFolderModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Create New Folder</h3>
              <button 
                className="close-btn"
                onClick={() => setShowCreateFolderModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleCreateFolder} className="folder-form">
              <div className="form-group">
                <label>Folder Name</label>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Enter folder name"
                  required
                />
              </div>
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowCreateFolderModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Create Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Files;