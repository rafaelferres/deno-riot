import { Region, Queue, Tier, Division } from '../constants.ts';

class League{

    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getChallangerLeagueByQueue(queue: Queue, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/${queue}`;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getLeagueBySummonerId(encryptedSummonerId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getAllLeagueEntries(queue: Queue, tier: Tier, division: Division, region: Region, page?: number){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/entries/${queue}/${tier}/${division}`;
        _url = page ? _url + `?page=${page}` : _url;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getGrandmasterLeagueByQueue(queue: Queue, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/${queue}`;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getLeagueById(leagueId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/leagues/${leagueId}`;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getMasterLeagueByQueue(queue: Queue, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/league/v4/masterleagues/by-queue/${queue}`;
        let _options = {
            method: "GET",
            headers: {
                "X-Riot-Token": this.apiKey,
            },
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    private async handleResponse(response: Response){
        return response.ok ? response.json().then((json) => {
            return json;
        }) : response.json().then((json) =>{
            return Error(`${response.status} : ${json.status.message}`);
        });
        ;
    }

    private async errorService(error: any){
        return Error(error);
    }
}

export { League };