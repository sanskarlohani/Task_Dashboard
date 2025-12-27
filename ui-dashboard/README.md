# Sales Analytics Dashboard

A modern, pixel-perfect sales analytics dashboard built with React, featuring interactive charts, real-time data visualization, and a clean, responsive UI.

![Dashboard Preview](Screenshot%202025-12-26%20181535.png)

## ✨ Features

- 📊 **Revenue Analytics** - Track revenue with comparison to previous periods and growth indicators
- 👥 **User Performance** - Monitor sales team performance with KPIs, badges, and achievements
- 📈 **Interactive Charts** - Visualize data with bar charts, area charts, and line graphs using Recharts
- 🎯 **Platform Insights** - Analyze deals by referrer platforms (Dribbble, Instagram, Behance, Google)
- 🗂️ **Organized Navigation** - Collapsible sidebar with tree structure, starred items, shared folders, and reports
- 🎨 **Modern UI** - Clean design with smooth transitions, hover effects, and Tailwind CSS
- 🔔 **Toast Notifications** - Real-time feedback for all user interactions
- 🔍 **Global Search** - Fixed top search bar for quick insights access
- 🎭 **Actionable Elements** - All buttons and icons are clickable with visual feedback

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library built on React components
- **Lucide React** - Beautiful & consistent icon library
- **DiceBear Avatars** - Avatar generation API

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ui-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📁 Project Structure

```
ui-dashboard/
├── src/
│   ├── components/
│   │   ├── ActionToast.jsx       # Toast notification system
│   │   ├── ChartsSection.jsx     # Deals charts and referrer analytics
│   │   ├── Header.jsx            # User tabs and action buttons
│   │   ├── Pageheader.jsx        # Reusable page header component
│   │   ├── PlatformValueChart.jsx # Platform revenue bar chart
│   │   ├── RevenueSection.jsx    # Hero section with KPI cards
│   │   ├── Sidebar.jsx           # Navigation sidebar with tree structure
│   │   ├── TopBar.jsx            # Fixed top search bar
│   │   └── UserStats.jsx         # User performance and sales dynamic
│   ├── App.jsx                   # Main application with layout
│   ├── index.css                 # Global styles and Tailwind imports
│   └── main.jsx                  # React entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # Project documentation
```

## Components

### Sidebar
- Logo and branding
- Starred and recent items
- Shared folders with badges
- Reports section with collapsible menus
- Settings and profile icons

### Header
- Search functionality
- User avatar tabs
- Action buttons (share, download, menu)

### Revenue Section
- Total revenue with growth indicators
- Comparison with previous period
- Stat cards: Top Sales, Best Deal, Deals, Value, Win Rate

### Charts Section
- Deals by referrer platform
- Deals amount by category
- Platform icons grid

### Platform Value Chart
- Monthly average stats card
- Interactive bar chart
- Revenue/Leads/W-L toggle

### User Stats
- Performance table with avatars
- Badges for achievements
- Platform breakdown
- Sales dynamic line chart

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      accent: {
        pink: '#E91E63',
        red: '#F44336',
      }
    }
  }
}
```

### Data
Update the mock data in each component file to connect with your backend API.

## License

MIT License

## Author

Built with ❤️ using React and Tailwind CSS
