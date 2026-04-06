import { useState, useCallback, useEffect } from 'react';

export interface ModalState {
  isOpen: boolean;
  activeProjectId: string | null;
}

export function useProjectModal() {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    activeProjectId: null,
  });

  // Open modal with specific project - batched update
  const openModal = useCallback((projectId: string) => {
    setState({ isOpen: true, activeProjectId: projectId });
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  // Close modal - batched update
  const closeModal = useCallback(() => {
    setState({ isOpen: false, activeProjectId: null });
    document.body.style.overflow = 'unset';
  }, []);

  // Handle ESC key - use stable callback reference
  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, closeModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return {
    isOpen: state.isOpen,
    activeProjectId: state.activeProjectId,
    openModal,
    closeModal,
  };
}
