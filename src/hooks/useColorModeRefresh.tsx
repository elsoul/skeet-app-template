import { useRecoilValue } from 'recoil'
import { colorModeRefreshState } from '@/store/colorModeRefresh'

export default function useColorModeRefresh() {
  const _refreshCount = useRecoilValue(colorModeRefreshState)
}
