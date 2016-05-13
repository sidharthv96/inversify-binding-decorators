/// <reference path="../interfaces/interfaces.d.ts" />

import { decorate } from "inversify";
import makeProvideDecorator from "../factory/provide_decorator_factory";

function autoProvide(kernel: inversify.IKernel, ...modules: any[]) {

    let provide = makeProvideDecorator(kernel);

    modules.forEach((module) => {
      Object.keys(module).forEach((key) => {
        let entity = module[key];
        let decorator = provide(entity);
        decorate(decorator, entity);
      });
    });

}

export default autoProvide;