import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewerComponent } from './ticket-viewer';

describe('TicketViewerComponent', () => {
  let component: TicketViewerComponent;
  let fixture: ComponentFixture<TicketViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketViewerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TicketViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter tickets by status', () => {
    component.statusFilter = 'Open';
    const filteredTickets = component.filteredTickets();
    expect(filteredTickets.every(ticket => ticket.status === 'Open')).toBeTruthy();
  });

  it('should return all tickets when no filter is applied', () => {
    component.statusFilter = '';
    const filteredTickets = component.filteredTickets();
    expect(filteredTickets.length).toBe(component.tickets.length);
  });

  it('should open view modal when viewTicket is called', () => {
    const testTicket = component.tickets[0];
    component.viewTicket(testTicket);
    expect(component.showViewModal).toBeTruthy();
    expect(component.selectedTicket).toEqual(testTicket);
  });

  it('should open edit modal when editTicket is called', () => {
    const testTicket = component.tickets[0];
    component.editTicket(testTicket);
    expect(component.showEditModal).toBeTruthy();
    expect(component.editingTicket).toEqual(testTicket);
  });

  it('should close view modal', () => {
    component.showViewModal = true;
    component.selectedTicket = component.tickets[0];
    component.closeViewModal();
    expect(component.showViewModal).toBeFalsy();
    expect(component.selectedTicket).toBeNull();
  });

  it('should close edit modal', () => {
    component.showEditModal = true;
    component.editingTicket = component.tickets[0];
    component.closeEditModal();
    expect(component.showEditModal).toBeFalsy();
    expect(component.editingTicket).toBeNull();
  });

  it('should return correct priority class', () => {
    expect(component.getPriorityClass('Critical')).toBe('bg-red-100 text-red-800');
    expect(component.getPriorityClass('High')).toBe('bg-orange-100 text-orange-800');
    expect(component.getPriorityClass('Medium')).toBe('bg-yellow-100 text-yellow-800');
    expect(component.getPriorityClass('Low')).toBe('bg-blue-100 text-blue-800');
    expect(component.getPriorityClass('Unknown')).toBe('bg-gray-100 text-gray-800');
  });
});