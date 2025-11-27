# LuxNet Innovate - Technical Analysis Platform

A professional technical analysis platform built with React, Tailwind CSS, and shadcn/ui. 100% compatible with Netlify.

## Features

- **Advanced Technical Indicators**: RSI, MACD, Bollinger Bands, Stochastic Oscillator, Moving Averages, and more
- **Real-Time Market Analysis**: Live data for stocks, cryptocurrencies, forex, and commodities
- **Professional Trading Tools**: Multi-timeframe analysis, drawing tools, alert systems, and portfolio tracking
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark interface with golden accents for reduced eye strain

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Routing**: Wouter (client-side routing)
- **Build Tool**: Vite
- **Deployment**: Netlify

## Project Structure

```
client/
├── public/              # Static assets (images, icons)
├── src/
│   ├── pages/          # Page components
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles and design tokens
server/                 # Server placeholder (static site only)
shared/                 # Shared types and constants
netlify.toml           # Netlify configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Development

The development server runs on `http://localhost:3000` with hot module replacement (HMR) enabled.

### Key Files

- **`client/src/pages/Home.tsx`**: Main landing page with all sections
- **`client/src/index.css`**: Global styles, design tokens, and theme configuration
- **`client/index.html`**: HTML template with meta tags and Google Fonts

### Design System

The site uses a professional dark theme with:
- **Primary Color**: Deep blue (oklch(0.55 0.2 259))
- **Accent Color**: Golden orange (oklch(0.7 0.18 50))
- **Background**: Dark navy (oklch(0.08 0.01 286))
- **Typography**: Inter (body) + Poppins (headings)

## Deployment to Netlify

### Option 1: Connect Git Repository (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist/public`
6. Click "Deploy site"

### Option 2: Manual Deployment

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Deploy the `dist/public` folder to Netlify:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir=dist/public
   ```

### Configuration

The `netlify.toml` file includes:
- Build command and publish directory
- SPA routing configuration (redirects all routes to index.html)
- Security headers
- Cache control for static assets
- Environment-specific configurations

## SEO Optimization

- Meta tags for title, description, and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-first responsive design
- Fast page load times with optimized assets

## Performance

- Static site generation (no server required)
- Optimized images with proper formats
- CSS and JavaScript minification
- Lazy loading for images
- Efficient caching strategies

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your projects

## Support

For issues or questions, please check the [documentation](https://github.com/yourusername/luxnet-innovate) or contact support.

---

**Ready to deploy?** Connect your repository to Netlify and your site will be live in minutes!
