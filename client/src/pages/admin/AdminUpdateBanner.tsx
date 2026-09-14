import type { TranslationFn } from '../../types'
import type { UpdateInfo } from './adminModel'

interface AdminUpdateBannerProps {
  updateInfo: UpdateInfo
  t: TranslationFn
  onHowTo: () => void
}

// Update banner disabled — TrekFlow is a standalone fork and does not
// track upstream TREK GitHub releases for updates.
export default function AdminUpdateBanner(_props: AdminUpdateBannerProps): null {
  return null;
}
