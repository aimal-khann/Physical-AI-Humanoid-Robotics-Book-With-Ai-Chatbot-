<!--
  Sync Impact Report:
  - Version change: 0.0.1 -> 0.1.0
  - Modified principles: All existing principles are replaced/updated with a new set of 6 specific principles.
  - Added sections: New core principles (1.1 to 1.6) and detailed governance sections (2.1.1, 2.1.2, 2.1.3 for Code Standards, 2.2 Amendment Procedure, 2.3 Versioning Policy, and 2.4 Compliance Review).
  - Removed sections: None, but generic content is replaced with specific rules.
  - Templates requiring updates (✅ updated / ⚠ pending):
    - .specify/templates/plan-template.md ⚠ pending
    - .specify/templates/spec-template.md ⚠ pending
    - .specify/templates/tasks-template.md ⚠ pending
    - .specify/templates/commands/*.md ⚠ pending (need to verify no outdated references)
    - README.md ⚠ pending
    - docs/quickstart.md ⚠ pending
  - Follow-up TODOs: Manual verification and update of listed templates and documentation files is required to ensure alignment with the new constitution.
-->
<!--
  SPECIFIKIT CONSTITUTION TEMPLATE
  Version: 0.1.0
  Ratified: 2023-01-01
  Last Amended: 2025-12-09
-->

# Project Constitution: Physical AI & Humanoid Robotics Textbook

## 1. Core Principles

### 1.1 Docusaurus Native
The project MUST be built using standard Docusaurus 3.x structure.

### 1.2 Visual Identity
The site MUST use a primary Green theme (#2e8555).

### 1.3 Structured Learning
Content IS divided into 6 specific modules.

### 1.4 Custom Navigation
Homepage MUST use a custom card layout.

### 1.5 Sidebar Control
Sidebar MUST strictly follow the defined chapter order.

### 1.6 AI-Enhanced Learning
The textbook MUST integrate an interactive RAG Chatbot that answers questions based *only* on the book's content, utilizing a floating UI and "Ask AI" context menu.

## 2. Governance

### 2.1 Code Standards

#### 2.1.1 Frontend
Code MUST be written in TypeScript (`.ts`, `.tsx`) or JavaScript (`.js`) for Frontend.

#### 2.1.2 Backend
Backend code MUST be written in Python (`.py`).

#### 2.1.3 Documentation
Markdown files MUST use standard Docusaurus frontmatter.

### 2.2 Amendment Procedure
The constitution MAY be amended through a formal proposal and review process. Proposed amendments MUST be submitted to the project maintainers for consideration and require a consensus among core contributors for adoption.

### 2.3 Versioning Policy
The constitution's versioning follows Semantic Versioning (MAJOR.MINOR.PATCH).
- MAJOR version increments for backward-incompatible changes, removal, or redefinition of governance or principles.
- MINOR version increments for additions of new principles, sections, or materially expanded guidance.
- PATCH version increments for clarifications, wording adjustments, typo fixes, or non-semantic refinements.

### 2.4 Compliance Review
Regular reviews of project artifacts against the constitution's principles and governance rules SHALL be conducted periodically, or as triggered by significant project milestones or changes. Any deviations MUST be identified, documented, and addressed.

---
## Metadata
- **Constitution Version:** 0.1.0
- **Ratification Date:** 2023-01-01
- **Last Amended Date:** 2025-12-09