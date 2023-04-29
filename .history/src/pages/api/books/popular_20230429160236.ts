import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if(req.method !== "GET") return res.status(405).end()

  const books = await prisma.book.findMany({
    orderBy:{
      ratings: {
        _count: 'desc'
      },
    },
    include: {
      ratings: true
    },
    take: 4
  })
  
  return res.json({ books })
}