import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-blue-200/35 bg-linear-to-r from-blue-500/30 via-indigo-500/25 to-blue-300/20 text-blue-50 shadow-[0_8px_30px_rgba(20,58,200,0.35)] [a&]:hover:brightness-110",
        secondary:
          "border-cyan-200/45 bg-linear-to-r from-cyan-500/28 to-sky-400/20 text-cyan-50 [a&]:hover:brightness-110",
        destructive:
          "border-red-300/45 bg-linear-to-r from-rose-500/35 to-red-500/24 text-red-100 [a&]:hover:brightness-110",
        outline:
          "border-border bg-background/60 text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "border-transparent bg-transparent text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "border-transparent bg-transparent p-0 text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
