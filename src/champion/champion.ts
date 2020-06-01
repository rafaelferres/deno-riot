
import { Region, Languages } from '../constants.ts';

class Champion{
    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getChampions(language: Languages){
        let _url = `http://ddragon.leagueoflegends.com/cdn/10.11.1/data/${language}/champion.json`;
        let _options = {
            method: "GET"
        };

        let res = fetch(_url, _options)
                    .then(this.handleResponse)
                    .catch(this.errorService);
        return res;
    }

    public getChampionRotations(region: Region){
        let _url = `https://${region}.api.riotgames.com/lol/platform/v3/champion-rotations`;
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

export { Champion };