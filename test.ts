import { Riot, Region, LeadboardRegion, Languages, Queue, Tier, Division} from './mod.ts';

let riot = new Riot("RGAPI-7b205af6-82a4-4868-85dd-a330d7360db5");

/*
riot.summoner.byName("Plankson", Region.BR1).then((data) => {
    console.log(data);
});

riot.summoner.byAccountId("qaUljVmzA3WVJn8k6uztwFGyDwBWDmH5J2HA3wK2Xxw336A", Region.BR1).then((data) =>{
    console.log(data);
})

riot.summoner.byPuuid("y-lJrZX8zV_-0guWmG1kCNd3b1doBu3avSC5s5c0xva5k8x8v5328qXoqCuJwb6ICgqhA__7d7od1A", Region.BR1).then((data) =>{
    console.log(data);
})

riot.summoner.byEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.spectator.byEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.spectator.featuredGames(Region.BR1).then((data) => {
    console.log(data);
})

riot.ranked.leaderboards(LeadboardRegion.Americas).then((data) => {
    console.log(data);
})

riot.status.shardData(Region.BR1).then((data) => {
    console.log(data);
})

riot.champion.championRotations(Region.BR1).then((data) => {
    console.log(data);
});

riot.champion.champions(Languages.pt_BR).then((data) => {
    console.log(data);
});

riot.championMastery.byEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) => {
    console.log(data);
});

riot.championMastery.byEncryptedSummonerIdChampionId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", 141, Region.BR1).then((data) => {
    console.log(data);
});

riot.championMastery.scoreByEncryptedSummonerId("mMJZj2mbolYcL0NX1JJIM78V7irhTa92L77E1Vf2RHx3hA", Region.BR1).then((data) =>{
    console.log(data);
});*/

riot.exp.getAllLeague(Queue.RankedSolo5x5, Tier.Gold, Division.III).then((data) => {
    console.log(data);
})