import { Prisma } from '@prisma/client'

export class Contact implements Prisma.ContactCreateInput {
  readonly id?: string
  name: string
  zipCode: string
  street: string
  complement: string
  district: string
  locality: string
  state: string
  createdAt?: Date
  updated?: Date | null
  isActive?: boolean
  telephone: string
  email: string
  customers?: Prisma.ContactToCustomerCreateNestedManyWithoutContactInput
}
