"use strict";
// Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
var SettingsEnum;
(function (SettingsEnum) {
    SettingsEnum["Enabled"] = "enabled";
    SettingsEnum["Disabled"] = "disabled";
})(SettingsEnum || (SettingsEnum = {}));
const settingsSet = [
    { read: SettingsEnum.Enabled },
    { create: SettingsEnum.Enabled },
    { update: SettingsEnum.Enabled },
    { delete: SettingsEnum.Disabled }
];
function getEnabledSettings(arr) {
    let enabledSettings = [];
    arr.forEach(item => {
        if (Object.values(item).toString() === 'enabled')
            enabledSettings.push(...Object.keys(item));
    });
    return enabledSettings;
}
document.write(`${getEnabledSettings(settingsSet)}`);
