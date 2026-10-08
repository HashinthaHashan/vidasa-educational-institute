import { motion } from 'motion/react'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function HoverLiftCard({ children, className = '', as = 'article', ...props }) {
  const Card = motion[as]
  return (
    <Card
      className={className}
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </Card>
  )
}
