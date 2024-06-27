import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DispatchServiceBase } from "./base/dispatch.service.base";

@Injectable()
export class DispatchService extends DispatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
