import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export default function AnimatedButton({ children, className = '', to, href, external = false, ...props }) {
  const reduceMotion = useReducedMotion()
  const motionProps = {
    className,
    whileHover: reduceMotion ? undefined : { y: -2, scale: 1.015 },
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.18 },
    ...props,
  }

  if (to) return <MotionLink to={to} {...motionProps}>{children}</MotionLink>
  return <motion.a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...motionProps}>{children}</motion.a>
}
