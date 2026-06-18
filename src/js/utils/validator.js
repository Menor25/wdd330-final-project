export const validator = {
    isEmail: (email) => /\S+@\S+\.\S+/.test(email),
    isPhone: (phone) => /^\+[1-9]\d{1,14}$/.test(phone)
};
