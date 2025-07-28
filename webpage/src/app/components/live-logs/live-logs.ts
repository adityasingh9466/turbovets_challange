import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-live-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-logs.html'
})
export class LiveLogsComponent implements OnInit, AfterViewChecked {
  @ViewChild('logsContainer', { static: false }) logsContainer!: ElementRef;

  logs: { timestamp: string; message: string; level: string }[] = [];
  shouldAutoScroll = true;
  isConnected = true;
  logCount = 0;
  isMobile = false;

  private scrollTimeout: any;
  private programmaticScroll = false;
  private lastLogCount = 0;
  private pendingScroll = false;
  private touchStartY = 0;
  private touchStartTime = 0;
  private isScrolling = false;

  ngOnInit(): void {
    this.detectMobile();
    this.startLogGeneration();
    this.setupMobileScrollOptimizations();
  }

  ngAfterViewChecked(): void {
    // Only auto-scroll if we should and there are new logs
    if (this.shouldAutoScroll && this.logs.length > this.lastLogCount && !this.pendingScroll) {
      this.pendingScroll = true;

      // Use multiple async layers to ensure DOM is completely updated
      Promise.resolve().then(() => {
        setTimeout(() => {
          if (this.shouldAutoScroll && this.pendingScroll) {
            this.scrollToBottomProgrammatically();
          }
          this.pendingScroll = false;
        }, 0);
      });

      this.lastLogCount = this.logs.length;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectMobile();
  }

  private detectMobile(): void {
    this.isMobile = window.innerWidth < 640 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  private setupMobileScrollOptimizations(): void {
    if (this.isMobile) {
      // Add mobile-specific optimizations
      document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
      document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    }
  }

  private handleTouchStart(event: TouchEvent): void {
    if (event.target && this.logsContainer && this.logsContainer.nativeElement.contains(event.target as Node)) {
      this.touchStartY = event.touches[0].clientY;
      this.touchStartTime = Date.now();
      this.isScrolling = true;
    }
  }

  private handleTouchEnd(event: TouchEvent): void {
    if (this.isScrolling) {
      this.isScrolling = false;
      // Small delay to allow scroll to settle
      setTimeout(() => {
        this.checkScrollPosition();
      }, 100);
    }
  }

  private checkScrollPosition(): void {
    if (!this.logsContainer) return;

    const element = this.logsContainer.nativeElement;
    const tolerance = this.isMobile ? 10 : 3; // Larger tolerance for mobile
    const isAtBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + tolerance;

    if (isAtBottom !== this.shouldAutoScroll) {
      this.shouldAutoScroll = isAtBottom;
      if (isAtBottom) {
        this.lastLogCount = this.logs.length;
      }
    }
  }

  startLogGeneration(): void {
    setInterval(() => {
      if (this.isConnected) {
        this.logCount++;
        const logLevels = ['INFO', 'WARN', 'ERROR', 'DEBUG'];
        const messages = [
          'User authentication successful',
          'Database connection established',
          'Payment processing completed',
          'Cache invalidated and refreshed',
          'API request processed successfully',
          'File upload completed',
          'Session expired - user logged out',
          'Configuration updated',
          'Backup completed successfully',
          'Memory usage: 78% - within normal range',
          'Network latency: 45ms',
          'SSL certificate renewed',
          'Queue processed 1,247 items',
          'Health check passed for all services'
        ];

        const level = logLevels[Math.floor(Math.random() * logLevels.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];

        const newLog = {
          timestamp: new Date().toLocaleTimeString(),
          message: `${message} - Event ${Math.random().toString(36).slice(2, 8)}`,
          level
        };

        this.logs.push(newLog);
        if (this.logs.length > 100) this.logs.shift();
      }
    }, this.isMobile ? 3000 : 2000); // Slower on mobile to reduce battery drain
  }

  onScroll(event: any): void {
    // Ignore programmatic scrolls completely
    if (this.programmaticScroll || this.pendingScroll) return;

    const element = event.target;
    const tolerance = this.isMobile ? 10 : 3; // Larger tolerance for mobile touch scrolling
    const isAtBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + tolerance;

    // Clear existing timeout
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

    // Immediate state update for better responsiveness
    const newAutoScrollState = isAtBottom;

    if (newAutoScrollState !== this.shouldAutoScroll) {
      this.shouldAutoScroll = newAutoScrollState;
      if (newAutoScrollState) {
        this.lastLogCount = this.logs.length;
      }
    }

    // Debounced confirmation with longer delay for mobile
    const debounceDelay = this.isMobile ? 150 : 50;
    this.scrollTimeout = setTimeout(() => {
      const atBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + tolerance;
      if (atBottom !== this.shouldAutoScroll) {
        this.shouldAutoScroll = atBottom;
        if (atBottom) {
          this.lastLogCount = this.logs.length;
        }
      }
    }, debounceDelay);
  }

  scrollToBottom(): void {
    this.scrollToBottomProgrammatically();
    this.shouldAutoScroll = true;
    this.lastLogCount = this.logs.length;
  }

  private scrollToBottomProgrammatically(): void {
    try {
      this.programmaticScroll = true;
      const element = this.logsContainer.nativeElement;

      if (this.isMobile) {
        // Mobile-specific smooth scrolling
        element.scrollTo({
          top: element.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        // Force immediate scroll for desktop
        element.scrollTop = element.scrollHeight;
      }

      // Ensure we stay at bottom even after potential reflows
      requestAnimationFrame(() => {
        if (this.isMobile) {
          element.scrollTo({
            top: element.scrollHeight,
            behavior: 'smooth'
          });
        } else {
          element.scrollTop = element.scrollHeight;
        }

        // Reset flag after ensuring scroll is complete
        setTimeout(() => {
          this.programmaticScroll = false;
        }, this.isMobile ? 300 : 150); // Longer delay for mobile smooth scroll
      });
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
      this.programmaticScroll = false;
    }
  }

  toggleConnection(): void {
    this.isConnected = !this.isConnected;
  }

  clearLogs(): void {
    this.logs = [];
    this.logCount = 0;
    this.shouldAutoScroll = true;
    this.lastLogCount = 0;
    this.pendingScroll = false;
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
  }

  downloadLogs(): void {
    const logText = this.logs
      .map(log => `[${log.timestamp}] ${log.level}: ${log.message}`)
      .join('\n');

    const blob = new Blob([logText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `logs-${new Date().toISOString().split('T')[0]}.txt`;

    // Mobile-friendly download
    if (this.isMobile) {
      // For mobile, open in new tab as a fallback
      const newWindow = window.open(url, '_blank');
      if (!newWindow) {
        // If popup blocked, try direct click
        link.click();
      }
    } else {
      link.click();
    }

    setTimeout(() => window.URL.revokeObjectURL(url), 100);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  // Helper method to determine if device is mobile (can be used in template)
  get deviceIsMobile(): boolean {
    return this.isMobile;
  }
}