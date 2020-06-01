import { Region } from '../constants.ts';

class Summoner {
    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public byName(summonerName: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
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

    public byAccountId(encryptedAccountId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-account/${encryptedAccountId}`;
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

    public byPuuid(encryptedPUUID: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`;
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

    public byEncryptedSummonerId(encryptedSummonerId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/${encryptedSummonerId}`;
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



export { Summoner };