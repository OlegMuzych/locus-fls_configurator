export default {
    /*  win.js */
    "version":  "Версия",
    "sensor_is_connected": "Датчик подключен",
    "sensor_is_not_connected": "Датчик не подключен",
    "language_selection": "Выбор языка",
    "theme_selection": "Выбор темы",
    "font_size": "Размер шрфта",
    "auto_save_mode": "Автоматическое  сохранение настроек",
    "trademark": "Торговая марка: 'Иванов Инжиниринг'",
    "developer": "Разработчик: ООО 'Иванов Инжиниринг'",
    "program_version": 'Версия конфигуратора',
    "website": "www.locme.ru",
    "copyright": "© 2022",

    "reference": "О Программе", //view: "window", template: this
    "settings": "Настройки", //view: "window", template: this

    /* generalsettings.js */
    "choose": 'Выбрать',
    "apply": "Применить",

    "address_lls": 'Сетевой адрес',
    "min_level": "Минимальный уровень",
    "max_level": "Максимальный уровень",
    "period_of_data_issuance": "Период выдачи данныx, сек.",

    "fuel_type": "Тип топлива",
    "fuel_type_turned_off": "Выключена",
    "fuel_type_1": "АИ-95",
    "fuel_type_2": "АИ-92",
    "fuel_type_3": "АИ-80 (Лето)",
    "fuel_type_4": "АИ-80 (Зима)",
    "fuel_type_5": "ДТ (Лето)",
    "fuel_type_6": "ДТ (Зима)",
    "fuel_type_7": "Свои параметры",
    "coefficient_k1": "Коэффициент К1",
    "coefficient_k2": "Коэффициент К2",

    "baud_rate": "Скорость подключения",

    "automatic_data_output": "Автоматическая выдача данных",
    "automatic_data_output_turned_off": "Выключена",
    "automatic_data_output_binary": "Бинарная",
    "automatic_data_output_symbolic": "Символьная",


    "serial_number": "Серийный номер",

    "output_message_type": "Выходное сообщение",
    "output_message_type_is_level": "Уровень",
    "output_message_type_is_volume": "Объем",


    "temperature_compensation": "Температурная компенсация",

    /* centralmenu.js */
    "main_settings": "Основные настройки",
    "calibration": "Тарировка",
    "filtering": "Фильтрация",

    /* filteringsetting.js */
    "switch_filtering": "Фильтрация",
    "filtering_preset": "Степень фильтрации",

    "filtering_type": "Тип фильтрации",
    "filtering_type_turned_off": "Выключена",
    "filtering_type_averaging":  "Усреднение",
    "filtering_type_median": "Медиана",
    "filtering_type_adaptive" :"Адаптивный",

    "average_time": "Время усреднения (0...21) с",
    "median_length": "Длина медианы (0...7)",
    "coefficient_q": "Ковариация (Q)",
    "coefficient_r": "Ковариация (R)",

    /* calibrationsettings.js, window: table-preview.js */
    "column_steps_header": "Шагов",
    "column_level_header": "Уровень",
    "column_volume_header": "Объем",

    /* leftmenu.js */
    "button_save_setting": "Сохранить настройки",

    /* statusmenu.js */
    "status_sensor_is_connected": "Датчик подключен",
    "status_fuel_is_stable": "Топливо стабильно",
    "status_calibration": "Калибровка не требуется",
    "status_thermal_compensation": "Термокомпенсация",

    /* servicemenu.js */
    "service_service": "Сервис",
    "service_service_reset_sensor": "Сброс всех настроек",
    "service_service_save_setting_file": "Сохраниить насторйки в файл",
    "service_service_read_setting_file": "Прочитать настройкии из файла",

    "service_password": "Пароль",

    /* fullemptysubview.js , filteringsubview.js */
    "automatic_calibration": "Автоматическая колибровка",
    "button_automatic_calibration": "Откалибровать",
    "current_level": "Текущий уровень",
    "current_volume": "Текущий объем",

    "button_set_full_tank": "Полный",
    "button_set_empty_tank": "Пустой",
    "button_enable_edit_values": "Редактировать значения",

    /* calibrationsubview.js */
    "button_save_table_file": "Экспортировать таблицу тарировки",
    "button_read_table_file": "Импортировать таблицу тарировки",
    "tabbar_fill": "Залив",
    "tabbar_drain": "Слив",

    /* fueldrain.js , fuelfill.js*/
    "passport_volume_tank": "Паспортный объем бака, л",
    "start_volume_tank": "Начальный объем, л",
    "step_volume": "Шаг, л",
    "step_count": "Количество шагов",

    "button_remove_step": "Удалить шаг",
    "button_add_step": "Добавить шаг",
    "button_clear_table": "Очистить таблицу",
    "button_finish_calibration": "Завершить тарировку",
    "button_start_calibration": "Продолжить",

    /* windows buttons */
    "button_ok": "Ok",
    "button_cancel": "Отмена",

    /* continuecalibrate.js */
    "windows_continue_calibration_text": "Продолжить заполнять таблицу тарировки?",

    /* llsnoconnect.js */
    "windows_lls_no_connect_text": "Датчик не подключен",
    "button_test_mode": "Тестовый Режим",

    /* reset-lls.js */
    "windows_reset-lls_text": "Все настройки датчика будут сброшенны",

    /* save-setting-notification.js */
    "window_save-setting-notification_text": "Настройки записаны в датчик",

    /* password.js */
    "window_password_text": "Введите пароль для изменения настроек",
    "window_password_invalid_message": "Неверный пароль",
    "window_password_old_password": "Старый пароль",
    "window_password_new_password": "Новый пароль",
    "window_password_button_edit": "Изменить",

    "window_password_segmented_current": "Ввести",
    "window_password_segmented_new": "Задать новый",

    /* passwordinput.js */

    "window_passwordinput_segmented_current": "Ввести",
    "window_passwordinput_segmented_reset": "Сбросить настройки",
    "window_passwordinput_segmented_current_text": "Введите пароль для входа",
    "window_passwordinput_segmented_reset_text":"Все настройки датчика будут стерты"
};