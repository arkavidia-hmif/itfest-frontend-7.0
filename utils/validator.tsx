import { FileTaskParam } from "interfaces/task";

export function isValidEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isValidString = (string: string | null, max: number): boolean =>
  String(string) !== null &&
  String(string).length <= max &&
  String(string).length > 0;

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

export const isValidFile = (
  file: File,
  widget: FileTaskParam
): Promise<boolean> | boolean => {
  const format = `.${file.type.split("/").pop()}`;
  const extensions = widget.fileExtension;
  if (format && !extensions.includes(format)) {
    const fileExtensionText = extensions?.reduce(
      (accumulator, extension, i) =>
        `${accumulator}${i === 0 ? "" : ", "}${extension}`
    );
    throw new Error(`File hanya boleh mengandung format ${fileExtensionText}.`);
  }
  const size = Math.ceil(file.size / 1024 / 1000);
  const sizeConstraint = parseInt(widget.maxFileSize.split(" ")[0]);
  if (size > sizeConstraint) {
    throw new Error(`File tidak boleh melebihi size ${widget.maxFileSize}.`);
  }
  return true;
};