import { ClientFactory, getClientFactory, OrdinarObjectReflection } from "typedapi-client-browser"
export interface Api {
    users: {
        checkEmail(email: string): Promise<boolean>
        checkUsername(username: string): Promise<boolean>
        current(): Promise<{ email: string, id: number, username: string }>
        passwordForgot(email: string): Promise<boolean>
        register(data: { email: string, username: string }): Promise<boolean>
    }
    helloWorld(name: string): Promise<string>
}
const reflection: OrdinarObjectReflection = {
    "type": "Object",
    "properties": {
        "users": {
            "type": "Object",
            "properties": {},
            "methods": {
                "checkEmail": {
                    "parameters": [
                        {
                            "type": "string",
                            "optional": false
                        }
                    ],
                    "response": {
                        "type": "boolean"
                    }
                },
                "checkUsername": {
                    "parameters": [
                        {
                            "type": "string",
                            "optional": false
                        }
                    ],
                    "response": {
                        "type": "boolean"
                    }
                },
                "current": {
                    "parameters": [],
                    "response": {
                        "type": "object",
                        "properties": {
                            "email": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "username": {
                                "type": "string"
                            }
                        }
                    },
                    "passApiUserId": true
                },
                "passwordForgot": {
                    "parameters": [
                        {
                            "type": "string",
                            "optional": false
                        }
                    ],
                    "response": {
                        "type": "boolean"
                    }
                },
                "register": {
                    "parameters": [
                        {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                }
                            },
                            "optional": false
                        }
                    ],
                    "response": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "methods": {
        "helloWorld": {
            "parameters": [
                {
                    "type": "string",
                    "optional": false
                }
            ],
            "response": {
                "type": "string"
            }
        }
    }
}
export const clientFactory: ClientFactory<Api> = getClientFactory(reflection)