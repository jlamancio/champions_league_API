import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [

   { id: 1, name: "Messi" },
   { id: 2, name: "Ronaldo" },
   { id: 3, name: "Neymar" },
   { id: 4, name: "Mbappe" },
   { id: 5, name: "Lewandowski" },
   { id: 6, name: "Kane" },
   { id: 7, name: "Haaland" },
   { id: 8, name: "Modric" },
   { id: 9, name: "De Bruyne" },
   { id: 10, name: "Salah" }

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

export const deleteOnePlayer = async (id: number) => {
   const index = database.findIndex((player) => player.id === id)
   if (index !== -1) {
      console.log(index)
      database.splice(index, 1);
   };
   return database;
};