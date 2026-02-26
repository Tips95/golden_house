/**
 * Единый источник контактных данных. Использовать везде вместо дублирования.
 */
export const CONTACT_PHONE = '+79281958885'
export const CONTACT_WHATSAPP = '+79281958885'
export const CONTACT_EMAIL = 'Golden.House.Services@mail.ru'
export const CONTACT_ADDRESS = 'ЧР г.Грозный, ул. Авторханова 29'
export const CONTACT_WORK_HOURS = 'Пн-Вс: 9:00–20:00'
export const CONTACT_WORK_HOURS_LONG = 'Понедельник - Воскресенье: 9:00 - 20:00'

export const CONTACTS = {
  phone: CONTACT_PHONE,
  whatsapp: CONTACT_WHATSAPP,
  email: CONTACT_EMAIL,
  address: CONTACT_ADDRESS,
  workHours: CONTACT_WORK_HOURS,
  workHoursLong: CONTACT_WORK_HOURS_LONG,
} as const
