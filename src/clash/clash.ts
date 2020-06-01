import { Region } from '../constants.ts';

class Clash {
    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getPlayer(summonerId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/clash/v1/players/by-summoner/${summonerId}`;
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

    public getTeamById(teamId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/clash/v1/teams/${teamId}`;
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

    public getAllTournaments(region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/clash/v1/tournaments`;
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

    public getTournamentsByTeamId(teamId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/clash/v1/tournaments/by-team/${teamId}`;
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

    public getTournamentById(tournamentId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/clash/v1/tournaments/${tournamentId}`;
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

export { Clash } ;