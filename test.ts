import { Riot, Region, LeadboardRegion, Languages, Queue, Tier, Division} from './mod.ts';

let riot = new Riot("XXX");

riot.summoner.getSummonerByName("Plankson", Region.BR1).then((data) => {
    console.log(data);
});

riot.summoner.getSummonerByAccountId("qaUljVmzA3WVJn8k6uztwFGyDwBWDmH5J2HA3wK2Xxw336A", Region.BR1).then((data) =>{
    console.log(data);
});

riot.summoner.getSummonerByPuuid("y-lJrZX8zV_-0guWmG1kCNd3b1doBu3avSC5s5c0xva5k8x8v5328qXoqCuJwb6ICgqhA__7d7od1A", Region.BR1).then((data) =>{
    console.log(data);
});

riot.summoner.getSummonerByEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.spectator.getCurrentGameByEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.spectator.getFeaturedGames(Region.BR1).then((data) => {
    console.log(data);
});

riot.ranked.getLeaderboards(LeadboardRegion.Americas).then((data) => {
    console.log(data);
});

riot.status.getShardData(Region.BR1).then((data) => {
    console.log(data);
});

riot.champion.getChampionRotations(Region.BR1).then((data) => {
    console.log(data);
});

riot.champion.getChampions(Languages.pt_BR).then((data) => {
    console.log(data);
});

riot.championMastery.getByEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.championMastery.getByEncryptedSummonerIdChampionId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", 141, Region.BR1).then((data) => {
    console.log(data);
});

riot.championMastery.getScoreByEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) =>{
    console.log(data);
});

riot.exp.getAllLeague(Queue.RankedSolo5x5, Tier.Gold, Division.III, Region.BR1).then((data) => {
    console.log(data);
});

riot.clash.getPlayer("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.clash.getAllTournaments(Region.BR1).then((data) => {
    console.log(data);
});

riot.clash.getTeamById("DqndknkqwNJKDX", Region.BR1).then((data) => {
    console.log(data);
});

riot.clash.getTournamentsByTeamId("oidqwd4q4dqw484", Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getChallangerLeagueByQueue(Queue.RankedSolo5x5, Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getLeagueBySummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getAllLeagueEntries(Queue.RankedSolo5x5, Tier.Diamond, Division.III, Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getGrandmasterLeagueByQueue(Queue.RankedSolo5x5, Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getLeagueById("qwdmDKWkdqkwjndkjqnk", Region.BR1).then((data) => {
    console.log(data);
});

riot.league.getMasterLeagueByQueue(Queue.RankedSolo5x5, Region.BR1).then((data) => {
    console.log(data);
});

riot.match.getMatchIdByTournamentCode("123456" , Region.BR1).then((data) => {
    console.log(data);
});

riot.match.getMatchById(123456, Region.BR1).then((data) => {
    console.log(data);
});

riot.match.getMatchByTournamentCode(123456, "123456", Region.BR1).then((data) => {
    console.log(data);
});

riot.match.getMatchesBySummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
})

riot.match.getMatchTimelineById(123456, Region.BR1).then((data) => {
    console.log(data);
})