# macOS UI (Frontend OS Project)

A macOS-inspired desktop interface built using **React**, **Tailwind CSS**, and **custom CSS**, designed to simulate the feel of a real operating system inside the browser.

This project focuses on **UI realism, window management, keyboard shortcuts, and system-like interactions**, rather than building traditional static webpages.

---

## ✨ Project Overview

This project recreates a macOS-like environment where users can interact with multiple desktop applications such as a browser, terminal, music player, calendar, notes, GitHub viewer, and more all inside draggable, resizable windows.

The goal was to move beyond static frontend pages and build an **interactive system-level UI** that feels alive and responsive, similar to a real desktop OS.

---

## 🧠 Why This Project?

Most frontend projects are:
- Single-page websites
- Static dashboards
- CRUD apps

This project is different because it demonstrates:
- Component lifecycle understanding
- State-driven window management
- System-like behavior (apps start, stop, reset)
- Keyboard shortcuts
- UI/UX engineering depth

It reflects **how operating systems behave**, not just how pages render.

---

## 🖥️ Features

### 🪟 Window System
- Draggable and resizable windows (using `react-rnd`)
- Reusable `MacWindow` component
- Open / close window management
- Proper cleanup on window close

### 🚀 Dock (macOS Style)
- Hover magnification effect (Mac Dock style)
- CSS sibling selectors for realistic hover physics
- Smooth animations

### 🌐 Browser App
- Keyword-based smart search
- Internal pages to simulate browsing (iframe-safe)
- Reload functionality

### 🎵 Spotify-style Music Player
- Playlist view
- Play / pause functionality
- Album art display
- Audio lifecycle cleanup on window close
- No background playback when app closes

### 🧾 Notes App
- Minimal notes interface
- Realistic user-style content
- OS-native feel

### 🖥️ Terminal App
- Fake shell UI
- Interactive command feel
- System-like output

### 📅 Calendar App
- Dynamic calendar rendering
- Highlights current day
- Clean macOS-style UI

### 📄 PDF Viewer
- Built-in documentation viewer
- Explains the project inside the OS itself
- Simulates a native document viewer

### ⌨️ Keyboard Shortcuts
- `Ctrl + B` → Change desktop wallpaper
- OS-like global shortcut handling

---

## 🛠️ Tech Stack

- **React** (component-based architecture)
- **Tailwind CSS** (utility-first styling)
- **Custom CSS** (advanced selectors & animations)
- **react-rnd** (window dragging & resizing)
- **JavaScript (ES6+)**

---

## 🎯 What This Project Demonstrates

- Strong frontend fundamentals
- UI/UX attention to detail
- Understanding of browser behavior
- Realistic system simulation
- Problem-solving beyond tutorials

This project is meant to show **how a frontend developer thinks**, not just what they can copy.
