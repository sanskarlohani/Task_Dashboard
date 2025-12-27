# UI Dashboard

A modern, responsive sales analytics dashboard built with React and Tailwind CSS.

![Dashboard Preview](Screenshot%202025-12-26%20181535.png)

## Features

- 📊 **Revenue Analytics** - Track revenue with comparison to previous periods
- 👥 **User Performance** - Monitor sales team performance with KPIs
- 📈 **Interactive Charts** - Visualize data with bar charts and line graphs
- 🎯 **Platform Insights** - Analyze deals by referrer platforms (Dribbble, Instagram, Behance, Google)
- 🗂️ **Organized Navigation** - Collapsible sidebar with starred items, shared folders, and reports
- 🎨 **Modern UI** - Clean design with smooth transitions and hover effects

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Charting library
- **Lucide React** - Icon library

## Getting Started

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

## Project Structure

```
ui-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── index.css         # Global styles
    ├── App.jsx           # Main app component
    └── components/
        ├── Sidebar.jsx           # Navigation sidebar
        ├── Header.jsx            # Top header with search
        ├── RevenueSection.jsx    # Revenue stats display
        ├── ChartsSection.jsx     # Deals charts
        ├── PlatformValueChart.jsx # Platform value bar chart
        └── UserStats.jsx         # User table and stats
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
