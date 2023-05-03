import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { buildNextAuthOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if(req.method !== "GET") return res.status(405).end()

  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId
        }
      }
    },
    include: {
      ratings: true
    }
  })
    
  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true
    }
  })

  let userBooksIds: string[] = []

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

  if(session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session.user.id)
          }
        }
      }
    })
  }
}