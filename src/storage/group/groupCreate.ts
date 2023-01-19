import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getAllGroups } from "./getAllGroups";

export async function groupCreate(newgroup: string) {
  try {
    const storedGroups = await getAllGroups();

    const groupAlreadyExists = storedGroups.includes(newgroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome!");
    }

    const group = JSON.stringify([...storedGroups, newgroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, group);
  } catch (error) {
    throw error;
  }
}
