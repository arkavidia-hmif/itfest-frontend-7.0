export function isValidEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isValidString = (string: string | null, max: number): boolean =>
  String(string) !== null &&
  String(string).length <= max &&
  String(string).length > 0;

export const isValidName = (string: string | null): boolean => {
  if (!string) return false;
  const re = /^(?:[A-Za-z0-9 ]*)$/;
  return re.test(string);
};

export const isValidDate = (date: string | null): boolean => {
  if (String(date).length === 0 || date === null) return false;
  const element = String(date).split("-");
  return parseInt(element[0]) < 2017;
};

export const isValidPhone = (phone: string | null): boolean => {
  if (!phone) return false;
  const re = /^\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}$/;
  return re.test(phone);
};


export const isEmpty = (string: string | null): boolean =>
  string !== null && String(string).length === 0;