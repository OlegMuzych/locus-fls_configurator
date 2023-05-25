export const NO_ERROR = 0x00;
export const ERROR_FULL_EMPTY = 0x01;
export const ERROR_SHORT_CIRCUIT = 0x02;
export const ERROR_SIZE_TABLE = 0x03; // В таблице тарировки меньше двух строк и выбрана выдача объема
export const ERROR_VALUE_TABLE = 0x04; // В таблице тарировки не корректные данные (например: меньший объем соответвует более высокому уровню)
export const ERROR_UNDEFINED = 0x05; // пока не определенные коды ошибок