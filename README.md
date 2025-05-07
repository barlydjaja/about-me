# About me

## Task 
Create a profile website with the following pages:

1. Landing
2. Past Projects (CCA/Clubs/Projects/Portfolio, anything fun)
3. Anything else you want to show

### Checkout the Demo [here](https://master.d1g99rkqawyg6l.amplifyapp.com)

## 🚀 Tech Stack
- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** react-router, data modes with createBrowserRouter
- **State Management:** Redux Toolkit, redux-persist in sessionStorage
- **UI Components:** Shadcn

## 📁 Project Structure
- `src/assets/*` - Assets such as images
- `src/components/ui/*` – Reusable UI components (Button, Badge, etc.)
- `src/components/*` - Shared components
- `src/constant/*` - Constant files
- `src/libs/*` - Shared logic across components
- `src/page/*` – Page routing
- `src/page/components/*` - Components specific for that page
- `src/redux/*` - Handles redux needs, use persist sessionStorage
- `src/routes/*` - Handles routing requirements

## 🖥️ Features
- **Responsive Design:** Looks great on all devices.
- **Support Dark & Light Mode:** Support Dark & Light Mode, Currently need to change HTML Class manually
- **Support Lazy Loading:** Only load the required modules

## 🛠️ Getting Started
1. **Install dependencies:**
   ```bash
   yarn
   ```
2. **Run the development server:**
   ```bash
   yarn dev
   ```
3. **Build for production:**
   ```bash
   yarn build
   ```

## 🌐 Environment Variables
Set the following in your `.env` file for social/contact links:

## 🛠️ Future Improvements
* Add project-detail page with dynamic route, contain the detailed description of each projects
* Loading indicator when loading a module