function MensajeUsuario(codigo, mensaje, http) {
    this.mensaje = mensaje
    this.codigo = codigo
    this.http = http
 }

 // Exception
 const InvalidTypeException = new MensajeUsuario("InvalidBodyException", "Field must be string", 422)
 const InvalidTitleException = new MensajeUsuario("InvalidBodyException", "Title must be between 5 and 50 characters", 422)
 const InvalidDescriptionException = new MensajeUsuario("InvalidBodyException", "Description must be between 15 and 250 characters", 422)
 const NotFoundException = new MensajeUsuario("NotFoundException", "Resource not found", 422)
 const InvalidContentException = new MensajeUsuario("InvalidBodyException", "Must choose from one of these departments: book, movie", 422)

 const Forbiden = new MensajeUsuario("Forbiden", "ERROR", 403)

//Valid
const SuccessCreate = new MensajeUsuario("Success", "Created successfully", 200)
const SuccessUpdate = new MensajeUsuario("Success", "Updated successfully", 200)
const SuccessDelete = new MensajeUsuario("Success", "Deleted successfully", 200)



module.exports= {InvalidTypeException, InvalidTitleException, InvalidDescriptionException, InvalidContentException, Forbiden, SuccessCreate, SuccessUpdate, SuccessDelete, NotFoundException}
