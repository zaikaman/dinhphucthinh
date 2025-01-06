import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  
  const currentLang = pathname.startsWith('/vi') ? 'vi' : 'en'
  const targetLang = currentLang === 'vi' ? 'en' : 'vi'
  
  const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`)
  
  return (
    <Link
      href={targetPath}
      className="px-4 py-2 rounded-lg border border-green-400/20 text-gray-300 hover:text-white hover:border-green-400/50 transition-all"
    >
      {targetLang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}
    </Link>
  )
} 