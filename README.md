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

## 🎯 Components Overview

### TopBar
- Fixed position search bar at the top
- Global search with "Try searching insights" placeholder
- User menu, avatar, and add button
- Data-action attributes for click feedback

### Sidebar
- Logo and branding
- Icon rail navigation
- Starred and recent items
- Shared folders with notification badges
- Reports section with collapsible tree menus
- Settings and profile management

### Header
- User avatar tabs (Armin A., Eren Y., Mikasa A.)
- Add user functionality
- Action buttons (shuffle, download, upload)
- Team collaboration features

### RevenueSection
- Total revenue display with growth indicators
- Best deal showcase card
- Mini KPI cards: Deals, Value, Win Rate
- Period comparison with delta pills

### ChartsSection
- Deals by referrer platform with icons
- Deals amount with platform filters
- Interactive icon grid with hover states

### PlatformValueChart
- Platform selector dropdown (Dribbble, Instagram, etc.)
- Revenue/Leads/W-L toggle tabs
- Monthly average stats card with gradient
- Bar chart with highlighted months
- Avatar indicators for team members

### UserStats
- **User Table**: Performance metrics with sales, revenue, leads, KPI, win/lose ratios
- **Work with Platforms**: Platform breakdown with percentage tiles
- **Sales Dynamic**: Area chart with trend lines, KPI markers, event pills, and baseline indicators

## 🎨 Customization

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

### Interactive Feedback
All interactive elements use `data-action` attributes to trigger toast notifications:
- Add `data-action="Action Label"` to any button or icon
- Toast appears automatically on click with the label
- No redirects or page navigation - purely feedback

### Data Integration
Update the mock data in component files to connect with your backend:
- Replace static arrays with API calls
- Update chart data sources in `ChartsSection.jsx` and `PlatformValueChart.jsx`
- Connect user data in `UserStats.jsx` to your backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS dashboards
- Chart implementations using Recharts library
- Icons provided by Lucide React
- Avatars generated by DiceBear API

---

**Built with ❤️ using React + Vite + Tailwind CSS**
