import { RequestHandler } from "express";
import { appRouter } from "@arunvaradharajalu/common.app-router";
import {
	MetadataKeys,
	RouteMethods
} from "./types";


function controller(routePrefix: string) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return function (target: any) {
		const router = appRouter;

		for (const key in target.prototype) {
			const routeHandler = target.prototype[key];
			const path = Reflect
				.getMetadata(MetadataKeys.Path, target.prototype, key);
			const method: RouteMethods = Reflect
				.getMetadata(MetadataKeys.Method, target.prototype, key);
			const middlewares: RequestHandler[] = Reflect
				.getMetadata(
					MetadataKeys.Middleware,
					target.prototype, key
				) || [];

			if (path)
				router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
		}
	};
}

export {
	controller as Controller
};