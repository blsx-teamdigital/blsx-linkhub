export const toPhoneHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`

export const toEmailHref = (email) => `mailto:${email}`