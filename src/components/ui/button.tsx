import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outline2:
          "border border-input bg-background",
        outline3:
          "border border-input bg-background rounded-full",
        transparent:
          "border border-input bg-transparent dark:hover:bg-neutral-800/80 hover:bg-neutral-200/80 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        neutral:
          "dark:bg-neutral-800 bg-neutral-200 text-secondary-foreground dark:hover:bg-neutral-800/80 hover:bg-neutral-200/80",
        zinc:
          "dark:bg-neutral-800 bg-white text-secondary-foreground dark:hover:bg-neutral-800/80 hover:bg-neutral-200/90",
        neutral2:
          "dark:bg-neutral-700 bg-neutral-300 text-secondary-foreground dark:hover:bg-neutral-700/80 hover:bg-neutral-400/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghost2: "dark:hover:bg-accent hover:bg-neutral-200 hover:text-accent-foreground",
        ghost3: "dark:hover:bg-transparent hover:bg-transparent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        invisible: "hover:text-accent-foreground",
        invisible2: "hover:text-current",
        invisible3: "hover:bg-accent hover:text-accent-foreground dark:bg-neutral-900 bg-neutral-100",
        expandIcon:
          "group relative text-primary-foreground bg-primary hover:bg-primary/90",
        ringHover:
          "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        shine:
          "text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",
        gooeyRight:
          "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-neutral-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",
        gooeyLeftDark:
          "text-current border relative bg-neutral-50 dark:bg-neutral-950 z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-neutral-300 dark:from-neutral-600 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        gooeyLeftDark2:
          "text-current border relative bg-neutral-50 dark:bg-neutral-950 z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-neutral-200 dark:from-neutral-700 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        gooeyLeftCurrent:
          "text-neutral-50 dark:text-neutral-950 border relative bg-neutral-950 dark:bg-neutral-50 z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-neutral-600 dark:from-neutral-300 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        gooeyLeft:
          "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-neutral-600 dark:from-neutral-300 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        gooeyLeft2:
          " relative bg-transparent z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l dark:from-neutral-700 from-neutral-200 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        gooeyLeftNeutral:
          " relative bg-neutral-200 dark:bg-neutral-800 z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l dark:from-neutral-700 from-neutral-300 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        linkHover1:
          "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        linkHover2:
          "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        icon2: "h-8 w-8",
        icon3: "h-7 w-7",
        icon4: "h-3 w-3",
        icon5: "h-8 px-2 py-2",
        slim: "h-3.5 w-3.5",
        mini: "h-4 rounded-md px-1"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
