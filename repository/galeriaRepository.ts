import mongoose from "mongoose";
import { Fotos } from "../models/fotos";
import { Galeria } from "../models/galeria";

const GaleriaSchema = new mongoose.Schema<Galeria>({
  titulo: {String},
  texto: {String},
  dataPublicacao: {String},
  fotos: [Array<Fotos>()],
  ativo: {Boolean}
})

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema);