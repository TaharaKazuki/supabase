import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  link: string
  platform: Icons
}

const ICONS = {
  facebook: <Facebook size="18" />,
  github: <Github size="18" />,
  instagram: <Instagram size="18" />,
  linkedin: <Linkedin size="18" />,
  x: <Twitter size="18" />,
  youtube: <Youtube size="18" />,
} as const

type Icons = keyof typeof ICONS

const SocialLink = ({ link, platform }: Props) => {
  return <Link href={link}>{ICONS[platform]}</Link>
}

export default SocialLink
