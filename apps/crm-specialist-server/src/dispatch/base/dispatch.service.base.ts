/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Dispatch as PrismaDispatch } from "@prisma/client";

export class DispatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DispatchCountArgs, "select">): Promise<number> {
    return this.prisma.dispatch.count(args);
  }

  async dispatches(
    args: Prisma.DispatchFindManyArgs
  ): Promise<PrismaDispatch[]> {
    return this.prisma.dispatch.findMany(args);
  }
  async dispatch(
    args: Prisma.DispatchFindUniqueArgs
  ): Promise<PrismaDispatch | null> {
    return this.prisma.dispatch.findUnique(args);
  }
  async createDispatch(
    args: Prisma.DispatchCreateArgs
  ): Promise<PrismaDispatch> {
    return this.prisma.dispatch.create(args);
  }
  async updateDispatch(
    args: Prisma.DispatchUpdateArgs
  ): Promise<PrismaDispatch> {
    return this.prisma.dispatch.update(args);
  }
  async deleteDispatch(
    args: Prisma.DispatchDeleteArgs
  ): Promise<PrismaDispatch> {
    return this.prisma.dispatch.delete(args);
  }
}