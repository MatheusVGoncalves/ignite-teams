import { getAllPlayersByGroup } from "./getAllPlayersByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function getAllPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getAllPlayersByGroup(group);

    const players: PlayerStorageDTO[] = storage.filter(
      (player) => player.team === team
    );

    return players;
  } catch (error) {
    throw error;
  }
}
