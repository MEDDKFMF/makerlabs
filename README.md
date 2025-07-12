# 🚀 Maker Labs Website

A modern, responsive website for Maker Labs - a community-driven initiative empowering creativity through hands-on technology and design education.

![Maker Labs Preview](https://img.shields.io/badge/Status-Live%20Demo-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC)

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation

### 🚀 **Performance & PWA**
- **Progressive Web App**: Installable with offline capabilities
- **Fast Loading**: Optimized with Vite build system
- **Service Worker**: Caching and background sync
- **Push Notifications**: Ready for future implementation

### 🛠️ **Interactive Components**
- **Newsletter Signup**: Functional form with validation
- **Contact Forms**: Multi-channel contact options
- **Social Media Integration**: Ready for platform links
- **Loading States**: Smooth user feedback

### 📱 **Mobile Optimized**
- **Touch-Friendly**: Optimized for mobile interactions
- **Responsive Navigation**: Collapsible mobile menu
- **PWA Features**: App-like experience on mobile

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.2.0**: Latest React with hooks and modern patterns
- **React Router 6**: Client-side routing
- **Vite 5.0.0**: Fast build tool and dev server

### **Styling & UI**
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **Custom Animations**: CSS keyframes and transitions
- **Responsive Design**: Mobile-first approach

### **Development Tools**
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript Ready**: Easy to add TypeScript support

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/maker-labs.git
   cd maker-labs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
maker-labs/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                 # Service worker
│   └── favicon.svg           # Custom favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── ScrollAnimation.jsx # Scroll-triggered animations
│   │   ├── LoadingSpinner.jsx # Loading component
│   │   └── PWAInstall.jsx    # PWA install prompt
│   ├── pages/
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Programs.jsx      # Programs page
│   │   ├── Partners.jsx      # Partners page
│   │   └── Contact.jsx       # Contact page
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles and animations
│   └── main.jsx              # App entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization

### **Colors & Branding**
The site uses a green/emerald color scheme. To customize:

1. **Primary Colors**: Edit `src/index.css` for color variables
2. **Tailwind Config**: Modify `tailwind.config.js` for theme colors
3. **Logo**: Replace the "M" logo in components

### **Content Updates**
- **Pages**: Edit files in `src/pages/`
- **Components**: Modify files in `src/components/`
- **Styling**: Update `src/index.css` for global styles

### **Adding New Pages**
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 🔧 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### **Code Style**
- **ESLint**: Configured for React best practices
- **Prettier**: Automatic code formatting
- **Conventional Commits**: Recommended commit message format

### **Browser Support**
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🌟 Features in Detail

### **PWA Capabilities**
- **Installable**: Add to home screen
- **Offline Support**: Cached resources
- **Background Sync**: Future-ready for data sync
- **Push Notifications**: Ready for implementation

### **Accessibility Features**
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Focus Management**: Proper focus indicators
- **Reduced Motion**: Respects user preferences

### **Animation System**
- **Scroll Animations**: Intersection Observer-based
- **Micro-interactions**: Hover effects and feedback
- **Performance**: Hardware-accelerated transforms
- **Accessibility**: Respects motion preferences

## 📱 Mobile Features

### **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Touch Interactions**: Large touch targets
- **Fast Loading**: Optimized for slower connections
- **PWA Ready**: App-like experience

### **Performance**
- **Lazy Loading**: Images and components
- **Code Splitting**: Route-based splitting
- **Optimized Assets**: Compressed images and fonts
- **Caching**: Service worker caching

## 🤝 Contributing

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit with conventional commits: `git commit -m "feat: add new feature"`
5. Push to your fork: `git push origin feature-name`
6. Create a Pull Request

### **Development Guidelines**
- **Code Style**: Follow ESLint and Prettier configuration
- **Testing**: Add tests for new features
- **Documentation**: Update README for new features
- **Accessibility**: Ensure WCAG compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vite**: For the fast build system
- **Tailwind CSS**: For the utility-first CSS framework
- **React**: For the component-based architecture
- **Community**: For inspiration and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/maker-labs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/maker-labs/discussions)
- **Email**: hello@makerlabs.org

---

**Made with ❤️ by the Maker Labs team**

*Empowering creativity through technology and design education.*
