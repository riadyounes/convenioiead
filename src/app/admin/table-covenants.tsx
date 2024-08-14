'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'

export interface Covenant {
  cnpj: string
  name: string
  slug: string
}

export function TableCovenants() {
  const [covenants, setCovenants] = useState<Covenant[]>()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const getData = async () => {
    const response = await fetch('/api/convenios', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getData()
        setCovenants(data.convenios)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = covenants?.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil((covenants?.length || 0) / itemsPerPage)

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="w-full rounded-lg border p-2">
      <Table>
        <TableCaption>Lista de convênios</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CNPJ</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems &&
            currentItems.map((covenant) => {
              return (
                <TableRow key={covenant.cnpj}>
                  <TableCell className="font-medium">{covenant.name}</TableCell>
                  <TableCell>{covenant.cnpj}</TableCell>
                  <TableCell className="text-right">Ações em breve</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
      <Pagination className="mt-2 flex items-center justify-end">
        <PaginationContent>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem
              key={index + 1}
              onClick={() => handleClick(index + 1)}
              className={`mx-1 rounded border px-3 py-1 ${
                currentPage === index + 1
                  ? 'cursor-pointer bg-zinc-800 text-white'
                  : 'cursor-pointer bg-white hover:bg-zinc-200'
              }`}
            >
              {index + 1}
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
