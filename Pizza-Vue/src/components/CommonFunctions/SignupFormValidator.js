import validator from "validator"

export default {
  validate(form, requiredFields) {

    console.log(requiredFields)

    if (form.email && !validator.isEmail(form.email) && "email" in requiredFields)
      form.feedback = "E-mail incorrect!"

    if (!form.password /* && form.password.length < 6 */ && "password" in requiredFields)
      form.feedback = "Password length must be at least 6!"

    if (form.password != form.confirmPassword && "password" in requiredFields && "confirmPassword" in requiredFields)
      form.feedback = "The passwords do not match!"

    if (form.cardNumber && !validator.isCreditCard(form.cardNumber) && "cardNumber" in requiredFields)
      form.feedback = "Invalid card number, or try using an other card!"

    if ((parseInt(form.month) < 1 || parseInt(form.month) > 12) && "month" in requiredFields)
      form.feedback = "Invalid month!"

    if (
      (
        parseInt(form.year) < 1 ||
        parseInt(form.year) > 99 ||
        parseInt(form.year) < new Date().getFullYear() % 100
      ) &&
      "year" in requiredFields
    )
      form.feedback = "Invalid year!"

    if ((parseInt(form.cvc2) < 100 || parseInt(form.cvc2) > 999) && "cvc2" in requiredFields)
      form.feedback = "Invalid CVV2/CVC2 number!"

    if (

      (!form.email && "form" in requiredFields) ||
      (!form.password && "password" in requiredFields) ||
      (!form.confirmPassword && "confirmPassword" in requiredFields) ||
      (!form.firstName && "firstName" in requiredFields) ||
      (!form.lastName && "lastName" in requiredFields) ||
      (!form.cardNumber && "cardNumber" in requiredFields) ||
      (!form.address1 && "address1" in requiredFields) ||
      (!form.month && "month" in requiredFields) ||
      (!form.year && "year" in requiredFields) ||
      (!form.cvc2 && "cvc2" in requiredFields)

    )
      form.feedback = "All required fields must be filled!"

    return {
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      firstName: form.firstName,
      lastName: form.lastName,
      cardNumber: form.cardNumber,
      address1: form.address1,
      month: form.month,
      year: form.year,
      cvc2: form.cvc2,
      feedback: form.feedback
    }
  }
}
