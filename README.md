# ClientApp-Angular
This is an Angular application that displays client information and a list of transactions. The project was built with a focus on clean architecture, separation of concerns, and user interface design.

# Tech Stack
- Angular 18
- TypeScript
- HTML and CSS (no external UI libraries)

# Key Implementation Decisions
- The client form is generated dynamically using a configuration file. This approach avoids hardcoding fields in the template and makes the form scalable and easier to maintain
- All data structures are defined using interfaces and union types. This improves type safety and code readability
- Data fetching is handled in a dedicated service. Components are responsible only for presentation logic
- The application uses the new control flow syntax
- Two custom pipes were implemented. This keeps templates clean and reusable
- Filtering happens in real time as the user types, without requiring a button
- A reusable modal component is implemented
- Grouped form fields into logical sections (Personal, Contact, Address, Bank)
- Added consistent spacing, colors, hover effects, disabled button
- Status values are color-coded for better readability
- Simple and clean design
- A loading indicator
- Errors are handled and displayed to the user

# Project Structure
The project uses Angular version with standalone components. The folder structure contains:
- core folder - for components meant to be used throughout the application and define the main structure of the UI (Header with navigation)
- models folder - holds all interfaces for the application
- shared folder - contains reusable components that are shared across pages (loader, pipes, details-modal)
- pages folder - contains components, organized by feature (Client and Transactions)
- config and clientService files are placed directly under app for simplicity. Since this is a small application, the service folder was not created 
- client and transactions json files are in the public folder because of the Angular configuration which uses public. Using assets folder would require changing the configuration, so keeping it in public ensure the files are found correctly. For demonstration purposes, sample values were used for status field in transactions json file

# How to run
- Navigate to client-task folder
- Install all needed packages - npm install
- Run the application - npm start

