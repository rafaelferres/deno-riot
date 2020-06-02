
# Deno-Riot
League of legends api wrapper

# Simple example
LOL:
```js
import  {  Riot,  Region }  from  'https://deno.land/x/deno_riot/mod.ts';

const riot  =  new  Riot("API_KEY");

riot.summoner.getSummonerByName("Plankson",  Region.BR1).then((data)  =>  {
	console.log(data);
});
```

[More examples](https://github.com/rafaelferres/deno-riot/blob/master/test.ts)

# Endpoints 
Everything should be in the same order as in the official docs.
## CLASH
- [x] `Get players by summoner id`
- [x] `Get team`
- [x] `Get tournaments`
- [x] `Get tournaments by team id`
- [x] `Get tournament by id`
## CHAMPION-MASTERY-V4
- [x] `Get all champion mastery entries sorted by number of champion points descending.`
- [x] `Get a champion mastery by player ID and champion ID.`
- [x] `Get a player's total champion mastery score, which is the sum of individual champion mastery levels.`
## CHAMPION-V3
- [x] `Retrieve all champions.`
- [x] `Retrieve champion by ID.`
## MATCH-V4
- [ ] `Get matches id by tournament code`
- [ ] `Get match by id`
- [ ] `Get match by tournament code`
- [ ] `Get matches by summoner id`
- [ ] `Get match timeline by id`
## LEAGUE-V4
- [x] `Get the challenger league for given queue.`
- [x] `Get league entries in all queues for a given summoner ID.`
- [x] `Get all the league entries.`
- [x] `Get the grandmaster league of a specific queue.`
- [x] `Get league with given ID, including inactive entries.`
- [x] `Get the master league for given queue.`

## LEAGUE EXP

 - [x] `Get all the league entries`

## LOL-STATUS-V3
- [x] `Get League of Legends status for the given shard.`
## SPECTATOR-V4
- [x] `Get current game information for the given summoner ID.`
- [x] `Get list of featured games.`
## SUMMONER-V4
- [x] `Get a summoner by account ID.`
- [x] `Get a summoner by summoner name.`
- [x] `Get a summoner by PUUID.`
- [x] `Get a summoner by summoner ID.`
## TOURNAMENT-STUB-V4
- [ ] `Create a mock tournament code for the given tournament.`
- [ ] `Gets a mock list of lobby events by tournament code.`
- [ ] `Creates a mock tournament provider and returns its ID.`
- [ ] `Creates a mock tournament and returns its ID.`
## TOURNAMENT-V4
- [ ] `Create a tournament code for the given tournament.`
- [ ] `Returns the tournament code DTO associated with a tournament code string.`
- [ ] `Update the pick type, map, spectator type, or allowed summoners for a code.`
- [ ] `Gets a list of lobby events by tournament code.`
- [ ] `Creates a tournament provider and returns its ID.`
- [ ] `Creates a tournament and returns its ID.`

# TFT Endpoints
## TFT-SUMMONER-V1
- [ ] `Get a summoner by account ID.`
- [ ] `Get a summoner by summoner name.`
- [ ] `Get a summoner by PUUID.`
- [ ] `Get a summoner by summoner ID.`
## TFT-MATCH-V1
- [ ] `Get match list by summoner PUUID.`
- [ ] `Get match list details.`
## TFT-LEAGUE-V1
- [ ] `Get the challenger league for given queue.`
- [ ] `Get league entries in all queues for a given summoner ID.`
- [ ] `Get all the league entries.`
- [ ] `Get league with given ID, including inactive entries.`
- [ ] `Get the master league for given queue.`
