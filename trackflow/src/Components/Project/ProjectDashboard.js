import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectDashboard = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', description: 'Description of Project A', manager: 'Manager A' },
        { id: 2, name: 'Project B', description: 'Description of Project B', manager: 'Manager B' },
        { id: 3, name: 'Project C', description: 'Description of Project C', manager: 'Manager C' }
    ]);

    const handleAssignManager = (projectId, managerName) => {
        const updatedProjects = projects.map(project => {
            if (project.id === projectId) {
                return { ...project, manager: managerName };
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    return (
        <div className="container">
            <h2>Project Dashboard</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.manager}</td>
                            <td>
                                <Link to={`/projects/${project.id}`} className="btn btn-primary mr-2">View Details</Link>
                                <button
                                    type="button"
                                    className="btn btn-success mr-2"
                                    onClick={() => handleAssignManager(project.id, 'New Manager')}>
                                    Assign Manager
                                </button>
                                <Link to={`/projects/${project.id}/update`} className="btn btn-info">Update Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectDashboard;
