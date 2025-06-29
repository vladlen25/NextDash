
import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

const spinnerVariants = cva('flex items-center justify-center', {
    variants: {
        show: { true: 'flex', false: 'hidden' },
    },
    defaultVariants: { show: true },
})

const loaderVariants = cva('animate-spin text-primary', {
    variants: {
        size: {
            small: 'h-12 w-12',
            medium: 'h-16 w-16',
            large: 'h-24 w-24',
        },
    },
    defaultVariants: { size: 'medium' },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
    className?: string
    children?: React.ReactNode
}

export function Spinner({ size, show, children, className }: SpinnerProps) {
    return (
        <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
            {children}
    </span>
    )
}
