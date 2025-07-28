import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { KnowledgebaseEditorComponent } from './knowledgebase-editor';

describe('KnowledgebaseEditorComponent', () => {
  let component: KnowledgebaseEditorComponent;
  let fixture: ComponentFixture<KnowledgebaseEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgebaseEditorComponent, CommonModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KnowledgebaseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default content', () => {
    expect(component.content).toContain('TurboVets Flutter Challenge');
  });

  it('should detect mobile correctly', () => {
    // Mock window.innerWidth for testing
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });

    component['detectMobile']();
    expect(component.isMobile).toBeTruthy();

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    component['detectMobile']();
    expect(component.isMobile).toBeFalsy();
  });

  it('should update preview when content changes', async () => {
    const testContent = '# Test Heading\nThis is test content.';
    component.content = testContent;

    await component.updatePreview();

    expect(component.htmlPreview).toContain('<h1');
    expect(component.htmlPreview).toContain('Test Heading');
    expect(component.wordCount).toBeGreaterThan(0);
  });

  it('should toggle mobile toolbar', () => {
    expect(component.isMobileToolbarOpen).toBeFalsy();

    component.toggleMobileToolbar();
    expect(component.isMobileToolbarOpen).toBeTruthy();

    component.toggleMobileToolbar();
    expect(component.isMobileToolbarOpen).toBeFalsy();
  });

  it('should set view mode correctly', () => {
    component.setViewMode('editor');
    expect(component.viewMode).toBe('editor');

    component.setViewMode('preview');
    expect(component.viewMode).toBe('preview');

    component.setViewMode('split');
    expect(component.viewMode).toBe('split');
  });

  it('should mark content as unsaved when changed', async () => {
    const originalContent = component.content;
    component.savedContent = originalContent;
    component.hasUnsavedChanges = false;

    component.content = originalContent + '\n# New heading';
    await component.updatePreview();

    expect(component.hasUnsavedChanges).toBeTruthy();
  });

  it('should save content correctly', () => {
    const testContent = '# Test content';
    component.content = testContent;
    component.hasUnsavedChanges = true;

    component.save();

    expect(component.savedContent).toBe(testContent);
    expect(component.hasUnsavedChanges).toBeFalsy();
    expect(component.lastSaved).toBeTruthy();
  });

  it('should insert markdown correctly', async () => {
    const originalContent = component.content;
    const markdownToInsert = '**bold text**';

    component.insertMarkdown(markdownToInsert);

    expect(component.content).toBe(originalContent + markdownToInsert);
  });

  it('should clear content when confirmed', () => {
    // Mock confirm to return true
    spyOn(window, 'confirm').and.returnValue(true);

    component.content = 'Some content';
    component.clearContent();

    expect(component.content).toBe('');
  });

  it('should not clear content when not confirmed', () => {
    // Mock confirm to return false
    spyOn(window, 'confirm').and.returnValue(false);

    const originalContent = component.content;
    component.clearContent();

    expect(component.content).toBe(originalContent);
  });

  it('should return correct editor height based on mobile state', () => {
    component.isMobile = true;
    component.viewMode = 'split';
    expect(component.getEditorHeight()).toBe('300px');

    component.viewMode = 'editor';
    expect(component.getEditorHeight()).toBe('400px');

    component.isMobile = false;
    expect(component.getEditorHeight()).toBe('600px');
  });

  it('should return correct preview height based on mobile state', () => {
    component.isMobile = true;
    component.viewMode = 'split';
    expect(component.getPreviewHeight()).toBe('300px');

    component.viewMode = 'preview';
    expect(component.getPreviewHeight()).toBe('400px');

    component.isMobile = false;
    expect(component.getPreviewHeight()).toBe('600px');
  });
});