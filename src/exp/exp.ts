import { Region, Queue, Tier, Division } from '../constants.ts';
class Exp {

    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getAllLeague(queue: Queue, tier: Tier, division: Division, page?: number){
        let _url = `https://br1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}`;
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

export { Exp };