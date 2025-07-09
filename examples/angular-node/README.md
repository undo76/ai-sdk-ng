# Angular + Node Example

This example demonstrates how to build a simple Angular application that communicates with a Node.js backend using **ai-sdk-ng**.

The Node server exposes an API endpoint that the Angular app can call for chat or completion features. The frontend uses the `Chat` and `Completion` classes from this library to manage state and interact with the backend.

## Setup

1. Install dependencies for the example:
   ```bash
   npm install
   ```
2. Start the Node server:
   ```bash
   node server.js
   ```
3. Serve the Angular application (for example using `ng serve`).

Both projects are kept minimal to focus on demonstrating integration with **ai-sdk-ng**.
