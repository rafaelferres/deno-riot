import { Region } from "../constants.ts";

class Match {

    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getMatchIdByTournamentCode(tournamentCode: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/match/v4/matches/by-tournament-code/${tournamentCode}/ids`;
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

    public getMatchById(matchId: number, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId}`;
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

    public getMatchByTournamentCode(matchId: number, tournamentCode: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId}/by-tournament-code/${tournamentCode}`;
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

    public getMatchesBySummonerId(encryptedAccountId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountId}`;
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

    public getMatchTimelineById(matchId: number, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/match/v4/timelines/by-match/${matchId}`;
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

export { Match };