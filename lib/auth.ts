import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from '@/lib/prisma'
import { lastLoginMethod } from "better-auth/plugins"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders:{
    github:{
      clientId:"Ov23liLCk0juuw84qUI2",
      clientSecret:"e40f132fafe7057ebba705717b94d84cd8a06ac6"
    }
  },
  plugins:[
    lastLoginMethod()
  ]
})