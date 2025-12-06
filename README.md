# 📊 Collaborative Team Project Management Platform

A modern, multi-tenant project management SaaS application built with the MERN 
stack, featuring Google OAuth, advanced permission systems, and real-time 
collaboration features.

## ✨ Key Features

### 🔐 Authentication & Authorization
- **Google OAuth 2.0** integration for seamless sign-in
- **Multi-tenant architecture** with workspace isolation
- **Role-Based Access Control (RBAC)** with fine-grained permissions
- Secure session management

### 🏢 Workspace Management
- Create and manage multiple team workspaces
- Invite members via email with customizable roles
- Workspace-level settings and preferences
- Member management and access control

### 📋 Project & Task Management
- **Projects and Epics** hierarchy for organization
- **CRUD operations** for tasks with rich metadata
- Task assignment and status tracking
- Priority levels and due dates
- Task dependencies and relationships

### 📈 Analytics & Insights
- Real-time analytics dashboard
- Project progress tracking
- Team performance metrics
- Task completion statistics
- Visual charts and graphs

### 🔍 Advanced Features
- **Powerful search** with multiple filter options
- **Advanced filtering** by status, priority, assignee, dates
- **Real-time updates** for collaborative editing
- **Activity feed** tracking all workspace changes
- **Notification system** for important events

### 🎨 User Experience
- Modern, intuitive interface with **TailwindCSS**
- Responsive design for all devices
- Dark/Light mode support
- Smooth animations and transitions

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- TailwindCSS for styling
- React Query for server state management
- React Hook Form for form handling
- Zustand for client state (optional)

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose ODM
- Google OAuth 2.0 (Passport.js)
- JWT for session management

**Features:**
- Real-time updates (optional Socket.IO)
- Transaction support with Mongoose
- Advanced query optimization
- RESTful API design

**DevOps:**
- Environment-based configuration
- Error handling and logging
- API rate limiting
- Security best practices (CORS, Helmet, etc.)

## 🏗️ Architecture
```
┌─────────────────────────────────────────────────┐
│              React Frontend                      │
│   (UI, State Management, API Client)            │
└────────────────┬────────────────────────────────┘
                 │ REST API
┌────────────────▼────────────────────────────────┐
│         Express.js Backend                       │
│  ┌──────────────────────────────────────────┐  │
│  │  Auth Middleware (JWT, OAuth)            │  │
│  │  ├─ Workspaces  ├─ Projects  ├─ Tasks   │  │
│  │  └─ Users       └─ Analytics            │  │
│  └──────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│              MongoDB Database                    │
│  Collections: users, workspaces, projects,      │
│              tasks, invitations, activities     │
└─────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Google OAuth credentials

### Installation
```bash
# Clone repository
git clone https://github.com/yassine-mili/team-management-platform

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials

# Run development servers
npm run dev # In both backend and frontend directories
```

## 🔑 Key API Endpoints
```
POST   /api/auth/google          # Google OAuth login
GET    /api/workspaces           # List user workspaces
POST   /api/workspaces           # Create workspace
POST   /api/workspaces/:id/invite # Invite member
GET    /api/projects             # List projects
POST   /api/projects             # Create project
GET    /api/tasks                # List tasks (with filters)
POST   /api/tasks                # Create task
PATCH  /api/tasks/:id            # Update task
GET    /api/analytics            # Get workspace analytics
```

## 📚 Learning Outcomes

- Multi-tenant SaaS architecture
- OAuth 2.0 integration (Google)
- Role-Based Access Control implementation
- MongoDB transactions for data consistency
- React Query for optimized data fetching
- RESTful API design best practices
- TypeScript for type-safe development

## 👥 Team & Methodology

**Federated Academic Project** (2nd Year)
- Team of 3 students
- Agile methodology with sprint planning
- Roles: Frontend Dev, Backend Dev, Full-Stack Dev
- Weekly demos and presentations
- Comprehensive documentation

**My Contributions:**
- Backend API architecture and implementation
- Google OAuth integration
- RBAC system design
- MongoDB schema optimization
- API documentation

## 📸 Screenshots

[Add screenshots of dashboard, projects, tasks, analytics]

## 🔮 Future Enhancements

- [ ] Real-time collaboration with Socket.IO
- [ ] File attachments for tasks
- [ ] Calendar view
- [ ] Gantt charts for project timeline
- [ ] Mobile app (React Native)
- [ ] Integrations (Slack, GitHub, etc.)

## 👤 Author

**Mili Yassine**
- Portfolio: [yassinemili.me](https://yassinemili.me)
- LinkedIn: [mili-yassine](https://linkedin.com/in/mili-yassine)
- GitHub: [@yassine-mili](https://github.com/yassine-mili)

## 📄 License

Academic Project - MIT License

## 🙏 Acknowledgments

- Faculty of Sciences of Monastir
- Project supervisors and mentors
- Team members for collaboration
