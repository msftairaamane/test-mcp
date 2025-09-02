# test-mcp

[![GitHub issues](https://img.shields.io/github/issues/msftairaamane/test-mcp)](https://github.com/msftairaamane/test-mcp/issues)
[![GitHub stars](https://img.shields.io/github/stars/msftairaamane/test-mcp)](https://github.com/msftairaamane/test-mcp/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Description

A test repository for exploring and demonstrating GitHub MCP (Model Context Protocol) integration capabilities. This project serves as a sandbox environment for testing automated repository management, issue tracking, and pull request operations through the MCP protocol.

## 🎯 Purpose

The primary purpose of this repository is to:
- Test GitHub MCP server functionality
- Demonstrate automated GitHub operations
- Provide examples of MCP integration patterns
- Serve as a reference for MCP-based automation

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msftairaamane/test-mcp.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd test-mcp
   ```

3. **Install dependencies** (if any)
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables** (if required)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 💻 Usage

### Basic Setup

This repository demonstrates various MCP operations. Here's how to get started:

```javascript
// Example: Setting up MCP connection
const { MCPClient } = require('@modelcontextprotocol/sdk');

// Initialize MCP client
const client = new MCPClient({
  server: 'github',
  auth: {
    token: process.env.GITHUB_TOKEN
  }
});

// Connect to the server
await client.connect();
```

### Example Operations

#### 1. List Repository Issues
```javascript
const issues = await client.listIssues({
  owner: 'msftairaamane',
  repo: 'test-mcp'
});
console.log(`Found ${issues.length} issues`);
```

#### 2. Create a New Issue
```javascript
const newIssue = await client.createIssue({
  owner: 'msftairaamane',
  repo: 'test-mcp',
  title: 'Test Issue',
  body: 'This is a test issue created via MCP'
});
```

#### 3. Manage Pull Requests
```javascript
const pullRequests = await client.listPullRequests({
  owner: 'msftairaamane',
  repo: 'test-mcp',
  state: 'open'
});
```

## ✨ Features

- ✅ **MCP Server Integration** - Full integration with GitHub MCP server
- ✅ **Automated Issue Management** - Create, update, and close issues programmatically
- ✅ **Pull Request Automation** - Automate PR creation and management
- ✅ **Repository Configuration Testing** - Test various repository settings
- ✅ **Workflow Automation** - Trigger and manage GitHub Actions workflows

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Repository Owner:** [@msftairaamane](https://github.com/msftairaamane)

**Project Link:** [https://github.com/msftairaamane/test-mcp](https://github.com/msftairaamane/test-mcp)

## 🔗 Related Resources

- [MCP Documentation](https://modelcontextprotocol.io)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [GitHub MCP Server](https://github.com/github/github-mcp-server)

## 📊 Project Status

This project is actively maintained and used for testing MCP capabilities.

---

<p align="center">Made with ❤️ for testing MCP integrations</p>