import { Routes } from '@angular/router';
import { TicketViewerComponent } from './components/ticket-viewer/ticket-viewer';
import { KnowledgebaseEditorComponent } from './components/knowledgebase-editor/knowledgebase-editor';
import { LiveLogsComponent } from './components/live-logs/live-logs';
export const routes: Routes = [
  { path: 'tickets', component: TicketViewerComponent },
  { path: 'knowledgebase', component: KnowledgebaseEditorComponent },
  { path: 'logs', component: LiveLogsComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' }
];

