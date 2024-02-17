import { AxiosError } from "axios";
import { ZodError } from "zod";

const statusCode: Record<number, string> = {
  404: "No encontrado",
  401: "No autorizado",
};

/* Si no es de validación de zod ni de respuesta de axios entonces de vuelve false algo poco probable */
export function getMsgErrorResponse(error: ZodError | AxiosError) {
  if (error instanceof ZodError) {
    return error.issues[0].message;
  }
  if (error instanceof AxiosError) {
    if (error.response !== undefined) {
      //TODO: Tipar bien 
      return Object.values<any>((error.response as any).data.errores)[0][0];
    }
    const errorStatus = (error.response as any).status;

    return statusCode[errorStatus] || "Ha ocurrido un error";
  }
  return false;
}
