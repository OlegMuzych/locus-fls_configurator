export default {
    /*  win.js */
    "version": "Версия",

    "firmware_lls": "Прошивка ДУТ",

    "sensor_is_connected": "Датчик подключен",
    "sensor_is_not_connected": "Датчик не подключен",

    "function_is_not_available": "Функция не доступна",

    "trademark": "Торговая марка:",
    "developer": "Разработчик:",
    "program_version": 'Версия конфигуратора',
    "website": "",
    "copyright": "",

    "reference": "О Программе", //view: "window", template: this
    "settings": "Настройки", //view: "window", template: this

    /* window-settings.js */
    "language_selection": "Выбор языка",
    "theme_selection": "Выбор темы",
    "font_size": "Размер шрифта",
    "auto_save_mode": "Автоматическое  сохранение настроек",

    "dark_theme": 'Темная',
    "light_theme": 'Светлая',
    "like_system_theme": "Как в системе",

    "language_ru": 'Русский',
    "language_en": 'English',
    "language_like_system": "Как в системе",

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
    "filtering_type_averaging": "Усреднение",
    "filtering_type_median": "Медиана",
    "filtering_type_adaptive": "Адаптивный",

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
    "service_service_save_setting_file": "Сохраниить настройки в файл",
    "service_service_read_setting_file": "Прочитать настройки из файла",

    "service_password": "Пароль",

    /* fullemptysubview.js , filteringsubview.js */
    "automatic_calibration": "Автоматическая калибровка",
    "button_automatic_calibration": 'Автоматическая калибровка',//"Откалибровать",
    "current_level": "Текущий уровень",
    "current_volume": "Текущий объем",

    "button_set_full_tank": "Полный",
    "button_set_empty_tank": "Пустой",
    "button_enable_edit_values": "Ручная калибровка",

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

    /* message.js */
    "windows_lls_no_connect_text": "Датчик не подключен",
    "button_test_mode": "Тестовый Режим",

    /* reset-lls.js */
    "windows_reset-lls_text": "Все настройки будут сброшенны",

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
    "window_passwordinput_segmented_reset_text": "Все настройки датчика будут стерты",
    "window_password_placeholder": "без пароля",


    /*  win.js Images */
    "button_image_master": "assets/images/win1/settingsWizard_ru_light.svg",
    "button_image_master_dark": "assets/images/win1/settingsWizard_ru_black.svg",

    "button_image_konfig": "assets/images/win1/viewSettings_ru_light.svg",
    "button_image_konfig_dark": "assets/images/win1/viewSettings_ru_black.svg",

    "button_image_info_win2": "assets/images/win1/about_ru_light.svg",
    "button_image_info_win2_dark": "assets/images/win1/about_ru_black.svg",

    "button_image_engineering": "assets/images/win1/mainSettings_ru_light.svg",
    "button_image_engineering_dark": "assets/images/win1/mainSettings_ru_black.svg",

    /* leftmenu.js Images */
    "button_image_back": "assets/images/left_menu/mainMenu_ru_light.svg",
    "button_image_back_dark": "assets/images/left_menu/mainMenu_ru_black.svg",

    "button_image_info": "assets/images/left_menu/info_ru_light.svg",
    "button_image_info_dark": "assets/images/left_menu/info_ru_black.svg",

    /* filteringSettings.js Images */
    "button_image_filter_karier": "assets/images/filtration/filtr_Karier.svg",
    "button_image_filter_karier_dark": "assets/images/filtration/filtr_Karier_inverse.svg",

    "button_image_filter_stroit": "assets/images/filtration/filtr_Stroit.svg",
    "button_image_filter_stroit_dark": "assets/images/filtration/filtr_Stroit_inverse.svg",

    "button_image_filter_rovn": "assets/images/filtration/filtr_Rovn.svg",
    "button_image_filter_rovn_dark": "assets/images/filtration/filtr_Rovn_inverse.svg",

    /* firmware-update.js */
    "upload_file": "Загрузить файл",
    "mode_download": "Включить Загрузчик",
    "promise": "Ожидать",
    "mode_download_turn_on": "Режим прошивки включен",
    "mode_download_turn_off": "Режим прошивки выключен",
    "to_write_file_in_device": "Записать файл прошивки",

    "fail_entry_in_mode_download": "Сбой загрузчика!",
    "success_write_file": "Прошивка записана!",
    "fail_write_file": "Сбой записи прошивки!",

    /* windows-firmware-update.js */
    "window_firmware_header": "Обновление прошивки",

    /* auto-level.js */
    "level_auto_calculate": "Автоматическй рассчет уровней",
    "length_measuring_part": "Длина измерительной части, см",
    "calculate": "Посчитать",
    "message_auto_level_alert": "Результаты автоматического расчета увеличивают погрешность измерения ДУТ до 3%",
    //
};