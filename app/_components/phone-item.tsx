"use client"

import { SmartphoneIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "./ui/button"

interface PhoneItemProps {
  phone: string
}

// TODO: add a sucessful tooltip when user copy the pone

export function PhoneItem({ phone }: PhoneItemProps) {
  function handleCopyPhoneClick(phone: string) {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado para a área de transferência!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}
