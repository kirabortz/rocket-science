import { App } from '@/app/App'
import { createRoot } from 'react-dom/client'

import '@/common/styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
