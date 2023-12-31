import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  ContactToCustomer: any
  async onModuleInit() {
    try {
      await this.$connect()
    } catch (error) {
      console.error('Error connecting to PrismaClient:', error)
      throw error
    }
  }
}
