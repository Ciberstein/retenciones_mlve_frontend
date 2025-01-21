import { InvoicesTable } from "./partials/InvoicesTable"

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 px-4 lg:p-0">
      <InvoicesTable title="Resumen de facturas" />
    </div>
  )
}
