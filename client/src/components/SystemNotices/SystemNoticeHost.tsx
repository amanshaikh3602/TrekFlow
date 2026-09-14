import { useEffect, useState } from 'react';
import { useSystemNoticeStore } from '../../store/systemNoticeStore.js';
import { ModalRenderer } from './SystemNoticeModal.js';
import { BannerRenderer, ToastRenderer } from './SystemNoticeBanner.js';

// Mobile breakpoint matches the modal sheet's (max-width: 639px).
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && (window.matchMedia?.('(max-width: 639px)')?.matches ?? false)
  );
  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 639px)');
    if (!mq) return;
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

export function SystemNoticeHost() {
  // System notice modals and update popups disabled per user request
  return null;
}
