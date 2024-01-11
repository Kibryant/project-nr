import { Check } from 'lucide-react'

const MyCheckIcon = () => {
  return (
    <div className="rounded-full w-6 flex justify-center items-center h-6 bg-primary/25 relative">
      <Check className="text-primary absolute -right-1 -top-1" />
    </div>
  )
}

export { MyCheckIcon }
