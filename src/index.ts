import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validateEnv";
import App from "./app";
import ThingNetwork from "@/network/thing.network";

validateEnv();

const app = new App([new ThingNetwork()], Number(process.env.PORT));

app.listen();
