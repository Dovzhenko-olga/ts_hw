// Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

enum SettingsEnum {
  Enabled = 'enabled',
  Disabled = 'disabled'
}
type Setting = {
  [name:string]: SettingsEnum
}

const settingsSet: Setting[] = [
  { read: SettingsEnum.Enabled },
  { create: SettingsEnum.Enabled },
  { update: SettingsEnum.Enabled },
  { delete: SettingsEnum.Disabled }
]
function getEnabledSettings(arr: Setting[]): string[]{
  let enabledSettings: string[] = []
  arr.forEach(item => {  
    if(Object.values(item).toString() === 'enabled') enabledSettings.push(...Object.keys(item))
  })
  return enabledSettings
}

document.write(`${getEnabledSettings(settingsSet)}`)