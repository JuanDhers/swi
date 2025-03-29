"use client"

import * as React from "react"

// Función simple para unir clases condicionales
function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean
  onActiveChange?: (active: boolean) => void
  size?: "sm" | "md" | "lg"
  disabled?: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ active = false, onActiveChange, className, size = "md", disabled = false, ...props }, ref) => {
    const [isActive, setIsActive] = React.useState(active)

    React.useEffect(() => {
      setIsActive(active)
    }, [active])

    const toggleSwitch = () => {
      if (disabled) return

      const newActiveState = !isActive
      setIsActive(newActiveState)
      onActiveChange?.(newActiveState)
    }

    const sizes = {
      sm: {
        switch: "w-8 h-4",
        thumb: "w-3 h-3",
        translate: "translate-x-4",
      },
      md: {
        switch: "w-11 h-6",
        thumb: "w-5 h-5",
        translate: "translate-x-5",
      },
      lg: {
        switch: "w-14 h-7",
        thumb: "w-6 h-6",
        translate: "translate-x-7",
      },
    }

    const switchClasses = classNames(
      "relative inline-flex items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      isActive ? "bg-primary" : "bg-input",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      sizes[size].switch,
      className,
    )

    const thumbClasses = classNames(
      "pointer-events-none block rounded-full bg-background shadow-lg transition-transform duration-200",
      sizes[size].thumb,
      isActive ? sizes[size].translate : "translate-x-0.5",
    )

    return (
      <button
        ref={ref}
        type="button"
        className={switchClasses}
        onClick={toggleSwitch}
        aria-checked={isActive}
        aria-label="Toggle switch"
        disabled={disabled}
        {...props}
      >
        <span className={thumbClasses} />
      </button>
    )
  },
)

Switch.displayName = "Switch"

export { Switch }

