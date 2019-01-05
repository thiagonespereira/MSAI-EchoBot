import { TurnContext } from "botbuilder";

export class EchoBot {
    async onTurn(context: TurnContext){
        if(context.activity.type === "message"){
            await context.sendActivity(`Você disse ${context.activity.text}`);
        } else {
            await context.sendActivity(`Evento de ${context.activity.type} detectado`);
        }
    }
}