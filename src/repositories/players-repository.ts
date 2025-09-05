import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [

   { id: 1, name: "Messi" },
   { id: 2, name: "Ronaldo" },
   { id: 3, name: "Neymar" },
   { id: 4, name: "Mbappe" },
   { id: 5, name: "Lewandowski" },

]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
   return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
   return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  return database.push(player); 
};