"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>{children}</div>
}

export function BentoGridItem({
  className,
  title,
  description,
  children,
}: {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl border border-border bg-black p-8 hover:shadow-xl transition-all duration-300",
        className,
      )}
    >
      {children}
      {title && <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>}
      {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
    </div>
  )
}
