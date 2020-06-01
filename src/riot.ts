import { Summoner } from './summoner/summoner.ts';

class Riot{
    private apiKey : string;
    public summoner: Summoner;
    constructor(_apiKey: string){
        this.apiKey = _apiKey;
        this.summoner = new Summoner(this.apiKey);
    }
}

export { Riot };