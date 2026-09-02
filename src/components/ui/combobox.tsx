"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { ChevronsUpDown, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import * as PopoverPrimitive from "@radix-ui/react-popover"

interface ComboboxItemType {
  value: string
  label: string
  icon?: React.ReactNode
}

interface ComboboxContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  selectedItem?: ComboboxItemType
  setSelectedItem: (item: ComboboxItemType | undefined) => void
  items: ComboboxItemType[]
  value?: string
  onValueChange?: (value: string) => void
}

const ComboboxContext = React.createContext<ComboboxContextValue | null>(null)

function useComboboxContext() {
  const context = React.useContext(ComboboxContext)
  if (!context) {
    throw new Error("Combobox components must be used within a Combobox")
  }
  return context
}

export interface ComboboxProps {
  id?: string
  items: ComboboxItemType[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

export function Combobox({
  items,
  value: valueProp,
  defaultValue,
  onValueChange,
  children,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const value = valueProp !== undefined ? valueProp : internalValue

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      setInternalValue(newValue)
      onValueChange?.(newValue)
      setOpen(false)
    },
    [onValueChange]
  )

  const selectedItem = React.useMemo(
    () => items.find((item) => item.value === value),
    [items, value]
  )

  return (
    <ComboboxContext.Provider
      value={{
        open,
        setOpen,
        selectedItem,
        setSelectedItem: (item) => handleValueChange(item?.value || ""),
        items,
        value,
        onValueChange: handleValueChange,
      }}
    >
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        {children}
      </PopoverPrimitive.Root>
    </ComboboxContext.Provider>
  )
}

export interface ComboboxInputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string
  id?: string
}

export const ComboboxInput = React.forwardRef<
  HTMLButtonElement,
  ComboboxInputProps
>(({ className, placeholder = "Select option...", id, ...props }, ref) => {
  const { open, selectedItem } = useComboboxContext()

  return (
    <PopoverPrimitive.Trigger asChild>
      <button
        id={id}
        ref={ref}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls="combobox-popover-content"
        className={cn(
          "flex h-12 w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedItem ? (
            <>
              {selectedItem.icon && (
                <span className="shrink-0 text-emerald-400 [&>svg]:size-4">
                  {selectedItem.icon}
                </span>
              )}
              <span className="text-slate-100">{selectedItem.label}</span>
            </>
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-slate-400 opacity-70" />
      </button>
    </PopoverPrimitive.Trigger>
  )
})
ComboboxInput.displayName = "ComboboxInput"

export const ComboboxContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, align = "start", sideOffset = 6, ...props }, ref) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        id="combobox-popover-content"
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-[var(--radix-popover-trigger-width)] min-w-[8rem] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/95 p-1 text-slate-100 shadow-xl backdrop-blur-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        <CommandPrimitive className="flex flex-col overflow-hidden">
          {children}
        </CommandPrimitive>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})
ComboboxContent.displayName = "ComboboxContent"

export const ComboboxList = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>, "children"> & {
    children: (item: ComboboxItemType) => React.ReactNode
  }
>(({ className, children, ...props }, ref) => {
  const { items } = useComboboxContext()

  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn("max-h-60 overflow-y-auto p-1 space-y-1", className)}
      {...props}
    >
      {items.map((item) => children(item))}
    </CommandPrimitive.List>
  )
})
ComboboxList.displayName = "ComboboxList"

export interface ComboboxItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {
  value: string
}

export const ComboboxItem = React.forwardRef<
  HTMLDivElement,
  ComboboxItemProps
>(({ className, children, value: itemValue, onSelect, ...props }, ref) => {
  const { value, onValueChange } = useComboboxContext()
  const isSelected = value === itemValue

  return (
    <CommandPrimitive.Item
      ref={ref}
      value={itemValue}
      onSelect={(currentValue) => {
        onValueChange?.(currentValue)
        onSelect?.(currentValue)
      }}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-xs sm:text-sm outline-none transition-colors data-[disabled=true]:pointer-events-none data-[selected=true]:bg-slate-800 data-[selected=true]:text-slate-100 hover:bg-slate-800 hover:text-slate-100 text-slate-300",
        isSelected && "bg-emerald-500/10 text-emerald-400 font-medium",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 flex-1">
        {children}
      </span>
      {isSelected && (
        <Check className="h-4 w-4 text-emerald-400 ml-auto shrink-0" />
      )}
    </CommandPrimitive.Item>
  )
})
ComboboxItem.displayName = "ComboboxItem"

export const ComboboxEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, children = "No results found.", ...props }, ref) => {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn("py-4 text-center text-xs text-slate-400", className)}
      {...props}
    >
      {children}
    </CommandPrimitive.Empty>
  )
})
ComboboxEmpty.displayName = "ComboboxEmpty"
