import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { getRouterManifest } from "@tanstack/react-start/router-manifest";

export default createStartHandler({
    createRouter: () => import("../src/router").then((d) => d.router),
    getRouterManifest,
})(defaultStreamHandler);