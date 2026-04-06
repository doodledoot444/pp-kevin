export const EA_EASING = [0.16, 1, 0.3, 1] as const;

export const projectModalVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15, // Faster backdrop fade
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
  },

  modal: {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.25, // Reduced from 0.35 for snappier response
        ease: EA_EASING,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.15, // Faster exit
        ease: EA_EASING,
      },
    },
  },

  content: {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05, // Reduced from 0.1
        duration: 0.2, // Reduced from 0.3
        ease: EA_EASING,
      },
    },
  },

  // Micro-interaction: glow pulse
  glowPulse: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0.98, 1.02, 1],
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },

  // Card hover state: elevated with subtle glow
  cardHover: {
    scale: 1.03,
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.25,
      ease: EA_EASING,
    },
  },

  // Image zoom on hover
  imageHover: {
    scale: 1.08,
    transition: {
      duration: 0.4,
      ease: EA_EASING,
    },
  },

  // Button interaction
  buttonHover: {
    scale: 1.08,
    transition: {
      duration: 0.2,
      ease: EA_EASING,
    },
  },

  buttonTap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },

  // Stagger for grid items
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },

  // Individual grid item
  staggerItem: {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: EA_EASING,
      },
    },
  },
};

// Gradient sweep animation (light streak effect)
export const gradientSweepVariants = {
  visible: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const heroVariants = {
  section: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  headingMask: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.01,
      },
    },
  },
  headingText: {
    hidden: {
      opacity: 0,
      x: -32,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: EA_EASING,
      },
    },
  },
  subtext: {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 0.12,
        ease: EA_EASING,
      },
    },
  },
  ctaGroup: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.22,
      },
    },
  },
  ctaButton: {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: EA_EASING,
      },
    },
  },
};
