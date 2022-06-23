import { cleanEnv, str, port } from "envalid";

export default function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({ choices: ["development", "production"] }),
        MONGO_PASSWORD: str(),
        MONGO_HOST: str(),
        MONGO_DBNAME: str(),
        MONGO_USER: str(),
        PORT: port({ default: 3000 }),
    });
}
