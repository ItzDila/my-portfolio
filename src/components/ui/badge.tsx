import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-xl border px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase whitespace-nowrap transition-all duration-300 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [clip-path:polygon(0_0,calc(100%-9px)_0,100%_50%,calc(100%-9px)_100%,0_100%,9px_50%)] [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-white/30 bg-linear-to-r from-white/14 via-white/10 to-white/4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] [a&]:hover:from-white/20 [a&]:hover:to-white/10",
        secondary:
          "border-sky-300/40 bg-linear-to-r from-sky-500/20 to-cyan-300/12 text-sky-100 [a&]:hover:from-sky-500/30 [a&]:hover:to-cyan-300/20",
        destructive:
          "border-red-400/45 bg-linear-to-r from-red-500/24 to-rose-500/18 text-red-100 [a&]:hover:from-red-500/36 [a&]:hover:to-rose-500/28",
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
