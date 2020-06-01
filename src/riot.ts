import { Summoner } from './summoner/summoner.ts';
import { Spectator } from './spectator/spectator.ts';

class Riot{
    private apiKey : string;
    public summoner: Summoner;
    public spectator: Spectator
    constructor(_apiKey: string){
        this.apiKey = _apiKey;
        this.summoner = new Summoner(this.apiKey);
        this.spectator = new Spectator(this.apiKey);
    }
}

export { Riot };