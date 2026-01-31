# Intelligent Data Analysis System Presentation

A modern, interactive presentation for the Intelligent Data Analysis System, built with **React**, **Vite**, and **TailwindCSS**.

![Deployment Status](https://github.com/hz1957/Intelligentdataanalysissystem/actions/workflows/deploy.yml/badge.svg)

## Overview
This project showcases the architecture and capabilities of an advanced data analysis system, featuring:
- **Dual-Agent Architecture**: Collaborative workflow between Chatbot and ETL Agents.
- **Intelligent Orchestration**: Powered by LangGraph and ReAct loops.
- **Self-Healing Capabilities**: Automated error detection and correction.
- **Real-time Interaction**: WebSocket-based communication flow.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS 4 (Vanilla CSS approach)
- **UI Components**: Radix UI, Lucide React
- **Animations**: Motion (Framer Motion)

## Running Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment
This project is configured to automatically deploy to **GitHub Pages** via GitHub Actions.

- **URL**: `https://hz1957.github.io/Intelligentdataanalysissystem/`
- **Workflow**: Pushing to the `main` branch triggers the build and deployment pipeline.