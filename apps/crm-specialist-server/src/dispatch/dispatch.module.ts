import { Module } from "@nestjs/common";
import { DispatchModuleBase } from "./base/dispatch.module.base";
import { DispatchService } from "./dispatch.service";
import { DispatchController } from "./dispatch.controller";
import { DispatchResolver } from "./dispatch.resolver";

@Module({
  imports: [DispatchModuleBase],
  controllers: [DispatchController],
  providers: [DispatchService, DispatchResolver],
  exports: [DispatchService],
})
export class DispatchModule {}
