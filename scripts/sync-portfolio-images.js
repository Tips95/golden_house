const fs = require('fs')
const path = require('path')

const PORTFOLIO_DIR = path.join(__dirname, '..', 'public', 'images', 'portfolio')
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'portfolio-generated.ts')

if (!fs.existsSync(PORTFOLIO_DIR)) {
  fs.mkdirSync(PORTFOLIO_DIR, { recursive: true })
  console.log('Создана папка public/images/portfolio/')
}

const dirs = fs.readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('.'))
  .map(d => d.name)

const portfolioByFolder = {}

for (const dir of dirs) {
  const dirPath = path.join(PORTFOLIO_DIR, dir)
  const files = fs.readdirSync(dirPath)
    .filter(f => EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
  const paths = files.map(f => `/images/portfolio/${dir}/${f}`)
  if (paths.length) {
    portfolioByFolder[dir] = paths
    console.log(`${dir}: ${paths.length} фото`)
  }
}

const lines = Object.entries(portfolioByFolder)
  .map(([folder, paths]) => `  '${folder}': ${JSON.stringify(paths)},`)
  .join('\n')

const content = `/**
 * Автогенерируется скриптом npm run portfolio:sync
 * Не редактируйте вручную. Добавляйте фото в public/images/portfolio/<папка>/
 */
export const portfolioByFolder: Record<string, string[]> = {
${lines}
}
`

fs.writeFileSync(OUT_FILE, content, 'utf8')
console.log(`\nЗаписано ${OUT_FILE}`)
console.log('Всего разделов с фото:', Object.keys(portfolioByFolder).length)
