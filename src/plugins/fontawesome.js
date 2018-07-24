import fontawesome from '@fortawesome/fontawesome'
import { fas as pfas } from '@fortawesome/pro-solid-svg-icons'
import { fal as pfal } from '@fortawesome/pro-light-svg-icons'
import { far as pfar } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export function install () {
  (!process.env.FA_PRO)
    ? fontawesome.library.add(fas, far, fab) // Free icons
    : fontawesome.library.add(pfas, pfal, fab, pfar) // Pro icons
}
