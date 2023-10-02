import { api } from "./api";

export async function getSerie(title) {
    try {
        const resultado = await api.get(`/shows?q=${title}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}
