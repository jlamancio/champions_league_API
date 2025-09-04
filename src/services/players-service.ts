import * as PlayerReposytory from "../repositories/players-repository";
import { findPlayerById } from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {

    const data = await PlayerReposytory.findAllPlayers();

    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    }
    else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    // pedir para o repositorio de dados               
    const data = await findPlayerById(id);

    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    }
    else {
        response = await HttpResponse.noContent();
    }

    return response;
};