import { ButtonBack } from './button-back'

export default function Relatorio() {
  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-4 py-4">
      <div className="flex items-center gap-2">
        <ButtonBack />
        <h1 className="text-2xl font-bold">Relatório</h1>
      </div>

      <div className="w-full border">
        <iframe
          src="https://metabase-tra.duckdns.org/public/dashboard/eff0c762-0441-4a5b-95c4-b0b982624627?data=&endere%25C3%25A7o="
          className="h-screen w-full"
        />
      </div>
    </div>
  )
}
