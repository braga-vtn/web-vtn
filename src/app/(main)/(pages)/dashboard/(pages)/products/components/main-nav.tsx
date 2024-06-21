import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"

      >
        Vistune
      </Link>
      <Link
        href="/dashboard/clients"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Clientes
      </Link>
      <Link
        href="/dashboard/products"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Catálogo
      </Link>
      <Link
        href="/dashboard/sales"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Vendas
      </Link>
      <Link
        href="/dashboard/traffic"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tráfego
      </Link>
      <Link
        href="/dashboard/social-midia"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Redes Sociais
      </Link>
    </nav>
  )
}
