import { LeadboardRegion } from '../constants.ts';

class Ranked{
    private apiKey: string;

    constructor(_apiKey: string){
        this.apiKey = _apiKey;
    }

    public getLeaderboards(region: LeadboardRegion){
        let _url = `https://${region}.api.riotgames.com/lor/ranked/v1/leaderboards`;
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

export { Ranked };