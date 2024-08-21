import { createApp } from "./app"

const startServer = async () => {
    const { app, port } = await createApp();

    app.listen(port, () => {
        console.log(`> Server running on PORT ${port}`);
    });
}

startServer();