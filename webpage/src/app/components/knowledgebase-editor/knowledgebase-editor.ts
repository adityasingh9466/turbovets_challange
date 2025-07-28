import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-knowledgebase-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './knowledgebase-editor.html'
})
export class KnowledgebaseEditorComponent implements AfterViewInit {
  @ViewChild('previewContainer', { static: false }) previewContainer!: ElementRef;

  content: string = `# TurboVets Flutter Challenge

**Developer:** Aditya Singh Gaharwar

---

## Project Overview
This project demonstrates a complete Flutter + Angular integration showcasing modern cross-platform development skills with native Flutter UI and embedded web technologies.

## 📱 Part 1: Flutter Messaging Interface (Native)

### Objective
Create a **Flutter app** with native implementation featuring:

#### Screens Required:

##### 1. Messages Screen
- **Chat bubbles** (incoming/outgoing with distinct styling)
- **Timestamps** for each message
- **Auto-scroll** to latest messages
- **Text input field** with send button
- **Simulated support agent** responses (auto-reply system)

##### 2. Internal Tools Dashboard
- **WebView integration** using \`webview_flutter\`
- Load Angular app via \`http://localhost:PORT\`
- Seamless navigation between native and web content

## 🎯 **IMPLEMENTED FEATURES**

### 🎯 **Flutter Messaging Interface** - **COMPLETE**
-  **Advanced Chat System** with custom bubbles and animations
-  **State Management** using Provider pattern
-  **Message Persistence** with Hive database and type adapters
-  **Auto-Reply Service** for simulated agent responses
-  **Emoji Picker** with comprehensive emoji support
-  **Image Preview** functionality
-  **Haptic Feedback** for enhanced UX
-  **Theme System** with light/dark mode toggle
-  **Typing Indicators** and reply previews
-  **Custom Navigation** with tab bar implementation

### 🎯 **WebView Integration** - **COMPLETE**
-  **Multi-Platform Dashboard** (Mobile/Web/Stub implementations)
-  **Responsive Design** adapting to different screen sizes
-  **Seamless Navigation** between native and web content

### 🎯 **Advanced Architecture** - **COMPLETE**
-  **Clean Code Structure** with separation of concerns
-  **Provider Pattern** for state management
-  **Custom Extensions** for enhanced functionality
-  **Utility Services** for date handling and haptics
-  **Generated Code** with build_runner for type safety

## 🏆 PROJECT COMPLETION STATUS

### Both Parts FULLY IMPLEMENTED

| Component | Flutter Native | Angular Dashboard | Integration |
|-----------|----------------|-------------------|-------------|
| Messaging Interface |  **COMPLETE** | N/A |  **COMPLETE** |
| Ticket Viewer | N/A |  **COMPLETE** |  **COMPLETE** |
| Knowledge Base Editor | N/A |  **COMPLETE** |  **COMPLETE** |
| Live Logs Panel | N/A |  **COMPLETE** |  **COMPLETE** |
| Navigation System |  **COMPLETE** |  **COMPLETE** |  **COMPLETE** |
| WebView Integration |  **COMPLETE** |  **COMPLETE** |  **COMPLETE** |

## 🎯 KEY ACHIEVEMENTS

### Flutter App (Native):
- 🚀 **37 Dart files** with professional architecture
- 🎨 **Advanced UI/UX** with animations and themes
- 💾 **Hive database integration** with type adapters
- 🔄 **Provider state management** pattern
- 📱 **Multi-platform WebView** implementation

### Angular Dashboard (Web):
- 🌐 **4 Complete components** with full functionality
- 📱 **Mobile-first responsive design**
- 🎨 **Tailwind CSS styling system**
-  **Unit testing coverage**
- 🔧 **Standalone components** (Angular 16+)

### Integration Excellence:
- 🔗 **Seamless WebView integration**
- 📡 **Local HTTP server setup**
- 🎯 **Cross-platform compatibility**
- 🏗️ **Clean architecture** in both platforms

---

## Project Status: 🎉 **CHALLENGE COMPLETE**

## 🧪 Evaluation Criteria

| **Area** | **Criteria** | **Status** |
|----------|--------------|------------|
| Messaging UI | Native Flutter implementation, smooth UX, timestamped messages |  **COMPLETE** |
| Web Integration | Angular app loads in WebView via localhost |  **COMPLETE** |
| Creativity | Engaging internal dashboard layout and content |  **COMPLETE** |
| Code Quality | Clean architecture, modular code, reasonable state management |  **COMPLETE** |

## 📁 **IMPLEMENTED** Flutter App Architecture

### 📁 **Actual Project Structure:**
\`\`\`dart
lib/
├── constants/
│   ├── theme/
│   │   ├── colors.dart           // App color scheme
│   │   └── theme.dart            // App theme configuration
│   └── enums.dart                // App-wide enumerations
├── extensions/
│   └── message_extensions.dart   // Message utility extensions
├── models/
│   ├── chat_message.dart         // Message data model
│   ├── chat_message.g.dart       // Generated model code
│   ├── chat_state.dart           // Chat state management
│   └── message_type_adapter.dart // Hive type adapter
├── navigation/
│   └── app_navigation.dart       // App routing system
├── providers/
│   ├── chat_provider.dart        // Chat state provider
│   └── theme_provider.dart       // Theme management
├── screens/
│   ├── chat/
│   │   ├── chat_animations.dart  // Chat animations
│   │   ├── chat_controller.dart  // Chat logic controller
│   │   └── chat_screen.dart      // Main chat interface
│   ├── dashboard/
│   │   ├── dashboard_screen_mobile.dart  // Mobile dashboard
│   │   ├── dashboard_screen_stub.dart    // Platform stub
│   │   ├── dashboard_screen_web.dart     // WebView integration
│   │   └── dashboard_screen.dart         // Main dashboard
│   ├── image_preview_screen.dart // Image preview functionality
│   └── welcome_screen.dart       // App welcome screen
├── services/
│   └── chat_service.dart         // Chat business logic
├── utils/
│   ├── auto_reply_service.dart   // Automated responses
│   ├── date_helper.dart          // Date formatting
│   └── haptic_helper.dart        // Haptic feedback
├── widgets/
│   ├── chats/
│   │   ├── chat_bubble.dart      // Message bubbles
│   │   ├── emoji_picker_widget.dart // Emoji selection
│   │   ├── message_input_widget.dart // Text input
│   │   └── reply_preview_widget.dart // Reply preview
│   ├── custom_app_bar.dart       // Custom app bar
│   ├── custom_tab_bar.dart       // Custom tab navigation
│   ├── theme_toggle_switch.dart  // Theme switcher
│   └── typing_indicator.dart     // Typing animation
├── app.dart                      // App entry point
└── main.dart                     // App bootstrap
\`\`\`

### 📁 **Actual Angular Project Structure:**
\`\`\`typescript
src/
├── app/
│   ├── components/
│   │   ├── knowledgebase-editor/
│   │   │   ├── knowledgebase-editor.html    // Editor template
│   │   │   ├── knowledgebase-editor.spec.ts // Unit tests
│   │   │   └── knowledgebase-editor.ts      // Editor component
│   │   ├── live-logs/
│   │   │   ├── live-logs.html               // Logs template
│   │   │   ├── live-logs.spec.ts            // Unit tests
│   │   │   └── live-logs.ts                 // Logs component
│   │   ├── navbar/
│   │   │   ├── navbar.html                  // Navigation template
│   │   │   ├── navbar.spec.ts               // Unit tests
│   │   │   └── navbar.ts                    // Navigation component
│   │   └── ticket-viewer/
│   │       ├── ticket-viewer.html           // Ticket template
│   │       ├── ticket-viewer.spec.ts        // Unit tests
│   │       └── ticket-viewer.ts             // Ticket component
│   ├── app.config.ts                        // App configuration
│   ├── app.html                             // Root template
│   ├── app.routes.ts                        // Routing configuration
│   ├── app.spec.ts                          // App tests
│   └── app.ts                               // Root component
├── index.html                               // Main HTML file
├── main.ts                                  // Bootstrap file
└── styles.css                               // Global styles
\`\`\`

## 💻 **IMPLEMENTED** Angular + Tailwind Dashboard

### Complete Component Suite:

#### 1. **Ticket Viewer Component** - **PRODUCTION READY**
-  Responsive table with mobile card view
-  Advanced filtering system (Open, In Progress, Closed)
-  Modal system for view/edit operations
-  Form validation and data persistence
-  Priority-based styling with color coding
-  Mobile-optimized UI with touch interactions

#### 2. **Knowledge Base Editor** - **PRODUCTION READY**
-  Live markdown preview with marked.js
-  Mobile-responsive editor interface
-  Export functionality (Markdown & HTML)
-  Word count and save status tracking
-  Advanced styling system for mobile/desktop
-  Touch-optimized mobile toolbar

#### 3. **Live Logs Component** - **IMPLEMENTED**
-  Real-time log simulation with auto-scroll
-  Timestamp tracking for events
-  Color-coded log levels
-  Mobile-responsive design

#### 4. **Navigation System** - **COMPLETE**
-  Angular routing with standalone components
-  Responsive navbar component
-  Mobile-first navigation design

### 🎯 **Technical Excellence:**
-  **Standalone Components** (Angular 16+ architecture)
-  **TypeScript** with strict typing
-  **Tailwind CSS** responsive design system
-  **Unit Testing** with Jasmine/Karma
-  **Mobile-first** responsive design
-  **Component-based** architecture

---

## Key Features Demonstrated

### 🎯 **Cross-Platform Integration**
- Native Flutter UI with embedded Angular web application
- Seamless communication between Flutter and WebView

### 🎨 **Modern UI/UX Design**
- Material Design principles in Flutter
- Tailwind CSS responsive design system
- Mobile-first approach with desktop optimization

### 📊 **Data Management**
- TypeScript interfaces for type safety
- Reactive programming with Angular
- State management in Flutter

### 🔧 **Development Best Practices**
- Clean code architecture
- Component-based development
- Responsive design patterns
- Error handling and validation

---

*Built with ❤️ by Aditya Singh Gaharwar*`;

  savedContent: string = '';
  htmlPreview: string = '';
  lastSaved: Date | null = null;
  hasUnsavedChanges: boolean = false;
  wordCount: number = 0;
  viewMode: 'split' | 'editor' | 'preview' = 'split';
  isMobile: boolean = false;
  isMobileToolbarOpen: boolean = false;
  isMobileDownloadMenuOpen: boolean = false;

  constructor() {
    this.updatePreview();
    this.savedContent = this.content;
    this.detectMobile();
  }

  ngAfterViewInit(): void {
    this.updatePreview();
    this.setupMobileOptimizations();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectMobile();
    if (!this.isMobile) {
      this.isMobileToolbarOpen = false;
      this.isMobileDownloadMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    // Close mobile download menu when clicking outside
    if (this.isMobileDownloadMenuOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        this.isMobileDownloadMenuOpen = false;
      }
    }
  }

  private detectMobile(): void {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
    const isSmallScreen = window.innerWidth <= 768;

    this.isMobile = isMobileUserAgent || isSmallScreen;

    console.log('Mobile detection:', {
      userAgent: userAgent,
      isMobileUserAgent,
      isSmallScreen,
      windowWidth: window.innerWidth,
      finalIsMobile: this.isMobile
    });
  }

  private setupMobileOptimizations(): void {
    if (this.isMobile) {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }
  }

  getEditorHeight(): string {
    if (this.isMobile) {
      return this.viewMode === 'split' ? '300px' : '400px';
    }
    return '600px';
  }

  getPreviewHeight(): string {
    if (this.isMobile) {
      return this.viewMode === 'split' ? '300px' : '400px';
    }
    return '600px';
  }

  toggleMobileToolbar(): void {
    this.isMobileToolbarOpen = !this.isMobileToolbarOpen;
  }

  toggleMobileDownloadMenu(): void {
    this.isMobileDownloadMenuOpen = !this.isMobileDownloadMenuOpen;
  }

  closeMobileDownloadMenu(): void {
    this.isMobileDownloadMenuOpen = false;
  }

  async updatePreview() {
    marked.setOptions({ breaks: true, gfm: true });
    this.htmlPreview = await marked(this.content || '');
    this.wordCount = this.content.trim().split(/\s+/).filter(word => word.length > 0).length;
    this.hasUnsavedChanges = this.content !== this.savedContent;

    this.detectMobile();

    setTimeout(() => {
      this.applyTailwindStyles();
    }, 0);
  }

  private applyTailwindStyles(): void {
    if (!this.previewContainer) {
      // If preview container doesn't exist yet, try again after a short delay
      setTimeout(() => {
        if (this.previewContainer) {
          this.applyTailwindStyles();
        }
      }, 50);
      return;
    }

    const container = this.previewContainer.nativeElement;
    container.className = 'w-full min-w-0 break-words overflow-wrap-anywhere word-break-break-all';

    // Apply mobile-specific or desktop styles for headings
    const h1Elements = container.querySelectorAll('h1');
    h1Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-2xl font-bold text-gray-800 mt-6 mb-4 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 1.5rem !important; font-weight: 700 !important; line-height: 1.25 !important; margin-top: 1.5rem !important; margin-bottom: 1rem !important; color: #1f2937 !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-3xl font-bold text-gray-800 mt-8 mb-4 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const h2Elements = container.querySelectorAll('h2');
    h2Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-xl font-bold text-gray-800 mt-5 mb-3 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 1.25rem !important; font-weight: 700 !important; line-height: 1.25 !important; margin-top: 1.25rem !important; margin-bottom: 0.75rem !important; color: #1f2937 !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-2xl font-bold text-gray-800 mt-6 mb-3 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const h3Elements = container.querySelectorAll('h3');
    h3Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-lg font-semibold text-gray-800 mt-4 mb-3 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 1.125rem !important; font-weight: 600 !important; line-height: 1.25 !important; margin-top: 1rem !important; margin-bottom: 0.75rem !important; color: #1f2937 !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-xl font-semibold text-gray-800 mt-5 mb-3 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const h4Elements = container.querySelectorAll('h4');
    h4Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-base font-semibold text-gray-800 mt-4 mb-2 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 1rem !important; font-weight: 600 !important; line-height: 1.25 !important; margin-top: 1rem !important; margin-bottom: 0.5rem !important; color: #1f2937 !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-lg font-semibold text-gray-800 mt-4 mb-2 leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const h5Elements = container.querySelectorAll('h5');
    h5Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-sm font-semibold text-gray-700 mt-4 mb-2 uppercase tracking-wide leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 0.875rem !important; font-weight: 600 !important; line-height: 1.25 !important; margin-top: 1rem !important; margin-bottom: 0.5rem !important; color: #374151 !important; text-transform: uppercase !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-base font-semibold text-gray-700 mt-4 mb-2 uppercase tracking-wide leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const h6Elements = container.querySelectorAll('h6');
    h6Elements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-xs font-bold text-gray-500 mt-3 mb-2 uppercase tracking-wider leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 0.75rem !important; font-weight: 700 !important; line-height: 1.25 !important; margin-top: 0.75rem !important; margin-bottom: 0.5rem !important; color: #6b7280 !important; text-transform: uppercase !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-sm font-bold text-gray-500 mt-3 mb-2 uppercase tracking-wider leading-tight break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    // Apply styles to paragraphs
    const pElements = container.querySelectorAll('p');
    pElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'text-sm text-gray-700 leading-relaxed mb-3 break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 0.875rem !important; line-height: 1.625 !important; margin-bottom: 0.75rem !important; color: #374151 !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'text-base text-gray-700 leading-relaxed mb-4 break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    // Apply styles to lists
    const ulElements = container.querySelectorAll('ul');
    ulElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'list-disc list-inside text-sm text-gray-700 mb-3 ml-3 break-words';
        (el as HTMLElement).style.cssText = 'font-size: 0.875rem !important; margin-bottom: 0.75rem !important; margin-left: 0.75rem !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'list-disc list-inside text-base text-gray-700 mb-4 ml-4 break-words';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const olElements = container.querySelectorAll('ol');
    olElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'list-decimal list-inside text-sm text-gray-700 mb-3 ml-3 break-words';
        (el as HTMLElement).style.cssText = 'font-size: 0.875rem !important; margin-bottom: 0.75rem !important; margin-left: 0.75rem !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'list-decimal list-inside text-base text-gray-700 mb-4 ml-4 break-words';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    const liElements = container.querySelectorAll('li');
    liElements.forEach((el: Element) => {
      el.className = 'mb-1 break-words word-break-break-word';
      (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
    });

    // Apply styles to code elements
    const codeElements = container.querySelectorAll('code:not(pre code)');
    codeElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'bg-gray-200 px-1 py-0.5 rounded text-xs font-mono break-all';
        (el as HTMLElement).style.cssText = 'font-size: 0.75rem !important; font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important; word-break: break-all !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'bg-gray-200 px-1 py-0.5 rounded text-sm font-mono break-all';
        (el as HTMLElement).style.cssText = 'word-break: break-all !important; overflow-wrap: break-word !important; font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important;';
      }
    });

    const preElements = container.querySelectorAll('pre');
    preElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'bg-gray-100 border border-gray-300 rounded-lg p-3 overflow-x-auto my-3 break-all';
        (el as HTMLElement).style.cssText = 'word-break: break-all !important; overflow-wrap: break-word !important; white-space: pre-wrap !important;';
      } else {
        el.className = 'bg-gray-100 border border-gray-300 rounded-lg p-4 overflow-x-auto my-4 break-all';
        (el as HTMLElement).style.cssText = 'word-break: break-all !important; overflow-wrap: break-word !important; white-space: pre-wrap !important;';
      }
      const codeInPre = el.querySelector('code');
      if (codeInPre) {
        if (this.isMobile) {
          codeInPre.className = 'font-mono text-xs break-all';
          (codeInPre as HTMLElement).style.cssText = 'font-size: 0.75rem !important; font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important; word-break: break-all !important; overflow-wrap: break-word !important; white-space: pre-wrap !important;';
        } else {
          codeInPre.className = 'font-mono text-sm break-all';
          (codeInPre as HTMLElement).style.cssText = 'word-break: break-all !important; overflow-wrap: break-word !important; white-space: pre-wrap !important; font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important;';
        }
      }
    });

    // Apply styles to blockquotes
    const blockquoteElements = container.querySelectorAll('blockquote');
    blockquoteElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'border-l-4 border-gray-300 pl-3 italic text-gray-600 my-3 text-sm break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'font-size: 0.875rem !important; border-left: 4px solid #d1d5db !important; padding-left: 0.75rem !important; font-style: italic !important; word-break: break-word !important; overflow-wrap: break-word !important;';
      } else {
        el.className = 'border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 text-base break-words word-break-break-word';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
      }
    });

    // Apply styles to tables - with better mobile handling
    const tableElements = container.querySelectorAll('table');
    tableElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'w-full my-3 text-xs border-collapse';
        (el as HTMLElement).style.cssText = 'font-size: 0.75rem !important; width: 100% !important; table-layout: fixed !important; word-break: break-word !important;';

        // Wrap table in a scrollable container for mobile
        if (!el.parentElement?.classList.contains('table-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'table-wrapper overflow-x-auto w-full';
          wrapper.style.cssText = 'overflow-x: auto !important; width: 100% !important; -webkit-overflow-scrolling: touch !important;';
          el.parentNode?.insertBefore(wrapper, el);
          wrapper.appendChild(el);
        }
      } else {
        el.className = 'border-collapse w-full my-4 text-base';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; table-layout: auto !important;';
      }
    });

    const thElements = container.querySelectorAll('th');
    thElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'border border-gray-300 bg-gray-100 px-2 py-1 text-left font-medium text-xs';
        (el as HTMLElement).style.cssText = 'font-size: 0.75rem !important; padding: 0.25rem 0.5rem !important; border: 1px solid #d1d5db !important; word-break: break-word !important; overflow-wrap: break-word !important; white-space: normal !important;';
      } else {
        el.className = 'border border-gray-300 bg-gray-100 px-4 py-2 text-left font-medium text-sm';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important; white-space: normal !important;';
      }
    });

    const tdElements = container.querySelectorAll('td');
    tdElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'border border-gray-300 px-2 py-1 text-xs';
        (el as HTMLElement).style.cssText = 'font-size: 0.75rem !important; padding: 0.25rem 0.5rem !important; border: 1px solid #d1d5db !important; word-break: break-word !important; overflow-wrap: break-word !important; white-space: normal !important;';
      } else {
        el.className = 'border border-gray-300 px-4 py-2 text-sm';
        (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important; white-space: normal !important;';
      }
    });

    // Apply styles to links
    const aElements = container.querySelectorAll('a');
    aElements.forEach((el: Element) => {
      el.className = 'text-blue-600 hover:underline break-words word-break-break-all';
      (el as HTMLElement).style.cssText = 'word-break: break-all !important; overflow-wrap: break-word !important;';
    });

    // Apply styles to strong/bold
    const strongElements = container.querySelectorAll('strong');
    strongElements.forEach((el: Element) => {
      el.className = 'font-semibold text-gray-900 break-words';
      (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
    });

    // Apply styles to emphasis/italic
    const emElements = container.querySelectorAll('em');
    emElements.forEach((el: Element) => {
      el.className = 'italic break-words';
      (el as HTMLElement).style.cssText = 'word-break: break-word !important; overflow-wrap: break-word !important;';
    });

    // Apply styles to horizontal rules
    const hrElements = container.querySelectorAll('hr');
    hrElements.forEach((el: Element) => {
      if (this.isMobile) {
        el.className = 'border-gray-300 my-4 w-full';
      } else {
        el.className = 'border-gray-300 my-8 w-full';
      }
      (el as HTMLElement).style.cssText = 'width: 100% !important; max-width: 100% !important;';
    });
  }

  save(): void {
    this.savedContent = this.content;
    this.lastSaved = new Date();
    this.hasUnsavedChanges = false;
    this.showToast('Knowledge base saved successfully!', 'success');
  }

  downloadMarkdown(): void {
    const blob = new Blob([this.content], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `knowledge-base-${new Date().toISOString().split('T')[0]}.md`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => window.URL.revokeObjectURL(url), 100);
    this.showToast('Markdown file downloaded!', 'info');
  }

  downloadHtml(): void {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Knowledge Base</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .table-wrapper {
      overflow-x: auto;
      width: 100%;
      -webkit-overflow-scrolling: touch;
    }
    * {
      word-break: break-word;
      overflow-wrap: break-word;
    }
    code:not(pre code) {
      word-break: break-all;
    }
    pre code {
      word-break: break-all;
      white-space: pre-wrap;
    }
    table {
      table-layout: fixed;
      width: 100%;
    }
    h1 {
      font-size: 1.875rem !important;
      font-weight: 700 !important;
      line-height: 1.25 !important;
      margin-top: 2rem !important;
      margin-bottom: 1rem !important;
      color: #1f2937 !important;
    }
    h2 {
      font-size: 1.5rem !important;
      font-weight: 700 !important;
      line-height: 1.25 !important;
      margin-top: 1.5rem !important;
      margin-bottom: 0.75rem !important;
      color: #1f2937 !important;
    }
    h3 {
      font-size: 1.25rem !important;
      font-weight: 600 !important;
      line-height: 1.25 !important;
      margin-top: 1.25rem !important;
      margin-bottom: 0.75rem !important;
      color: #1f2937 !important;
    }
    h4 {
      font-size: 1.125rem !important;
      font-weight: 600 !important;
      line-height: 1.25 !important;
      margin-top: 1rem !important;
      margin-bottom: 0.5rem !important;
      color: #1f2937 !important;
    }
    h5 {
      font-size: 1rem !important;
      font-weight: 600 !important;
      line-height: 1.25 !important;
      margin-top: 1rem !important;
      margin-bottom: 0.5rem !important;
      color: #374151 !important;
      text-transform: uppercase !important;
    }
    h6 {
      font-size: 0.875rem !important;
      font-weight: 700 !important;
      line-height: 1.25 !important;
      margin-top: 0.75rem !important;
      margin-bottom: 0.5rem !important;
      color: #6b7280 !important;
      text-transform: uppercase !important;
    }
    p {
      font-size: 1rem !important;
      line-height: 1.625 !important;
      margin-bottom: 1rem !important;
      color: #374151 !important;
    }
    @media (max-width: 768px) {
      h1 { font-size: 1.5rem !important; margin-top: 1.5rem !important; }
      h2 { font-size: 1.25rem !important; margin-top: 1.25rem !important; }
      h3 { font-size: 1.125rem !important; margin-top: 1rem !important; }
      h4 { font-size: 1rem !important; margin-top: 1rem !important; }
      h5 { font-size: 0.875rem !important; margin-top: 1rem !important; }
      h6 { font-size: 0.75rem !important; margin-top: 0.75rem !important; }
      p { font-size: 0.875rem !important; margin-bottom: 0.75rem !important; }
      table { font-size: 0.75rem; }
      th, td { padding: 0.25rem 0.5rem; white-space: normal; }
    }
  </style>
</head>
<body class="font-sans max-w-4xl mx-auto p-4 sm:p-8 leading-relaxed">
  <div class="prose prose-sm sm:prose-lg max-w-none break-words">
    ${this.htmlPreview}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `knowledge-base-${new Date().toISOString().split('T')[0]}.html`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => window.URL.revokeObjectURL(url), 100);
    this.showToast('HTML file downloaded!', 'info');
  }

  clearContent(): void {
    const message = this.isMobile
      ? 'Clear all content? This cannot be undone.'
      : 'Are you sure you want to clear all content? This action cannot be undone.';

    if (confirm(message)) {
      this.content = '';
      this.updatePreview();
    }
  }

  insertMarkdown(syntax: string): void {
    this.content += syntax;
    this.updatePreview();

    if (this.isMobile) {
      this.isMobileToolbarOpen = false;
    }
  }

  setViewMode(mode: 'split' | 'editor' | 'preview'): void {
    this.viewMode = mode;

    if (this.isMobile) {
      this.isMobileToolbarOpen = false;
      this.isMobileDownloadMenuOpen = false;
    }

    // Force style reapplication when switching to a view mode that includes preview
    // This fixes the issue when coming from editor-only mode
    if (mode === 'split' || mode === 'preview') {
      setTimeout(() => {
        this.applyTailwindStyles();
      }, 0);
    }
  }

  private showToast(message: string, type: 'success' | 'info' | 'error'): void {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const position = this.isMobile ? 'top-2 left-2 right-2' : 'top-4 right-4';
    toast.className = `fixed ${position} px-4 py-2 rounded-lg text-white z-50 ${bgColor} text-sm sm:text-base`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, this.isMobile ? 2000 : 3000);
  }

  get deviceIsMobile(): boolean {
    return this.isMobile;
  }
}