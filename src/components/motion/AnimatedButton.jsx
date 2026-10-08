import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export default function AnimatedButton({ children, className = '', to, href, external = false, ...props }) {
  const motionProps = {
    className,
    whileHover: { y: -2, scale: 1.015 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.18 },
    ...props,
  }

  if (to) return <MotionLink to={to} {...motionProps}>{children}</MotionLink>
  return <motion.a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...motionProps}>{children}</motion.a>
}
