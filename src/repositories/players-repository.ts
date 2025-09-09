import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [

   {
      id: 1,
      name: "Messi",
      club: "PSG",
      nationality: "Argentina",
      position: "Forward",
      statistics: {
         Overall: 93,
         Pace: 92,
         Shooting: 91,
         Passing: 90,
         Dribbling: 95,
         Defending: 38,
         Physicality: 65,
      }
   },

   {
      id: 2,
      name: "Neymar",
      club: "PSG",
      nationality: "Brazil",
      position: "Forward",
      statistics: {
         Overall: 93,
         Pace: 92,
         Shooting: 91,
         Passing: 90,
         Dribbling: 95,
         Defending: 38,
         Physicality: 65,
      }
   },

   {
      id: 3,
      name: "Ronaldo",
      club: "Inter de Milão",
      nationality: "Brazil",
      position: "Forward",
      statistics: {
         Overall: 93,
         Pace: 92,
         Shooting: 91,
         Passing: 90,
         Dribbling: 95,
         Defending: 38,
         Physicality: 65,
      }
   },

   {
      id: 4,
      name: "Levandowski",
      club: "Barcelona",
      nationality: "Poland",
      position: "Forward",
      statistics: {
         Overall: 93,
         Pace: 92,
         Shooting: 91,
         Passing: 90,
         Dribbling: 95,
         Defending: 38,
         Physicality: 65,
      }
   },

];

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
      database.splice(index, 1);
      return true;
   };
   return false;
};

export const findAndModifyPlayer = 
async (id: number, statistics: StatisticsModel): Promise<StatisticsModel | undefined> => {

   const playerIndex = database.findIndex((player) => player.id === id);
   if (playerIndex !== -1) {
      database[playerIndex].statistics = statistics;
   }

   return database[playerIndex];
};