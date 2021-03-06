import { Summoner } from './summoner/summoner.ts';
import { Spectator } from './spectator/spectator.ts';
import { Ranked } from './ranked/ranked.ts';
import { Status } from './status/status.ts';
import { Champion } from './champion/champion.ts';
import { ChampionMastery } from './champion/championMastery.ts';
import { Exp } from './exp/exp.ts';
import { Clash } from './clash/clash.ts';
import { League } from './league/league.ts';
import { Match } from './match/match.ts';

class Riot{
    private apiKey : string;
    public summoner: Summoner;
    public spectator: Spectator
    public ranked: Ranked;
    public status: Status;
    public champion: Champion;
    public championMastery: ChampionMastery;
    public exp: Exp;
    public clash: Clash;
    public league: League;
    public match: Match;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
        this.summoner = new Summoner(this.apiKey);
        this.spectator = new Spectator(this.apiKey);
        this.ranked = new Ranked(this.apiKey);
        this.status = new Status(this.apiKey);
        this.champion = new Champion(this.apiKey);
        this.championMastery = new ChampionMastery(this.apiKey);
        this.exp = new Exp(this.apiKey);
        this.clash = new Clash(this.apiKey);
        this.league = new League(this.apiKey);
        this.match = new Match(this.apiKey);
    }
}

export { Riot };