import { useRecoilValue } from 'recoil'
import { refreshState } from '@/store/refresh'

export default function useRefresh() {
  const _refreshCount = useRecoilValue(refreshState)
}
