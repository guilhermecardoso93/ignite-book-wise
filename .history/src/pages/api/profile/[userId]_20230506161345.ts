import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"
import { buildNextAuthOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if(req.method !== "GET") return res.status(405).end()

  const userId = String(req.query.userId)

  const profile = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true
                }
              }
            }
          }
        },
        orderBy: {
          created_at: 'desc'
        }
      }
    }
  })

  const readPages = profile?.ratings.reduce((acc, rating ) => acc + rating.book.total_pages, 0)
}