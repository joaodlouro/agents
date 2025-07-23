import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  asChild?: boolean
}

const Label = forwardRef<ElementRef<'label'>, LabelProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label'

    return (
      <Comp
        className={cn(
          'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm',

          'cursor-not-allowed font-medium leading-none opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Label.displayName = 'Label'

export { Label }
