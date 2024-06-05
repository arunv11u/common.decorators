/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
import { MetadataKeys } from "./types";

function use(middleware: RequestHandler) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return function (target: any, key: string, desc: PropertyDescriptor) {
		const middlewares = Reflect.getMetadata(
			MetadataKeys.Middleware,
			target,
			key
		) || [];

		Reflect.defineMetadata(
			MetadataKeys.Middleware,
			[middleware, ...middlewares],
			target,
			key
		);
	};
}

export {
	use as Use
};