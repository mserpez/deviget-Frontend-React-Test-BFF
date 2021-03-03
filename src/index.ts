import os from "os";
import cluster from 'cluster';

import customEnv from 'custom-env';

import Server from './server';

// Set env variables based on env files
customEnv.env(true);

// Parallelism
const CPUS = os.cpus();

if (cluster.isMaster) {
    CPUS.forEach(function () {
        cluster.fork()
    });
    cluster.on("listening", function (worker) {
        console.log("Cluster %d connected", worker.process.pid);
    });
    cluster.on("disconnect", function (worker) {
        console.log("Cluster %d disconnected", worker.process.pid);
    });
    cluster.on("exit", function (worker) {
        console.log("Cluster %d is dead", worker.process.pid);
        // Ensuring a new cluster will start if an old one dies
        cluster.fork();
    });
} else {
    // Define the port to use
    const PORT: number = Number(process.env.APP_PORT) || 4500;
    const HOST: string = process.env.APP_HOST || 'localhost';

    // Create a new express application instance
    const server = Server.init(PORT, HOST);

    server.start(() => {
        // eslint-disable-next-line no-console
        console.log(`🚀 Server is listening http://${HOST}:${PORT}`);
        console.log(`🚀 Docs available http://${HOST}:${PORT}/api-docs`);
    });


}
