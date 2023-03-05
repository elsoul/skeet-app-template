import { create } from 'twrnc'
import tailwindConfig from '../../tailwind.config.js'
const tw = create(require(`../../tailwind.config.js`))
export default tw

export const colors: Colors = {
  ...tailwindConfig.theme?.colors,
} as Colors

type Colors = {
  [key: string]: {
    [key: number]: string
  }
}
