# chat-app-challenge
Using React | Typescript to create a real time chat app. This is a challenge set by ChatGPT.

💬 Real-Time Chat App Challenge (React + TypeScript + Ably)
🎯 Objective
Build a real-time multi-channel chat application using React, TypeScript, and Ably for WebSocket-based communication. The app should allow users to log in with a username, join channels, and send messages in real time.

This challenge is designed to simulate the kind of work expected from a front-end engineer working on real-time interfaces like chat, notifications, or collaboration tools.

🧰 Tech Stack
React + TypeScript

Ably Realtime SDK

Vite (or CRA) for project setup

Vitest + React Testing Library for testing

🔐 User Authentication (Simulated)
Users "log in" by entering a username (no password)

Store this in localStorage and maintain it across sessions

Allow users to log out and switch users

📡 Real-Time Messaging (via Ably)
Use Ably Channels for real-time communication

A user joins a channel (e.g., general, random, tech)

Messages sent by one user appear instantly for all others in the same channel

Show sender name, message content, and timestamp

👥 Typing Indicator
Notify others in the same channel when a user is typing

Display “Alice is typing…” with a timeout reset (e.g., 3 seconds after last keypress)

🧭 Channel Switching
Sidebar with list of channels

User can switch between channels (joining/leaving handled via Ably)

Show message history per channel

Show badge for unread messages on inactive channels

🧪 Testing
Use Vitest + React Testing Library to write unit and integration tests for:

Login flow

Message input and submission

Channel switching logic

Typing indicator timeout behavior

🧱 UI Requirements
Responsive layout

Sidebar (channels + logout)

Main chat area

Chat bubble design

Smooth scrolling and auto-scroll to latest message

Clean visual separation between own messages and others’

🚀 Bonus (Optional)
Emoji support

Markdown formatting in messages

Light/dark mode toggle

Presence indicator (show who’s online in the channel)

Sound or visual notification for new messages in background channels

📦 Deliverables
GitHub repo with README and setup instructions

Clear folder structure and typed components

At least basic test coverage

Live demo (Vercel, Netlify, etc.) is a bonus

🧠 Skills You’ll Practice
Real-time messaging and events

Managing external SDKs in React

Controlled form components and state

Component architecture and UI patterns

Basic testing of async & socket-driven UI
