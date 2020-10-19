import { clientFactory } from "./apiDeclaration"
export const client = clientFactory({
    websocketUrl: "ws://localhost:8891",
    logging: true    
})
export const api = client.api()