import { Region } from '../constants.ts';

class Spectator{
    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getCurrentGameByEncryptedSummonerId(encryptedSummonerId: string, region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${encryptedSummonerId}`;
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

    public getFeaturedGames(region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/spectator/v4/featured-games`;
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

export { Spectator };