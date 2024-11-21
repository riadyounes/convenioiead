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
          src="https://metabase-tra.fly.dev/public/dashboard/40dfcdf1-9875-4787-ae4d-e960a309d42d"
          className="h-screen w-full"
        />
      </div>
    </div>
  )
}
