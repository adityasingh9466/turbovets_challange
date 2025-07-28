import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Ticket {
  id: string;
  subject: string;
  status: 'Open' | 'In Progress' | 'Closed';
  createdAt: string;
  description?: string;
  priority?: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee?: string;
}

@Component({
  selector: 'app-ticket-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-viewer.html'
})
export class TicketViewerComponent {
  statusFilter: string = '';
  selectedTicket: Ticket | null = null;
  editingTicket: Ticket | null = null;
  showViewModal: boolean = false;
  showEditModal: boolean = false;

  tickets: Ticket[] = [
    {
      id: '001',
      subject: 'Login issue',
      status: 'Open',
      createdAt: '2025-07-10',
      description: 'Users are unable to log in with their credentials. Getting "invalid password" error even with correct details.',
      priority: 'High',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '002',
      subject: 'Payment bug',
      status: 'In Progress',
      createdAt: '2025-07-11',
      description: 'Payment processing fails intermittently during checkout process.',
      priority: 'Critical',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '003',
      subject: 'Feature request: Dark mode',
      status: 'Closed',
      createdAt: '2025-07-12',
      description: 'Users have requested a dark mode theme for better accessibility.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '004',
      subject: 'Lag in dashboard',
      status: 'Open',
      createdAt: '2025-07-14',
      description: 'Dashboard loads slowly, especially with large datasets.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '005',
      subject: 'Email notifications not working',
      status: 'Open',
      createdAt: '2025-07-15',
      description: 'Users are not receiving email notifications for important updates.',
      priority: 'High',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '006',
      subject: 'Mobile app crashes on startup',
      status: 'In Progress',
      createdAt: '2025-07-16',
      description: 'Mobile application crashes immediately after launching on iOS devices.',
      priority: 'Critical',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '007',
      subject: 'Export CSV feature broken',
      status: 'Open',
      createdAt: '2025-07-17',
      description: 'CSV export functionality is not working correctly, producing empty files.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '008',
      subject: 'User profile images not displaying',
      status: 'Closed',
      createdAt: '2025-07-18',
      description: 'Profile pictures are not showing up in user profiles and comments.',
      priority: 'Low',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '009',
      subject: 'Search functionality improvements',
      status: 'In Progress',
      createdAt: '2025-07-19',
      description: 'Search results are not relevant and need algorithm improvements.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '010',
      subject: 'Database connection timeout',
      status: 'Open',
      createdAt: '2025-07-20',
      description: 'Frequent database timeouts causing application errors.',
      priority: 'Critical',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '011',
      subject: 'Two-factor authentication setup',
      status: 'Closed',
      createdAt: '2025-07-21',
      description: 'Implement two-factor authentication for enhanced security.',
      priority: 'High',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '012',
      subject: 'Calendar sync issues',
      status: 'Open',
      createdAt: '2025-07-22',
      description: 'Calendar integration not syncing events properly with external services.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '013',
      subject: 'Performance optimization needed',
      status: 'In Progress',
      createdAt: '2025-07-23',
      description: 'Application performance degrades with increased user load.',
      priority: 'High',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '014',
      subject: 'File upload size limit error',
      status: 'Open',
      createdAt: '2025-07-24',
      description: 'Users cannot upload files larger than 5MB despite system allowing 10MB.',
      priority: 'Medium',
      assignee: 'Aditya Singh Gaharwar'
    },
    {
      id: '015',
      subject: 'API rate limiting implementation',
      status: 'Closed',
      createdAt: '2025-07-25',
      description: 'Implement rate limiting to prevent API abuse and ensure fair usage.',
      priority: 'High',
      assignee: 'Aditya Singh Gaharwar'
    }
  ];


  filteredTickets(): Ticket[] {
    if (!this.statusFilter) {
      return this.tickets;
    }
    return this.tickets.filter(ticket => ticket.status === this.statusFilter);
  }


  viewTicket(ticket: Ticket): void {
    this.selectedTicket = { ...ticket };
    this.showViewModal = true;
  }


  editTicket(ticket: Ticket): void {
    this.editingTicket = { ...ticket };
    this.showEditModal = true;
  }


  closeTicket(ticket: Ticket): void {
    const confirmClose = confirm(`Are you sure you want to close ticket #${ticket.id}?`);
    if (confirmClose) {
      const ticketIndex = this.tickets.findIndex(t => t.id === ticket.id);
      if (ticketIndex !== -1) {
        this.tickets[ticketIndex].status = 'Closed';
      }
    }
  }


  saveTicket(): void {
    if (this.editingTicket) {
      const ticketIndex = this.tickets.findIndex(t => t.id === this.editingTicket!.id);
      if (ticketIndex !== -1) {
        this.tickets[ticketIndex] = { ...this.editingTicket };
      }
      this.closeEditModal();
    }
  }


  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedTicket = null;
  }


  closeEditModal(): void {
    this.showEditModal = false;
    this.editingTicket = null;
  }


  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }


  addTicket(newTicket: Omit<Ticket, 'id'>): void {
    const nextId = (Math.max(...this.tickets.map(t => parseInt(t.id))) + 1)
      .toString()
      .padStart(3, '0');

    const ticket: Ticket = {
      id: nextId,
      ...newTicket
    };

    this.tickets.push(ticket);
  }


  deleteTicket(ticketId: string): void {
    const confirmDelete = confirm(`Are you sure you want to delete ticket #${ticketId}?`);
    if (confirmDelete) {
      this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
    }
  }


  getTicketCountByStatus(status: 'Open' | 'In Progress' | 'Closed'): number {
    return this.tickets.filter(ticket => ticket.status === status).length;
  }


  getTicketCountByPriority(priority: 'Low' | 'Medium' | 'High' | 'Critical'): number {
    return this.tickets.filter(ticket => ticket.priority === priority).length;
  }


  sortTickets(field: keyof Ticket, order: 'asc' | 'desc' = 'asc'): void {
    this.tickets.sort((a, b) => {
      const aValue = a[field] || '';
      const bValue = b[field] || '';

      if (order === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }


  searchTickets(searchTerm: string): Ticket[] {
    if (!searchTerm.trim()) {
      return this.tickets;
    }

    const term = searchTerm.toLowerCase();
    return this.tickets.filter(ticket =>
      ticket.subject.toLowerCase().includes(term) ||
      (ticket.description && ticket.description.toLowerCase().includes(term))
    );
  }


  exportToCSV(): string {
    const headers = ['ID', 'Subject', 'Status', 'Priority', 'Assignee', 'Created Date', 'Description'];
    const csvRows = [headers.join(',')];

    this.tickets.forEach(ticket => {
      const row = [
        ticket.id,
        `"${ticket.subject.replace(/"/g, '""')}"`,
        ticket.status,
        ticket.priority || '',
        ticket.assignee || '',
        ticket.createdAt,
        `"${(ticket.description || '').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
  }



  downloadCSV(): void {
    const csvContent = this.exportToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `tickets_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}